// ===== GAMEGOU WEBSITE JS =====

const GAMES = [
  {
    id: 'top-football-manager',
    name: 'Top Football Manager',
    tagline: 'Build. Train. Dominate.',
    genre: 'Sports • Management • Strategy',
    rating: '3.9',
    badge: 'Licensed Jerseys',
    cardCta: 'Build the Club',
    cardFocus: 'Club Management',
    cardNote: 'Scout talent, set tactics and build a winning club.',
    cardNumber: '01',
    playStore: 'https://play.google.com/store/apps/details?id=com.gamegou.football',
    appStore: 'https://apps.apple.com/app/top-football-manager-2026/id1068396437',
    heroImage: 'assets/images/games/top-football-manager/top-football-manager-gamegou-realtime-3d-match-engine.webp',
    screenshots: [
      'assets/images/games/top-football-manager/top-football-manager-gamegou-develop-club-stadium.webp',
      'assets/images/games/top-football-manager/top-football-manager-gamegou-tactics-formation-attacking.webp',
      'assets/images/games/top-football-manager/top-football-manager-gamegou-manage-national-team.webp',
      'assets/images/games/top-football-manager/top-football-manager-gamegou-sign-players-transfer-market.webp',
      'assets/images/games/top-football-manager/top-football-manager-gamegou-league-standings-honor.webp',
    ],
    shortDesc: 'Full football club management sim. Scout players, set tactics, watch 3D live matches, and manage national teams.',
    description: `Do you dream of coaching a team of eleven soccer stars hungry to be champions? Top Football Manager puts sports fans like you in charge! Bid on and scout for premier players, build and train a team with special skills, test tactics and formations against real opponents from around the world, and watch the match in live 3D simulation.\n\nWith officially licensed jerseys from Premier League, La Liga, Bundesliga, and MLS, this is the most authentic football management experience on mobile.`,
    features: [
      { title: 'Scout and Sign Players', desc: 'Hunt for stars in the transfer market. Bid, recruit agents, or find young hopefuls with scouts.' },
      { title: 'Tactics and Formations', desc: 'Set mentality, attack direction, defensive line. React in real time to opponents.' },
      { title: 'Develop Your Club', desc: 'Build stadium, youth academy, hospital, utilities, and training ground facilities.' },
      { title: 'Manage the National Team', desc: 'Take charge of your nation and lead them to international glory.' },
    ],
    platform: 'Android and iOS',
    genre2: 'Sports / Management',
    size: '250 MB',
    updated: '2024',
  },
  {
    id: 'super-goal',
    name: 'Super Goal',
    tagline: 'Draw Your Path to Victory',
    genre: 'Sports • Casual • Offline',
    rating: '4.6',
    badge: 'Most Downloaded',
    cardCta: 'Draw the Shot',
    cardFocus: 'Draw to Score',
    cardNote: 'Creative one touch shots with 300M plus downloads.',
    cardNumber: '02',
    playStore: 'https://play.google.com/store/apps/details?id=com.soccer.football.kick',
    appStore: 'https://apps.apple.com/app/super-goal-fun-soccer-game/id1612182545',
    heroImage: 'assets/images/games/super-goal/super-goal-gamegou-beach-football-free-kick.webp',
    screenshots: [
      'assets/images/games/super-goal/super-goal-gamegou-penalty-shootout-stadium.webp',
      'assets/images/games/super-goal/super-goal-gamegou-cruise-ship-coins-football.webp',
      'assets/images/games/super-goal/super-goal-gamegou-neon-city-rooftop-soccer.webp',
      'assets/images/games/super-goal/super-goal-gamegou-snow-arena-winter-football.webp',
      'assets/images/games/super-goal/super-goal-gamegou-free-kick-wall-stadium.webp',
      'assets/images/games/super-goal/super-goal-gamegou-street-soccer-city-gameplay.webp',
      'assets/images/games/super-goal/super-goal-gamegou-beach-soccer-multiplayer.webp',
    ],
    shortDesc: "Draw a line to kick the ball. Gamegou's most downloaded game with 300 million installs. Play on beaches, rooftops, cruise ships and more.",
    description: `Draw a line to kick the ball. The direction and route of the ball are completely controlled by you. Use your wisdom to solve puzzles and score top notch goals!\n\nSuper Goal is Gamegou's most downloaded game with 300 million installs worldwide. It revolutionizes mobile soccer with its unique draw to kick mechanic. No complicated buttons, no confusing joysticks. Just pure, creative soccer action.`,
    features: [
      { title: 'Draw to Kick', desc: 'Simply draw a line on screen to map out the perfect trajectory for your shot.' },
      { title: 'Diverse Locations', desc: 'Play on beach, rooftop, cruise ship, snowy mountains, and many more unique venues.' },
      { title: 'Wild Ball Selection', desc: 'Football, basketball, tennis, volleyball, golf and even fruit and animal balls!' },
      { title: 'Fully Offline', desc: 'No internet required. Perfect for commutes, travel, or anywhere you want to play.' },
    ],
    platform: 'Android and iOS',
    genre2: 'Sports / Casual',
    size: '90 MB',
    updated: '2024',
  },
  {
    id: 'soccer-legend',
    name: 'Soccer Legend',
    tagline: 'From the Streets to the World Stage',
    genre: 'Sports • Puzzle • Strategy',
    rating: '4.5',
    badge: 'Puzzle Football',
    cardCta: 'Rise to Legend',
    cardFocus: 'Puzzle Football',
    cardNote: 'A street to stadium career built around clever goals.',
    cardNumber: '03',
    playStore: 'https://play.google.com/store/apps/details?id=score.footballgame.kick.soccerlegend',
    appStore: 'https://apps.apple.com/app/soccer-legend/id6502252680',
    heroImage: 'assets/images/games/soccer-legend/soccer-legend-gamegou-player-customization-characters.webp',
    screenshots: [
      'assets/images/games/soccer-legend/soccer-legend-gamegou-world-cup-trophy-celebration.webp',
      'assets/images/games/soccer-legend/soccer-legend-gamegou-street-football-brazil-gameplay.webp',
      'assets/images/games/soccer-legend/soccer-legend-gamegou-bicycle-kick-stadium-match.webp',
      'assets/images/games/soccer-legend/soccer-legend-gamegou-power-shot-stadium-fireworks.webp',
      'assets/images/games/soccer-legend/soccer-legend-gamegou-throw-in-match-gameplay.webp',
      'assets/images/games/soccer-legend/soccer-legend-gamegou-training-ground-dribbling-drills.webp',
    ],
    shortDesc: 'A fresh fusion of soccer and puzzle gameplay. Rise from the streets to the world stage and become a true legend.',
    description: `Show your soccer skills, shape your strategy, and master the perfect fusion of soccer and puzzle play. Outsmart rivals, strike incredible goals, and rise from the streets to the world stage.\n\nSoccer Legend is a fresh, innovative take on mobile football blending the thrill of competitive soccer with addictive puzzle style strategy. Every level challenges you to think differently, react quickly, and execute flawlessly.`,
    features: [
      { title: 'Puzzle Strategy', desc: 'Addictive puzzle and smart strategy challenges inspired by real soccer matches.' },
      { title: 'Super Skills', desc: 'Unlock wild super skills to outsmart goalkeepers and crush your rivals.' },
      { title: 'Full Customization', desc: 'Personalize hairstyle, kits, boots and more for your ultimate soccer star.' },
      { title: 'Play Anywhere', desc: 'Offline or online multiplayer with no WiFi needed. Challenge the world anytime.' },
    ],
    platform: 'Android and iOS',
    genre2: 'Sports / Puzzle',
    size: '200 MB',
    updated: '2024',
  },
  {
    id: 'soccer-league',
    name: 'Soccer League',
    tagline: 'Multiplayer Penalty Kick Showdown',
    genre: 'Sports • Multiplayer • Competitive',
    rating: '4.0',
    badge: 'Real Time PvP',
    cardCta: 'Challenge Players',
    cardFocus: 'Real Time PvP',
    cardNote: 'Play both kicker and keeper in live penalty duels.',
    cardNumber: '04',
    playStore: 'https://play.google.com/store/apps/details?id=com.gamegou.soccer',
    appStore: 'https://apps.apple.com/app/soccer-league/id1451809128',
    heroImage: 'assets/images/games/soccer-league/soccer-league-gamegou-long-range-shot-gameplay.webp',
    screenshots: [
      'assets/images/games/soccer-league/soccer-league-gamegou-stadium-aerial-view.webp',
      'assets/images/games/soccer-league/soccer-league-gamegou-club-facilities-upgrade.webp',
      'assets/images/games/soccer-league/soccer-league-gamegou-tactical-formation-strategy.webp',
    ],
    shortDesc: 'Real time multiplayer penalty kick showdowns. Play as kicker and keeper in stunning 3D against opponents worldwide.',
    description: `New authentic multiplayer penalty kick game Soccer League puts you in the roles of football kicker and keeper for an ultimate showdown. Enjoy live, 3D gameplay with a simple flick of a finger.\n\nBuild your dream team of kickers and train them in special skills. Go head to head with opponents from around the world in free and unlimited challenges. Win rich rewards every week!`,
    features: [
      { title: 'Live Multiplayer', desc: 'Real human opponents in every match. No AI. Pure competitive football.' },
      { title: 'Stunning Visuals', desc: 'Vivid 3D graphics with slow motion replays for the most spectacular moments.' },
      { title: 'Intuitive Controls', desc: 'Simple finger flick operation that anyone can learn in seconds.' },
      { title: 'Team Management', desc: 'Train your kickers in diverse penalty tactics and skills for weekly tournaments.' },
    ],
    platform: 'Android and iOS',
    genre2: 'Sports / Multiplayer',
    size: '100 MB',
    updated: '2024',
  },
  {
    id: 'perfect-kick',
    name: 'Perfect Kick',
    tagline: 'The Ultimate Penalty Shootout',
    genre: 'Sports • Multiplayer • Casual',
    rating: '4.2',
    badge: 'Award Winner',
    cardCta: 'Take the Kick',
    cardFocus: 'Award Winner',
    cardNote: 'The original one finger penalty shootout classic.',
    cardNumber: '05',
    playStore: 'https://play.google.com/store/apps/details?id=com.gamegou.PerfectKick.google',
    appStore: 'https://apps.apple.com/app/perfect-kick/id625542626',
    heroImage: 'assets/images/games/perfect-kick/perfect-kick-gamegou-play-against-friends-multiplayer.webp',
    screenshots: [
      'assets/images/games/perfect-kick/perfect-kick-gamegou-customize-gear-peking-opera.webp',
      'assets/images/games/perfect-kick/perfect-kick-gamegou-play-against-friends-multiplayer.webp',
      'assets/images/games/perfect-kick/perfect-kick-gamegou-holiday-seasonal-kits-win.webp',
      'assets/images/games/perfect-kick/perfect-kick-gamegou-multiplayer-boss-challenge.webp',
    ],
    shortDesc: 'Control all shootout matches with the flick of a single finger. Google Play Best of 2015 with millions of downloads worldwide.',
    description: `Control all shootout matches with the flick of a single finger. Play for free in unlimited champion challenges against opponents from around the world. Live, real time, and totally addictive.\n\nPerfect Kick is Gamegou's original penalty kick masterpiece, celebrated as Google Play Best of 2015. With millions of downloads worldwide, it remains one of the most beloved mobile football games ever made.`,
    features: [
      { title: 'One Finger Control', desc: 'Simple flick controls give you pinpoint accuracy for the perfect penalty kick.' },
      { title: '3 Game Modes', desc: 'Champion League, Super Star Challenge, and Classic Tournament with global rankings.' },
      { title: 'Deep Customization', desc: 'Custom uniforms, shoes, gloves, and facial expressions to build your perfect team.' },
      { title: 'Seasonal Events', desc: 'Regular seasonal updates from Halloween to Christmas with limited kits and rewards.' },
    ],
    platform: 'Android and iOS',
    genre2: 'Sports / Casual',
    size: '80 MB',
    updated: '2024',
  },
  {
    id: 'perfect-kick-2',
    name: 'Perfect Kick 2',
    tagline: 'Online Soccer in Under 3 Minutes',
    genre: 'Sports • Multiplayer • Casual',
    rating: '4.2',
    badge: 'Fan Favourite',
    cardCta: 'Start a Duel',
    cardFocus: 'Three Minute Duels',
    cardNote: 'Fast 1v1 football with power ups, clubs and gear.',
    cardNumber: '06',
    playStore: 'https://play.google.com/store/apps/details?id=com.gamegou.perfectkick2',
    appStore: 'https://apps.apple.com/app/perfect-kick-2/id1475459866',
    heroImage: 'assets/images/games/perfect-kick-2/perfect-kick-2-shooter-vs-goalie-gameplay.webp',
    screenshots: [
      'assets/images/games/perfect-kick-2/perfect-kick-2-challenge-players-worldwide-pvp.webp',
      'assets/images/games/perfect-kick-2/perfect-kick-2-beginner-league-leaderboard-rankings.webp',
      'assets/images/games/perfect-kick-2/perfect-kick-2-powerups-free-kick-strategy.webp',
      'assets/images/games/perfect-kick-2/perfect-kick-2-jerseys-boots-gloves-gear-upgrade.webp',
      'assets/images/games/perfect-kick-2/perfect-kick-2-become-champion-top-leagues.webp',
      'assets/images/games/perfect-kick-2/perfect-kick-2-daily-awards-rewards-gameplay.webp',
    ],
    shortDesc: 'Fast 1v1 free kick duels completable in under 3 minutes. Wild power ups, leagues, clubs, and wacky costumes await.',
    description: `Come play this fun free kick game against players worldwide in just under three minutes. Upgrade your stadium, unlock unique gear and power ups, and make your name in the Star Hall of Fame.\n\nPerfect Kick 2 is the next evolution of Gamegou's beloved penalty series. Faster, wilder, and more feature packed than ever. Every match is a quick fire 1v1 duel that alternates between kicker and goalkeeper.`,
    features: [
      { title: 'Fast Paced 1v1', desc: 'Matches complete in under 3 minutes. Attack then defend. Every second matters.' },
      { title: 'Wild Power Ups', desc: 'Tornado, Banana Kick, Runner and more. Unleash them at the perfect moment.' },
      { title: 'Leagues and Clubs', desc: 'Compete in global leagues, join clubs with friends, and climb division rankings.' },
      { title: 'Wacky Costumes', desc: 'Choose from an array of outrageous outfits and gear to stand out on the pitch.' },
    ],
    platform: 'Android and iOS',
    genre2: 'Sports / Casual',
    size: '120 MB',
    updated: '2024',
  },
  {
    id: 'soccer-strike',
    name: 'Soccer Strike',
    tagline: 'Real Time Multiplayer Soccer',
    genre: 'Multiplayer • Sports • Competitive',
    rating: '3.7',
    badge: 'Multiplayer',
    cardCta: 'Join the Match',
    cardFocus: 'Live Multiplayer',
    cardNote: 'Team up, climb rankings and compete in global matches.',
    cardNumber: '07',
    playStore: 'https://play.google.com/store/apps/details?id=soccer.strike.football.footballgames',
    appStore: 'https://apps.apple.com/app/soccer-strike/id6473498208',
    heroImage: 'assets/images/games/soccer-strike/soccer-strike-gamegou-mobile-soccer-game-key-art.webp',
    screenshots: [
      'assets/images/games/soccer-strike/soccer-strike-gamegou-live-match-real-opponents.webp',
      'assets/images/games/soccer-strike/soccer-strike-gamegou-pvp-football-match-ui.webp',
      'assets/images/games/soccer-strike/soccer-strike-gamegou-team-boost-gift-rewards.webp',
      'assets/images/games/soccer-strike/soccer-strike-gamegou-trophy-collection-stadium.webp',
      'assets/images/games/soccer-strike/soccer-strike-gamegou-online-shootout-players-worldwide.webp',
      'assets/images/games/soccer-strike/soccer-strike-gamegou-win-all-trophies.webp',
    ],
    shortDesc: 'Experience the thrill of real time multiplayer soccer! Team up, lead your squad to glory, and reign as the ultimate champion.',
    description: `Experience the thrill of real time multiplayer soccer! Team up, lead your squad to glory, and reign as the ultimate champion in Soccer Strike.\n\nSoccer Strike puts you right at the heart of the action, competing against real players from around the world in fast paced, live matches. Whether you are joining a club, representing your national team, or climbing the global leaderboard, every match is a test of skill, strategy, and teamwork.`,
    features: [
      { title: 'Real Time Matches', desc: 'Compete against real players worldwide in fast paced live matches. No bots, no shortcuts.' },
      { title: 'Conquer Tournaments', desc: 'Join competitive events for clubs and national teams. Rise through the ranks to the top.' },
      { title: 'Enhance With Cards', desc: 'Boost performance with powerful cards to gain the edge over your opponents.' },
      { title: 'Global Rankings', desc: 'Fight for your ranking. Build friendships, forge rivalries, and climb the worldwide leaderboard.' },
    ],
    platform: 'Android and iOS',
    genre2: 'Sports / Multiplayer',
    size: '150 MB',
    updated: '2024',
  },
];

