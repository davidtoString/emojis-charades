/**
 * Emoji Charades - Game Engine
 * Handles round state, fuzzy matching, hints, scoring, and confetti.
 */

class GameEngine {
  constructor() {
    this.currentPuzzle = null;
    this.usedPuzzleIds = new Set();
    this.score = 0;
    this.streak = 0;
    this.roundTime = 30; // 30 seconds per round as requested
    this.timeLeft = 30;
    this.timerInterval = null;
    this.currentHintLevel = 0; // 0 = none, 1 = mask, 2 = text hint, 3 = first letters
    this.categoryFilter = "All";
    this.isRoundActive = false;
    this.roundSolved = false;
    this.players = {}; // { [playerId]: { name, avatar, score, streak, correctCount, fastestTime } }
    this.roundHistory = [];
    this.onStateChange = null;
  }

  // --- String Normalization & Fuzzy Matching ---
  static normalize(text) {
    if (!text) return "";
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // remove accents
      .replace(/['"’.,\/#!$%\^&\*;:{}=\-_`~()]/g, " ") // replace punctuation with space
      .replace(/\s+/g, " ")
      .trim();
  }

  static removeArticles(text) {
    return text.replace(/^(the|a|an)\s+/i, "").trim();
  }

  static levenshteinDistance(s1, s2) {
    const a = s1;
    const b = s2;
    const matrix = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1, // substitution
            matrix[i][j - 1] + 1,     // insertion
            matrix[i - 1][j] + 1      // deletion
          );
        }
      }
    }
    return matrix[b.length][a.length];
  }

  checkGuess(rawGuess, puzzle = this.currentPuzzle) {
    if (!puzzle || !rawGuess) return { isCorrect: false, isClose: false };

    const normGuess = GameEngine.normalize(rawGuess);
    const noArticleGuess = GameEngine.removeArticles(normGuess);
    const stripGuess = normGuess.replace(/\s+/g, "");
    const stripNoArticleGuess = noArticleGuess.replace(/\s+/g, "");

    const candidates = [
      puzzle.answer,
      ...(puzzle.acceptableAnswers || [])
    ];

    for (const cand of candidates) {
      const normCand = GameEngine.normalize(cand);
      const noArticleCand = GameEngine.removeArticles(normCand);
      const stripCand = normCand.replace(/\s+/g, "");
      const stripNoArticleCand = noArticleCand.replace(/\s+/g, "");

      // 1. Exact match (normal, no articles, or spaces stripped)
      if (
        normGuess === normCand ||
        noArticleGuess === noArticleCand ||
        stripGuess === stripCand ||
        stripNoArticleGuess === stripNoArticleCand
      ) {
        return { isCorrect: true, isClose: false, matched: cand };
      }

      // 2. Direct inclusion (e.g. typing "it's titanic" or "titanic movie")
      if (
        (noArticleGuess.includes(noArticleCand) && noArticleCand.length >= 4) ||
        (stripNoArticleGuess.includes(stripNoArticleCand) && stripNoArticleCand.length >= 4)
      ) {
        return { isCorrect: true, isClose: false, matched: cand };
      }

      // 3. Typo tolerance (Levenshtein distance)
      const dist = GameEngine.levenshteinDistance(stripNoArticleGuess, stripNoArticleCand);
      const maxAllowedDist = stripNoArticleCand.length >= 8 ? 2 : (stripNoArticleCand.length >= 4 ? 1 : 0);

      if (dist <= maxAllowedDist && maxAllowedDist > 0) {
        return { isCorrect: true, isClose: false, matched: cand, typoCorrected: true };
      }

      // 4. Close guess indication
      if (dist <= maxAllowedDist + 2 && stripNoArticleCand.length >= 5) {
        return { isCorrect: false, isClose: true };
      }
    }

    return { isCorrect: false, isClose: false };
  }

  // --- Hint Generators ---
  generateMaskHint(answer) {
    return answer.split(" ").map(word => {
      return word.split("").map(char => {
        if (/[a-zA-Z0-9]/.test(char)) return "_";
        return char;
      }).join(" ");
    }).join("   ");
  }

  generateFirstLetterHint(answer) {
    return answer.split(" ").map(word => {
      return word.split("").map((char, idx) => {
        if (idx === 0) return char.toUpperCase();
        if (/[a-zA-Z0-9]/.test(char)) return "_";
        return char;
      }).join(" ");
    }).join("   ");
  }

  getCurrentHintDisplay() {
    if (!this.currentPuzzle) return null;
    const ans = this.currentPuzzle.answer;

    if (this.currentHintLevel === 1) {
      return {
        level: 1,
        title: "Hint 1 (Letter Count)",
        text: this.generateMaskHint(ans)
      };
    } else if (this.currentHintLevel === 2) {
      return {
        level: 2,
        title: "Hint 2 (Category Clue)",
        text: `💡 ${this.currentPuzzle.hint}`
      };
    } else if (this.currentHintLevel >= 3) {
      return {
        level: 3,
        title: "Hint 3 (First Letters)",
        text: this.generateFirstLetterHint(ans)
      };
    }
    return null;
  }

  // --- Round Flow ---
  nextRound(customPuzzle = null) {
    this.stopTimer();

    if (customPuzzle) {
      this.currentPuzzle = customPuzzle;
    } else {
      let pool = getPuzzles(this.categoryFilter);
      let available = pool.filter(p => !this.usedPuzzleIds.has(p.id));

      if (available.length === 0) {
        // Recycle puzzles if all were used
        this.usedPuzzleIds.clear();
        available = pool;
      }

      const randomIdx = Math.floor(Math.random() * available.length);
      this.currentPuzzle = available[randomIdx];
      this.usedPuzzleIds.add(this.currentPuzzle.id);
    }

    this.currentHintLevel = 0;
    this.timeLeft = this.roundTime;
    this.isRoundActive = true;
    this.roundSolved = false;

    return this.currentPuzzle;
  }

  startTimer(onTick, onTimeout) {
    this.stopTimer();
    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      if (typeof onTick === 'function') onTick(this.timeLeft);

      if (this.timeLeft <= 0) {
        this.stopTimer();
        this.isRoundActive = false;
        if (typeof onTimeout === 'function') onTimeout();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  calculatePoints(secondsRemaining, hintLevel, streak) {
    const base = 100;
    const speedBonus = Math.max(0, secondsRemaining * 2);
    const hintDeductions = [0, 15, 30, 45];
    const deduction = hintDeductions[hintLevel] || 0;
    const streakBonus = Math.min(streak * 10, 50);

    return Math.max(25, base + speedBonus - deduction + streakBonus);
  }

  advanceHint() {
    if (this.currentHintLevel < 3) {
      this.currentHintLevel++;
      return this.getCurrentHintDisplay();
    }
    return null;
  }
}

// Global Confetti Burst Function
function launchConfetti(x = 0.5, y = 0.5) {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ["#FF6B6B", "#4ECDC4", "#FFE66D", "#1A535C", "#FF9F1C", "#9B5DE5", "#00F5D4"];

  for (let i = 0; i < 90; i++) {
    particles.push({
      x: canvas.width * x,
      y: canvas.height * y,
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 0.7) * 16,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10
    });
  }

  let animationId;
  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35; // gravity
      p.vx *= 0.98;
      p.alpha -= 0.015;
      p.rotation += p.rotationSpeed;

      if (p.alpha > 0) {
        alive = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }
    }

    if (alive) {
      animationId = requestAnimationFrame(update);
    } else {
      cancelAnimationFrame(animationId);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  update();
}

window.GameEngine = GameEngine;
window.launchConfetti = launchConfetti;
