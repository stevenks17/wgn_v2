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

  // game
  firebase.firestore().collection('game').add({
    id: getUUID(),
    title: 'Darkest Dungeon',
    description:
      "Challenging gothic roguelike turn-based RPG about the psychological stresses of adventuring. Recruit, train, and lead a team of flawed heroes against unimaginable horrors, stress, famine, disease, and the ever-encroaching dark",
    genre: 'RPG',
    slug: 'Darkest Dungeon',
  });

}