const NEWS = [
  {
    tag: 'Game Update',
    date: 'April 2025',
    title: 'Super Goal Hits 300 Million Downloads',
    excerpt: 'Gamegou\'s flagship casual title Super Goal has reached a landmark 300 million downloads worldwide, cementing its place as one of the most played mobile football games ever.',
    image: 'assets/images/games/super-goal/super-goal-gamegou-beach-football-free-kick.webp',
  },
  {
    tag: 'New Release',
    date: 'March 2025',
    title: 'Soccer Legend Now Available on iOS and Android',
    excerpt: 'Our newest title Soccer Legend brings an innovative fusion of puzzle gameplay and football action. Rise from the streets to the world stage in this one of a kind mobile experience.',
    image: 'assets/images/games/soccer-legend/soccer-legend-gamegou-world-cup-trophy-celebration.webp',
  },
  {
    tag: 'Milestone',
    date: 'February 2025',
    title: 'Perfect Kick Celebrates 10 Years of Mobile Football',
    excerpt: 'A decade after its launch, Perfect Kick continues to be played by millions worldwide. We celebrate 10 years of the game that started it all for Gamegou.',
    image: 'assets/images/games/perfect-kick/perfect-kick-gamegou-play-against-friends-multiplayer.webp',
  },
  {
    tag: 'Game Update',
    date: 'January 2025',
    title: 'Top Football Manager 2025 Season Update',
    excerpt: 'The latest season update for Top Football Manager brings officially licensed jerseys from the Premier League, La Liga, Bundesliga, and MLS alongside new tactical systems.',
    image: 'assets/images/games/top-football-manager/top-football-manager-gamegou-realtime-3d-match-engine.webp',
  },
  {
    tag: 'Community',
    date: 'December 2024',
    title: 'Perfect Kick 2 Winter League Season Now Live',
    excerpt: 'The Winter League season has arrived in Perfect Kick 2 with new seasonal rewards, festive costumes, and limited edition power ups for the holiday period.',
    image: 'assets/images/games/perfect-kick-2/perfect-kick-2-become-champion-top-leagues.webp',
  },
  {
    tag: 'Milestone',
    date: 'November 2024',
    title: 'Soccer Strike Launches Global Club Championships',
    excerpt: 'Soccer Strike introduces its biggest competitive event yet. The Global Club Championship brings together thousands of clubs from every corner of the world competing for the ultimate prize.',
    image: 'assets/images/games/soccer-strike/soccer-strike-gamegou-trophy-collection-stadium.webp',
  },
];

