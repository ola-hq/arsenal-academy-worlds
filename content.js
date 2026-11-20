// Classroom content retained from the original experience.
const story=[
['🔴⚪','WELCOME TO ARSENAL','A football club from London, England. Founded in 1886.','Who here likes soccer? Today you get to discover my favorite team!'],
['🏟️','WELCOME TO NORTH LONDON','The Emirates Stadium is Arsenal’s home. Thousands of supporters cheer for Arsenal.','Imagine a whole stadium cheering for the same team!'],
['🏆','THE INVINCIBLES','2003–04: 38 Premier League games. 26 wins, 12 draws. ZERO losses.','Nobody beat Arsenal in the league that season. That’s why they were called the Invincibles.'],
['🏆','THE TROPHY CABINET','Arsenal have a proud history of league titles, FA Cups, and unforgettable victories.','Which trophies do you think a football club can win? Let’s explore their history.'],['👑','A LEGENDARY MANAGER','Arsène Wenger led the Invincibles and won three Premier League titles.','Wenger helped his team become great through preparation and teamwork.'],
['🏅','EUROPEAN CHAMPIONS TWICE','Arsenal Women won Europe in 2007 and again in 2025, beating Barcelona 1–0.','Their 2007 title was called the UEFA Women’s Cup. Their 2025 title was the Champions League!'],
['🧤','EVERY PLAYER MATTERS','Goalkeepers. Defenders. Midfielders. Forwards. Substitutes. Managers. Every contribution counts.','You can play, plan, encourage or help others improve. You don’t have to be on the pitch to belong or lead.'],
['🎬','WATCH THE MAGIC','See the skills. Cheer for the goals. Find someone who inspires you.','Now we watch some highlights. Keep an eye out for a player you like!'],
['🃏','YOUR PLAYER YOUR STORY','Meet Saka, Dowman and Salmon: three Hale End journeys, with different ways to help a team.','Hale End is Arsenal’s academy. Discover each journey, then connect practice, patience and encouragement to our own team. You might like a card for its skills, position, country, or design.'],
['🎲','DRAFT ORDER','Every student gets a fair chance. We will reveal our selection order one at a time.','Everyone gets to choose a card. The order is random, and every player matters.'],
['🧭','WHAT MAKES A LEADER?','Tony Adams: loyalty and courage. Sol Campbell: strength and composure. Arsène Wenger: vision and belief.','Great captains help others, stay calm, and make their team better.'],
['🛡️','THE CAPTAIN’S VAULT','Six badges. Three Arsenal legends. Six stories of leadership.','We have a mystery draw for our six team captains!']
];
const players=[
['William Saliba','men','🇫🇷','France','Defender','The Calm Wall','Reads the game and stays cool under pressure.','France international'],
['David Raya','men','🇪🇸','Spain','Goalkeeper','The Shot Stopper','Fast reflexes and smart passes start attacks.','Premier League Golden Glove winner'],
['Gabriel Magalhães','men','🇧🇷','Brazil','Defender','The Powerhouse','Strong tackles and powerful headers.','Brazil international'],
['Jurriën Timber','men','🇳🇱','Netherlands','Defender','The All-Rounder','Comfortable in different defensive roles.','Netherlands international'],
['Riccardo Calafiori','men','🇮🇹','Italy','Defender','The Adventurer','An energetic defender who likes to move forward.','Italy international'],
['Martin Ødegaard','men','🇳🇴','Norway','Midfielder','The Playmaker','Creates chances with clever passes.','Arsenal captain'],
['Declan Rice','men','ENG','England','Midfielder','The Engine','Wins the ball and drives the team forward.','England international'],
['Mikel Merino','men','🇪🇸','Spain','Midfielder','The Team Player','A midfielder who also stepped up at striker. Two late goals off the bench beat Leicester in February 2025.','Euro 2024 winner'],
['Eberechi Eze','men','ENG','England','Attacker','The Magician','Dazzling dribbles and creative movement.','England international'],
['Kai Havertz','men','🇩🇪','Germany','Forward','The Clever Finisher','Finds space and plays multiple attacking roles.','Champions League winner'],
['Noni Madueke','men','ENG','England','Winger','The Trickster','Fast feet and skillful dribbling.','England international'],
['Viktor Gyökeres','men','🇸🇪','Sweden','Striker','The Goal Hunter','Power, speed and powerful finishing.','Sweden international'],
['Leandro Trossard','men','🇧🇪','Belgium','Forward','The Creative Finisher','Quick thinking around the penalty area.','Belgium international'],
['Kim Little','women','SCO','Scotland','Midfielder','The Captain','Leads with experience and precise passing.','2025 European club champion'],
['Steph Catley','women','🇦🇺','Australia','Defender','The Reliable One','Strong defense and excellent teamwork.','2025 European club champion'],
['Lotte Wubben-Moy','women','ENG','England','Defender','The Protector','Smart positioning and powerful defending.','2022 Euro winner'],
['Frida Maanum','women','🇳🇴','Norway','Midfielder','The Long-Shot Star','Energetic runs and powerful strikes.','2025 European club champion'],
['Mariona Caldentey','women','🇪🇸','Spain','Forward','The Creator','Clever movement and amazing passing.','2023 World Cup winner'],
['Chloe Kelly','women','ENG','England','Forward','The Big-Moment Star','Fearless attacking in important games.','2022 and 2025 Euro winner'],
['Stina Blackstenius','women','🇸🇪','Sweden','Striker','The Big-Game Scorer','Quick runs and decisive finishes.','2025 Champions League final winning goal'],
["Bukayo Saka", "men", "ENG", "England", "Winger", "The Chance Maker", "Creates chances with clever movement, passing and dribbling.", "England international"],
["Max Dowman", "men", "ENG", "England", "Midfielder", "The Brave Dribbler", "An academy talent who carries the ball forward and looks for a teammate.", "Arsenal academy pathway"],
["Smilla Holmberg", "women", "🇸🇪", "Sweden", "Defender", "The Right-Side Runner", "A right-back who helps defend and supports attacks down the right.", "Sweden international"],
["Marli Salmon", "men", "ENG", "England", "Defender", "The Calm Reader", "A young defender who reads the game and can play in the centre or at full-back.", "England youth international"]
];
const legends=[
['Tony Adams','The One-Club Legend','Adams spent his entire senior playing career with Arsenal. He represented loyalty and commitment.','Great leaders stick with their team.'],
['Tony Adams','Mr Arsenal','Adams became Arsenal captain at 21 and helped lead four league-title-winning teams.','You can be a leader even when you are young.'],
['Sol Campbell','The Invincible Defender','Campbell anchored the defense during the undefeated 2003–04 Premier League season.','Protecting and helping others makes a team stronger.'],
['Sol Campbell','The Big-Game Goalscorer','Campbell scored Arsenal’s goal in the 2006 Champions League final.','Anyone can have a big moment.'],
['Arsène Wenger','The Invincibles Architect','Wenger managed Arsenal through 38 unbeaten Premier League matches in 2003–04.','Preparation and teamwork make incredible things possible.'],
['Arsène Wenger','The Trophy-Winning Coach','Wenger served Arsenal for 22 years, winning three Premier League titles and seven FA Cups.','A great coach helps others become their best.']
];

