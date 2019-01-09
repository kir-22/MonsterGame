const heroImgs = require('./loadHeroImages');
const monsterImgs = require('./loadMonsterImages');

let golemIndex;

function changeMonster() {
	golemIndex = Math.floor(Math.random() * monsterImgs.golems.length);
}
changeMonster();

function heroStay(characterImgs) {
  heroImgs.stay.forEach((value, index) => (characterImgs[index] = value));
}
function heroRun(characterImgs) {
  heroImgs.run.forEach((value, index) => (characterImgs[index] = value));
}
function heroAttack(characterImgs) {
  heroImgs.attack.forEach((value, index) => (characterImgs[index] = value));
}
function heroDied(characterImgs) {
  heroImgs.died.forEach((value, index) => (characterImgs[index] = value));
}
function monsterStay(characterImgs) {
  monsterImgs.golems[golemIndex].stay.forEach(
    (value, index) => (characterImgs[index] = value)
  );
}
function monsterRun(characterImgs) {
  monsterImgs.golems[golemIndex].run.forEach(
    (value, index) => (characterImgs[index] = value)
  );
}
function monsterAttack(characterImgs) {
  monsterImgs.golems[golemIndex].attack.forEach(
    (value, index) => (characterImgs[index] = value)
  );
}
function monsterDied(characterImgs) {
  monsterImgs.golems[golemIndex].died.forEach(
    (value, index) => (characterImgs[index] = value)
  );
}

export { heroStay, heroRun, heroAttack, heroDied, monsterStay, monsterRun, monsterAttack, monsterDied, changeMonster}