// Store button SVGs
const STORE_BUTTONS = `
  <div class="store-buttons">
    <a href="{playStore}" target="_blank" rel="noopener noreferrer" class="store-btn-official" aria-label="Get it on Google Play">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 153 46" width="153" height="46">
        <rect width="153" height="46" rx="6" fill="#000"/>
        <text x="50" y="16" fill="#fff" font-family="Arial,sans-serif" font-size="9" opacity="0.8">GET IT ON</text>
        <text x="50" y="32" fill="#fff" font-family="Arial,sans-serif" font-size="16" font-weight="bold">Google Play</text>
        <g transform="translate(14,10)">
          <path d="M1.2 0C.5.4 0 1.1 0 2.1v20.8c0 1 .5 1.7 1.2 2.1l.1.1L12.5 13v-.3L1.3 0z" fill="#4fc3f7"/>
          <path d="M16.4 17.1l-3.9-3.9V12.7l3.9-3.9 .1.1 4.6 2.6c1.3.7 1.3 1.9 0 2.7l-4.6 2.6z" fill="#ffca28"/>
          <path d="M16.5 17l-4-4L1.2 24.2c.4.5 1.1.5 2 .1L16.5 17z" fill="#f44336"/>
          <path d="M16.5 9.1L2.2.8C1.3.3.6.4 1.2 1L12.5 12.5l4-3.4z" fill="#4caf50"/>
        </g>
      </svg>
    </a>
    <a href="{appStore}" target="_blank" rel="noopener noreferrer" class="store-btn-official" aria-label="Download on the App Store">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 153 46" width="153" height="46">
        <rect width="153" height="46" rx="6" fill="#000"/>
        <text x="50" y="15" fill="#fff" font-family="Arial,sans-serif" font-size="9" opacity="0.8">Download on the</text>
        <text x="50" y="32" fill="#fff" font-family="Arial,sans-serif" font-size="16" font-weight="bold">App Store</text>
        <g transform="translate(12,6)">
          <path d="M19.3 17.9c0-3.5 2.8-5.1 2.9-5.2-1.6-2.3-4-2.6-4.9-2.7-2.1-.2-4 1.2-5.1 1.2-1 0-2.7-1.2-4.4-1.2-2.3 0-4.4 1.3-5.5 3.4C.6 17.2 2 23.9 3.8 27.5c.9 1.8 2 3.8 3.5 3.7 1.4-.1 1.9-.9 3.6-.9 1.7 0 2.2.9 3.7.9 1.5 0 2.5-1.8 3.4-3.6.7-1.4 1.2-2.9 1.3-3-.1 0-2.9-1.1-3-4.7z" fill="#fff"/>
          <path d="M16.2 6.7c.8-1 1.3-2.3 1.1-3.7-1.1.1-2.4.7-3.2 1.7-.7.8-1.3 2.1-1.1 3.4 1.2.1 2.4-.6 3.2-1.4z" fill="#fff"/>
        </g>
      </svg>
    </a>
  </div>
`;

