/*self-defined words:
attention. 
note. 
remember. 
SMR. 
topic. 
*/
window.addEventListener('DOMContentLoaded', function(){




//★★★★★★★ 026 timer v2.3★★★★★★★
(function(global) {

　　



let loc = document.querySelector('#id026');
let btnStart = loc.querySelector('.start');
let btnPause = loc.querySelector('.pause');
let btnClear = loc.querySelector('.clear');
let works = loc.querySelector('.work');
let breaks = loc.querySelector('.break');
let cycles = loc.querySelector('.cycles');
let hrs = loc.querySelector('.hour');
let mins = loc.querySelector('.minute');
let secs = loc.querySelector('.second');
let cycleShow = loc.querySelector('.cycleShow');
let mobile = loc.querySelector('.mobile');
let audio = loc.querySelector('audio');
let enableMobileAudio = false;


document.addEventListener('touchstart', touch);
function touch() {
	// alert(22);
	enableMobileAudio = true;
	mobile.innerHTML = `<audio id="myAudio" >
    <source src="audio/vibraphone.mp3" type="audio/mpeg">
  </audio>`;
	let audio = loc.querySelector('audio');
}

let timeLeft = cycles.nextElementSibling;
let timer1 = {};
let timeSec = 0;
let sec1 = null;
let timeLeftValue = 0;
let timeLeftSec = 0;
let	timer2 = {};		
let emptyDetect = false;
let run = true;
let anyNaN = true;
btnPause.disabled = true;
btnStart.disabled = true;
works.addEventListener('keyup',function() {
	timeLeftSec = 
	(parseFloat(works.value)  + 
		parseFloat(breaks.value))* 
		parseFloat(cycles.value)*60;
		console.log(timeLeftSec);
		timer2 = new HycTimer(timeLeftSec);	
	anyNaN = isNaN(timer2.hours) || 
	isNaN(timer2.minutes) ||
	isNaN(timer2.seconds) ||
	!Number.isInteger(parseFloat(cycles.value)) ||
	parseFloat(works.value)<= 0 ||
	parseFloat(breaks.value)<= 0 ||
	parseFloat(cycles.value)< 1;
	timeLeft.innerHTML = anyNaN? 'Wait...' :
	`${timer2.hours} : ${timer2.minutes} : ${timer2.seconds}`;
	btnStart.disabled = anyNaN;
});
breaks.addEventListener('keyup',function() {
	timeLeftSec = 
	(parseFloat(works.value)  + 
		parseFloat(breaks.value))* 
		parseFloat(cycles.value)*60;
		console.log(timeLeftSec);
	timer2 = new HycTimer(timeLeftSec);	
	anyNaN = isNaN(timer2.hours) || 
	isNaN(timer2.minutes) ||
	isNaN(timer2.seconds) ||
	!Number.isInteger(parseFloat(cycles.value)) ||
	parseFloat(works.value)<= 0 ||
	parseFloat(breaks.value)<= 0 ||
	parseFloat(cycles.value)< 1;
	timeLeft.innerHTML = anyNaN? 'Wait...' :
	`${timer2.hours} : ${timer2.minutes} : ${timer2.seconds}`;
	btnStart.disabled = anyNaN;
});
cycles.addEventListener('keyup',function() {
	
	timeLeftSec = 
	( parseFloat(works.value)  + 
		parseFloat(breaks.value))* 
		parseFloat(cycles.value)*60;
		console.log(timeLeftSec);
		timer2 = new HycTimer(timeLeftSec);	
	anyNaN = isNaN(timer2.hours) || 
	isNaN(timer2.minutes) ||
	isNaN(timer2.seconds) ||
	!Number.isInteger(parseFloat(cycles.value)) ||
	parseFloat(works.value)<= 0 ||
	parseFloat(breaks.value)<= 0 ||
	parseFloat(cycles.value)< 1;
	timeLeft.innerHTML = anyNaN? 'Wait...' :
	`${timer2.hours} : ${timer2.minutes} : ${timer2.seconds}`;
	btnStart.disabled = anyNaN;
});

// console.log(timeLeft);
btnStart.addEventListener('click', function() {
	let cyclesNo = 0;
	let startWork = true;
	let termination = false;
	btnStart.disabled = true;
	btnPause.disabled = false;
	works.disabled = true;
	breaks.disabled = true;
	cycles.disabled = true;
	timeLeftSec = 
	(parseFloat(works.value)  + 
		parseFloat(breaks.value))* 
		parseFloat(cycles.value)*60;
		console.log(timeLeftSec);
	timer2 = new HycTimer(timeLeftSec);	
	anyNaN = isNaN(timer2.hours) || 
	isNaN(timer2.minutes) ||
	isNaN(timer2.seconds) ||
	!Number.isInteger(parseFloat(cycles.value)) ||
	parseFloat(works.value)<= 0 ||
	parseFloat(breaks.value)<= 0 ||
	parseFloat(cycles.value)< 1;
	timeLeft.innerHTML = anyNaN? 'Wait...' :
	`${timer2.hours} : ${timer2.minutes} : ${timer2.seconds}`;

	cycleShow.innerHTML = 
		`Current Cycle: ${cyclesNo + 1}`;

	if(sec1) {
		clearInterval(sec1);
		// prevent setInterval from accumulated running
	}
	// while(1){

		run = true;
		
		timeSec = works.value * 60;
		timer1 = new HycTimer(timeSec);
		hrs.innerHTML = timer1.hours;
		mins.innerHTML = timer1.minutes;
		secs.innerHTML = timer1.seconds;
		// timer1 = new HycTimer(timeSec);

	  sec1 = setInterval(function() {
	  	
	  	cycleShow.innerHTML = 
				`Current Cycle: ${cyclesNo + 1}`;
	  	if(termination) {
	  		termination = false;
	  		if(startWork) {
					timeSec = works.value * 60 ;
				} else {
					timeSec = breaks.value * 60;
				}
	  	}
	  	
	  	if (run) { 
	  		timeSec--; 
	  		timeLeftSec--;
					timer2 = new HycTimer(timeLeftSec);	
					timeLeft.innerHTML = 
					`${timer2.hours} : ${timer2.minutes} : ${timer2.seconds}`;
	  	}
			timer1 = new HycTimer(timeSec);
			// console.log(timeSec);
			hrs.innerHTML = timer1.hours;
			mins.innerHTML = timer1.minutes;
			secs.innerHTML = timer1.seconds;
			// console.log(sec1);

			if (timeSec <= 0) {
				termination = true;
				
				
				timeSec = 0;
				timer1 = new HycTimer(timeSec);
				// console.log(timeSec);
				hrs.innerHTML = timer1.hours;
				mins.innerHTML = timer1.minutes;
				secs.innerHTML = timer1.seconds;
				if(enableMobileAudio) {
					audio.load();
					audio.play();
				}
					audio.load();
					audio.play();
				
				
				if(startWork==false) {
					cyclesNo++;
				}
				if (cyclesNo == cycles.value) {
					
					timeLeftSec = 0;
	
					timer2 = new HycTimer(timeLeftSec);	
					timeLeft.innerHTML = 
					`${timer2.hours} : ${timer2.minutes} : ${timer2.seconds}`;
					btnPause.innerHTML = 'Pause';
					btnPause.style.backgroundColor = '#ffb3b3';
					btnPause.disabled = true;
					btnStart.disabled = anyNaN;
						works.disabled = false;
					breaks.disabled = false;
					cycles.disabled = false;
					clearInterval(sec1);
				}
				// console.log(cycles.value);
				// console.log(cyclesNo);
				startWork = startWork? false : true;
			} 
		}, 1000);
		
		
	// }


});

btnPause.addEventListener('click', function() {
	console.log(timeSec);
	run = !run;
	if(run) {
		this.innerHTML = 'Pause';
		this.style.backgroundColor = '#ffb3b3';
	} else {
		this.innerHTML = 'Relaunch';
		this.style.backgroundColor = '#bfff00';
	}

});
btnClear.addEventListener('click', function() {
	clearInterval(sec1);
	timeSec = 0;
	timer1 = new HycTimer(timeSec);
	// console.log(timeSec);
	hrs.innerHTML = timer1.hours;
	mins.innerHTML = timer1.minutes;
	secs.innerHTML = timer1.seconds;

timeLeftSec = 
	(parseFloat(works.value)  + 
		parseFloat(breaks.value))* 
		parseFloat(cycles.value)*60;
		console.log(timeLeftSec);
		timer2 = new HycTimer(timeLeftSec);	
		anyNaN = isNaN(timer2.hours) || 
	isNaN(timer2.minutes) ||
	isNaN(timer2.seconds) ||
	!Number.isInteger(parseFloat(cycles.value)) ||
	parseFloat(works.value)<= 0 ||
	parseFloat(breaks.value)<= 0 ||
	parseFloat(cycles.value)< 1;
	timeLeft.innerHTML = anyNaN? 'Wait...' :
	`${timer2.hours} : ${timer2.minutes} : ${timer2.seconds}`;
		btnPause.innerHTML = 'Pause';
		btnPause.style.backgroundColor = '#ffb3b3';
		btnPause.disabled = true;
		btnStart.disabled = anyNaN;
			works.disabled = false;
		breaks.disabled = false;
		cycles.disabled = false;
});






})(window);

}); // DOMContentLoaded