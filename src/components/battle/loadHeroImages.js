const stayHeroImg0 = new Image();
stayHeroImg0.src = '../../screens/battle/images/hero/1_IDLE_000.png';
const stayHeroImg1 = new Image();
stayHeroImg1.src = '../../screens/battle/images/hero/1_IDLE_001.png';
const stayHeroImg2 = new Image();
stayHeroImg2.src = '../../screens/battle/images/hero/1_IDLE_002.png';
const stayHeroImg3 = new Image();
stayHeroImg3.src = '../../screens/battle/images/hero/1_IDLE_003.png';
const stayHeroImg4 = new Image();
stayHeroImg4.src = '../../screens/battle/images/hero/1_IDLE_004.png';
const stayHeroImgs = [stayHeroImg0, stayHeroImg1, stayHeroImg2, stayHeroImg3, stayHeroImg4];

const runHeroImg0 = new Image();
runHeroImg0.src = '../../screens/battle/images/hero/3_RUN_000.png';
const runHeroImg1 = new Image();
runHeroImg1.src = '../../screens/battle/images/hero/3_RUN_001.png';
const runHeroImg2 = new Image();
runHeroImg2.src = '../../screens/battle/images/hero/3_RUN_002.png';
const runHeroImg3 = new Image();
runHeroImg3.src = '../../screens/battle/images/hero/3_RUN_003.png';
const runHeroImg4 = new Image();
runHeroImg4.src = '../../screens/battle/images/hero/3_RUN_004.png';
const runHeroImgs = [runHeroImg0, runHeroImg1, runHeroImg2, runHeroImg3, runHeroImg4];

const attackHeroImg0 = new Image();
attackHeroImg0.src = '../../screens/battle/images/hero/5_ATTACK_000.png';
const attackHeroImg1 = new Image();
attackHeroImg1.src = '../../screens/battle/images/hero/5_ATTACK_001.png';
const attackHeroImg2 = new Image();
attackHeroImg2.src = '../../screens/battle/images/hero/5_ATTACK_002.png';
const attackHeroImg3 = new Image();
attackHeroImg3.src = '../../screens/battle/images/hero/5_ATTACK_003.png';
const attackHeroImg4 = new Image();
attackHeroImg4.src = '../../screens/battle/images/hero/5_ATTACK_004.png';
const attackHeroImgs = [attackHeroImg0, attackHeroImg1, attackHeroImg2, attackHeroImg3, attackHeroImg4];

const diedHeroImg0 = new Image();
diedHeroImg0.src = '../../screens/battle/images/hero/7_DIE_000.png';
const diedHeroImg1 = new Image();
diedHeroImg1.src = '../../screens/battle/images/hero/7_DIE_002.png';
const diedHeroImg2 = new Image();
diedHeroImg2.src = '../../screens/battle/images/hero/7_DIE_004.png';
const diedHeroImg3 = new Image();
diedHeroImg3.src = '../../screens/battle/images/hero/7_DIE_006.png';
const diedHeroImg4 = new Image();
diedHeroImg4.src = '../../screens/battle/images/hero/7_DIE_009.png';
diedHeroImgs = [diedHeroImg0, diedHeroImg1, diedHeroImg2, diedHeroImg3, diedHeroImg4];

const heroImgs = {
	stay: stayHeroImgs,
	run: runHeroImgs,
	attack: attackHeroImgs,
	died: diedHeroImgs,
}
module.exports = heroImgs;