function getStoreButtons(g) {
  return STORE_BUTTONS.replace('{playStore}', g.playStore).replace('{appStore}', g.appStore);
}

function gamePageHref(gameId) {
  return `games/${encodeURIComponent(gameId)}/`;
}

const GAME_SEO_DETAILS = {
  "top-football-manager": {
    "why": [
      "A long term football management loop built around scouting, training, tactics, and club growth.",
      "Live 3D match viewing makes tactical decisions feel visible instead of abstract.",
      "Official jersey content and national team management give the game a bigger football world."
    ],
    "platform": "Top Football Manager is available for mobile players on Android and iOS, making it easy for football management fans to build their club and check progress throughout the day."
  },
  "super-goal": {
    "why": [
      "The draw to kick control is instantly understandable and gives every shot a creative feel.",
      "Short puzzle football levels make the game easy to start and rewarding to replay.",
      "Different locations, ball styles, and offline play help it work for a wide range of casual players."
    ],
    "platform": "Super Goal is available on Android and iOS, with quick mobile sessions designed for casual football fans who want to play anywhere."
  },
  "soccer-legend": {
    "why": [
      "Puzzle football creates a more strategic scoring experience than a standard action game.",
      "Player customization and career progression give each level a stronger sense of identity.",
      "The street to stadium theme makes the journey easy to understand and fun to follow."
    ],
    "platform": "Soccer Legend is available on Android and iOS for players who want a mix of football action, puzzle solving, customization, and progression."
  },
  "soccer-league": {
    "why": [
      "Real time penalty duels give players a simple competitive format that is easy to understand.",
      "Playing as both kicker and keeper creates a full shootout experience.",
      "Team upgrades, tournaments, and live opponents support repeat play."
    ],
    "platform": "Soccer League is available on Android and iOS for mobile players who want live multiplayer penalty kick competition."
  },
  "perfect-kick": {
    "why": [
      "One finger controls make every penalty shootout fast and approachable.",
      "The kicker and goalkeeper rhythm creates simple, tense multiplayer moments.",
      "Its Google Play Best of 2015 recognition gives the title real portfolio credibility."
    ],
    "platform": "Perfect Kick is available on Android and iOS for players who want a classic, fast, one finger penalty shootout game."
  },
  "perfect-kick-2": {
    "why": [
      "Fast 1v1 matches fit into short mobile sessions while still feeling competitive.",
      "Power ups, clubs, gear, and league progression make the sequel more expressive.",
      "The three minute format makes it easy to play one more match."
    ],
    "platform": "Perfect Kick 2 is available on Android and iOS for players looking for quick online football duels with power ups and progression."
  },
  "soccer-strike": {
    "why": [
      "Real time multiplayer gives every match a live competitive feel.",
      "Team play, rankings, and tournaments create clear goals beyond a single match.",
      "Boost cards and club systems add strategy to a fast football format."
    ],
    "platform": "Soccer Strike is available on Android and iOS for players who want real time multiplayer football, team competition, and global rankings."
  }
};

