'use strict';
// Dated, manually verified classroom snapshot. No background requests.
const seasonSnapshot={
  "season": "2026/27",
  "competition": "Premier League",
  "team": "Arsenal Men",
  "checked": "2026-11-19",
  "through": "2026-11-08",
  "position": 1,
  "played": 10,
  "wins": 9,
  "draws": 0,
  "losses": 1,
  "goalsFor": 15,
  "goalsAgainst": 5,
  "points": 27,
  "nextOpponent": "Newcastle United",
  "lastResult": "Arsenal 1–0 Hull City",
  "lastDate": "7 November 2026",
  "source": "https://www.premierleague.com/en/tables/premier-league/2026-27",
  "verification": "Official combined Home & Away table observed in Chrome on 19 November 2026. Snapshot, not a live feed."
};
const cinemaFilms=[
  {
    "id": "merino-trailer",
    "title": "A Champion’s Story",
    "subtitle": "Mikel Merino · resilience",
    "art": "merino",
    "duration": "1:01",
    "categories": [
      "shorts",
      "stories"
    ],
    "publisher": "Arsenal",
    "url": "https://www.youtube.com/watch?v=KF9XJtA5e3k",
    "description": "A one-minute documentary trailer about Merino working back from injury. The full documentary is a separate, longer film.",
    "watch": "Look for a moment of preparation or perseverance. How can we encourage someone who is finding a task hard?",
    "note": "Official trailer. Includes injury/recovery themes; preview the full clip and its audio.",
    "image": "art/players/mikel-merino.jpg",
    "imageAlt": "Licensed archive portrait of Mikel Merino",
    "artNote": "Archive portrait · not a video still"
  },
  {
    "id": "women-trailer",
    "title": "Only In The Land",
    "subtitle": "Arsenal Women · belief",
    "art": "women",
    "duration": "1:49",
    "categories": [
      "shorts",
      "stories"
    ],
    "publisher": "Arsenal",
    "url": "https://www.youtube.com/watch?v=mHeiihnFKJI",
    "description": "The official trailer for Arsenal Women’s documentary about their 2024/25 European journey. This is the short trailer, not an episode.",
    "watch": "Find a moment when teammates support each other. What would you say to your own team?",
    "note": "Official documentary trailer. Dressing-room footage and music need teacher review.",
    "image": "art/women-champions.jpg",
    "imageAlt": "Arsenal Women celebrating their 2019 league title",
    "artNote": "2019 archive photo · not a video still"
  },
  {
    "id": "state-of-mind",
    "title": "The Arsenal State of Mind",
    "subtitle": "Animation · North London",
    "art": "stadium",
    "duration": "1:17",
    "categories": [
      "shorts"
    ],
    "publisher": "Nexus Studios / Arsenal",
    "url": "https://nexusstudios.com/work/fx-goby-arsenal-state-of-mind/",
    "description": "A short film that blends real North London streets with hand-drawn animation. Made by Nexus Studios for Arsenal’s 2026/27 third-kit campaign.",
    "watch": "Spot one real place and one animated detail. What makes the people feel like one community?",
    "note": "A kit advertisement with music and product promotion. The producer’s page can start its video automatically; preview lyrics and footage before projection.",
    "image": "art/emirates-exterior.jpg",
    "imageAlt": "Emirates Stadium exterior beneath a London sky",
    "artNote": "Stadium archive photo · not a video still"
  },
  {
    "id": "men-hull",
    "title": "Arsenal 1–0 Hull City",
    "subtitle": "Men · 7 November 2026",
    "art": "men",
    "duration": "10:00",
    "categories": [
      "highlights"
    ],
    "publisher": "Arsenal",
    "url": "https://www.arsenal.com/media/video/playlist/90238",
    "description": "Extended highlights from the latest men’s league result in this snapshot. Choose a short excerpt during teacher preview.",
    "watch": "Watch the movement before a chance. Who helps the attack without taking the shot?",
    "note": "The club page requires an adult Arsenal account. Duration verified in the club catalogue; playback behind sign-in was not checked. No student account is needed here.",
    "image": "art/emirates-interior.jpg",
    "imageAlt": "The pitch and red stands at Emirates Stadium",
    "artNote": "Stadium archive photo · not a video still"
  },
  {
    "id": "women-london-city",
    "title": "Arsenal Women 1–1 London City",
    "subtitle": "Women · bitesize highlights",
    "art": "women",
    "duration": "2:00",
    "categories": [
      "highlights"
    ],
    "publisher": "Arsenal",
    "url": "https://www.arsenal.com/media/video/playlist/90563",
    "description": "A two-minute official highlights page, listed in Arsenal’s current video catalogue.",
    "watch": "Spot a pass, a save or a smart run. Explain how that action helps the team.",
    "note": "Teacher access check required on the club site; an adult account may be needed. Duration verified in the catalogue.",
    "image": "art/women-champions.jpg",
    "imageAlt": "Arsenal Women in an archive team celebration",
    "artNote": "2019 archive photo · not a video still"
  },
  {
    "id": "men-best-goals",
    "title": "Arsenal Men: Best Goals",
    "subtitle": "Archive · 2024/25",
    "art": "men",
    "duration": "Choose an excerpt",
    "categories": [
      "highlights",
      "archive"
    ],
    "publisher": "Arsenal",
    "url": "https://www.youtube.com/watch?v=KqXuiKrrIac",
    "description": "The retained official 2024/25 goals compilation. This is an archive selection, separate from the current season.",
    "watch": "Choose one goal and identify the teamwork that made it possible.",
    "note": "Retained classroom source. Check access, footage and audio before showing an excerpt.",
    "image": "art/emirates-interior.jpg",
    "imageAlt": "Emirates Stadium in an archive photograph",
    "artNote": "Stadium archive photo · not a video still"
  },
  {
    "id": "women-goals",
    "title": "Arsenal Women: The Goals",
    "subtitle": "Archive · 2024/25",
    "art": "women",
    "duration": "Choose an excerpt",
    "categories": [
      "highlights",
      "archive"
    ],
    "publisher": "Arsenal",
    "url": "https://www.arsenal.com/news/enjoy-all-our-wsl-goals-from-202425-aEgAh7n2WU6W",
    "description": "The retained official collection of all 62 league goals from 2024/25. Choose a short teacher-reviewed excerpt.",
    "watch": "Who creates space for a teammate? Show the movement with your hands.",
    "note": "Retained club source. Adult sign-in may be needed; preview the exact excerpt.",
    "image": "art/women-champions.jpg",
    "imageAlt": "An archive Arsenal Women team celebration",
    "artNote": "2019 archive photo · not a video still"
  },
  {
    "id": "wenger-legacy",
    "title": "Wenger: A Lasting Legacy",
    "subtitle": "The visionary · leadership",
    "art": "wenger",
    "duration": "4:30",
    "categories": [
      "stories",
      "archive"
    ],
    "publisher": "Premier League",
    "url": "https://www.youtube.com/watch?v=xtM3k5NWUwQ",
    "description": "The retained Premier League Hall of Fame film about Wenger’s teams, ideas and legacy.",
    "watch": "Name one way a manager helps others improve. How can you try that today?",
    "note": "Previously verified duration. Review exact footage and audio before class.",
    "image": "art/wenger.jpg",
    "imageAlt": "Arsène Wenger in a licensed archive portrait",
    "artNote": "Archive portrait · not a video still"
  }
];
