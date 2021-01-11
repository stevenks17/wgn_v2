export function seedDatabase(firebase) {
  function getUUID() {
    // eslint gets funny about bitwise
    /* eslint-disable */
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const piece = (Math.random() * 16) | 0;
        const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;
        return elem.toString(16);
    });
    /* eslint-enable */
  }

  /* Series
    ============================================ */
  
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Doom Eternal',
    description: 'Set some time after the events of the 2016 game, the story follows the Doom Slayer once again, on a mission to end Hells consumption of Earth and foil the alien Maykrs plans to exterminate humanity.',
    genre: 'FPS',
    slug: 'DOOM',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Final Fantasy VII Remake',
    description: '2020 action role-playing game developed and published by Square Enix. It is the first in a planned series of games remaking the 1997 PlayStation game Final Fantasy VII. Set in the dystopian cyberpunk metropolis of Midgar, it puts players in the role of a mercenary named Cloud Strife.',
    genre: 'RPG',
    slug: 'FF7R',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Assassins Creed Valhalla',
    description: 'Become Eivor, a legendary Viking raider on a quest for glory. Explore a dynamic and beautiful open world set against the brutal backdrop of Englands Dark Ages. Raid your enemies, grow your settlement, and build your political power in the quest to earn a place among the gods in Valhalla.',
    genre: 'Action RPG',
    slug: 'ACV',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Resident Evil 3',
    description:
      "survival horror game developed and published by Capcom. It is a remake of Resident Evil 3: Nemesis (1999) and follows Jill Valentine and Carlos Oliveira as they attempt to survive a zombie apocalypse while being hunted by the intelligent bioweapon Nemesis.",
    genre: 'Horror',
    slug: 'RE3',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Gears Tactics',
    description:
      "fast-paced, turn-based strategy game set 12 years before the first Gears of War. ... Against all odds and fighting for survival, outsmart your enemy in uniquely brutal, turn-based tactical combat. Experience the intensity of one of the most-acclaimed video game sagas in an exciting new way.",
    genre: 'strategy',
    slug: 'Gears',
  });
//===============================================================================================================================================================================
  // RPG
  
  firebase.firestore().collection('games').add({
    id: getUUID(),
    title: 'Darkest Dungeon',
    description:
      "Challenging gothic roguelike turn-based RPG about the psychological stresses of adventuring. Recruit, train, and lead a team of flawed heroes against unimaginable horrors, stress, famine, disease, and the ever-encroaching dark",
    genre: 'RPG',
    slug: 'Darkest Dungeon',
  });
    firebase.firestore().collection('games').add({
    id: getUUID(),
    title: 'Cyberpunk',
    description:
      "an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality.",
    genre: 'RPG',
    slug: 'CP77',
  });
  
    firebase.firestore().collection('games').add({
    id: getUUID(),
    title: 'Cyberpunk',
    description:
      "an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality.",
    genre: 'RPG',
    slug: 'CP77',
  });
  
    firebase.firestore().collection('games').add({
    id: getUUID(),
    title: 'Marvels Avengers',
    description:
      "Assemble your team of Earth’s Mightiest Heroes, embrace your powers, and live your Super Hero dreams.",
    genre: 'RPG',
    slug: 'MA',
  });
  //=============================================================================================================================================================================
  
  // Action Adventure
    firebase.firestore().collection('games').add({
    id: getUUID(),
    title: 'Star Wars Jedi: Fallen Order',
    description:
      "A galaxy-spanning adventure awaits in Star Wars Jedi: Fallen Order, a 3rd person action-adventure title from Respawn. An abandoned Padawan must complete his training, develop new powerful Force abilities, and master the art of the lightsaber - all while staying one step ahead of the Empire.",
    genre: 'Action-Adventure',
    slug: 'SWFO',
  });

    firebase.firestore().collection('games').add({
    id: getUUID(),
    title: 'Spider-Man',
    description:
      "This isn’t the Spider-Man you’ve met or ever seen before. This is an experienced Peter Parker who’s more masterful at fighting big crime in Marvel's New York. At the same time, he’s struggling to balance his chaotic personal life and career while the fate of millions of New Yorkers rest upon his shoulders",
    genre: 'Action-Adventure',
    slug: 'SPMN',
  });

    firebase.firestore().collection('games').add({
    id: getUUID(),
    title: 'The Legend of Zelda: Breath of the Wild',
    description:
      "Step into a world of discovery, exploration and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series. Travel across fields, through forests and to mountain peaks as you discover what has become of the ruined kingdom of Hyrule in this stunning open-air adventure.",
    genre: 'Action Adventure',
    slug: 'BOTW',
  });
    firebase.firestore().collection('games').add({
    id: getUUID(),
    title: 'Ghost of Tsushima',
    description:
      "2020 action-adventure game developed by Sucker Punch Productions and published by Sony Interactive Entertainment. Featuring an open world, it follows Jin Sakai, a samurai on a quest to protect Tsushima Island during the first Mongol invasion of Japan.",
    genre: 'Action-Adventure',
    slug: 'GoT',
  });
  //=============================================================================================================================================================================
  
// First Person Shooter
  
    firebase.firestore().collection('games').add({
    id: getUUID(),
    title: 'Overwatch',
    description:
      "Overwatch is a team-based multiplayer first-person shooter developed and published by Blizzard Entertainment. Described as a hero shooter, Overwatch assigns players into two teams of six, with each player selecting from a large roster of characters, known as heroes, with unique abilities.",
    genre: 'FPS',
    slug: 'OW',
  });
  //===============================================================================================================================================================================
}
