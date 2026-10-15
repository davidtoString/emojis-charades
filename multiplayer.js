/**
 * Emoji Charades - Multiplayer & Networking Layer
 * Connects remote teammates via WebRTC PeerJS data channels.
 * Also provides Meeting / Screen Share Host mode and simulated teammate bot practice.
 */

class MultiplayerManager {
  constructor(gameEngine, callbacks = {}) {
    this.game = gameEngine;
    this.callbacks = callbacks;
    this.peer = null;
    this.connections = []; // Host: array of guest connections
    this.hostConn = null;  // Guest: connection to host
    this.isHost = true;    // True by default so solo & local play always processes guesses!
    this.roomCode = null;
    this.localPlayer = {
      id: "player-" + Math.random().toString(36).substring(2, 8),
      name: "Player",
      avatar: "🚀",
      score: 0,
      streak: 0,
      correctCount: 0
    };
    this.players = {}; // All players in room
    this.botSimulationActive = false;
    this.botTimers = [];
  }

  generateRoomCode() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";
    for (let i = 0; i < 4; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  }

  // --- HOST A ROOM ---
  createRoom(customCode = null) {
    this.isHost = true;
    this.roomCode = (customCode || this.generateRoomCode()).toUpperCase();
    const peerId = `emojicharades-${this.roomCode.toLowerCase()}`;

    this.players = {
      [this.localPlayer.id]: { ...this.localPlayer, isHost: true }
    };

    if (window.Peer) {
      try {
        this.peer = new Peer(peerId, {
          debug: 1,
          config: {
            iceServers: [
              { urls: 'stun:stun.l.google.com:19302' },
              { urls: 'stun:global.stun.twilio.com:3478' }
            ]
          }
        });

        this.peer.on('open', (id) => {
          this.trigger('roomCreated', { roomCode: this.roomCode, peerId: id });
        });

        this.peer.on('connection', (conn) => {
          this.setupHostConnection(conn);
        });

        this.peer.on('error', (err) => {
          console.warn("PeerJS Host Error:", err);
          if (err.type === 'unavailable-id') {
            // Room code already taken, regenerate
            this.createRoom();
          } else {
            this.trigger('networkNotice', { message: "Operating in Standalone/Meeting mode." });
          }
        });
      } catch (e) {
        console.warn("PeerJS initialization failed, running in local/screen-share mode", e);
      }
    }

    this.trigger('playersUpdated', this.players);
    return this.roomCode;
  }

  setupHostConnection(conn) {
    this.connections.push(conn);

    conn.on('open', () => {
      // Send current state to newly joined guest
      conn.send({
        type: 'INIT_STATE',
        roomCode: this.roomCode,
        players: this.players,
        currentPuzzle: this.game.currentPuzzle ? {
          emojis: this.game.currentPuzzle.emojis,
          category: this.game.currentPuzzle.category,
          subCategory: this.game.currentPuzzle.subCategory,
          difficulty: this.game.currentPuzzle.difficulty,
          typeHint: this.game.currentPuzzle.typeHint
        } : null,
        hintLevel: this.game.currentHintLevel,
        hintDisplay: this.game.getCurrentHintDisplay(),
        timeLeft: this.game.timeLeft,
        isRoundActive: this.game.isRoundActive
      });
    });

    conn.on('data', (data) => {
      this.handleHostReceivedData(conn, data);
    });

    conn.on('close', () => {
      this.connections = this.connections.filter(c => c !== conn);
      // Remove player
      if (conn.peerPlayerId && this.players[conn.peerPlayerId]) {
        const leavingName = this.players[conn.peerPlayerId].name;
        delete this.players[conn.peerPlayerId];
        this.broadcast({ type: 'PLAYER_LEFT', playerId: conn.peerPlayerId, name: leavingName });
        this.broadcast({ type: 'PLAYERS_SYNC', players: this.players });
        this.trigger('playersUpdated', this.players);
      }
    });
  }

  handleHostReceivedData(conn, data) {
    switch (data.type) {
      case 'JOIN_REQUEST':
        conn.peerPlayerId = data.player.id;
        this.players[data.player.id] = { ...data.player, isHost: false };
        this.broadcast({ type: 'PLAYERS_SYNC', players: this.players });
        this.broadcast({
          type: 'CHAT_MESSAGE',
          sender: "System",
          text: `👋 ${data.player.name} joined the room!`,
          system: true
        });
        this.trigger('playersUpdated', this.players);
        break;

      case 'SUBMIT_GUESS':
        this.processGuess(data.playerId, data.playerName, data.guess);
        break;

      case 'SUBMIT_CHAT':
        this.broadcast({
          type: 'CHAT_MESSAGE',
          sender: data.sender,
          avatar: data.avatar,
          text: data.text
        });
        this.trigger('chatMessage', data);
        break;

      case 'PROPOSE_CUSTOM_PUZZLE':
        this.startCustomRound(data.puzzle, data.creatorName);
        break;
    }
  }

