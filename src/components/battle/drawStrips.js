const leftStrip = document.querySelector('#leftStrip');
const rightStrip = document.querySelector('#rightStrip');

module.exports = function(countBlockAtStrips) {
  const width = leftStrip.clientWidth / countBlockAtStrips;
  for (let i = 0; i < countBlockAtStrips; i++) {
    const block = document.createElement('div');
    block.style.width = width + 'px';
    block.style.height = '100%';
    block.style.float = 'left';
    leftStrip.appendChild(block);
  }
  for (let i = 0; i < countBlockAtStrips; i++) {
    const block = document.createElement('div');
    block.style.width = width + 'px';
    block.style.height = '100%';
    block.style.float = 'left';
    rightStrip.appendChild(block);
	}
}