function gameSeoSectionHTML(g) {
  const seo = GAME_SEO_DETAILS[g.id];
  if (!seo) return '';
  return `
    <section aria-labelledby="why-players-heading" class="section game-seo-section">
      <div class="container">
        <div class="game-seo-grid">
          <article class="game-seo-card">
            <div class="section-label">Why players like it</div>
            <h2 id="why-players-heading">Why players keep coming back to ${g.name}</h2>
            <ul>${seo.why.map(point => `<li>${point}</li>`).join('')}</ul>
          </article>
          <article class="game-seo-card">
            <div class="section-label">Available platforms</div>
            <h2>Play ${g.name} on mobile</h2>
            <p>${seo.platform}</p>
            <div class="platform-pill-row"><span>Android</span><span>iOS</span></div>
          </article>
        </div>
      </div>
    </section>
  `;
}

// ===== ROUTER =====
let currentPage = 'home';
let currentGameId = null;

function navigate(page, gameId = null, updateHash = true) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  currentPage = page;
  currentGameId = gameId;

  if (page === 'game' && gameId) {
    renderGamePage(gameId);
    document.getElementById('page-game').classList.add('active');
  } else {
    const el = document.getElementById('page-' + page);
    if (el) el.classList.add('active');
  }

  const navLink = document.querySelector(`.nav-links a[data-page="${page}"]`);
  if (navLink) navLink.classList.add('active');

  if (page === 'home' && document.getElementById('hero-carousel')) {
    startHeroCarousel();
  } else {
    stopHeroCarousel();
  }

  setPageMeta(page, gameId);
  if (updateHash) updateLocationHash(page, gameId);

  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeMobileNav();
  initAnimations();
}

