const gameInfo = {
	duration: 10,
	characterSpeedInfo: 20,
	characterSpeedInfoBack: 60,
	countBlockAtStrips: 4,
	gaps: {
		whenHeroRun: 80,
		whenHeroRunBack: 80,
		whenMonsterRun: 70,
		whenMonsterRunBack: 80,
		whenMonsterDied: 60,
		whenMonsterDiedY: 20,
	},
	_numberOfStayImgs: 0,
	_gameStatus: 'stay',
	_countOfAttack: 0,
	_currentRound: 1,
}

module.exports = gameInfo;