  // --- JOIN AN EXISTING ROOM ---
  joinRoom(roomCode, playerName, avatar) {
    this.isHost = false;
    this.roomCode = roomCode.toUpperCase().trim();
    if (playerName) this.localPlayer.name = playerName;
    if (avatar) this.localPlayer.avatar = avatar;

    const targetPeerId = `emojicharades-${this.roomCode.toLowerCase()}`;

    if (!window.Peer) {
      this.trigger('error', "WebRTC Peer library not loaded");
      return;
    }

    try {
      this.peer = new Peer(null, {
        debug: 1,
        config: {
          iceServers: [
            { urls: 'stun:stun.l.google.com:19302' },
            { urls: 'stun:global.stun.twilio.com:3478' }
          ]
        }
      });

      this.peer.on('open', () => {
        this.hostConn = this.peer.connect(targetPeerId);

        this.hostConn.on('open', () => {
          this.hostConn.send({
            type: 'JOIN_REQUEST',
            player: this.localPlayer
          });
          this.trigger('connectedToHost', { roomCode: this.roomCode });
        });

        this.hostConn.on('data', (data) => {
          this.handleGuestReceivedData(data);
        });

        this.hostConn.on('close', () => {
          this.trigger('disconnected', "Host disconnected from room");
        });
      });

      this.peer.on('error', (err) => {
        console.error("Guest Peer Error:", err);
        this.trigger('error', "Could not find or connect to room " + this.roomCode);
      });
    } catch (e) {
      this.trigger('error', "WebRTC Connection Error: " + e.message);
    }
  }

  handleGuestReceivedData(data) {
    switch (data.type) {
      case 'INIT_STATE':
        this.players = data.players || {};
        this.trigger('playersUpdated', this.players);
        if (data.currentPuzzle) {
          this.trigger('roundStarted', {
            puzzle: data.currentPuzzle,
            timeLeft: data.timeLeft,
            hintDisplay: data.hintDisplay
          });
        }
        break;

      case 'PLAYERS_SYNC':
        this.players = data.players;
        this.trigger('playersUpdated', this.players);
        break;

      case 'ROUND_START':
        this.trigger('roundStarted', {
          puzzle: data.puzzle,
          timeLeft: data.timeLeft
        });
        break;

      case 'HINT_REVEALED':
        this.trigger('hintRevealed', data.hintDisplay);
        break;

      case 'TIMER_TICK':
        this.trigger('timerTick', data.timeLeft);
        break;

      case 'ROUND_WON':
        this.trigger('roundWon', data);
        break;

      case 'ROUND_TIMEOUT':
        this.trigger('roundTimeout', data);
        break;

      case 'CHAT_MESSAGE':
        this.trigger('chatMessage', data);
        break;
    }
  }

  // --- HOST BROADCAST UTILITY ---
  broadcast(msg) {
    if (!this.isHost) return;
    this.connections.forEach(conn => {
      if (conn && conn.open) {
        try {
          conn.send(msg);
        } catch (e) {
          console.warn("Failed sending to client", e);
        }
      }
    });
  }

