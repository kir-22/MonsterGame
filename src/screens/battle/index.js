const gameInfo = require('../../components/battle/gameInfo');
const drawStrips = require('../../components/battle/drawStrips');
const sounds = require('../../components/battle/playSound');
import * as characterAction from '../../components/battle/characterAction';
import {initMonsterName, initHeroName} from '../../components/battle/initCharacterName'
import modale from '../../components/modal-dialog/modal-dialog';
import observer from '../../components/modal-dialog/observer';
import checkUser from '../../components/score/userCheck'
import score from '../../components/score/score'

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const button = document.querySelector('#spell');
const startGameButton = document.querySelector('#startGameButton');

const heroStatus = {
  imgs: [],
  positionX: 20,
  positionY: 90,
  width: 220,
  healthHP: 100,
  health: gameInfo.countBlockAtStrips,
};
heroStatus.height = heroStatus.width * 1.155;

const monsterStatus = {
  imgs: [],
  positionX: canvas.width - 290,
  positionY: 10,
  width: 350,
  healthHP: 100,
  health: gameInfo.countBlockAtStrips,
};
monsterStatus.height = monsterStatus.width * 1.155;

function displayRound() {
  const roundInfo = document.querySelector('.roundInfo');
  roundInfo.textContent = `Round ${gameInfo._currentRound}`;
}

function loseHealth(status) {
  const cellWeight = 100 / gameInfo.countBlockAtStrips;
  if (status === heroStatus) {
    heroStatus.healthHP -= cellWeight;
    heroHP.textContent = Math.round(heroStatus.healthHP);
    const variableBlock = heroStatus.health - 1;
    const block = leftStrip.childNodes[variableBlock];
    block.style.background = 'red';
    heroStatus.health -= 1;
  } else {
    monsterStatus.healthHP -= cellWeight;
    monsterHP.textContent = Math.round(monsterStatus.healthHP);
    const variableBlock = monsterStatus.health - 1;
    const block = rightStrip.childNodes[variableBlock];
    block.style.background = 'red';
    monsterStatus.health -= 1;
  }
}
function improveHeroHealth() {
	const cellWeight = 100 / gameInfo.countBlockAtStrips;
	if(heroStatus.healthHP !== 100) {
		heroStatus.healthHP += cellWeight;
		heroHP.textContent = Math.round(heroStatus.healthHP);
		const variableBlock = heroStatus.health;
		const block = leftStrip.childNodes[variableBlock];
		block.style.background = 'green';
		heroStatus.health += 1;
	}
}

function doSpell() {
  modale();
}
function checkSpell() {
  if (observer.isChange) {
    if (observer.userIsWin) {
      if (observer.typeOfSpell === 'attack') {
        characterAction.heroRun(heroStatus.imgs);
        gameInfo._gameStatus = 'heroRun';
      } else if (observer.typeOfSpell === 'health') {
				improveHeroHealth();
      }
    } else if (observer.userIsWin === false) {
      characterAction.monsterRun(monsterStatus.imgs);
      gameInfo._gameStatus = 'monsterRun';
    }

    observer.typeOfSpell = undefined;
    observer.isChange = false;
    observer.userIsWin = undefined;
  }
}

function heroRunHandler() {
  heroPositionX += gameInfo.characterSpeedInfo;
  if (heroPositionX + gameInfo.gaps.whenHeroRun > monsterPositionX) {
    gameInfo._gameStatus = 'heroAttack';
    characterAction.heroAttack(heroStatus.imgs);
  }
}
function heroAttackHandler() {
  if (gameInfo._numberOfStayImgs === 0) {
    gameInfo._countOfAttack += 1;
  }
  if (gameInfo._countOfAttack === 2) {
    gameInfo._countOfAttack = 0;
    loseHealth(monsterStatus);
    if (monsterStatus.health === 0) {
      characterAction.monsterDied(monsterStatus.imgs);
      monsterPositionX = monsterStatus.positionX - gameInfo.gaps.whenMonsterDied;
      monsterStatus.positionY -= gameInfo.gaps.whenMonsterDiedY;
    }
    gameInfo._gameStatus = 'heroRunBack';
    characterAction.heroRun(heroStatus.imgs);
  }
}
function heroRunBackHandler() {
  heroPositionX += -1 * gameInfo.characterSpeedInfoBack;
  if (heroPositionX <= heroStatus.positionX + gameInfo.gaps.whenHeroRunBack) {
    heroPositionX = heroStatus.positionX;
    characterAction.heroStay(heroStatus.imgs);
  }
}

