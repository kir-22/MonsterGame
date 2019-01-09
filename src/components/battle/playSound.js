function play(src) {
	const audio = new Audio();
	audio.src = src;
	audio.addEventListener('error' , function() {
		alert('ошибка загрузки файла');
	}, false);
	audio.autoplay = true;
	audio.loop = true;
	audio.play();
}

module.exports = {
	playBackground: () => {
		play('sounds/Obliteration.mp3');
	},
}