// Dated milestones; classroom lessons are our interpretation, not player quotations.
const playerJourneys=[
  {
    "name": "Bukayo Saka",
    "shortName": "Saka",
    "headline": "From Hale End to a role model",
    "teaser": "A young learner became someone the next generation could look up to.",
    "steps": [
      [
        "The beginning",
        "Joined Arsenal’s Hale End academy as a child."
      ],
      [
        "The breakthrough",
        "Made his first-team debut at 17 in November 2018."
      ],
      [
        "Courage to try again",
        "A penalty was saved in the EURO 2020 final, played in 2021. At EURO 2024 he scored in England’s shoot-out win over Switzerland."
      ]
    ],
    "lesson": "Our team lesson: a difficult moment does not have to be the end of your story.",
    "question": "What could you say to a teammate who wants to try again?",
    "sources": [
      [
        "Arsenal: Saka’s academy journey and milestones",
        "https://www.arsenal.com/news/bukayo-saka-signs-new-long-term-contract-aFcin3f65ht4"
      ],
      [
        "UEFA: Saka’s response at EURO 2024",
        "https://www.uefa.com/uefaeuro/history/news/028f-1b4f3f996527-439d0321102a-1000--england-analysis-bukayo-saka-s-match-winning-performance/"
      ]
    ]
  },
  {
    "name": "Max Dowman",
    "shortName": "Dowman",
    "headline": "Small steps. A huge moment.",
    "teaser": "Years in the academy came before the record-breaking spotlight.",
    "steps": [
      [
        "Learning his craft",
        "Played for Arsenal’s under-18 team at just 13."
      ],
      [
        "A chance from the bench",
        "Made his Premier League debut against Leeds in August 2025, aged 15."
      ],
      [
        "A place in history",
        "Scored against Everton on 14 March 2026, aged 16 years and 73 days—the Premier League’s youngest goalscorer."
      ]
    ],
    "lesson": "Our team lesson: practise your skills and be ready to help when your turn comes.",
    "question": "What could you practise before your next chance?",
    "sources": [
      [
        "Premier League: Dowman’s academy and debut",
        "https://www.premierleague.com/en/news/4391363/who-is-15-year-old-max-dowman-after-arsenal-debut-in-premier-league-v-leeds-united"
      ],
      [
        "Premier League: goalscoring record",
        "https://www.premierleague.com/en/news/662064/records-players"
      ]
    ]
  },
  {
    "name": "Marli Salmon",
    "shortName": "Salmon",
    "headline": "Quiet work. A big opportunity.",
    "teaser": "A defender’s journey shows that helping the team goes beyond scoring.",
    "steps": [
      [
        "The beginning",
        "Joined Arsenal’s academy at nine in July 2019."
      ],
      [
        "Learning with the first team",
        "Joined the 2025 pre-season tour and played against AC Milan in Singapore."
      ],
      [
        "A European debut",
        "Came on against Club Brugge in December 2025, aged 16, for his first competitive senior appearance."
      ]
    ],
    "lesson": "Our team lesson: stay ready, communicate and notice how you can help.",
    "question": "How can you help a teammate without scoring a goal?",
    "sources": [
      [
        "Arsenal: Salmon’s academy journey and debut",
        "https://www.arsenal.com/news/marli-salmon-commits-his-future-to-arsenal-ag2Dg2K3ftAU"
      ]
    ]
  }
];