  // --- GUESS PROCESSING (Host acts as authoritative judge) ---
  processGuess(playerId, playerName, rawGuess) {
    if (!this.game.currentPuzzle) return;

    if (this.game.roundSolved) {
      // Puzzle already solved, just send as regular chat
      const chatMsg = { sender: playerName, text: rawGuess };
      this.broadcast({ type: 'CHAT_MESSAGE', ...chatMsg });
      this.trigger('chatMessage', chatMsg);
      return;
    }

    const result = this.game.checkGuess(rawGuess);

    // Send the guess into chat stream
    const chatMsg = {
      sender: playerName,
      text: rawGuess,
      isClose: result.isClose
    };
    this.broadcast({ type: 'CHAT_MESSAGE', ...chatMsg });
    this.trigger('chatMessage', chatMsg);

    if (result.isCorrect) {
      this.game.roundSolved = true;
      this.game.isRoundActive = false;
      this.game.stopTimer();

      const points = this.game.calculatePoints(
        this.game.timeLeft,
        this.game.currentHintLevel,
        (this.players[playerId]?.streak || 0) + 1
      );

      if (this.players[playerId]) {
        this.players[playerId].score += points;
        this.players[playerId].streak = (this.players[playerId].streak || 0) + 1;
        this.players[playerId].correctCount = (this.players[playerId].correctCount || 0) + 1;
      }

      // Reset streaks of other players
      Object.keys(this.players).forEach(id => {
        if (id !== playerId && this.players[id]) {
          this.players[id].streak = 0;
        }
      });

      const winEvent = {
        winnerId: playerId,
        winnerName: playerName,
        answer: this.game.currentPuzzle.answer,
        pointsAwarded: points,
        secondsLeft: this.game.timeLeft,
        players: this.players,
        typoCorrected: !!result.typoCorrected
      };

      this.broadcast({ type: 'ROUND_WON', ...winEvent });
      this.trigger('roundWon', winEvent);
      this.trigger('playersUpdated', this.players);
    }
  }

  sendGuess(text) {
    if (!text || !text.trim()) return;
    const clean = text.trim();

    // If connected to a remote host as a guest, send over data channel
    if (this.hostConn && this.hostConn.open && !this.isHost) {
      this.hostConn.send({
        type: 'SUBMIT_GUESS',
        playerId: this.localPlayer.id,
        playerName: this.localPlayer.name,
        guess: clean
      });
    } else {
      // Process immediately on local machine
      this.processGuess(this.localPlayer.id, this.localPlayer.name, clean);
    }
  }

  // --- BOT SIMULATION (Practice & Solo Mode) ---
  toggleSimulatedTeammates(enabled) {
    this.botSimulationActive = enabled;
    this.clearBotTimers();

    if (enabled) {
      const bots = [
        { id: "bot-alex", name: "Alex (Backend)", avatar: "🤖", score: 0, streak: 0, correctCount: 0, speed: 0.35 },
        { id: "bot-maya", name: "Maya (Design)", avatar: "🎨", score: 0, streak: 0, correctCount: 0, speed: 0.25 },
        { id: "bot-devon", name: "Devon (QA)", avatar: "🕵️", score: 0, streak: 0, correctCount: 0, speed: 0.15 }
      ];

      bots.forEach(b => {
        this.players[b.id] = b;
      });
      this.trigger('playersUpdated', this.players);
    } else {
      ["bot-alex", "bot-maya", "bot-devon"].forEach(id => {
        delete this.players[id];
      });
      this.trigger('playersUpdated', this.players);
    }
  }

  clearBotTimers() {
    this.botTimers.forEach(t => clearTimeout(t));
    this.botTimers = [];
  }

  scheduleBotGuesses(puzzle) {
    if (!this.botSimulationActive || !puzzle) return;
    this.clearBotTimers();

    const bots = Object.values(this.players).filter(p => p.id.startsWith("bot-"));
    bots.forEach(bot => {
      // Probability bot guesses this round correctly
      const willGuessCorrect = Math.random() < bot.speed;
      const guessDelay = (Math.random() * 4 + 3.5) * 1000; // 3.5s - 7.5s into 10s round

      if (willGuessCorrect) {
        const timer = setTimeout(() => {
          if (this.game.isRoundActive && this.game.currentPuzzle?.id === puzzle.id) {
            this.processGuess(bot.id, bot.name, puzzle.answer);
          }
        }, guessDelay);
        this.botTimers.push(timer);
      } else {
        // Occasionally bot makes a wrong or funny guess
        const wrongTimer = setTimeout(() => {
          if (this.game.isRoundActive) {
            const wrongGuesses = ["Wait is it Harry Potter?", "Is it Pizza?", "Wait let me think", "Hmm so close!"];
            const wrongText = wrongGuesses[Math.floor(Math.random() * wrongGuesses.length)];
            const chatMsg = { sender: bot.name, text: wrongText };
            this.broadcast({ type: 'CHAT_MESSAGE', ...chatMsg });
            this.trigger('chatMessage', chatMsg);
          }
        }, (Math.random() * 3 + 2) * 1000);
        this.botTimers.push(wrongTimer);
      }
    });
  }

  trigger(event, data) {
    if (this.callbacks && typeof this.callbacks[event] === 'function') {
      this.callbacks[event](data);
    }
  }
}

window.MultiplayerManager = MultiplayerManager;