function updateLocationHash(page, gameId = null) {
  const nextHash = page === 'home' ? '' : page === 'game' && gameId ? `#game=${encodeURIComponent(gameId)}` : `#${encodeURIComponent(page)}`;
  const currentHash = window.location.hash || '';
  if (currentHash === nextHash) return;
  const nextUrl = `${window.location.pathname}${window.location.search}${nextHash}`;
  window.history.pushState(null, '', nextUrl);
}

function routeFromHash() {
  const hash = decodeURIComponent((window.location.hash || '').replace(/^#/, '')).trim();
  if (!hash) {
    navigate('home', null, false);
    return;
  }
  if (hash.startsWith('game=')) {
    const gameId = hash.split('=')[1];
    if (GAMES.some(g => g.id === gameId)) {
      navigate('game', gameId, false);
      return;
    }
  }
  const validPages = ['home', 'games', 'about', 'partners', 'contact', 'privacy', 'terms'];
  navigate(validPages.includes(hash) ? hash : 'home', null, false);
}

function setPageMeta(page, gameId = null) {
  const description = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  const twitterDescription = document.querySelector('meta[name="twitter:description"]');
  const game = gameId ? GAMES.find(g => g.id === gameId) : null;

  let title = 'Gamegou | Mobile Football Games Developer and Publisher';
  let desc = 'Gamegou creates mobile football games played by millions worldwide. Discover Soccer Strike, Perfect Kick, Super Goal, Soccer Legend and more.';

  if (game) {
    title = `${game.name} | Gamegou Mobile Football Games`;
    desc = game.shortDesc;
  } else if (page === 'games') {
    title = 'Gamegou Games | Mobile Football Game Portfolio';
    desc = 'Explore Gamegou mobile football games across multiplayer, casual, management, and puzzle football experiences.';
  } else if (page === 'partners') {
    title = 'Gamegou Media and Brand Partnerships | In Game Advertising';
    desc = 'Contact Gamegou for media company partnerships, direct brand campaigns, and in game advertising opportunities across mobile football audiences.';
  } else if (page === 'contact') {
    title = 'Contact Gamegou | Partnerships, Advertising, and Support';
    desc = 'Contact Gamegou for media company partnerships, brand campaigns, in game advertising, press enquiries, and player support.';
  } else if (page === 'about') {
    title = 'About Gamegou | Mobile Football Game Studio';
    desc = 'Learn about Gamegou, a mobile football game developer and publisher with games played by players around the world.';
  }

  document.title = title;
  if (description) description.setAttribute('content', desc);
  if (ogTitle) ogTitle.setAttribute('content', title);
  if (ogDescription) ogDescription.setAttribute('content', desc);
  if (twitterTitle) twitterTitle.setAttribute('content', title);
  if (twitterDescription) twitterDescription.setAttribute('content', desc);
}

// ===== NAVBAR =====
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });

  document.getElementById('hamburger').addEventListener('click', toggleMobileNav);

  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
    a.addEventListener('click', e => {
      const page = a.dataset.page;
      if (!page) return;
      e.preventDefault();
      navigate(page);
    });
  });
}

function toggleMobileNav() {
  document.getElementById('mobile-nav').classList.toggle('open');
}
function closeMobileNav() {
  document.getElementById('mobile-nav').classList.remove('open');
}

// ===== RENDER HOME =====
let heroCarouselState = { index: 0, interval: null, games: [] };

function renderHome() {
  stopHeroCarousel();
  const featuredIds = ['super-goal', 'soccer-strike', 'top-football-manager'];
  const featuredGames = featuredIds.map(id => GAMES.find(g => g.id === id)).filter(Boolean);
  const heroContainer = document.getElementById('hero-cards');
  heroContainer.innerHTML = `
    <div class="hero-showcase" aria-label="Featured games showcase">
      <a class="hero-feature hero-feature-large" href="${gamePageHref(featuredGames[0].id)}" data-id="${featuredGames[0].id}">
        <img src="${featuredGames[0].heroImage}" alt="${featuredGames[0].name} gameplay artwork" loading="eager" width="1100" height="620">
        <div class="hero-feature-copy">
          <span class="hero-feature-kicker">Featured</span>
          <h3>${featuredGames[0].name}</h3>
          <p>${featuredGames[0].tagline}</p>
        </div>
      </a>
      <div class="hero-feature-stack">
        ${featuredGames.slice(1).map(g => `
          <a class="hero-feature hero-feature-small" href="${gamePageHref(g.id)}" data-id="${g.id}">
            <img src="${g.heroImage}" alt="${g.name} gameplay artwork" loading="lazy" width="600" height="338">
            <div class="hero-feature-copy">
              <span class="hero-feature-kicker">${g.badge}</span>
              <h3>${g.name}</h3>
            </div>
          </a>
        `).join('')}
      </div>
    </div>
  `;

  const grid = document.getElementById('home-games-grid');
  grid.innerHTML = GAMES.map((g, index) => gameCardHTML(g, index)).join('');
}