function monsterRunHandler() {
  monsterPositionX -= gameInfo.characterSpeedInfo;
  if (monsterPositionX - gameInfo.gaps.whenMonsterRun < heroPositionX) {
    gameInfo._gameStatus = 'monsterAttack';
    characterAction.monsterAttack(monsterStatus.imgs);
  }
}
function monsterAttackHandler() {
  if (gameInfo._numberOfStayImgs === 0) {
    gameInfo._countOfAttack += 1;
  }
  if (gameInfo._countOfAttack === 2) {
    gameInfo._countOfAttack = 0;
    loseHealth(heroStatus);
    const health = heroStatus.health;
    if (health === 0) {
      heroStatus.width += 120;
      heroPositionX -= 50;
      characterAction.heroDied(heroStatus.imgs);
    }
    gameInfo._gameStatus = 'monsterRunBack';
    characterAction.monsterRun(monsterStatus.imgs);
  }
}
function monsterRunBackHandler() {
  monsterPositionX += gameInfo.characterSpeedInfoBack;
  if (
    monsterPositionX >=
    monsterStatus.positionX - gameInfo.gaps.whenMonsterRunBack
  ) {
    monsterPositionX = monsterStatus.positionX;
    characterAction.monsterStay(monsterStatus.imgs);
  }
}

function nextRound() {
	characterAction.changeMonster();
	characterAction.monsterStay(monsterStatus.imgs);
	monsterPositionX = monsterStatus.positionX;
	monsterStatus.positionY += gameInfo.gaps.whenMonsterDiedY;
	monsterStatus.health = gameInfo.countBlockAtStrips;
	monsterStatus.healthHP = 100;
	rightStrip.style.background = 'green';
	monsterHP.textContent = 100;
	rightStrip.childNodes.forEach(value => value.style.background = 'green');
	initMonsterName();
	gameInfo._currentRound += 1;
	displayRound();
}
function showStatistic() {  //TODO:
	const userName = document.querySelector('#heroName').textContent;
	checkUser(userName, gameInfo._currentRound);
	score();
}

function drawCharacters() {
  const statusImgsNumber = Math.floor(
    gameInfo._numberOfStayImgs / gameInfo.duration
  );
  ctx.drawImage(
    heroStatus.imgs[statusImgsNumber],
    heroPositionX,
    heroStatus.positionY,
    heroStatus.width,
    heroStatus.height
  );
  ctx.drawImage(
    monsterStatus.imgs[statusImgsNumber],
    monsterPositionX,
    monsterStatus.positionY,
    monsterStatus.width,
    monsterStatus.height
  );
  const numberOfLastImg = heroStatus.imgs.length - 1;
  if (statusImgsNumber !== numberOfLastImg) {
    gameInfo._numberOfStayImgs += 1;
  } else {
    if (monsterStatus.health === 0) {
      nextRound();
    }
    if (heroStatus.health === 0) {
			showStatistic();
			return 0;
    }
    gameInfo._numberOfStayImgs = 0;
  }
}

let heroPositionX = heroStatus.positionX;
let monsterPositionX = monsterStatus.positionX;

function main() {
  button.addEventListener('click', doSpell);
  window.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      doSpell();
    }
  });
  function draw() {
    checkSpell();
    switch (gameInfo._gameStatus) {
      case 'heroRun': {
        heroRunHandler();
        break;
      }
      case 'heroAttack': {
        heroAttackHandler();
        break;
      }
      case 'heroRunBack': {
        heroRunBackHandler();
        break;
      }
      case 'monsterRun': {
        monsterRunHandler();
        break;
      }
      case 'monsterAttack': {
        monsterAttackHandler();
        break;
      }
      case 'monsterRunBack': {
        monsterRunBackHandler();
        break;
      }
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (drawCharacters() === 0) {
      return 0;
    }
    window.requestAnimationFrame(draw);
  }
  return draw();
}

function initName() {
  const firstName = document.querySelector('#firstName').value;
	const lastName = document.querySelector('#lastName').value;
	initMonsterName();
  initHeroName(`${firstName} ${lastName}`);
}
function changeScene() {
  document.querySelector('form').style.display = 'none';
  document.querySelector('.main').style.display = 'block';
  document.querySelector('main').classList.add('mainInBattle');
}

function runGame() {
  characterAction.heroStay(heroStatus.imgs);
  characterAction.monsterStay(monsterStatus.imgs);
  startGameButton.addEventListener('click', () => {
    changeScene();
    initName();
    sounds.playBackground();
    displayRound();
    drawStrips(gameInfo.countBlockAtStrips);
  });
	main();
}

window.onload = runGame();
