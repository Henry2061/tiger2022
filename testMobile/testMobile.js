let mobile = document.querySelector('.mobile');
let audio = document.querySelector('#myAudio');
let btn = document.querySelector('button');



btn.addEventListener('click', function() {

	setInterval(function() {
		audio.load();
		audio.play();
	}, 5000); 
	
	// alert(11);
});