function showHeroSlide(index) {
  const total = heroCarouselState.games.length;
  if (!total) return;
  heroCarouselState.index = (index + total) % total;

  document.querySelectorAll('.hero-slide').forEach((slide, i) => {
    slide.classList.toggle('active', i === heroCarouselState.index);
  });
  document.querySelectorAll('.hero-carousel-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === heroCarouselState.index);
  });
  document.querySelectorAll('.hero-thumb').forEach((thumb, i) => {
    thumb.classList.toggle('active', i === heroCarouselState.index);
  });

  const current = document.getElementById('hero-current');
  if (current) current.textContent = String(heroCarouselState.index + 1).padStart(2, '0');
  animateHeroProgress();
}

function startHeroCarousel() {
  stopHeroCarousel();
  if (currentPage !== 'home') return;
  heroCarouselState.interval = setInterval(() => {
    showHeroSlide(heroCarouselState.index + 1);
  }, 4500);
}

function stopHeroCarousel() {
  if (heroCarouselState.interval) {
    clearInterval(heroCarouselState.interval);
    heroCarouselState.interval = null;
  }
}

function animateHeroProgress() {
  const fill = document.getElementById('hero-progress-fill');
  if (!fill) return;
  fill.style.transition = 'none';
  fill.style.width = '0%';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      fill.style.transition = 'width 4.5s linear';
      fill.style.width = '100%';
    });
  });
}

function initHeroCarousel() {
  const carousel = document.getElementById('hero-carousel');
  if (!carousel) return;

  carousel.querySelectorAll('[data-index]').forEach(el => {
    el.addEventListener('click', e => {
      const gameLink = el.dataset.gameId || e.target.closest('[data-game-id]')?.dataset.gameId;
      if (gameLink && !el.classList.contains('hero-thumb') && !el.classList.contains('hero-carousel-dot')) {
        if (e.target.closest('.hero-slide-action')) {
          e.preventDefault();
          navigate('game', gameLink);
          return;
        }
      }
      const idx = Number(el.dataset.index);
      if (!Number.isNaN(idx)) {
        showHeroSlide(idx);
        startHeroCarousel();
      }
    });
  });

  carousel.querySelectorAll('.hero-slide').forEach(slide => {
    slide.addEventListener('click', e => {
      if (e.target.closest('.hero-slide-action')) return;
      navigate('game', slide.dataset.gameId);
    });
  });

  carousel.querySelectorAll('.hero-slide-action').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      navigate('game', btn.dataset.gameId);
    });
  });

  const prev = document.getElementById('hero-prev');
  const next = document.getElementById('hero-next');
  if (prev) prev.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    showHeroSlide(heroCarouselState.index - 1);
    startHeroCarousel();
  });
  if (next) next.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    showHeroSlide(heroCarouselState.index + 1);
    startHeroCarousel();
  });

  carousel.addEventListener('mouseenter', stopHeroCarousel);
  carousel.addEventListener('mouseleave', startHeroCarousel);

  showHeroSlide(0);
  startHeroCarousel();
}

function gameCardHTML(g, index = 0) {
  return `
    <a class="game-card fade-up" href="${gamePageHref(g.id)}" data-id="${g.id}" role="article" aria-label="Open ${g.name} game page">
      <div class="game-card-img">
        <img src="${g.heroImage}" alt="${g.name} gameplay artwork" loading="lazy" width="600" height="338">
        <span class="game-card-badge">${g.badge}</span>
      </div>
      <div class="game-card-body">
        <div class="game-card-topline">
          <span class="game-card-focus">${g.cardFocus || g.genre2}</span>
        </div>
        <h3 class="game-card-title">${g.name}</h3>
        <p class="game-card-desc">${g.shortDesc}</p>
        <div class="game-card-meta">
          <span class="game-card-note">${g.cardNote || g.tagline}</span>
          <span class="game-card-cta">${g.cardCta}</span>
        </div>
      </div>
    </a>
  `;
}

// ===== RENDER GAMES PAGE =====
function renderGamesPage() {
  const grid = document.getElementById('games-page-grid');
  grid.innerHTML = GAMES.map((g, index) => gameCardHTML(g, index)).join('');
}

