/**
 * Emoji Charades - Main App Controller
 * Ties DOM, sound, game engine, and multiplayer networking together.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Engines
  const game = new GameEngine();
  let multi = null;

  // Local state
  let currentTheme = localStorage.getItem('emoji_charades_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);

  const savedProfile = JSON.parse(localStorage.getItem('emoji_charades_profile') || '{}');
  let localPlayer = {
    id: "p_" + Math.random().toString(36).substring(2, 9),
    name: savedProfile.name || ("Teammate " + Math.floor(Math.random() * 90 + 10)),
    avatar: savedProfile.avatar || "🚀",
    score: 0,
    streak: 0,
    correctCount: 0
  };

  // 2. DOM Elements
  const elEmojiDisplay = document.getElementById('emoji-display');
  const elCategoryBadge = document.getElementById('puzzle-category-name');
  const elCategoryIcon = document.getElementById('puzzle-category-icon');
  const elDifficultyBadge = document.getElementById('puzzle-difficulty-badge');
  const elTimerBox = document.getElementById('timer-box');
  const elTimerText = document.getElementById('timer-text');
  const elHintMask = document.getElementById('hint-mask');
  const elHintText = document.getElementById('hint-text');
  const elHintCounter = document.getElementById('hint-counter');
  const elWinnerBanner = document.getElementById('winner-banner');
  const elWinnerName = document.getElementById('winner-name-display');
  const elWinnerAnswer = document.getElementById('winner-answer-display');
  const elWinnerPoints = document.getElementById('winner-points-display');
  const elPermanentTypeHint = document.getElementById('permanent-type-hint');
  const elCorrectCueBadge = document.getElementById('correct-cue-badge');
  const elCorrectCueDetails = document.getElementById('correct-cue-details');
  const elEmojiCard = document.getElementById('emoji-card');
  const elGuessForm = document.getElementById('guess-form');
  const elGuessInput = document.getElementById('guess-input');
  const elBtnSubmitGuess = document.getElementById('btn-submit-guess');
  const elChatStream = document.getElementById('chat-stream');
  const elChatForm = document.getElementById('chat-form');
  const elChatInput = document.getElementById('chat-input');
  const elLeaderboard = document.getElementById('leaderboard-list');
  const elDisplayRoomCode = document.getElementById('display-room-code');
  const elRoomBadge = document.getElementById('room-code-badge');
  const elNavPlayerAvatar = document.getElementById('nav-player-avatar');
  const elNavPlayerName = document.getElementById('nav-player-name');
  const elToggleBots = document.getElementById('toggle-bots');
  let autoAdvanceTimer = null;

  // Category counts across all 8 user categories
  document.getElementById('cat-count-all').textContent = PUZZLE_DATABASE.length;
  document.getElementById('cat-count-movies').textContent = PUZZLE_DATABASE.filter(p => p.category === 'Movies').length;
  document.getElementById('cat-count-series').textContent = PUZZLE_DATABASE.filter(p => p.category === 'TV Series').length;
  document.getElementById('cat-count-music').textContent = PUZZLE_DATABASE.filter(p => p.category === 'Songs & Music').length;
  document.getElementById('cat-count-food').textContent = PUZZLE_DATABASE.filter(p => p.category === 'Food & Drinks').length;
  document.getElementById('cat-count-celeb').textContent = PUZZLE_DATABASE.filter(p => p.category === 'Celebrities & Characters').length;
  document.getElementById('cat-count-places').textContent = PUZZLE_DATABASE.filter(p => p.category === 'Places & Travel').length;
  document.getElementById('cat-count-work').textContent = PUZZLE_DATABASE.filter(p => p.category === 'Everyday Life & Work').length;
  document.getElementById('cat-count-sports').textContent = PUZZLE_DATABASE.filter(p => p.category === 'Sports').length;

  function updateNavProfile() {
    elNavPlayerAvatar.textContent = localPlayer.avatar;
    elNavPlayerName.textContent = localPlayer.name;
  }
  updateNavProfile();

  // 3. Setup Multiplayer Callbacks
  multi = new MultiplayerManager(game, {
    roomCreated: (data) => {
      elDisplayRoomCode.textContent = data.roomCode;
      elRoomBadge.style.display = 'inline-flex';
      document.getElementById('host-room-code-display').textContent = data.roomCode;
      const shareUrl = `${window.location.origin}${window.location.pathname}?room=${data.roomCode}`;
      document.getElementById('host-share-link-input').value = shareUrl;
      openModal('modal-host-created');
      addChatMessage("System", `👑 Room ${data.roomCode} created! Share the code with your team.`, true);
    },
    connectedToHost: (data) => {
      elDisplayRoomCode.textContent = data.roomCode;
      elRoomBadge.style.display = 'inline-flex';
      closeModal('modal-join');
      addChatMessage("System", `🎉 Connected to Room ${data.roomCode}! Get ready to guess!`, true);
      window.soundEngine.playVictory();
    },
    playersUpdated: (players) => {
      renderLeaderboard(players);
    },
    roundStarted: (data) => {
      renderRoundState(data.puzzle, data.timeLeft, data.hintDisplay);
    },
    hintRevealed: (hintDisplay) => {
      renderHint(hintDisplay);
      window.soundEngine.playHint();
    },
    timerTick: (timeLeft) => {
      updateTimerUI(timeLeft);
    },
    roundWon: (winEvent) => {
      handleRoundVictory(winEvent);
    },
    roundTimeout: (data) => {
      handleRoundTimeout(data);
    },
    chatMessage: (msg) => {
      addChatMessage(msg.sender, msg.text, msg.system, msg.isClose);
    },
    error: (errMsg) => {
      alert(errMsg);
    }
  });

  multi.localPlayer = localPlayer;
  multi.players[localPlayer.id] = { ...localPlayer, isHost: true };

  // 4. Round Flow Handlers
  function startNextRound(customPuzzle = null) {
    if (autoAdvanceTimer) {
      clearTimeout(autoAdvanceTimer);
      autoAdvanceTimer = null;
    }

    elWinnerBanner.classList.remove('visible');
    if (elCorrectCueBadge) elCorrectCueBadge.classList.remove('visible');
    elGuessForm.classList.remove('correct-cue');
    if (elEmojiCard) elEmojiCard.classList.remove('correct-cue');
    if (elBtnSubmitGuess) {
      elBtnSubmitGuess.innerHTML = `<span>⚡ Buzz In</span>`;
      elBtnSubmitGuess.style.background = '';
    }

    const puzzle = game.nextRound(customPuzzle);
    
    // Broadcast if host
    if (multi.isHost) {
      multi.broadcast({
        type: 'ROUND_START',
        puzzle: {
          id: puzzle.id,
          emojis: puzzle.emojis,
          category: puzzle.category,
          subCategory: puzzle.subCategory,
          difficulty: puzzle.difficulty || "medium",
          typeHint: puzzle.typeHint
        },
        timeLeft: game.roundTime
      });
      multi.scheduleBotGuesses(puzzle);
    }

    renderRoundState(puzzle, game.roundTime);
    window.soundEngine.playPop();

    // Start Authoritative Timer
    game.startTimer(
      (timeLeft) => {
        updateTimerUI(timeLeft);
        if (multi.isHost) {
          multi.broadcast({ type: 'TIMER_TICK', timeLeft });
        }
        if (timeLeft <= 5 && timeLeft > 0) {
          window.soundEngine.playTick();
        }
      },
      () => {
        // Round timed out!
        handleRoundTimeout({ answer: puzzle.answer });
        if (multi.isHost) {
          multi.broadcast({ type: 'ROUND_TIMEOUT', answer: puzzle.answer });
        }
      }
    );
  }

  function renderRoundState(puzzle, timeLeft, hintDisplay = null) {
    elEmojiDisplay.textContent = puzzle.emojis;
    elCategoryBadge.textContent = puzzle.category;

    // Display permanent type hint so players know what it is (e.g. food, not movie)
    if (elPermanentTypeHint) {
      elPermanentTypeHint.textContent = puzzle.typeHint || `💡 Hint: ${puzzle.category} (Not a person or movie!)`;
    }
    
    const catIcons = {
      "Movies": "🎬",
      "TV Series": "📺",
      "Songs & Music": "🎵",
      "Food & Drinks": "🍕",
      "Celebrities & Characters": "🌟",
      "Places & Travel": "✈️",
      "Everyday Life & Work": "💼",
      "Sports": "⚽"
    };
    elCategoryIcon.textContent = catIcons[puzzle.category] || "🌟";

    const diffColors = {
      easy: "#34d399",
      medium: "#facc15",
      hard: "#f87171"
    };
    const diff = puzzle.difficulty || "medium";
    elDifficultyBadge.textContent = diff.charAt(0).toUpperCase() + diff.slice(1);
    elDifficultyBadge.style.color = diffColors[diff] || "#34d399";

    elHintMask.style.display = 'none';
    elHintMask.textContent = '';
    elHintText.style.display = 'none';
    elHintText.textContent = '';
    elHintCounter.textContent = `(0/3)`;

    if (hintDisplay) {
      renderHint(hintDisplay);
    }

    updateTimerUI(timeLeft);
    elGuessInput.value = '';
    elGuessInput.focus();
  }

  function updateTimerUI(seconds) {
    elTimerText.textContent = `${seconds}s`;
    if (seconds <= 10) {
      elTimerBox.classList.add('urgent');
    } else {
      elTimerBox.classList.remove('urgent');
    }
  }

  function renderHint(hint) {
    if (!hint) return;
    elHintCounter.textContent = `(${hint.level}/3)`;
    if (hint.level === 1) {
      elHintMask.style.display = 'block';
      elHintMask.textContent = hint.text;
    } else if (hint.level === 2) {
      elHintText.style.display = 'block';
      elHintText.textContent = hint.text;
    } else if (hint.level === 3) {
      elHintMask.style.display = 'block';
      elHintMask.textContent = hint.text;
    }
  }

  function showCorrectCue(winData) {
    const isMe = winData.winnerId === localPlayer.id || !winData.winnerId;
    const answer = winData.answer || game.currentPuzzle?.answer || "Correct!";
    const points = winData.pointsAwarded || 120;

    game.stopTimer();
    game.roundSolved = true;
    game.isRoundActive = false;

    // 1. Full-screen green celebratory radiance flash
    const elScreenFlash = document.getElementById('screen-flash');
    if (elScreenFlash) {
      elScreenFlash.classList.remove('active');
      void elScreenFlash.offsetWidth; // trigger reflow
      elScreenFlash.classList.add('active');
    }

    // 2. Sound & Confetti
    window.soundEngine.playCorrect();
    window.soundEngine.playVictory();
    window.launchConfetti(0.5, 0.4);

    // 3. Glowing neon green input container & card
    elGuessForm.classList.add('correct-cue');
    if (elEmojiCard) elEmojiCard.classList.add('correct-cue');

    // 4. Button flips to glowing green checkmark
    if (elBtnSubmitGuess) {
      elBtnSubmitGuess.innerHTML = isMe ? `<span>✅ YOU GOT IT RIGHT!</span>` : `<span>✅ SOLVED!</span>`;
      elBtnSubmitGuess.style.background = '#10b981';
      elBtnSubmitGuess.style.boxShadow = '0 0 20px #10b981';
    }

    // 5. Dropdown Banner Cue right above the input
    if (elCorrectCueBadge) {
      elCorrectCueBadge.classList.add('visible');
      if (elCorrectCueDetails) {
        elCorrectCueDetails.textContent = isMe 
          ? `You nailed it: "${answer}" (+${points} pts)!`
          : `${winData.winnerName || 'Teammate'} got it: "${answer}" (+${points} pts)`;
      }
    }

    // 6. Winner Center Overlay Banner
    elWinnerName.textContent = isMe ? `🎉 YOU GOT IT RIGHT! 🏆` : `${winData.winnerName} got it first! 🏆`;
    elWinnerAnswer.textContent = `"${answer}"`;
    elWinnerPoints.textContent = `+${points} Points`;
    elWinnerBanner.classList.add('visible');

    // 7. Auto-advance in 4 seconds
    if (multi.isHost) {
      if (autoAdvanceTimer) clearTimeout(autoAdvanceTimer);
      autoAdvanceTimer = setTimeout(() => {
        startNextRound();
      }, 4000);
    }
  }

  function handleRoundVictory(winEvent) {
    showCorrectCue(winEvent);
    addChatMessage("Judge", `🎯 ${winEvent.winnerName} correctly guessed "${winEvent.answer}" (+${winEvent.pointsAwarded} pts)!`, true);
  }

  function handleRoundTimeout(data) {
    window.soundEngine.playWrong();
    elWinnerName.textContent = `Time's Up! ⏰`;
    elWinnerAnswer.textContent = `The answer was "${data.answer}"`;
    elWinnerPoints.textContent = `No points this round`;
    elWinnerBanner.classList.add('visible');

    addChatMessage("Judge", `⏰ Time's up! The answer was "${data.answer}".`, true);

    // Auto-advance after 3.5 seconds
    if (multi.isHost) {
      if (autoAdvanceTimer) clearTimeout(autoAdvanceTimer);
      autoAdvanceTimer = setTimeout(() => {
        startNextRound();
      }, 3500);
    }
  }

  // 5. Leaderboard Rendering
  function renderLeaderboard(players) {
    elLeaderboard.innerHTML = '';
    const sorted = Object.values(players).sort((a, b) => (b.score || 0) - (a.score || 0));

    sorted.forEach((p, index) => {
      const card = document.createElement('div');
      card.className = `player-card ${p.id === localPlayer.id ? 'active-player' : ''}`;

      const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}`;

      card.innerHTML = `
        <div class="player-info">
          <span style="font-size: 0.85rem; font-weight: 700; width: 20px;">${medal}</span>
          <span class="player-avatar">${p.avatar || '🚀'}</span>
          <div>
            <span class="player-name">${escapeHTML(p.name)}</span>
            ${p.isHost ? '<span class="player-badge">HOST</span>' : ''}
          </div>
        </div>
        <div class="player-stats">
          <span class="player-score">${p.score || 0} pts</span>
          ${(p.streak || 0) > 1 ? `<span class="player-streak">🔥 ${p.streak} streak</span>` : ''}
        </div>
      `;
      elLeaderboard.appendChild(card);
    });
  }

  // 6. Live Chat Stream
  function addChatMessage(sender, text, isSystem = false, isClose = false) {
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${isSystem ? 'system' : ''} ${isClose ? 'close-guess' : ''}`;

    if (isSystem) {
      bubble.textContent = text;
    } else {
      bubble.innerHTML = `
        <div class="chat-sender">${escapeHTML(sender)}</div>
        <div class="chat-body">${escapeHTML(text)} ${isClose ? '🔥 (SO CLOSE!)' : ''}</div>
      `;
    }

    elChatStream.appendChild(bubble);
    elChatStream.scrollTop = elChatStream.scrollHeight;

    if (!isSystem && isClose) {
      window.soundEngine.playWrong();
    }
  }

  function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }

  // 7. Guess Input Submission (Evaluates instantly regardless of timer!)
  elGuessForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const guess = elGuessInput.value.trim();
    if (!guess) return;

    // Direct local check: Always trigger cue if correct, REGARDLESS of timer or round state!
    const check = game.checkGuess(guess);
    if (check.isCorrect) {
      const pts = game.calculatePoints(Math.max(1, game.timeLeft), game.currentHintLevel, (localPlayer.streak || 0) + 1);
      localPlayer.score = (localPlayer.score || 0) + pts;
      localPlayer.streak = (localPlayer.streak || 0) + 1;
      localPlayer.correctCount = (localPlayer.correctCount || 0) + 1;
      if (multi.players[localPlayer.id]) {
        multi.players[localPlayer.id].score = localPlayer.score;
        multi.players[localPlayer.id].streak = localPlayer.streak;
      }
      renderLeaderboard(multi.players);

      showCorrectCue({
        winnerId: localPlayer.id,
        winnerName: localPlayer.name,
        answer: check.matched || game.currentPuzzle?.answer,
        pointsAwarded: pts
      });

      addChatMessage("Judge", `🎯 YOU GUESSED IT: "${check.matched || game.currentPuzzle?.answer}" (+${pts} pts)!`, true);
    } else {
      if (check.isClose) {
        window.soundEngine.playWrong();
        addChatMessage(localPlayer.name, guess, false, true);
      } else {
        addChatMessage(localPlayer.name, guess);
      }
    }

    multi.sendGuess(guess);
    elGuessInput.value = '';
    elGuessInput.focus();
  });

  // Chat message submission (also evaluates guesses!)
  elChatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = elChatInput.value.trim();
    if (!text) return;

    const check = game.checkGuess(text);
    if (check.isCorrect) {
      const pts = game.calculatePoints(Math.max(1, game.timeLeft), game.currentHintLevel, (localPlayer.streak || 0) + 1);
      localPlayer.score = (localPlayer.score || 0) + pts;
      localPlayer.streak = (localPlayer.streak || 0) + 1;
      localPlayer.correctCount = (localPlayer.correctCount || 0) + 1;
      if (multi.players[localPlayer.id]) {
        multi.players[localPlayer.id].score = localPlayer.score;
        multi.players[localPlayer.id].streak = localPlayer.streak;
      }
      renderLeaderboard(multi.players);

      showCorrectCue({
        winnerId: localPlayer.id,
        winnerName: localPlayer.name,
        answer: check.matched || game.currentPuzzle?.answer,
        pointsAwarded: pts
      });

      addChatMessage("Judge", `🎯 YOU GUESSED IT: "${check.matched || game.currentPuzzle?.answer}" (+${pts} pts)!`, true);
    } else {
      addChatMessage(localPlayer.name, text, false, check.isClose);
      if (check.isClose) window.soundEngine.playWrong();
    }

    multi.sendGuess(text);
    elChatInput.value = '';
  });

  // 8. Stage Actions
  document.getElementById('btn-next-puzzle').addEventListener('click', () => {
    startNextRound();
  });

  document.getElementById('btn-reveal-hint').addEventListener('click', () => {
    if (!game.isRoundActive) return;
    const hint = game.advanceHint();
    if (hint) {
      renderHint(hint);
      window.soundEngine.playHint();
      if (multi.isHost) {
        multi.broadcast({ type: 'HINT_REVEALED', hintDisplay: hint });
      }
    }
  });

  // Category Selection
  document.getElementById('category-selector').addEventListener('click', (e) => {
    const btn = e.target.closest('.category-btn');
    if (!btn) return;
    document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const cat = btn.dataset.category;
    game.categoryFilter = cat;
    addChatMessage("System", `📂 Category changed to: ${btn.querySelector('span').textContent}`, true);
    startNextRound();
  });

  // Teammate Bots Toggle
  elToggleBots.addEventListener('change', (e) => {
    multi.toggleSimulatedTeammates(e.target.checked);
  });

  // Manual Award Button (Zoom shouted answer)
  document.getElementById('btn-manual-award').addEventListener('click', () => {
    const awardContainer = document.getElementById('award-player-buttons');
    awardContainer.innerHTML = '';

    Object.values(multi.players).forEach(p => {
      const btn = document.createElement('button');
      btn.className = 'btn btn-secondary';
      btn.style.justifyContent = 'flex-start';
      btn.innerHTML = `<span>${p.avatar || '🚀'}</span> <strong>${escapeHTML(p.name)}</strong> (${p.score} pts)`;
      btn.addEventListener('click', () => {
        multi.processGuess(p.id, p.name, game.currentPuzzle?.answer || "Manual Award");
        closeModal('modal-award');
      });
      awardContainer.appendChild(btn);
    });

    openModal('modal-award');
  });

  // Custom Charade Creator
  document.getElementById('btn-custom-puzzle').addEventListener('click', () => {
    openModal('modal-custom');
  });

  document.getElementById('btn-submit-custom-charade').addEventListener('click', () => {
    const category = document.getElementById('custom-category-select').value;
    const emojis = document.getElementById('custom-emojis-input').value.trim();
    const answer = document.getElementById('custom-answer-input').value.trim();
    const hint = document.getElementById('custom-hint-input').value.trim();

    if (!emojis || !answer) {
      alert("Please provide both emojis and an answer!");
      return;
    }

    const customPuzzle = {
      id: "custom-" + Date.now(),
      emojis: emojis,
      answer: answer,
      category: category,
      subCategory: "Custom",
      difficulty: "medium",
      acceptableAnswers: [answer],
      hint: hint || "Custom charade created by a teammate!"
    };

    closeModal('modal-custom');
    addChatMessage("System", `✨ ${localPlayer.name} posted a custom emoji charade!`, true);

    if (multi.isHost) {
      startNextRound(customPuzzle);
    } else if (multi.hostConn && multi.hostConn.open) {
      multi.hostConn.send({
        type: 'PROPOSE_CUSTOM_PUZZLE',
        puzzle: customPuzzle,
        creatorName: localPlayer.name
      });
    }
  });

  // 9. Modals Management
  function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.add('active');
  }

  function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.remove('active');
  }

  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', () => {
      closeModal(btn.dataset.close);
    });
  });

  // Close when clicking modal backdrop
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });

  // Host Room Button
  document.getElementById('btn-create-room').addEventListener('click', () => {
    multi.createRoom();
  });

  // Join Room Button
  document.getElementById('btn-join-room').addEventListener('click', () => {
    openModal('modal-join');
  });

  document.getElementById('btn-confirm-join').addEventListener('click', () => {
    const code = document.getElementById('join-room-code-input').value.trim();
    const name = document.getElementById('join-name-input').value.trim();

    if (!code) {
      alert("Please enter a room code");
      return;
    }

    if (name) {
      localPlayer.name = name;
      updateNavProfile();
    }

    multi.joinRoom(code, localPlayer.name, localPlayer.avatar);
  });

  // Copy Invite Link
  function copyInviteLink() {
    const code = multi.roomCode || "DEMO";
    const url = `${window.location.origin}${window.location.pathname}?room=${code}`;
    navigator.clipboard.writeText(url).then(() => {
      alert("Invite link copied to clipboard! Paste it into your Slack, Teams, or Zoom chat.");
    }).catch(() => {
      prompt("Copy this link:", url);
    });
  }

  document.getElementById('btn-copy-invite').addEventListener('click', copyInviteLink);
  document.getElementById('btn-modal-copy-link').addEventListener('click', () => {
    const linkInput = document.getElementById('host-share-link-input');
    linkInput.select();
    navigator.clipboard.writeText(linkInput.value);
    alert("Link copied to clipboard!");
  });

  // Profile Edit
  document.getElementById('btn-profile').addEventListener('click', () => {
    document.getElementById('profile-name-input').value = localPlayer.name;
    openModal('modal-profile');
  });

  document.getElementById('avatar-picker').addEventListener('click', (e) => {
    const opt = e.target.closest('.avatar-option');
    if (!opt) return;
    document.querySelectorAll('.avatar-option').forEach(o => o.classList.remove('selected'));
    opt.classList.add('selected');
    localPlayer.avatar = opt.dataset.avatar;
  });

  document.getElementById('btn-save-profile').addEventListener('click', () => {
    const name = document.getElementById('profile-name-input').value.trim();
    if (name) localPlayer.name = name;
    updateNavProfile();
    localStorage.setItem('emoji_charades_profile', JSON.stringify({
      name: localPlayer.name,
      avatar: localPlayer.avatar
    }));

    if (multi.players[localPlayer.id]) {
      multi.players[localPlayer.id].name = localPlayer.name;
      multi.players[localPlayer.id].avatar = localPlayer.avatar;
      multi.trigger('playersUpdated', multi.players);
      if (multi.isHost) {
        multi.broadcast({ type: 'PLAYERS_SYNC', players: multi.players });
      }
    }

    closeModal('modal-profile');
  });

  // Sound FX Toggle
  const btnSound = document.getElementById('btn-sound-toggle');
  btnSound.addEventListener('click', () => {
    const isMuted = window.soundEngine.toggleMute();
    btnSound.textContent = isMuted ? '🔇' : '🔊';
  });

  // Theme Toggle
  const btnTheme = document.getElementById('btn-theme-toggle');
  btnTheme.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('emoji_charades_theme', currentTheme);
  });

  // 10. Welcome & User Entry Flow (Vercel Ready!)
  const welcomeNameInput = document.getElementById('welcome-name-input');
  const welcomeRoomInput = document.getElementById('welcome-room-code-input');
  let selectedWelcomeAvatar = localPlayer.avatar || "🚀";

  if (welcomeNameInput) {
    welcomeNameInput.value = savedProfile.name || "";
  }

  document.getElementById('welcome-avatar-picker')?.addEventListener('click', (e) => {
    const opt = e.target.closest('.avatar-option');
    if (!opt) return;
    document.querySelectorAll('#welcome-avatar-picker .avatar-option').forEach(o => o.classList.remove('selected'));
    opt.classList.add('selected');
    selectedWelcomeAvatar = opt.dataset.avatar;
  });

  document.getElementById('btn-welcome-enter')?.addEventListener('click', () => {
    const name = welcomeNameInput.value.trim() || ("Player " + Math.floor(Math.random() * 90 + 10));
    localPlayer.name = name;
    localPlayer.avatar = selectedWelcomeAvatar;
    updateNavProfile();

    localStorage.setItem('emoji_charades_profile', JSON.stringify({
      name: localPlayer.name,
      avatar: localPlayer.avatar
    }));

    if (multi.players[localPlayer.id]) {
      multi.players[localPlayer.id].name = localPlayer.name;
      multi.players[localPlayer.id].avatar = localPlayer.avatar;
    }

    const roomCode = welcomeRoomInput ? welcomeRoomInput.value.trim() : "";
    closeModal('modal-welcome');

    if (roomCode) {
      multi.joinRoom(roomCode, localPlayer.name, localPlayer.avatar);
    } else {
      multi.createRoom();
    }
  });

  document.getElementById('btn-welcome-solo')?.addEventListener('click', () => {
    const name = welcomeNameInput ? welcomeNameInput.value.trim() : "";
    if (name) localPlayer.name = name;
    localPlayer.avatar = selectedWelcomeAvatar;
    updateNavProfile();
    closeModal('modal-welcome');
  });

  // 11. Quick Add Teammate to Room (+ Add User as if they joined!)
  let selectedTeammateAvatar = "🧑‍💻";
  document.getElementById('btn-quick-add-player')?.addEventListener('click', () => {
    const input = document.getElementById('add-teammate-name-input');
    if (input) input.value = '';
    openModal('modal-add-teammate');
  });

  document.getElementById('add-teammate-avatar-picker')?.addEventListener('click', (e) => {
    const opt = e.target.closest('.avatar-option');
    if (!opt) return;
    document.querySelectorAll('#add-teammate-avatar-picker .avatar-option').forEach(o => o.classList.remove('selected'));
    opt.classList.add('selected');
    selectedTeammateAvatar = opt.dataset.avatar;
  });

  document.getElementById('btn-confirm-add-teammate')?.addEventListener('click', () => {
    const nameInput = document.getElementById('add-teammate-name-input');
    const name = nameInput ? nameInput.value.trim() : "";
    if (!name) {
      alert("Please enter a teammate name");
      return;
    }

    const teammateId = "p_team_" + Math.random().toString(36).substring(2, 7);
    const newPlayer = {
      id: teammateId,
      name: name,
      avatar: selectedTeammateAvatar,
      score: 0,
      streak: 0,
      correctCount: 0
    };

    multi.players[teammateId] = newPlayer;
    renderLeaderboard(multi.players);

    if (multi.isHost) {
      multi.broadcast({ type: 'PLAYERS_SYNC', players: multi.players });
    }

    addChatMessage("System", `👋 ${name} joined the room!`, true);
    window.soundEngine.playPop();
    closeModal('modal-add-teammate');
  });

  // Auto-detect ?room=XXXX in URL or open welcome modal on first visit
  const urlParams = new URLSearchParams(window.location.search);
  const roomParam = urlParams.get('room');
  if (roomParam) {
    if (welcomeRoomInput) welcomeRoomInput.value = roomParam.toUpperCase();
    document.getElementById('join-room-code-input').value = roomParam.toUpperCase();
    openModal('modal-welcome');
  } else if (!savedProfile.name) {
    // Open welcome screen on first visit
    openModal('modal-welcome');
  }

  // 12. Start Initial Charade Round!
  startNextRound();
});
