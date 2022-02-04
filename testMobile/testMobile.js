let mobile = document.querySelector('.mobile');
let audio = document.querySelector('#myAudio');
let btn = document.querySelector('button');



btn.addEventListener('click', function() {
	audio.load();
	audio.play();
	// alert(11);
});