// ===== RENDER GAME PAGE =====
function renderGamePage(gameId) {
  const g = GAMES.find(x => x.id === gameId);
  if (!g) return;

  const page = document.getElementById('page-game');
  const storeButtons = getStoreButtons(g);
  const descParagraphs = g.description.split('\n\n').map(p => `<p>${p.trim()}</p>`).join('');

  page.innerHTML = `
    <section class="game-hero" aria-label="${g.name} hero">
      <div class="game-hero-bg">
        <img src="${g.heroImage}" alt="${g.name} gameplay" width="1200" height="675" loading="eager">
        <div class="game-hero-overlay"></div>
      </div>
      <div class="game-hero-content">
        <button class="game-hero-back" onclick="navigate('games')" aria-label="Back to games">← All Games</button>
        <h1 class="game-hero-title">${g.name}</h1>
        <p class="game-hero-tagline">${g.tagline}</p>
        <div class="game-hero-meta">
          <span class="game-badge">${g.genre}</span>
        </div>
        ${storeButtons}
      </div>
    </section>

    <section class="gallery-section" aria-label="${g.name} screenshots">
      <div class="container">
        <div class="section-label">Screenshots</div>
      </div>
      <div class="gallery-track-wrapper">
        <div class="gallery-track" id="gallery-${g.id}" role="list" aria-label="Game screenshots">
          ${g.screenshots.map((src, i) => `
            <div class="gallery-item" role="listitem" onclick="openLightbox('${src}')" tabindex="0" aria-label="Screenshot ${i+1}">
              <img src="${src}" alt="${g.name} screenshot ${i+1}" loading="lazy" width="500" height="281">
            </div>
          `).join('')}
        </div>
      </div>
      <div class="gallery-nav">
        <button class="gallery-btn" onclick="scrollGallery('${g.id}', -1)" aria-label="Previous screenshots">←</button>
        <button class="gallery-btn" onclick="scrollGallery('${g.id}', 1)" aria-label="Next screenshots">→</button>
      </div>
    </section>

    <div class="game-description">
      <div class="game-desc-text">
        <h2>About ${g.name}</h2>
        ${descParagraphs}
        <div class="game-features">
          ${g.features.map(f => `
            <div class="game-feature fade-up">
              <div class="game-feature-text">
                <h4>${f.title}</h4>
                <p>${f.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      <aside class="game-sidebar">
        <div class="game-info-card">
          <h3>Game Info</h3>
          <div class="game-info-row"><span>Platform</span><span>${g.platform}</span></div>
          <div class="game-info-row"><span>Genre</span><span>${g.genre2}</span></div>
          <div class="game-info-row"><span>Size</span><span>${g.size}</span></div>
          <div class="game-info-row"><span>Updated</span><span>${g.updated}</span></div>
        </div>
        <div class="game-info-card">
          <h3>Download Now</h3>
          ${storeButtons}
        </div>
      </aside>
    </div>
    ${gameSeoSectionHTML(g)}
  `;
}

// ===== RENDER NEWS =====
function renderNews() {
  const grid = document.getElementById('news-grid');
  if (!grid) return;
  grid.innerHTML = NEWS.map(n => `
    <article class="news-card fade-up" role="article">
      <div class="news-card-img">
        <img src="${n.image}" alt="${n.title}" loading="lazy" width="600" height="338">
      </div>
      <div class="news-card-body">
        <span class="news-card-tag">${n.tag}</span>
        <div class="news-card-date">${n.date}</div>
        <h3 class="news-card-title">${n.title}</h3>
        <p class="news-card-excerpt">${n.excerpt}</p>
      </div>
    </article>
  `).join('');
}

// ===== GALLERY SCROLL =====
function scrollGallery(id, dir) {
  const track = document.getElementById('gallery-' + id);
  if (!track) return;
  track.scrollBy({ left: dir * 520, behavior: 'smooth' });
}

// ===== LIGHTBOX =====
function openLightbox(src) {
  const lb = document.getElementById('lightbox');
  document.getElementById('lightbox-img').src = src;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});

// ===== ANIMATIONS =====
function initAnimations() {
  setTimeout(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  }, 100);
}

// ===== CONTACT FORM =====
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    const topic = data.get('subject') || 'general';
    const subjectSelect = document.getElementById('contact-subject');
    const topicLabel = subjectSelect?.selectedOptions?.[0]?.textContent || 'General Inquiry';
    const recipient = ['partnership', 'advertising', 'press'].includes(topic)
      ? 'jqiang@mobilesoccer.net'
      : 'adsmanager@gamegou.com';
    const subject = `Gamegou Website Inquiry: ${topicLabel}`;
    const body = [
      `Name: ${data.get('name') || ''}`,
      `Email: ${data.get('email') || ''}`,
      `Company: ${data.get('company') || ''}`,
      `Topic: ${topicLabel}`,
      '',
      data.get('message') || '',
    ].join('\n');
    const btn = form.querySelector('.form-submit');
    btn.textContent = 'Opening Email Client...';
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setTimeout(() => {
      btn.textContent = 'Send Message';
    }, 1500);
  });
}



// ===== ANALYTICS READY HOOKS =====
function trackGamegouEvent(eventName, params = {}) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });
}

function initAnalyticsTracking() {
  document.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!link) return;
    const href = link.getAttribute('href') || '';
    if (href.includes('play.google.com')) {
      trackGamegouEvent('store_click', { store: 'google_play', label: link.textContent.trim() || 'Google Play' });
    } else if (href.includes('apps.apple.com')) {
      trackGamegouEvent('store_click', { store: 'app_store', label: link.textContent.trim() || 'App Store' });
    } else if (href.startsWith('mailto:')) {
      trackGamegouEvent('email_click', { email: href.replace('mailto:', '').split('?')[0] });
    } else if (link.classList.contains('game-card') || link.closest('.game-card')) {
      trackGamegouEvent('game_card_click', { destination: href });
    }
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderHome();
  renderGamesPage();
  routeFromHash();
  initContactForm();
  initAnalyticsTracking();
});


window.addEventListener('hashchange', routeFromHash);
