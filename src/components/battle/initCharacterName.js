const monsterBLock = document.querySelector('#monsterName');
const heroBlock = document.querySelector('#heroName');

const monsterNames = {
  adjectives: ['angry', 'terrible', 'snotty'],
  race: ['ogre', 'dwarf', 'goblin', 'elf'],
  name: ['Tom', 'Mike', 'Max', 'Jon'],
};

function generateName() {
  const adjectivesNumber = Math.floor(
    Math.random() * monsterNames.adjectives.length
  );
  const adjectives = monsterNames.adjectives[adjectivesNumber];
  const raceNumber = Math.floor(Math.random() * monsterNames.race.length);
  const race = monsterNames.race[raceNumber];
  const nameNumber = Math.floor(Math.random() * monsterNames.name.length);
  const name = monsterNames.name[nameNumber];
  return `${adjectives} ${race} ${name}`;
}
function initMonsterName() {
	monsterBLock.textContent = generateName();
}
function initHeroName(heroName) {
	let name = heroName;
	if(name === ' ') {
		name = 'Player';
	}
	heroBlock.textContent = name;
}

export {initMonsterName, initHeroName}
