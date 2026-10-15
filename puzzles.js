/**
 * Emoji Charades - Puzzle Database
 * Merged complete collection across all 8 categories (150+ puzzles).
 */

const PUZZLE_DATABASE = [
  // ==========================================
  // 🎬 MOVIES
  // ==========================================
  {
    id: "mov-avengers",
    category: "Movies",
    answer: "The Avengers",
    emojis: "🦸‍♂️ 🛡️ 🔨 🤖",
    acceptableAnswers: ["the avengers", "avengers", "marvel avengers", "avengers endgame", "los vengadores"],
    typeHint: "🎬 Category: Movie (Marvel superhero blockbuster)",
    hint: "Earth's Mightiest Heroes assemble including Iron Man, Captain America, and Thor."
  },
  {
    id: "mov-coco",
    category: "Movies",
    answer: "Coco",
    emojis: "💀 🎸 🌼 🇲🇽",
    acceptableAnswers: ["coco", "pixar coco"],
    typeHint: "🎬 Category: Movie (Pixar animated movie set in Mexico)",
    hint: "Young musician Miguel journeys to the Land of the Dead during Día de los Muertos."
  },
  {
    id: "mov-matrix",
    category: "Movies",
    answer: "The Matrix",
    emojis: "💊 🔴 🔵 🕶️",
    acceptableAnswers: ["the matrix", "matrix"],
    typeHint: "🎬 Category: Movie (Sci-fi action classic)",
    hint: "Take the red pill or blue pill with Neo and Morpheus."
  },
  {
    id: "mov-barbie",
    category: "Movies",
    answer: "Barbie",
    emojis: "👱‍♀️ 💖 🏖️ 🚗",
    acceptableAnswers: ["barbie", "barbie movie"],
    typeHint: "🎬 Category: Movie (2023 pink blockbuster comedy)",
    hint: "Margot Robbie and Ryan Gosling venture from Barbieland into the Real World."
  },
  {
    id: "mov-up",
    category: "Movies",
    answer: "Up",
    emojis: "🎈 🏠 👴 🐕",
    acceptableAnswers: ["up", "pixar up"],
    typeHint: "🎬 Category: Movie (Pixar emotional animated feature)",
    hint: "Carl Fredricksen ties thousands of helium balloons to his house to fly to Paradise Falls."
  },
  {
    id: "mov-cars",
    category: "Movies",
    answer: "Cars",
    emojis: "🏎️ ⚡ 🛣️ 😎",
    acceptableAnswers: ["cars", "lightning mcqueen", "pixar cars"],
    typeHint: "🎬 Category: Movie (Pixar animated vehicle movie)",
    hint: "Lightning McQueen gets stranded in Radiator Springs on Route 66. Ka-chow!"
  },
  {
    id: "mov-ratatouille",
    category: "Movies",
    answer: "Ratatouille",
    emojis: "🐀 👨‍🍳 🍝 🇫🇷",
    acceptableAnswers: ["ratatouille", "remy"],
    typeHint: "🎬 Category: Movie (Pixar culinary comedy film)",
    hint: "Remy the talented rat secretly cooks inside a famous Parisian restaurant."
  },
  {
    id: "mov-starwars",
    category: "Movies",
    answer: "Star Wars",
    emojis: "⭐ ⚔️ 🚀 🌌",
    acceptableAnswers: ["star wars", "a new hope", "the empire strikes back"],
    typeHint: "🎬 Category: Movie (Epic space opera franchise)",
    hint: "A galaxy far, far away with Jedi, Sith, and lightsabers."
  },
  {
    id: "mov-backtothefuture",
    category: "Movies",
    answer: "Back to the Future",
    emojis: "⏪ 🚗 ⚡ ⏰",
    acceptableAnswers: ["back to the future", "bttf", "volver al futuro"],
    typeHint: "🎬 Category: Movie (Time travel sci-fi adventure)",
    hint: "Marty McFly and Doc Brown hit 88 mph in a plutonium-powered DeLorean."
  },
  {
    id: "mov-incredibles",
    category: "Movies",
    answer: "The Incredibles",
    emojis: "🦸‍♂️ 👨‍👩‍👧‍👦 🔴 💥",
    acceptableAnswers: ["the incredibles", "incredibles", "los increibles"],
    typeHint: "🎬 Category: Movie (Pixar superhero family animated film)",
    hint: "Mr. Incredible and Elastigirl come out of retirement to defeat Syndrome."
  },
  {
    id: "mov-moana",
    category: "Movies",
    answer: "Moana",
    emojis: "🌺 🌊 🐓 🏝️",
    acceptableAnswers: ["moana", "vaiana"],
    typeHint: "🎬 Category: Movie (Disney Polynesian animated musical)",
    hint: "A brave island teenager sets sail with demigod Maui to restore the heart of Te Fiti."
  },
  {
    id: "mov-pirates",
    category: "Movies",
    answer: "Pirates of the Caribbean",
    emojis: "🏴‍☠️ 🚢 🦜 🏝️",
    acceptableAnswers: ["pirates of the caribbean", "jack sparrow", "curse of the black pearl", "piratas del caribe"],
    typeHint: "🎬 Category: Movie (Swashbuckling sea adventure franchise)",
    hint: "Captain Jack Sparrow sails the high seas aboard the Black Pearl."
  },
  {
    id: "mov-titanic",
    category: "Movies",
    answer: "Titanic",
    emojis: "🚢 🧊 💔 🌊",
    acceptableAnswers: ["titanic"],
    typeHint: "🎬 Category: Movie (Romance & disaster epic film)",
    hint: "Jack and Rose aboard an ill-fated ocean liner."
  },
  {
    id: "mov-lionking",
    category: "Movies",
    answer: "The Lion King",
    emojis: "🦁 👑 🌅 🎶",
    acceptableAnswers: ["the lion king", "lion king", "el rey leon"],
    typeHint: "🎬 Category: Movie (Disney animated classic)",
    hint: "Simba, Mufasa, Timon, and Pumbaa in Pride Rock."
  },
  {
    id: "mov-frozen",
    category: "Movies",
    answer: "Frozen",
    emojis: "❄️ 👸 ⛄ 🎶",
    acceptableAnswers: ["frozen", "frozen 2"],
    typeHint: "🎬 Category: Movie (Disney animated musical)",
    hint: "Elsa, Anna, and Olaf in Arendelle singing 'Let It Go'."
  },
  {
    id: "mov-harrypotter",
    category: "Movies",
    answer: "Harry Potter",
    emojis: "⚡ 👓 🧙‍♂️ 🪄",
    acceptableAnswers: ["harry potter", "harry potter and the sorcerer's stone", "harry potter and the philosophers stone"],
    typeHint: "🎬 Category: Movie (Wizard fantasy film series)",
    hint: "The Boy Who Lived attending Hogwarts School of Witchcraft and Wizardry."
  },
  {
    id: "mov-jurassicpark",
    category: "Movies",
    answer: "Jurassic Park",
    emojis: "🦖 🌴 🚙 😱",
    acceptableAnswers: ["jurassic park", "jurassic world"],
    typeHint: "🎬 Category: Movie (Dinosaur sci-fi thriller)",
    hint: "Cloned prehistoric creatures run wild on Isla Nublar."
  },
  {
    id: "mov-findingnemo",
    category: "Movies",
    answer: "Finding Nemo",
    emojis: "🐠 🔍 🌊 👨 👦",
    acceptableAnswers: ["finding nemo", "nemo", "buscando a nemo"],
    typeHint: "🎬 Category: Movie (Pixar underwater adventure)",
    hint: "Clownfish dad Marlin teams with forgetful Dory to rescue his son in Sydney."
  },
  {
    id: "mov-spiderman",
    category: "Movies",
    answer: "Spider-Man",
    emojis: "🕷️ 🕸️ 🦸‍♂️ 🏙️",
    acceptableAnswers: ["spider-man", "spiderman", "spider man"],
    typeHint: "🎬 Category: Movie (Marvel web-slinger superhero film)",
    hint: "Bitten by a radioactive arachnid, Peter Parker protects New York City."
  },
  {
    id: "mov-toystory",
    category: "Movies",
    answer: "Toy Story",
    emojis: "🤠 🚀 🧸 🏠",
    acceptableAnswers: ["toy story", "toy story 2", "toy story 3", "toy story 4"],
    typeHint: "🎬 Category: Movie (Pioneering CGI animated movie)",
    hint: "Woody and Buzz Lightyear come alive when humans leave the room."
  },
  {
    id: "mov-shrek",
    category: "Movies",
    answer: "Shrek",
    emojis: "👹 🟢 🐴 🏰",
    acceptableAnswers: ["shrek", "shrek 2"],
    typeHint: "🎬 Category: Movie (DreamWorks animated comedy film)",
    hint: "Lovable green ogre and a talking donkey rescue Princess Fiona from a tower."
  },
  {
    id: "mov-homealone",
    category: "Movies",
    answer: "Home Alone",
    emojis: "🏠 👦 😱 🎄",
    acceptableAnswers: ["home alone", "home alone 2", "mi pobre angelito"],
    typeHint: "🎬 Category: Movie (Classic holiday comedy film)",
    hint: "Kevin McCallister defends his house from the bumbling Wet Bandits at Christmas."
  },

  // ==========================================
  // 📺 TV SERIES
  // ==========================================
  {
    id: "tv-mandalorian",
    category: "TV Series",
    answer: "The Mandalorian",
    emojis: "🪖 🚀 👶 🟢",
    acceptableAnswers: ["the mandalorian", "mandalorian", "baby yoda", "grogu"],
    typeHint: "📺 Category: TV Series (Star Wars space western streaming show)",
    hint: "Bounty hunter Din Djarin protects Grogu (Baby Yoda) across the galaxy."
  },
  {
    id: "tv-casadepapel",
    category: "TV Series",
    answer: "La Casa de Papel",
    emojis: "🎭 💰 🔴 🏦",
    acceptableAnswers: ["la casa de papel", "money heist", "casa de papel"],
    typeHint: "📺 Category: TV Series (Spanish heist drama series)",
    hint: "The Professor leads a Dali-masked crew in robbing the Royal Mint of Spain."
  },
  {
    id: "tv-narcos",
    category: "TV Series",
    answer: "Narcos",
    emojis: "🇨🇴 💊 🕵️‍♂️ 🚁",
    acceptableAnswers: ["narcos", "pablo escobar"],
    typeHint: "📺 Category: TV Series (Crime cartel television drama)",
    hint: "DEA agents hunt down Pablo Escobar and the Medellín Cartel in Colombia."
  },
  {
    id: "tv-lastofus",
    category: "TV Series",
    answer: "The Last of Us",
    emojis: "🍄 🧟 🎮 🌆",
    acceptableAnswers: ["the last of us", "last of us", "tlou"],
    typeHint: "📺 Category: TV Series (Post-apocalyptic fungal survival show)",
    hint: "Joel smuggles immune teenager Ellie across a collapsed, infected America."
  },
  {
    id: "tv-peakyblinders",
    category: "TV Series",
    answer: "Peaky Blinders",
    emojis: "🎩 🔫 🚬 🇬🇧",
    acceptableAnswers: ["peaky blinders", "thomas shelby"],
    typeHint: "📺 Category: TV Series (British crime period drama)",
    hint: "Thomas Shelby leads a 1919 Birmingham gang who sew razor blades into their flat caps."
  },
  {
    id: "tv-blackmirror",
    category: "TV Series",
    answer: "Black Mirror",
    emojis: "🪞 ⚫ 📱 😨",
    acceptableAnswers: ["black mirror"],
    typeHint: "📺 Category: TV Series (Dystopian sci-fi anthology series)",
    hint: "Explores dark, unintended psychological consequences of advanced technology."
  },
  {
    id: "tv-chavodel8",
    category: "TV Series",
    answer: "El Chavo del 8",
    emojis: "🏘️ 🛢️ 👦 🇲🇽",
    acceptableAnswers: ["el chavo del 8", "el chavo", "el chavo del ocho", "chavo del 8", "chavo"],
    typeHint: "📺 Category: TV Series (Legendary Mexican comedy sitcom)",
    hint: "Beloved orphan boy who lives in a barrel inside a vibrant neighborhood vecindad."
  },
  {
    id: "tv-himym",
    category: "TV Series",
    answer: "How I Met Your Mother",
    emojis: "👫 ☂️ 💍 🍺",
    acceptableAnswers: ["how i met your mother", "himym"],
    typeHint: "📺 Category: TV Series (NYC comedy sitcom with the yellow umbrella)",
    hint: "Ted Mosby recounts the legendary stories of his 20s and 30s with Marshall, Lily, Barney, and Robin."
  },
  {
    id: "tv-thecrown",
    category: "TV Series",
    answer: "The Crown",
    emojis: "👑 🇬🇧 ☕ 🏰",
    acceptableAnswers: ["the crown", "crown"],
    typeHint: "📺 Category: TV Series (Royal historical drama series)",
    hint: "Dramatizes the political rivalries and reign of Queen Elizabeth II in Great Britain."
  },
  {
    id: "tv-wednesday",
    category: "TV Series",
    answer: "Wednesday",
    emojis: "🖤 👧 🕷️ 🎻",
    acceptableAnswers: ["wednesday", "wednesday addams", "merlina"],
    typeHint: "📺 Category: TV Series (Addams Family supernatural mystery show)",
    hint: "Deadpan goth student Wednesday Addams investigates monster murders at Nevermore Academy."
  },
  {
    id: "tv-strangerthings",
    category: "TV Series",
    answer: "Stranger Things",
    emojis: "👾 🔦 🚲 🙃",
    acceptableAnswers: ["stranger things"],
    typeHint: "📺 Category: TV Series (80s sci-fi supernatural hit)",
    hint: "Kids in Hawkins, Indiana battle the Upside Down with Eleven."
  },
  {
    id: "tv-gameofthrones",
    category: "TV Series",
    answer: "Game of Thrones",
    emojis: "🐉 ⚔️ 👑 🔥",
    acceptableAnswers: ["game of thrones", "got", "house of the dragon"],
    typeHint: "📺 Category: TV Series (Fantasy epic series with the Iron Throne)",
    hint: "Noble houses fight for control of Westeros while Winter is Coming."
  },
  {
    id: "tv-breakingbad",
    category: "TV Series",
    answer: "Breaking Bad",
    emojis: "🧪 👨‍🔬 💰 🚐",
    acceptableAnswers: ["breaking bad", "better call saul"],
    typeHint: "📺 Category: TV Series (Award-winning drama series in Albuquerque)",
    hint: "High school chemistry teacher Walter White partners with Jesse Pinkman."
  },
  {
    id: "tv-squidgame",
    category: "TV Series",
    answer: "Squid Game",
    emojis: "🦑 🎮 🔴 🟢",
    acceptableAnswers: ["squid game"],
    typeHint: "📺 Category: TV Series (Korean survival game drama)",
    hint: "Debt-ridden contestants play deadly childhood games for 45.6 billion won."
  },
  {
    id: "tv-thesimpsons",
    category: "TV Series",
    answer: "The Simpsons",
    emojis: "🍩 👨 🟡 📺",
    acceptableAnswers: ["the simpsons", "simpsons", "los simpson"],
    typeHint: "📺 Category: TV Series (Longest-running animated comedy show)",
    hint: "Homer, Marge, Bart, Lisa, and Maggie living in Springfield."
  },
  {
    id: "tv-friends",
    category: "TV Series",
    answer: "Friends",
    emojis: "👫 ☕ 🛋️ 📺",
    acceptableAnswers: ["friends", "friends tv show"],
    typeHint: "📺 Category: TV Series (90s ensemble comedy sitcom)",
    hint: "Six friends hanging out on the orange couch at Central Perk."
  },
  {
    id: "tv-theoffice",
    category: "TV Series",
    answer: "The Office",
    emojis: "🏢 📎 😂 📋",
    acceptableAnswers: ["the office", "the office us", "the office uk"],
    typeHint: "📺 Category: TV Series (Mockumentary workplace comedy show)",
    hint: "Dunder Mifflin paper company Scranton branch led by regional manager Michael Scott."
  },

  // ==========================================
  // 🎵 SONGS & MUSIC
  // ==========================================
  {
    id: "mus-wakawaka",
    category: "Songs & Music",
    answer: "Waka Waka",
    emojis: "⚽ 🌍 💃 🎶",
    acceptableAnswers: ["waka waka", "shakira waka waka", "this time for africa"],
    typeHint: "🎵 Category: Song & Music (2010 FIFA World Cup anthem by Shakira)",
    hint: "Shakira's global dance anthem: 'Tsamina mina, eh, eh... Waka waka, eh, eh!'"
  },
  {
    id: "mus-billiejean",
    category: "Songs & Music",
    answer: "Billie Jean",
    emojis: "🕺 🧤 🌕 👩",
    acceptableAnswers: ["billie jean", "michael jackson", "michael jackson billie jean"],
    typeHint: "🎵 Category: Song & Music (Michael Jackson's moonwalk smash)",
    hint: "'Billie Jean is not my lover, she's just a girl who claims that I am the one!'"
  },
  {
    id: "mus-livinlavidaloca",
    category: "Songs & Music",
    answer: "Livin' la Vida Loca",
    emojis: "🔴 💃 🎤 🇵🇷",
    acceptableAnswers: ["livin la vida loca", "livin' la vida loca", "ricky martin"],
    typeHint: "🎵 Category: Song & Music (Ricky Martin's Latin pop explosion)",
    hint: "Ricky Martin: 'Upside, inside out, she's livin' la vida loca!'"
  },
  {
    id: "mus-dynamite",
    category: "Songs & Music",
    answer: "Dynamite",
    emojis: "💥 🕺 🧨 🎶",
    acceptableAnswers: ["dynamite", "bts", "bts dynamite"],
    typeHint: "🎵 Category: Song & Music (BTS Billboard #1 disco-pop single)",
    hint: "'Cause I, I, I'm in the stars tonight, so watch me bring the fire and set the night alight!'"
  },
  {
    id: "mus-bailando",
    category: "Songs & Music",
    answer: "Bailando",
    emojis: "💃 🕺 🎶 🔥",
    acceptableAnswers: ["bailando", "enrique iglesias", "enrique iglesias bailando"],
    typeHint: "🎵 Category: Song & Music (Enrique Iglesias multi-platinum Latin pop track)",
    hint: "Enrique Iglesias featuring Gente de Zona and Descemer Bueno: 'Yo te miro, se me corta la respiración...'"
  },
  {
    id: "mus-rollinginthedeep",
    category: "Songs & Music",
    answer: "Rolling in the Deep",
    emojis: "🌊 🔄 🎤 😢",
    acceptableAnswers: ["rolling in the deep", "adele", "adele rolling in the deep"],
    typeHint: "🎵 Category: Song & Music (Adele's stomping soul mega-hit)",
    hint: "Adele: 'We could have had it all... Rolling in the deep!'"
  },
  {
    id: "mus-happy",
    category: "Songs & Music",
    answer: "Happy",
    emojis: "😊 👏 ☀️ 🎶",
    acceptableAnswers: ["happy", "pharrell", "pharrell williams happy"],
    typeHint: "🎵 Category: Song & Music (Pharrell Williams infectious upbeat track)",
    hint: "'Clap along if you feel like a room without a roof... Because I'm happy!'"
  },
  {
    id: "mus-uptownfunk",
    category: "Songs & Music",
    answer: "Uptown Funk",
    emojis: "🌆 🕺 🎸 🔥",
    acceptableAnswers: ["uptown funk", "bruno mars", "mark ronson", "mark ronson uptown funk"],
    typeHint: "🎵 Category: Song & Music (Mark Ronson & Bruno Mars funk monster)",
    hint: "'Don't believe me, just watch! Uptown funk you up, uptown funk you up!'"
  },
  {
    id: "mus-wewillrockyou",
    category: "Songs & Music",
    answer: "We Will Rock You",
    emojis: "🦶 🦶 👏 🎸",
    acceptableAnswers: ["we will rock you", "queen we will rock you", "queen"],
    typeHint: "🎵 Category: Song & Music (Queen stadium rock stomp-stomp-clap anthem)",
    hint: "Stomp, stomp, clap! 'We will, we will rock you!'"
  },
  {
    id: "mus-eyeofthetiger",
    category: "Songs & Music",
    answer: "Eye of the Tiger",
    emojis: "👁️ 🐯 🥊 🎶",
    acceptableAnswers: ["eye of the tiger", "survivor", "rocky 3"],
    typeHint: "🎵 Category: Song & Music (Survivor's iconic workout pump-up anthem)",
    hint: "Famously featured in Rocky III training montage."
  },
  {
    id: "mus-labamba",
    category: "Songs & Music",
    answer: "La Bamba",
    emojis: "💃 🇲🇽 🎸 🎶",
    acceptableAnswers: ["la bamba", "ritchie valens", "los lobos"],
    typeHint: "🎵 Category: Song & Music (Mexican folk song adapted by Ritchie Valens)",
    hint: "'Para bailar la bamba se necesita una poca de gracia!'"
  },
  {
    id: "mus-vivirmivida",
    category: "Songs & Music",
    answer: "Vivir Mi Vida",
    emojis: "🌍 💃 🎶 ☀️",
    acceptableAnswers: ["vivir mi vida", "marc anthony", "marc anthony vivir mi vida"],
    typeHint: "🎵 Category: Song & Music (Marc Anthony joyful salsa anthem)",
    hint: "Marc Anthony: 'Voy a reír, voy a bailar, vivir mi vida, la la la la!'"
  },
  {
    id: "mus-despacito",
    category: "Songs & Music",
    answer: "Despacito",
    emojis: "🐌 🎶 🇵🇷 💃",
    acceptableAnswers: ["despacito", "luis fonsi", "daddy yankee"],
    typeHint: "🎵 Category: Song & Music (Record-breaking Latin pop global track)",
    hint: "Luis Fonsi and Daddy Yankee's billion-view smash."
  },
  {
    id: "mus-bohemianrhapsody",
    category: "Songs & Music",
    answer: "Bohemian Rhapsody",
    emojis: "👑 🎤 🎸 👨‍🎤",
    acceptableAnswers: ["bohemian rhapsody", "queen"],
    typeHint: "🎵 Category: Song & Music (Queen 6-minute rock opera suite)",
    hint: "'Mama, just killed a man... Put a gun against his head, pulled my trigger, now he's dead.'"
  },
  {
    id: "mus-thriller",
    category: "Songs & Music",
    answer: "Thriller",
    emojis: "🧟‍♂️ 🕺 🌕 🎶",
    acceptableAnswers: ["thriller", "michael jackson thriller"],
    typeHint: "🎵 Category: Song & Music (Michael Jackson legendary zombie dance track)",
    hint: "'Cause this is thriller, thriller night!'"
  },
  {
    id: "mus-hipsdontlie",
    category: "Songs & Music",
    answer: "Hips Don't Lie",
    emojis: "💃 🤥 🚫 🎶",
    acceptableAnswers: ["hips don't lie", "hips dont lie", "shakira"],
    typeHint: "🎵 Category: Song & Music (Shakira & Wyclef Jean dance track)",
    hint: "'I'm on tonight, you know my hips don't lie!'"
  },
  {
    id: "mus-dancingqueen",
    category: "Songs & Music",
    answer: "Dancing Queen",
    emojis: "💃 👑 🕺 🎶",
    acceptableAnswers: ["dancing queen", "abba"],
    typeHint: "🎵 Category: Song & Music (ABBA 70s disco floor-filler)",
    hint: "'You can dance, you can jive, having the time of your life...'"
  },
  {
    id: "mus-shapeofyou",
    category: "Songs & Music",
    answer: "Shape of You",
    emojis: "💪 👤 🎸 🎶",
    acceptableAnswers: ["shape of you", "ed sheeran"],
    typeHint: "🎵 Category: Song & Music (Ed Sheeran marimba pop smash)",
    hint: "'I'm in love with the shape of you...'"
  },
  {
    id: "mus-gasolina",
    category: "Songs & Music",
    answer: "Gasolina",
    emojis: "⛽ 🏎️ 🎶 🔥",
    acceptableAnswers: ["gasolina", "daddy yankee"],
    typeHint: "🎵 Category: Song & Music (Pioneering reggaeton club hit)",
    hint: "Daddy Yankee: 'A ella le gusta la gasolina, dame más gasolina!'"
  },

  // ==========================================
  // 🍕 FOOD & DRINKS
  // ==========================================
  {
    id: "food-dulcedeleche",
    category: "Food & Drinks",
    answer: "Dulce de Leche",
    emojis: "🍮 🥛 🤤 🇦🇷",
    acceptableAnswers: ["dulce de leche", "arequipe", "manjar", "cajeta"],
    typeHint: "🍕 Category: Food & Drinks (Rich caramel-like dairy spread)",
    hint: "Confection prepared by slowly heating sweetened milk popular across Latin America."
  },
  {
    id: "food-churros",
    category: "Food & Drinks",
    answer: "Churros",
    emojis: "🍩 🥖 🍫 ☕",
    acceptableAnswers: ["churros", "churro"],
    typeHint: "🍕 Category: Food & Drinks (Fried dough pastry dusted with cinnamon sugar)",
    hint: "Fluted fried-dough pastries traditionally dipped in thick hot chocolate."
  },
  {
    id: "food-arepas",
    category: "Food & Drinks",
    answer: "Arepas",
    emojis: "🫓 🧀 🥑 🇨🇴",
    acceptableAnswers: ["arepas", "arepa"],
    typeHint: "🍕 Category: Food & Drinks (Ground maize dough pocket dish)",
    hint: "Pre-Columbian corn cakes split and stuffed with cheese, meats, or avocado in Colombia and Venezuela."
  },
  {
    id: "food-ceviche",
    category: "Food & Drinks",
    answer: "Ceviche",
    emojis: "🐟 🍋 🌶️ 🧅",
    acceptableAnswers: ["ceviche", "cebiche"],
    typeHint: "🍕 Category: Food & Drinks (Citrus-cured fresh seafood dish)",
    hint: "Peruvian national dish of raw fish marinated in fresh lime juice with red onions and chilies."
  },
  {
    id: "food-maplesyrup",
    category: "Food & Drinks",
    answer: "Maple Syrup",
    emojis: "🍁 🍯 🥞 🇨🇦",
    acceptableAnswers: ["maple syrup", "sirope de arce", "maple"],
    typeHint: "🍕 Category: Food & Drinks (Sweet Canadian tree sap syrup)",
    hint: "Golden sweet syrup made from the xylem sap of sugar maple trees poured over breakfast."
  },
  {
    id: "food-pancakes",
    category: "Food & Drinks",
    answer: "Pancakes",
    emojis: "🥞 🧈 🍯 🍓",
    acceptableAnswers: ["pancakes", "pancake", "hotcakes", "panqueques"],
    typeHint: "🍕 Category: Food & Drinks (Flat round breakfast cakes cooked on a griddle)",
    hint: "Fluffy stacked morning cakes topped with butter, syrup, and berries."
  },
  {
    id: "food-guacamole",
    category: "Food & Drinks",
    answer: "Guacamole",
    emojis: "🥑 🍅 🧅 🌮",
    acceptableAnswers: ["guacamole", "guac"],
    typeHint: "🍕 Category: Food & Drinks (Mashed avocado dip)",
    hint: "Avocado-based dip with chopped tomatoes, onions, cilantro, and lime juice for tortilla chips."
  },
  {
    id: "food-mate",
    category: "Food & Drinks",
    answer: "Mate",
    emojis: "🧉 🇦🇷 🌿 👥",
    acceptableAnswers: ["mate", "yerba mate"],
    typeHint: "🍕 Category: Food & Drinks (Caffeine-rich herbal infusion drink)",
    hint: "Traditional South American drink shared from a calabash gourd with a metal straw (bombilla)."
  },
  {
    id: "food-tequila",
    category: "Food & Drinks",
    answer: "Tequila",
    emojis: "🌵 🥃 🍋 🧂",
    acceptableAnswers: ["tequila"],
    typeHint: "🍕 Category: Food & Drinks (Distilled Mexican blue agave spirit)",
    hint: "Clear or aged liquor made from the blue agave plant, served with salt and a lime wedge."
  },
  {
    id: "food-icecream",
    category: "Food & Drinks",
    answer: "Ice Cream",
    emojis: "🍦 🧊 😋 🌞",
    acceptableAnswers: ["ice cream", "helado", "icecream"],
    typeHint: "🍕 Category: Food & Drinks (Cold sweetened frozen dairy dessert)",
    hint: "Scooped frozen treat served in a wafer cone on a hot sunny day."
  },
  {
    id: "food-barbecue",
    category: "Food & Drinks",
    answer: "Barbecue",
    emojis: "🍖 🔥 🍺 🌭",
    acceptableAnswers: ["barbecue", "bbq", "barbeque", "parrillada"],
    typeHint: "🍕 Category: Food & Drinks (Outdoor smoked & grilled meat gathering)",
    hint: "Cooking meats low and slow or over coals with tangy sauce and cold drinks."
  },
  {
    id: "food-popcorn",
    category: "Food & Drinks",
    answer: "Popcorn",
    emojis: "🍿 🎬 🧈 🌽",
    acceptableAnswers: ["popcorn", "palomitas", "pochoclos", "pop corn"],
    typeHint: "🍕 Category: Food & Drinks (Puffed heated corn kernels movie snack)",
    hint: "Warm buttery snack crunching inside movie theater auditoriums."
  },
  {
    id: "food-tacos",
    category: "Food & Drinks",
    answer: "Tacos",
    emojis: "🌮 🌶️ 🥑 🍋",
    acceptableAnswers: ["tacos", "taco"],
    typeHint: "🍕 Category: Food & Drinks (Folded corn tortilla dish)",
    hint: "Classic Mexican street food filled with seasoned meat, cilantro, and salsa."
  },
  {
    id: "food-pizza",
    category: "Food & Drinks",
    answer: "Pizza",
    emojis: "🍕 🧀 🍅 🇮🇹",
    acceptableAnswers: ["pizza", "pizzas"],
    typeHint: "🍕 Category: Food & Drinks (Baked Italian dough with melted mozzarella)",
    hint: "Oven-baked crust with tomato sauce, stringy melted cheese, and pepperoni."
  },
  {
    id: "food-empanadas",
    category: "Food & Drinks",
    answer: "Empanadas",
    emojis: "🥟 🥩 🧅 🔥",
    acceptableAnswers: ["empanadas", "empanada"],
    typeHint: "🍕 Category: Food & Drinks (Stuffed pastry turnover)",
    hint: "Flaky baked dough pocket filled with minced beef, onions, and spices."
  },
  {
    id: "food-asado",
    category: "Food & Drinks",
    answer: "Asado",
    emojis: "🥩 🔥 🪵 🇦🇷",
    acceptableAnswers: ["asado", "parrilla"],
    typeHint: "🍕 Category: Food & Drinks (South American open fire grilling tradition)",
    hint: "Grilling ribs, chorizo, and prime steaks over hot wood embers."
  },
  {
    id: "food-sushi",
    category: "Food & Drinks",
    answer: "Sushi",
    emojis: "🍣 🍚 🥢 🇯🇵",
    acceptableAnswers: ["sushi", "sashimi", "sushi roll", "nigiri"],
    typeHint: "🍕 Category: Food & Drinks (Japanese seasoned rice & fresh seafood dish)",
    hint: "Vinegared rice paired with raw salmon, tuna, or nori eaten with chopsticks."
  },
  {
    id: "food-hamburger",
    category: "Food & Drinks",
    answer: "Hamburger",
    emojis: "🍔 🍟 🥤 🍅",
    acceptableAnswers: ["hamburger", "burger", "cheeseburger"],
    typeHint: "🍕 Category: Food & Drinks (Cooked ground beef patty in a sliced bun)",
    hint: "Classic combo served with crispy french fries and a soft drink."
  },
  {
    id: "food-margarita",
    category: "Food & Drinks",
    answer: "Margarita",
    emojis: "🍸 🍋 🧂 🍹",
    acceptableAnswers: ["margarita", "margaritas"],
    typeHint: "🍕 Category: Food & Drinks (Tequila and lime cocktail with a salted rim)",
    hint: "Refreshing Mexican cocktail made with tequila, triple sec, and fresh lime."
  },
  {
    id: "food-cafe",
    category: "Food & Drinks",
    answer: "Café",
    emojis: "☕ 🫘 🌅 🇨🇴",
    acceptableAnswers: ["cafe", "café", "coffee"],
    typeHint: "🍕 Category: Food & Drinks (Aromatic brewed morning hot drink)",
    hint: "Fresh morning brew prepared from roasted Colombian coffee beans."
  },
  {
    id: "food-poutine",
    category: "Food & Drinks",
    answer: "Poutine",
    emojis: "🍟 🧀 🍖 🇨🇦",
    acceptableAnswers: ["poutine"],
    typeHint: "🍕 Category: Food & Drinks (Quebec fries, cheese curds & gravy dish)",
    hint: "Canadian comfort food of crispy fries smothered in brown gravy and cheese curds."
  },
  {
    id: "food-hotdog",
    category: "Food & Drinks",
    answer: "Hot Dog",
    emojis: "🌭 🔴 🟡 🌽",
    acceptableAnswers: ["hot dog", "hotdog"],
    typeHint: "🍕 Category: Food & Drinks (Grilled sausage in a sliced bun snack)",
    hint: "Classic ballpark food topped with ketchup, relish, and yellow mustard."
  },

  // ==========================================
  // 🌟 CELEBRITIES & CHARACTERS
  // ==========================================
  {
    id: "cel-harrystyles",
    category: "Celebrities & Characters",
    answer: "Harry Styles",
    emojis: "🌈 🎤 👩‍🎤 🍉",
    acceptableAnswers: ["harry styles", "watermelon sugar"],
    typeHint: "🌟 Category: Celebrities & Characters (British pop star / One Direction)",
    hint: "Grammy-winning solo artist famous for 'Watermelon Sugar' and flamboyant fashion."
  },
  {
    id: "cel-taylorswift",
    category: "Celebrities & Characters",
    answer: "Taylor Swift",
    emojis: "👱‍♀️ 🎤 🎸 🐍",
    acceptableAnswers: ["taylor swift", "swiftie"],
    typeHint: "🌟 Category: Celebrities & Characters (Global superstar behind The Eras Tour)",
    hint: "Singer-songwriter with record-shattering albums, friendship bracelets, and 14 Grammys."
  },
  {
    id: "cel-badbunny",
    category: "Celebrities & Characters",
    answer: "Bad Bunny",
    emojis: "😈 🐰 🇵🇷 🎤",
    acceptableAnswers: ["bad bunny", "benito", "el conejo malo"],
    typeHint: "🌟 Category: Celebrities & Characters (Puerto Rican trap & reggaeton King)",
    hint: "Benito Antonio Martínez Ocasio: Spotify's most streamed global Latin sensation."
  },
  {
    id: "cel-cristianoronaldo",
    category: "Celebrities & Characters",
    answer: "Cristiano Ronaldo",
    emojis: "⚽ 🇵🇹 💪 🐐",
    acceptableAnswers: ["cristiano ronaldo", "ronaldo", "cr7"],
    typeHint: "🌟 Category: Celebrities & Characters (Portuguese football superstar #7)",
    hint: "One of football's greatest goalscorers famous for his iconic 'Siuuu!' celebration."
  },
  {
    id: "cel-spongebob",
    category: "Celebrities & Characters",
    answer: "Spongebob",
    emojis: "🧽 🟡 🍔 🌊",
    acceptableAnswers: ["spongebob", "spongebob squarepants", "bob esponja"],
    typeHint: "🌟 Category: Celebrities & Characters (Animated yellow sea sponge in Bikini Bottom)",
    hint: "Lives in a pineapple under the sea and fries Krabby Patties at the Krusty Krab."
  },
  {
    id: "cel-homersimpson",
    category: "Celebrities & Characters",
    answer: "Homer Simpson",
    emojis: "🍩 🍺 😋 🟡",
    acceptableAnswers: ["homer simpson", "homero simpson", "homer", "homero"],
    typeHint: "🌟 Category: Celebrities & Characters (Yellow cartoon dad working at nuclear plant)",
    hint: "'Mmm... donuts!' Loves Duff Beer and yelling 'D'oh!'"
  },
  {
    id: "cel-darthvader",
    category: "Celebrities & Characters",
    answer: "Darth Vader",
    emojis: "⚫ 😮‍💨 ⚔️ 🌌",
    acceptableAnswers: ["darth vader", "anakin skywalker", "vader"],
    typeHint: "🌟 Category: Celebrities & Characters (Star Wars Sith Lord with breathing mask)",
    hint: "'I am your father!' Wields a red lightsaber and wears a black helmet."
  },
  {
    id: "cel-elsa",
    category: "Celebrities & Characters",
    answer: "Elsa",
    emojis: "❄️ 👱‍♀️ 🎶 🏰",
    acceptableAnswers: ["elsa", "queen elsa", "elsa frozen"],
    typeHint: "🌟 Category: Celebrities & Characters (Disney Ice Queen of Arendelle)",
    hint: "Has magical ice powers and sang 'Let It Go' from her ice palace."
  },
  {
    id: "cel-chapulincolorado",
    category: "Celebrities & Characters",
    answer: "Chapulín Colorado",
    emojis: "🦗 🔴 🦸‍♂️ 🇲🇽",
    acceptableAnswers: ["chapulin colorado", "chapulín colorado", "el chapulin colorado", "chapulin"],
    typeHint: "🌟 Category: Celebrities & Characters (Iconic Mexican superhero with the red suit)",
    hint: "'¡No contaban con mi astucia!' Wields the Chipote Chillón squeaky mallet."
  },
  {
    id: "cel-mickeymouse",
    category: "Celebrities & Characters",
    answer: "Mickey Mouse",
    emojis: "🐭 🔴 🧤 🏰",
    acceptableAnswers: ["mickey mouse", "mickey"],
    typeHint: "🌟 Category: Celebrities & Characters (Disney's worldwide mascot mouse)",
    hint: "Round black ears, red shorts with white buttons, and white gloves."
  },
  {
    id: "cel-messi",
    category: "Celebrities & Characters",
    answer: "Messi",
    emojis: "⚽ 🇦🇷 🐐 🔟",
    acceptableAnswers: ["messi", "lionel messi", "leo messi"],
    typeHint: "🌟 Category: Celebrities & Characters (Argentine World Cup winning soccer icon)",
    hint: "Number 10 legendary dribbler and 8-time Ballon d'Or winner."
  },
  {
    id: "cel-shakira",
    category: "Celebrities & Characters",
    answer: "Shakira",
    emojis: "💃 🎤 🇨🇴 🌟",
    acceptableAnswers: ["shakira"],
    typeHint: "🌟 Category: Celebrities & Characters (Colombian global pop icon)",
    hint: "Singer of 'Hips Don't Lie' and 'Whenever, Wherever'."
  },
  {
    id: "cel-batman",
    category: "Celebrities & Characters",
    answer: "Batman",
    emojis: "🦇 🌃 🦸‍♂️ 🃏",
    acceptableAnswers: ["batman", "bruce wayne", "the dark knight"],
    typeHint: "🌟 Category: Celebrities & Characters (DC Cape Crusader of Gotham City)",
    hint: "Billionaire Bruce Wayne fighting the Joker with the Batmobile."
  },
  {
    id: "cel-mariobros",
    category: "Celebrities & Characters",
    answer: "Mario Bros",
    emojis: "🍄 👨 🔴 🏃‍♂️",
    acceptableAnswers: ["mario bros", "mario", "super mario", "super mario bros"],
    typeHint: "🌟 Category: Celebrities & Characters (Nintendo mustache-wearing plumber)",
    hint: "Jumps on Goombas, eats mushrooms, and saves Princess Peach."
  },
  {
    id: "cel-pikachu",
    category: "Celebrities & Characters",
    answer: "Pikachu",
    emojis: "⚡ 🐭 🟡 🔴",
    acceptableAnswers: ["pikachu", "pokemon"],
    typeHint: "🌟 Category: Celebrities & Characters (Yellow electric Pokémon)",
    hint: "Ash Ketchum's loyal partner with red electric cheeks."
  },
  {
    id: "cel-superman",
    category: "Celebrities & Characters",
    answer: "Superman",
    emojis: "🦸‍♂️ 🔵 🔴 💪",
    acceptableAnswers: ["superman", "clark kent", "man of steel"],
    typeHint: "🌟 Category: Celebrities & Characters (Man of Steel superhero from Krypton)",
    hint: "Can fly, has heat vision, and is weakened only by Kryptonite."
  },
  {
    id: "cel-santaclaus",
    category: "Celebrities & Characters",
    answer: "Santa Claus",
    emojis: "🎅 🎄 🎁 🦌",
    acceptableAnswers: ["santa claus", "santa", "saint nicholas", "father christmas", "papa noel"],
    typeHint: "🌟 Category: Celebrities & Characters (Beloved Christmas holiday figure)",
    hint: "Flies across the globe with Rudolph delivering presents on Christmas Eve."
  },
  {
    id: "cel-fridakhalo",
    category: "Celebrities & Characters",
    answer: "Frida Kahlo",
    emojis: "🎨 🌺 👩‍🎨 🇲🇽",
    acceptableAnswers: ["frida kahlo", "frida"],
    typeHint: "🌟 Category: Celebrities & Characters (Celebrated Mexican painter and icon)",
    hint: "Known for vivid self-portraits, bold floral crowns, and unibrow."
  },

  // ==========================================
  // ✈️ PLACES & TRAVEL
  // ==========================================
  {
    id: "plc-pyramids",
    category: "Places & Travel",
    answer: "Pyramids of Giza",
    emojis: "🏜️ 🔺 🐪 🇪🇬",
    acceptableAnswers: ["pyramids of giza", "giza pyramids", "the pyramids", "pyramids", "piramides de giza"],
    typeHint: "✈️ Category: Places & Travel (Ancient limestone monuments in Egypt)",
    hint: "The only surviving Wonder of the Ancient World standing on the desert plateau outside Cairo."
  },
  {
    id: "plc-greatwall",
    category: "Places & Travel",
    answer: "Great Wall of China",
    emojis: "🧱 🐉 🇨🇳 ⛰️",
    acceptableAnswers: ["great wall of china", "great wall", "gran muralla china"],
    typeHint: "✈️ Category: Places & Travel (Ancient stone fortification across northern China)",
    hint: "Stretches thousands of miles across mountains to protect historic dynasties."
  },
  {
    id: "plc-patagonia",
    category: "Places & Travel",
    answer: "Patagonia",
    emojis: "🏔️ 🐧 🧊 🇦🇷",
    acceptableAnswers: ["patagonia"],
    typeHint: "✈️ Category: Places & Travel (Wild southern tip of South America)",
    hint: "Sparsely populated region spanning Argentina and Chile known for glaciers, peaks, and penguins."
  },
  {
    id: "plc-cartagena",
    category: "Places & Travel",
    answer: "Cartagena",
    emojis: "🏰 🌴 🇨🇴 🌊",
    acceptableAnswers: ["cartagena", "cartagena de indias"],
    typeHint: "✈️ Category: Places & Travel (Historic walled Caribbean city in Colombia)",
    hint: "Colonial port city famous for its colorful bougainvillea balconies and cobblestone streets."
  },
  {
    id: "plc-chichenitza",
    category: "Places & Travel",
    answer: "Chichén Itzá",
    emojis: "🔺 🏛️ 🇲🇽 ☀️",
    acceptableAnswers: ["chichen itza", "chichén itzá"],
    typeHint: "✈️ Category: Places & Travel (Mayan step-pyramid temple in Yucatán)",
    hint: "Ancient Maya city home to the towering El Castillo pyramid."
  },
  {
    id: "plc-newyork",
    category: "Places & Travel",
    answer: "New York",
    emojis: "🗽 🚕 🍎 🌃",
    acceptableAnswers: ["new york", "nyc", "new york city", "nueva york", "the big apple"],
    typeHint: "✈️ Category: Places & Travel (The Big Apple bustling metropolis)",
    hint: "Home to Times Square, yellow cabs, Broadway, and Central Park."
  },
  {
    id: "plc-toronto",
    category: "Places & Travel",
    answer: "Toronto",
    emojis: "🇨🇦 🗼 🏒 🏙️",
    acceptableAnswers: ["toronto"],
    typeHint: "✈️ Category: Places & Travel (Canada's largest city featuring the CN Tower)",
    hint: "Ontario capital sitting on Lake Ontario with hockey culture and diverse neighborhoods."
  },
  {
    id: "plc-hollywood",
    category: "Places & Travel",
    answer: "Hollywood",
    emojis: "🎬 ⭐ 🌴 🇺🇸",
    acceptableAnswers: ["hollywood"],
    typeHint: "✈️ Category: Places & Travel (The cinema entertainment capital of Los Angeles)",
    hint: "Famous hillside sign, Walk of Fame stars, and major movie studios."
  },
  {
    id: "plc-riodejaneiro",
    category: "Places & Travel",
    answer: "Rio de Janeiro",
    emojis: "🇧🇷 🏖️ 🎭 ⛰️",
    acceptableAnswers: ["rio de janeiro", "rio"],
    typeHint: "✈️ Category: Places & Travel (Brazilian coastal city with Christ the Redeemer)",
    hint: "Copacabana beach, Sugarloaf Mountain, and vibrant Carnival samba parades."
  },
  {
    id: "plc-egypt",
    category: "Places & Travel",
    answer: "Egypt",
    emojis: "🐪 🏜️ 🔺 🧟‍♂️",
    acceptableAnswers: ["egypt", "egipto"],
    typeHint: "✈️ Category: Places & Travel (Northeastern African nation along the Nile)",
    hint: "Land of pharaohs, mummies, the Nile River, and Luxor temples."
  },
  {
    id: "plc-eiffeltower",
    category: "Places & Travel",
    answer: "Eiffel Tower",
    emojis: "🗼 🇫🇷 🥖 🍷",
    acceptableAnswers: ["eiffel tower", "tour eiffel", "paris"],
    typeHint: "✈️ Category: Places & Travel (Iconic iron lattice tower in Paris)",
    hint: "Gustave Eiffel's masterpiece landmark on the Champ de Mars."
  },
  {
    id: "plc-niagarafalls",
    category: "Places & Travel",
    answer: "Niagara Falls",
    emojis: "💦 🌊 🇨🇦 🌈",
    acceptableAnswers: ["niagara falls", "niagara"],
    typeHint: "✈️ Category: Places & Travel (Massive waterfalls bordering US and Canada)",
    hint: "Horseshoe Falls and the Maid of the Mist tour boat."
  },
  {
    id: "plc-statueofliberty",
    category: "Places & Travel",
    answer: "Statue of Liberty",
    emojis: "🗽 🇺🇸 🔥 🌊",
    acceptableAnswers: ["statue of liberty", "liberty island"],
    typeHint: "✈️ Category: Places & Travel (Colossal copper sculpture in New York Harbor)",
    hint: "Lady Liberty holding a torch welcoming immigrants to America."
  },
  {
    id: "plc-machupicchu",
    category: "Places & Travel",
    answer: "Machu Picchu",
    emojis: "⛰️ 🦙 🏛️ 🇵🇪",
    acceptableAnswers: ["machu picchu", "machupicchu"],
    typeHint: "✈️ Category: Places & Travel (Incan mountain citadel in the Peruvian Andes)",
    hint: "15th-century Lost City of the Incas surrounded by cloud forests."
  },
  {
    id: "plc-disneyworld",
    category: "Places & Travel",
    answer: "Disney World",
    emojis: "🏰 🐭 🎢 🎆",
    acceptableAnswers: ["disney world", "disneyland", "walt disney world"],
    typeHint: "✈️ Category: Places & Travel (The Most Magical theme park resort in Orlando)",
    hint: "Cinderella Castle, Space Mountain, and fireworks shows."
  },
  {
    id: "plc-lasvegas",
    category: "Places & Travel",
    answer: "Las Vegas",
    emojis: "🎰 🎲 🌃 💸",
    acceptableAnswers: ["las vegas", "vegas"],
    typeHint: "✈️ Category: Places & Travel (Neon casino capital of Nevada)",
    hint: "The Vegas Strip, Bellagio fountains, 24-hour casinos, and dazzling shows."
  },
  {
    id: "plc-cancun",
    category: "Places & Travel",
    answer: "Cancún",
    emojis: "🏖️ 🌴 🇲🇽 ☀️",
    acceptableAnswers: ["cancun", "cancún"],
    typeHint: "✈️ Category: Places & Travel (Mexican turquoise beach resort in Quintana Roo)",
    hint: "Yucatán resort city famous for all-inclusive resorts and Caribbean beaches."
  },
  {
    id: "plc-buenosaires",
    category: "Places & Travel",
    answer: "Buenos Aires",
    emojis: "🇦🇷 🕺 🥩 🏙️",
    acceptableAnswers: ["buenos aires"],
    typeHint: "✈️ Category: Places & Travel (Argentine cosmopolitan capital of tango)",
    hint: "Paris of South America with European architecture and steakhouses."
  },

  // ==========================================
  // 💼 EVERYDAY LIFE & WORK
  // ==========================================
  {
    id: "wrk-deadline",
    category: "Everyday Life & Work",
    answer: "Deadline",
    emojis: "⏰ 🔥 💻 😰",
    acceptableAnswers: ["deadline", "fecha limite", "due date"],
    typeHint: "💼 Category: Everyday Life & Work (Approaching project submission time)",
    hint: "The looming cut-off time when software or assignments must be submitted."
  },
  {
    id: "wrk-youreonmute",
    category: "Everyday Life & Work",
    answer: "You're on Mute",
    emojis: "🎤 🚫 🗣️ 😅",
    acceptableAnswers: ["you're on mute", "you are on mute", "your on mute", "on mute", "mute"],
    typeHint: "💼 Category: Everyday Life & Work (Remote meeting phrase we all say)",
    hint: "When someone speaks enthusiastically in a video call while their mic is silenced."
  },
  {
    id: "wrk-weekend",
    category: "Everyday Life & Work",
    answer: "Weekend",
    emojis: "🛋️ 😎 🍕 📅",
    acceptableAnswers: ["weekend", "fin de semana", "the weekend"],
    typeHint: "💼 Category: Everyday Life & Work (Saturday and Sunday freedom)",
    hint: "Two blessed days of rest, pizza, sleeping in, and closing your work laptop."
  },
  {
    id: "wrk-vacation",
    category: "Everyday Life & Work",
    answer: "Vacation",
    emojis: "🏖️ ✈️ 🧳 😎",
    acceptableAnswers: ["vacation", "vacations", "vacaciones", "holiday", "pto"],
    typeHint: "💼 Category: Everyday Life & Work (Time off travelling or relaxing)",
    hint: "Packing your luggage, boarding a plane, and turning on your auto-reply."
  },
  {
    id: "wrk-wifidown",
    category: "Everyday Life & Work",
    answer: "Wi-Fi Down",
    emojis: "📶 ❌ 💻 😭",
    acceptableAnswers: ["wi-fi down", "wifi down", "no wifi", "no internet", "sin wifi", "internet down"],
    typeHint: "💼 Category: Everyday Life & Work (Remote worker's worst digital nightmare)",
    hint: "When the router cuts out in the middle of an important presentation."
  },
  {
    id: "wrk-outofoffice",
    category: "Everyday Life & Work",
    answer: "Out of Office",
    emojis: "🚫 🏢 🌴 📧",
    acceptableAnswers: ["out of office", "ooo", "fuera de la oficina"],
    typeHint: "💼 Category: Everyday Life & Work (Email auto-responder status)",
    hint: "'I am currently away with limited access to email until Monday.'"
  },
  {
    id: "wrk-promotion",
    category: "Everyday Life & Work",
    answer: "Promotion",
    emojis: "📈 💼 🎉 💵",
    acceptableAnswers: ["promotion", "job promotion", "ascenso"],
    typeHint: "💼 Category: Everyday Life & Work (Advancing to a higher rank with a raise)",
    hint: "Moving from junior to senior with a celebration and bigger paycheck."
  },
  {
    id: "wrk-gym",
    category: "Everyday Life & Work",
    answer: "Gym",
    emojis: "🏋️‍♂️ 💪 😓 🎧",
    acceptableAnswers: ["gym", "workout", "fitness", "gimnasio"],
    typeHint: "💼 Category: Everyday Life & Work (Exercise fitness routine with weights)",
    hint: "Lifting dumbbells, running on treadmills, and sweating to your workout playlist."
  },
  {
    id: "wrk-netflixandchill",
    category: "Everyday Life & Work",
    answer: "Netflix and Chill",
    emojis: "📺 🛋️ 🍿 😴",
    acceptableAnswers: ["netflix and chill", "netflix"],
    typeHint: "💼 Category: Everyday Life & Work (Casual evening streaming on the couch)",
    hint: "Binge-watching episodes on the sofa with a bowl of popcorn."
  },
  {
    id: "wrk-wedding",
    category: "Everyday Life & Work",
    answer: "Wedding",
    emojis: "💍 👰 🤵 🎉",
    acceptableAnswers: ["wedding", "boda", "matrimonio"],
    typeHint: "💼 Category: Everyday Life & Work (Ceremony uniting two people in marriage)",
    hint: "Exchange of rings, wedding dress, suit, vows, and champagne reception."
  },
  {
    id: "wrk-newyearseve",
    category: "Everyday Life & Work",
    answer: "New Year's Eve",
    emojis: "🎆 🥂 🕛 🎉",
    acceptableAnswers: ["new year's eve", "new years eve", "new year", "ano nuevo", "año nuevo"],
    typeHint: "💼 Category: Everyday Life & Work (December 31st midnight countdown)",
    hint: "Popping champagne when the clock strikes midnight and fireworks ignite."
  },
  {
    id: "wrk-gchat",
    category: "Everyday Life & Work",
    answer: "Google Chat Notification",
    emojis: "💬 🔔 📱 😩",
    acceptableAnswers: ["google chat notification", "google chat", "chat notification", "gchat"],
    typeHint: "💼 Category: Everyday Life & Work (Workplace messaging ping on your phone)",
    hint: "The distinctive chime of a coworker sending a message when you just sat down."
  },
  {
    id: "wrk-gmeet",
    category: "Everyday Life & Work",
    answer: "Google Meet",
    emojis: "📹 👥 💻 🟢",
    acceptableAnswers: ["google meet", "meet", "gmeet"],
    typeHint: "💼 Category: Everyday Life & Work (Google's video meeting platform)",
    hint: "Clicking the green camera link on your calendar to jump into a team video sync."
  },
  {
    id: "wrk-gcalendar",
    category: "Everyday Life & Work",
    answer: "Google Calendar Invite",
    emojis: "📅 📩 🔔 😬",
    acceptableAnswers: ["google calendar invite", "google calendar", "calendar invite", "calendar"],
    typeHint: "💼 Category: Everyday Life & Work (Meeting invitation popping into your inbox)",
    hint: "That dreaded pop-up asking you to Yes / Maybe / No a Friday 4:30 PM meeting."
  },
  {
    id: "wrk-gdoc",
    category: "Everyday Life & Work",
    answer: "Shared Google Doc",
    emojis: "📄 👥 ✍️ 👀",
    acceptableAnswers: ["shared google doc", "google doc", "google docs", "shared doc"],
    typeHint: "💼 Category: Everyday Life & Work (Real-time collaborative writing doc)",
    hint: "Watching multiple colorful anonymous animal cursors typing at the same time."
  },
  {
    id: "wrk-replyall",
    category: "Everyday Life & Work",
    answer: "Reply All",
    emojis: "📧 👥 ↩️ 😱",
    acceptableAnswers: ["reply all", "responder a todos"],
    typeHint: "💼 Category: Everyday Life & Work (Email mistake sent to the entire company)",
    hint: "Accidentally clicking the wrong email button and emailing all 500 coworkers."
  },
  {
    id: "wrk-cameraoff",
    category: "Everyday Life & Work",
    answer: "Camera Off",
    emojis: "📹 🚫 😴 🛏️",
    acceptableAnswers: ["camera off", "camara apagada", "webcam off"],
    typeHint: "💼 Category: Everyday Life & Work (Attending a meeting without video)",
    hint: "Disabling your webcam because you're still in bed or haven't brushed your hair."
  },
  {
    id: "wrk-screensharefail",
    category: "Everyday Life & Work",
    answer: "Screen Share Fail",
    emojis: "🖥️ 🙋 ❓ 😳",
    acceptableAnswers: ["screen share fail", "screen share", "can you see my screen", "sharing screen"],
    typeHint: "💼 Category: Everyday Life & Work ('Can everyone see my screen?')",
    hint: "Accidentally sharing your private tabs or personal messages to 40 teammates."
  },
  {
    id: "wrk-timezones",
    category: "Everyday Life & Work",
    answer: "Time Zones",
    emojis: "🌎 🕐 🕔 🕘",
    acceptableAnswers: ["time zones", "time zone", "zona horaria", "timezones"],
    typeHint: "💼 Category: Everyday Life & Work (Coordinating across global remote teams)",
    hint: "When it's 9 AM for you, 2 PM for London, and midnight for Tokyo."
  },
  {
    id: "wrk-videocall",
    category: "Everyday Life & Work",
    answer: "Video Call",
    emojis: "💻 📹 🔇 🙋",
    acceptableAnswers: ["video call", "zoom", "zoom call", "teams call"],
    typeHint: "💼 Category: Everyday Life & Work (Remote team conference call)",
    hint: "Brady Bunch grid of teammates with virtual backgrounds."
  },
  {
    id: "wrk-mondaymorning",
    category: "Everyday Life & Work",
    answer: "Monday Morning",
    emojis: "😴 ⏰ ☕ 📅",
    acceptableAnswers: ["monday morning", "monday", "start of the week"],
    typeHint: "💼 Category: Everyday Life & Work (First waking hours of the work week)",
    hint: "Alarm blaring, groggy eyes, and desperate coffee refills."
  },
  {
    id: "wrk-coffeebreak",
    category: "Everyday Life & Work",
    answer: "Coffee Break",
    emojis: "☕ 👥 💬 ⏸️",
    acceptableAnswers: ["coffee break", "fika"],
    typeHint: "💼 Category: Everyday Life & Work (Short pause from work to recharge)",
    hint: "Stepping away from the keyboard to chat with coworkers over a cup of java."
  },
  {
    id: "wrk-workingfromhome",
    category: "Everyday Life & Work",
    answer: "Working From Home",
    emojis: "🏠 💻 🛋️ ☕",
    acceptableAnswers: ["working from home", "work from home", "wfh", "remote work"],
    typeHint: "💼 Category: Everyday Life & Work (Remote work from your apartment or house)",
    hint: "Commuting zero minutes from your bed to your laptop."
  },
  {
    id: "wrk-happyhour",
    category: "Everyday Life & Work",
    answer: "Happy Hour",
    emojis: "🍻 🕔 🎉 👥",
    acceptableAnswers: ["happy hour", "after work drinks"],
    typeHint: "💼 Category: Everyday Life & Work (5 PM team drinks and socializing)",
    hint: "Unwinding after work on Friday with colleagues."
  },
  {
    id: "wrk-teammeeting",
    category: "Everyday Life & Work",
    answer: "Team Meeting",
    emojis: "👥 📊 🗣️ ⏰",
    acceptableAnswers: ["team meeting", "meeting", "sync", "standup"],
    typeHint: "💼 Category: Everyday Life & Work (Workplace gathering to review updates)",
    hint: "Going over slides, deliverables, and action items."
  },
  {
    id: "wrk-payday",
    category: "Everyday Life & Work",
    answer: "Pay Day",
    emojis: "💵 📅 🎉 💳",
    acceptableAnswers: ["pay day", "payday"],
    typeHint: "💼 Category: Everyday Life & Work (When your salary direct deposit lands)",
    hint: "The happiest calendar notification of the month."
  },
  {
    id: "wrk-trafficjam",
    category: "Everyday Life & Work",
    answer: "Traffic Jam",
    emojis: "🚗 🚗 🚗 😤",
    acceptableAnswers: ["traffic jam", "traffic", "rush hour"],
    typeHint: "💼 Category: Everyday Life & Work (Commuter gridlock on the highway)",
    hint: "Stuck bumper-to-bumper honking during 5 PM rush hour."
  },
  {
    id: "wrk-emailoverload",
    category: "Everyday Life & Work",
    answer: "Email Overload",
    emojis: "📧 📧 📧 😵",
    acceptableAnswers: ["email overload", "inbox full", "inbox zero"],
    typeHint: "💼 Category: Everyday Life & Work (Drowning in 300+ unread messages)",
    hint: "When you return from vacation to an exploding inbox."
  },
  {
    id: "wrk-birthdayparty",
    category: "Everyday Life & Work",
    answer: "Birthday Party",
    emojis: "🎂 🎈 🎁 🎉",
    acceptableAnswers: ["birthday party", "birthday", "bday"],
    typeHint: "💼 Category: Everyday Life & Work (Annual celebration with cake and candles)",
    hint: "Singing Happy Birthday, unwrapping presents, and eating cake."
  },

  // ==========================================
  // ⚽ SPORTS
  // ==========================================
  {
    id: "spt-golf",
    category: "Sports",
    answer: "Golf",
    emojis: "⛳ 🏌️‍♂️ 🌳 🕶️",
    acceptableAnswers: ["golf"],
    typeHint: "⚽ Category: Sports (Club and ball sport on an 18-hole green)",
    hint: "Players hit balls into holes with as few strokes as possible at the Masters."
  },
  {
    id: "spt-soccerpenalty",
    category: "Sports",
    answer: "Soccer Penalty",
    emojis: "⚽ 🥅 😬 🦶",
    acceptableAnswers: ["soccer penalty", "penalty", "penal", "penalty kick", "penales"],
    typeHint: "⚽ Category: Sports (High-pressure spot kick in football)",
    hint: "One striker vs one goalkeeper from 12 yards out to decide the match."
  },
  {
    id: "spt-swimming",
    category: "Sports",
    answer: "Swimming",
    emojis: "🏊‍♂️ 🌊 🥽 🏅",
    acceptableAnswers: ["swimming", "natacion", "natación"],
    typeHint: "⚽ Category: Sports (Aquatic racing across lanes in a pool)",
    hint: "Freestyle, breaststroke, backstroke, and butterfly in Olympic racing lanes."
  },
  {
    id: "spt-baseball",
    category: "Sports",
    answer: "Baseball",
    emojis: "⚾ 🧢 🏟️ 🌭",
    acceptableAnswers: ["baseball", "beisbol"],
    typeHint: "⚽ Category: Sports (Bat-and-ball game played across 4 bases)",
    hint: "Nine innings, home runs, pitcher's mound, and 7th-inning stretch in MLB."
  },
  {
    id: "spt-surfing",
    category: "Sports",
    answer: "Surfing",
    emojis: "🏄‍♂️ 🌊 ☀️ 🏖️",
    acceptableAnswers: ["surfing", "surf"],
    typeHint: "⚽ Category: Sports (Riding ocean waves standing on a board)",
    hint: "Paddling into breaking ocean swells and catching barrels."
  },
  {
    id: "spt-cycling",
    category: "Sports",
    answer: "Cycling",
    emojis: "🚴‍♂️ 🏔️ 🇫🇷 🏆",
    acceptableAnswers: ["cycling", "tour de france", "ciclismo"],
    typeHint: "⚽ Category: Sports (Bicycle road racing through mountain passes)",
    hint: "Riders in the peloton wearing the yellow jersey in the Tour de France."
  },
  {
    id: "spt-copaamerica",
    category: "Sports",
    answer: "Copa América",
    emojis: "🏆 ⚽ 🌎 🇦🇷",
    acceptableAnswers: ["copa america", "copa américa"],
    typeHint: "⚽ Category: Sports (Oldest international soccer championship)",
    hint: "South American continental football tournament featuring Argentina and Brazil."
  },
  {
    id: "spt-rugby",
    category: "Sports",
    answer: "Rugby",
    emojis: "🏉 💪 🇳🇿 🏟️",
    acceptableAnswers: ["rugby", "all blacks"],
    typeHint: "⚽ Category: Sports (Oval-ball contact team sport with scrums and tries)",
    hint: "New Zealand All Blacks performing the Haka before a clash."
  },
  {
    id: "spt-skiing",
    category: "Sports",
    answer: "Skiing",
    emojis: "⛷️ 🏔️ ❄️ 🧣",
    acceptableAnswers: ["skiing", "ski", "esqui"],
    typeHint: "⚽ Category: Sports (Sliding down snow-covered slopes on skis)",
    hint: "Winter alpine racing down powdered mountain courses."
  },
  {
    id: "spt-luchalibre",
    category: "Sports",
    answer: "Lucha Libre",
    emojis: "🤼 🎭 🇲🇽 💥",
    acceptableAnswers: ["lucha libre", "wrestling", "mexican wrestling"],
    typeHint: "⚽ Category: Sports (Mexican masked professional wrestling)",
    hint: "Colorful masked luchadores performing acrobatic high-flying maneuvers."
  },
  {
    id: "spt-worldcup",
    category: "Sports",
    answer: "World Cup",
    emojis: "🏆 ⚽ 🌍 🥅",
    acceptableAnswers: ["world cup", "fifa world cup", "copa mundial"],
    typeHint: "⚽ Category: Sports (Global quadrennial football championship)",
    hint: "National teams competing for the golden FIFA trophy."
  },
  {
    id: "spt-hockey",
    category: "Sports",
    answer: "Hockey",
    emojis: "🏒 🥅 🇨🇦 🧊",
    acceptableAnswers: ["hockey", "ice hockey", "nhl"],
    typeHint: "⚽ Category: Sports (Fast-paced team sport on ice with pucks)",
    hint: "Skating on an ice rink shooting a vulcanized rubber puck into a net."
  },
  {
    id: "spt-basketball",
    category: "Sports",
    answer: "Basketball",
    emojis: "🏀 🗑️ ⛹️‍♂️ 🏟️",
    acceptableAnswers: ["basketball", "nba"],
    typeHint: "⚽ Category: Sports (Hoop-shooting court sport with 5 players)",
    hint: "Dribbling and slam-dunking an orange ball through a 10-foot rim."
  },
  {
    id: "spt-formula1",
    category: "Sports",
    answer: "Formula 1",
    emojis: "🏎️ 🏁 🏆 🔧",
    acceptableAnswers: ["formula 1", "formula one", "f1", "grand prix"],
    typeHint: "⚽ Category: Sports (Premier open-wheel motorsport racing)",
    hint: "Pit stops, checkered flags, and Grand Prix circuits across the globe."
  },
  {
    id: "spt-tennis",
    category: "Sports",
    answer: "Tennis",
    emojis: "🎾 🏟️ 👟 🏆",
    acceptableAnswers: ["tennis", "wimbledon"],
    typeHint: "⚽ Category: Sports (Racket sport played on grass, clay, or hardcourt)",
    hint: "Serving aces across the net at Wimbledon, Roland Garros, or the US Open."
  },
  {
    id: "spt-superbowl",
    category: "Sports",
    answer: "Super Bowl",
    emojis: "🏈 🏆 🎤 🇺🇸",
    acceptableAnswers: ["super bowl", "superbowl", "nfl"],
    typeHint: "⚽ Category: Sports (NFL championship Sunday extravaganza)",
    hint: "American football title game with epic halftime concerts and commercials."
  },
  {
    id: "spt-boxing",
    category: "Sports",
    answer: "Boxing",
    emojis: "🥊 🔔 🥇 🏆",
    acceptableAnswers: ["boxing", "fight"],
    typeHint: "⚽ Category: Sports (Combat sport inside the squared circle)",
    hint: "Two glove-wearing fighters going 12 rounds in a boxing ring."
  },
  {
    id: "spt-olympics",
    category: "Sports",
    answer: "Olympics",
    emojis: "🏅 🔥 ⭕ 🌍",
    acceptableAnswers: ["olympics", "olympic games", "summer olympics", "winter olympics"],
    typeHint: "⚽ Category: Sports (Global quadrennial celebration of sports)",
    hint: "Five interlocking colored rings and the Olympic flame lighting up the stadium."
  }
];

// Helper to filter puzzles by category
function getPuzzles(filterCategory = "All") {
  if (!filterCategory || filterCategory === "All") {
    return [...PUZZLE_DATABASE];
  }
  return PUZZLE_DATABASE.filter(p => p.category.toLowerCase() === filterCategory.toLowerCase());
}
