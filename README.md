# 🎭 Emoji Charades: Remote Team Edition

An interactive, multiplayer web app designed specifically for remote teams to play Emoji Charades during team socials, coffee chats, agile retrospectives, or Zoom/Teams game nights!

---

## 🌟 Features

- **🎯 8 Curated Categories with 160+ Puzzles**:
  - 🎬 **Movies**: *(The Avengers, Titanic, The Matrix, Barbie, Up, Cars, Ratatouille, Star Wars, Back to the Future, The Incredibles, Moana, Pirates of the Caribbean, etc.)*
  - 📺 **TV Series**: *(The Mandalorian, La Casa de Papel, Stranger Things, Game of Thrones, Breaking Bad, Peaky Blinders, Squid Game, The Office, Friends, Wednesday, etc.)*
  - 🎵 **Songs & Music**: *(Waka Waka, Billie Jean, Livin’ la Vida Loca, Dynamite, Bailando, Rolling in the Deep, Happy, Uptown Funk, We Will Rock You, Despacito, etc.)*
  - 🍕 **Food & Drinks**: *(Dulce de Leche, Churros, Arepas, Ceviche, Maple Syrup, Tacos, Pizza, Sushi, Mate, Tequila, Ice Cream, Barbecue, etc.)*
  - 🌟 **Celebrities & Characters**: *(Harry Styles, Taylor Swift, Bad Bunny, Cristiano Ronaldo, Messi, Shakira, Batman, Mario Bros, Spongebob, Homer Simpson, Darth Vader, Elsa, etc.)*
  - ✈️ **Places & Travel**: *(Pyramids of Giza, Great Wall of China, Patagonia, Cartagena, Chichén Itzá, New York, Toronto, Eiffel Tower, Machu Picchu, etc.)*
  - 💼 **Everyday Life & Work (Remote Work Specials!)**: *(Deadline, You’re on Mute, Google Meet, Google Chat Notification, Google Calendar Invite, Shared Google Doc, Reply All, Camera Off, Screen Share Fail, Time Zones, Wi-Fi Down, Out of Office, etc.)*
  - ⚽ **Sports**: *(Golf, Soccer Penalty, Swimming, Baseball, Surfing, Cycling, Copa América, Rugby, Skiing, Lucha Libre, World Cup, Formula 1, Tennis, etc.)*
- **👋 Multi-User Entry & Vercel Ready**:
  - When players visit your Vercel link (`your-app.vercel.app` or `?room=CODE`), they get an onboarding modal where they enter their name, pick an avatar, and enter the game.
  - **➕ Add User Button**: Hosts can also click `+ Add User` directly on the Leaderboard to add coworkers to the room on the fly!
- **⚡ Instant Feedback & Visual Cues**:
  - Typing the right answer triggers a celebratory full-screen radiance flash, neon green glowing input bar, victory fanfare chime, and confetti burst.
  - **Works regardless of timer**: If time ran out, typing the right answer still grants full visual confirmation and credit.
- **👥 Seamless WebRTC Remote Multiplayer**:
  - Direct P2P data channels connect remote teammates across the world without needing dedicated backend servers.
- **💡 3-Tier Progressive Hint System & Permanent Clue**:
  - Always shows a clear Category Clue banner *(e.g. "Category: Food & Drinks (Traditional dish, not a movie or person)")* so players always know what type of item it is.
  - Optional progressive hints: Letter mask (`_ _ _   _ _ _ _`), trivia clue, and first letters.

---

## 🚀 Deploying to Vercel (100% Free & 1-Minute Setup)

Because Emoji Charades is built with zero-dependency static web standards and WebRTC, it deploys directly onto **Vercel**:

### Method 1: Vercel CLI (Fastest)
From this project directory, run:
```bash
npx vercel
```
Follow the default prompts. Vercel will output your live URL (e.g. `https://emoji-charades.vercel.app`).

### Method 2: GitHub & Vercel Dashboard
1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Select your repository and click **Deploy** (no build settings or environment variables needed!).
4. Share your live link with teammates:
   `https://your-app.vercel.app?room=TECH`

---

## 🎮 How to Play with Remote Teams

1. **Host a Game**:
   - The host opens the app and clicks **👑 Host Room**.
   - A 4-letter Room Code is generated (e.g., `TECH`) along with a shareable link.
2. **Teammates Join**:
   - Teammates open the link on their laptops or phones.
   - The Welcome Screen prompts them: *"What's your name?"* and lets them choose an avatar.
   - They click **🚀 Enter Game** and are instantly connected to the room!
3. **Guessing**:
   - Look at the 3 to 5 emojis.
   - Type your guess into the **⚡ Buzz In** input or chat stream.
   - First to guess wins the points and celebratory fanfare!
