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
let audio = loc.querySelector('audio');

let timeLeft = cycles.nextElementSibling;
let timer1 = {};
let timeSec = 0;
let sec1 = null;
let timeLeftValue = 0;
let timeLeftSec = 0;
let	timer2 = {};		
let emptyDetect = false;
let run = true;
works.addEventListener('keyup',function() {
	timeLeftSec = 
	(parseFloat(works.value)  + 
		parseFloat(breaks.value))* 
		parseFloat(cycles.value)*60;
		console.log(timeLeftSec);
		timer2 = new HycTimer(timeLeftSec);	
		timeLeft.innerHTML = 
		`${timer2.hours} : ${timer2.minutes} : ${timer2.seconds}`;
});
breaks.addEventListener('keyup',function() {
	timeLeftSec = 
	(parseFloat(works.value)  + 
		parseFloat(breaks.value))* 
		parseFloat(cycles.value)*60;
		console.log(timeLeftSec);
	timer2 = new HycTimer(timeLeftSec);	
	timeLeft.innerHTML = 
	`${timer2.hours} : ${timer2.minutes} : ${timer2.seconds}`;
});
cycles.addEventListener('keyup',function() {
	timeLeftSec = 
	(parseFloat(works.value)  + 
		parseFloat(breaks.value))* 
		parseFloat(cycles.value)*60;
		console.log(timeLeftSec);
		timer2 = new HycTimer(timeLeftSec);	
	timeLeft.innerHTML = 
	`${timer2.hours} : ${timer2.minutes} : ${timer2.seconds}`;
});

// console.log(timeLeft);
btnStart.addEventListener('click', function() {
	let cyclesNo = 0;
	let startWork = true;
	let termination = false;
	

	cycleShow.innerHTML = 
		`Current Cycle No.: ${cyclesNo + 1}`;

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
				`Current Cycle No.: ${cyclesNo + 1}`;
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
				audio.play();
				
				
				if(startWork==false) {
					cyclesNo++;
				}
				if (cyclesNo == cycles.value) {
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
		this.style.backgroundColor = '#a22';
	} else {
		this.innerHTML = 'Relaunch';
		this.style.backgroundColor = '#2a2';
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
		timeLeft.innerHTML = 
		`${timer2.hours} : ${timer2.minutes} : ${timer2.seconds}`;
	timer2 = new HycTimer(timeLeftSec);	
					timeLeft.innerHTML = 
					`${timer2.hours} : ${timer2.minutes} : ${timer2.seconds}`;
});






})(window);
//★★★★★★★ 027 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id027');

})(window);
//★★★★★★★ 028 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id028');

})(window);
//★★★★★★★ 029 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id029');

})(window);
//★★★★★★★ 030 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id030');

})(window);
//★★★★★★★ 031 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id031');

})(window);
//★★★★★★★ 032 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id032');

})(window);
//★★★★★★★ 033 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id033');

})(window);
//★★★★★★★ 034 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id034');

})(window);
//★★★★★★★ 035 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id035');

})(window);
//★★★★★★★ 036 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id036');

})(window);
//★★★★★★★ 037 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id037');

})(window);
//★★★★★★★ 038 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id038');

})(window);
//★★★★★★★ 039 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id039');

})(window);
//★★★★★★★ 040 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id040');

})(window);
//★★★★★★★ 041 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id041');

})(window);
//★★★★★★★ 042 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id042');

})(window);
//★★★★★★★ 043 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id043');

})(window);
//★★★★★★★ 044 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id044');

})(window);
//★★★★★★★ 045 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id045');

})(window);
//★★★★★★★ 046 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id046');

})(window);
//★★★★★★★ 047 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id047');

})(window);
//★★★★★★★ 048 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id048');

})(window);
//★★★★★★★ 049 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id049');

})(window);
//★★★★★★★ 050 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id050');

})(window);
//★★★★★★★ 051 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id051');

})(window);
//★★★★★★★ 052 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id052');

})(window);
//★★★★★★★ 053 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id053');

})(window);
//★★★★★★★ 054 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id054');

})(window);
//★★★★★★★ 055 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id055');

})(window);
//★★★★★★★ 056 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id056');

})(window);
//★★★★★★★ 057 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id057');

})(window);
//★★★★★★★ 058 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id058');

})(window);
//★★★★★★★ 059 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id059');

})(window);
//★★★★★★★ 060 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id060');

})(window);
//★★★★★★★ 061 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id061');

})(window);
//★★★★★★★ 062 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id062');

})(window);
//★★★★★★★ 063 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id063');

})(window);
//★★★★★★★ 064 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id064');

})(window);
//★★★★★★★ 065 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id065');

})(window);
//★★★★★★★ 066 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id066');

})(window);
//★★★★★★★ 067 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id067');

})(window);
//★★★★★★★ 068 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id068');

})(window);
//★★★★★★★ 069 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id069');

})(window);
//★★★★★★★ 070 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id070');

})(window);
//★★★★★★★ 071 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id071');

})(window);
//★★★★★★★ 072 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id072');

})(window);
//★★★★★★★ 073 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id073');

})(window);
//★★★★★★★ 074 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id074');

})(window);
//★★★★★★★ 075 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id075');

})(window);
//★★★★★★★ 076 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id076');

})(window);
//★★★★★★★ 077 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id077');

})(window);
//★★★★★★★ 078 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id078');

})(window);
//★★★★★★★ 079 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id079');

})(window);
//★★★★★★★ 080 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id080');

})(window);
//★★★★★★★ 081 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id081');

})(window);
//★★★★★★★ 082 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id082');

})(window);
//★★★★★★★ 083 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id083');

})(window);
//★★★★★★★ 084 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id084');

})(window);
//★★★★★★★ 085 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id085');

})(window);
//★★★★★★★ 086 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id086');

})(window);
//★★★★★★★ 087 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id087');

})(window);
//★★★★★★★ 088 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id088');

})(window);
//★★★★★★★ 089 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id089');

})(window);
//★★★★★★★ 090 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id090');

})(window);
//★★★★★★★ 091 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id091');

})(window);
//★★★★★★★ 092 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id092');

})(window);
//★★★★★★★ 093 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id093');

})(window);
//★★★★★★★ 094 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id094');

})(window);
//★★★★★★★ 095 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id095');

})(window);
//★★★★★★★ 096 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id096');

})(window);
//★★★★★★★ 097 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id097');

})(window);
//★★★★★★★ 098 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id098');

})(window);
//★★★★★★★ 099 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id099');

})(window);
//★★★★★★★ 100 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id100');

})(window);
//★★★★★★★ 101 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id101');

})(window);
//★★★★★★★ 102 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id102');

})(window);
//★★★★★★★ 103 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id103');

})(window);
//★★★★★★★ 104 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id104');

})(window);
//★★★★★★★ 105 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id105');

})(window);
//★★★★★★★ 106 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id106');

})(window);
//★★★★★★★ 107 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id107');

})(window);
//★★★★★★★ 108 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id108');

})(window);
//★★★★★★★ 109 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id109');

})(window);
//★★★★★★★ 110 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id110');

})(window);
//★★★★★★★ 111 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id111');

})(window);
//★★★★★★★ 112 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id112');

})(window);
//★★★★★★★ 113 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id113');

})(window);
//★★★★★★★ 114 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id114');

})(window);
//★★★★★★★ 115 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id115');

})(window);
//★★★★★★★ 116 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id116');

})(window);
//★★★★★★★ 117 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id117');

})(window);
//★★★★★★★ 118 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id118');

})(window);
//★★★★★★★ 119 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id119');

})(window);
//★★★★★★★ 120 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id120');

})(window);
//★★★★★★★ 121 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id121');

})(window);
//★★★★★★★ 122 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id122');

})(window);
//★★★★★★★ 123 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id123');

})(window);
//★★★★★★★ 124 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id124');

})(window);
//★★★★★★★ 125 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id125');

})(window);
//★★★★★★★ 126 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id126');

})(window);
//★★★★★★★ 127 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id127');

})(window);
//★★★★★★★ 128 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id128');

})(window);
//★★★★★★★ 129 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id129');

})(window);
//★★★★★★★ 130 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id130');

})(window);
//★★★★★★★ 131 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id131');

})(window);
//★★★★★★★ 132 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id132');

})(window);
//★★★★★★★ 133 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id133');

})(window);
//★★★★★★★ 134 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id134');

})(window);
//★★★★★★★ 135 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id135');

})(window);
//★★★★★★★ 136 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id136');

})(window);
//★★★★★★★ 137 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id137');

})(window);
//★★★★★★★ 138 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id138');

})(window);
//★★★★★★★ 139 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id139');

})(window);
//★★★★★★★ 140 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id140');

})(window);
//★★★★★★★ 141 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id141');

})(window);
//★★★★★★★ 142 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id142');

})(window);
//★★★★★★★ 143 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id143');

})(window);
//★★★★★★★ 144 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id144');

})(window);
//★★★★★★★ 145 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id145');

})(window);
//★★★★★★★ 146 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id146');

})(window);
//★★★★★★★ 147 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id147');

})(window);
//★★★★★★★ 148 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id148');

})(window);
//★★★★★★★ 149 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id149');

})(window);
//★★★★★★★ 150 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id150');

})(window);
//★★★★★★★ 151 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id151');

})(window);
//★★★★★★★ 152 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id152');

})(window);
//★★★★★★★ 153 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id153');

})(window);
//★★★★★★★ 154 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id154');

})(window);
//★★★★★★★ 155 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id155');

})(window);
//★★★★★★★ 156 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id156');

})(window);
//★★★★★★★ 157 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id157');

})(window);
//★★★★★★★ 158 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id158');

})(window);
//★★★★★★★ 159 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id159');

})(window);
//★★★★★★★ 160 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id160');

})(window);
//★★★★★★★ 161 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id161');

})(window);
//★★★★★★★ 162 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id162');

})(window);
//★★★★★★★ 163 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id163');

})(window);
//★★★★★★★ 164 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id164');

})(window);
//★★★★★★★ 165 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id165');

})(window);
//★★★★★★★ 166 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id166');

})(window);
//★★★★★★★ 167 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id167');

})(window);
//★★★★★★★ 168 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id168');

})(window);
//★★★★★★★ 169 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id169');

})(window);
//★★★★★★★ 170 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id170');

})(window);
//★★★★★★★ 171 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id171');

})(window);
//★★★★★★★ 172 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id172');

})(window);
//★★★★★★★ 173 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id173');

})(window);
//★★★★★★★ 174 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id174');

})(window);
//★★★★★★★ 175 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id175');

})(window);
//★★★★★★★ 176 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id176');

})(window);
//★★★★★★★ 177 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id177');

})(window);
//★★★★★★★ 178 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id178');

})(window);
//★★★★★★★ 179 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id179');

})(window);
//★★★★★★★ 180 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id180');

})(window);
//★★★★★★★ 181 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id181');

})(window);
//★★★★★★★ 182 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id182');

})(window);
//★★★★★★★ 183 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id183');

})(window);
//★★★★★★★ 184 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id184');

})(window);
//★★★★★★★ 185 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id185');

})(window);
//★★★★★★★ 186 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id186');

})(window);
//★★★★★★★ 187 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id187');

})(window);
//★★★★★★★ 188 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id188');

})(window);
//★★★★★★★ 189 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id189');

})(window);
//★★★★★★★ 190 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id190');

})(window);
//★★★★★★★ 191 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id191');

})(window);
//★★★★★★★ 192 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id192');

})(window);
//★★★★★★★ 193 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id193');

})(window);
//★★★★★★★ 194 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id194');

})(window);
//★★★★★★★ 195 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id195');

})(window);
//★★★★★★★ 196 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id196');

})(window);
//★★★★★★★ 197 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id197');

})(window);
//★★★★★★★ 198 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id198');

})(window);
//★★★★★★★ 199 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id199');

})(window);
//★★★★★★★ 200 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id200');

})(window);
//★★★★★★★ 201 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id201');

})(window);
//★★★★★★★ 202 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id202');

})(window);
//★★★★★★★ 203 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id203');

})(window);
//★★★★★★★ 204 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id204');

})(window);
//★★★★★★★ 205 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id205');

})(window);
//★★★★★★★ 206 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id206');

})(window);
//★★★★★★★ 207 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id207');

})(window);
//★★★★★★★ 208 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id208');

})(window);
//★★★★★★★ 209 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id209');

})(window);
//★★★★★★★ 210 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id210');

})(window);
//★★★★★★★ 211 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id211');

})(window);
//★★★★★★★ 212 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id212');

})(window);
//★★★★★★★ 213 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id213');

})(window);
//★★★★★★★ 214 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id214');

})(window);
//★★★★★★★ 215 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id215');

})(window);
//★★★★★★★ 216 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id216');

})(window);
//★★★★★★★ 217 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id217');

})(window);
//★★★★★★★ 218 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id218');

})(window);
//★★★★★★★ 219 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id219');

})(window);
//★★★★★★★ 220 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id220');

})(window);
//★★★★★★★ 221 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id221');

})(window);
//★★★★★★★ 222 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id222');

})(window);
//★★★★★★★ 223 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id223');

})(window);
//★★★★★★★ 224 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id224');

})(window);
//★★★★★★★ 225 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id225');

})(window);
//★★★★★★★ 226 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id226');

})(window);
//★★★★★★★ 227 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id227');

})(window);
//★★★★★★★ 228 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id228');

})(window);
//★★★★★★★ 229 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id229');

})(window);
//★★★★★★★ 230 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id230');

})(window);
//★★★★★★★ 231 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id231');

})(window);
//★★★★★★★ 232 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id232');

})(window);
//★★★★★★★ 233 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id233');

})(window);
//★★★★★★★ 234 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id234');

})(window);
//★★★★★★★ 235 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id235');

})(window);
//★★★★★★★ 236 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id236');

})(window);
//★★★★★★★ 237 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id237');

})(window);
//★★★★★★★ 238 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id238');

})(window);
//★★★★★★★ 239 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id239');

})(window);
//★★★★★★★ 240 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id240');

})(window);
//★★★★★★★ 241 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id241');

})(window);
//★★★★★★★ 242 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id242');

})(window);
//★★★★★★★ 243 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id243');

})(window);
//★★★★★★★ 244 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id244');

})(window);
//★★★★★★★ 245 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id245');

})(window);
//★★★★★★★ 246 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id246');

})(window);
//★★★★★★★ 247 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id247');

})(window);
//★★★★★★★ 248 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id248');

})(window);
//★★★★★★★ 249 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id249');

})(window);
//★★★★★★★ 250 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id250');

})(window);
//★★★★★★★ 251 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id251');

})(window);
//★★★★★★★ 252 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id252');

})(window);
//★★★★★★★ 253 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id253');

})(window);
//★★★★★★★ 254 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id254');

})(window);
//★★★★★★★ 255 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id255');

})(window);
//★★★★★★★ 256 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id256');

})(window);
//★★★★★★★ 257 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id257');

})(window);
//★★★★★★★ 258 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id258');

})(window);
//★★★★★★★ 259 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id259');

})(window);
//★★★★★★★ 260 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id260');

})(window);
//★★★★★★★ 261 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id261');

})(window);
//★★★★★★★ 262 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id262');

})(window);
//★★★★★★★ 263 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id263');

})(window);
//★★★★★★★ 264 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id264');

})(window);
//★★★★★★★ 265 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id265');

})(window);
//★★★★★★★ 266 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id266');

})(window);
//★★★★★★★ 267 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id267');

})(window);
//★★★★★★★ 268 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id268');

})(window);
//★★★★★★★ 269 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id269');

})(window);
//★★★★★★★ 270 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id270');

})(window);
//★★★★★★★ 271 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id271');

})(window);
//★★★★★★★ 272 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id272');

})(window);
//★★★★★★★ 273 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id273');

})(window);
//★★★★★★★ 274 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id274');

})(window);
//★★★★★★★ 275 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id275');

})(window);
//★★★★★★★ 276 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id276');

})(window);
//★★★★★★★ 277 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id277');

})(window);
//★★★★★★★ 278 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id278');

})(window);
//★★★★★★★ 279 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id279');

})(window);
//★★★★★★★ 280 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id280');

})(window);
//★★★★★★★ 281 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id281');

})(window);
//★★★★★★★ 282 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id282');

})(window);
//★★★★★★★ 283 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id283');

})(window);
//★★★★★★★ 284 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id284');

})(window);
//★★★★★★★ 285 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id285');

})(window);
//★★★★★★★ 286 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id286');

})(window);
//★★★★★★★ 287 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id287');

})(window);
//★★★★★★★ 288 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id288');

})(window);
//★★★★★★★ 289 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id289');

})(window);
//★★★★★★★ 290 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id290');

})(window);
//★★★★★★★ 291 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id291');

})(window);
//★★★★★★★ 292 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id292');

})(window);
//★★★★★★★ 293 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id293');

})(window);
//★★★★★★★ 294 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id294');

})(window);
//★★★★★★★ 295 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id295');

})(window);
//★★★★★★★ 296 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id296');

})(window);
//★★★★★★★ 297 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id297');

})(window);
//★★★★★★★ 298 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id298');

})(window);
//★★★★★★★ 299 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id299');

})(window);
//★★★★★★★ 300 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id300');

})(window);
//★★★★★★★ 301 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id301');

})(window);
//★★★★★★★ 302 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id302');

})(window);
//★★★★★★★ 303 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id303');

})(window);
//★★★★★★★ 304 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id304');

})(window);
//★★★★★★★ 305 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id305');

})(window);
//★★★★★★★ 306 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id306');

})(window);
//★★★★★★★ 307 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id307');

})(window);
//★★★★★★★ 308 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id308');

})(window);
//★★★★★★★ 309 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id309');

})(window);
//★★★★★★★ 310 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id310');

})(window);
//★★★★★★★ 311 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id311');

})(window);
//★★★★★★★ 312 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id312');

})(window);
//★★★★★★★ 313 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id313');

})(window);
//★★★★★★★ 314 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id314');

})(window);
//★★★★★★★ 315 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id315');

})(window);
//★★★★★★★ 316 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id316');

})(window);
//★★★★★★★ 317 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id317');

})(window);
//★★★★★★★ 318 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id318');

})(window);
//★★★★★★★ 319 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id319');

})(window);
//★★★★★★★ 320 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id320');

})(window);
//★★★★★★★ 321 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id321');

})(window);
//★★★★★★★ 322 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id322');

})(window);
//★★★★★★★ 323 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id323');

})(window);
//★★★★★★★ 324 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id324');

})(window);
//★★★★★★★ 325 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id325');

})(window);
//★★★★★★★ 326 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id326');

})(window);
//★★★★★★★ 327 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id327');

})(window);
//★★★★★★★ 328 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id328');

})(window);
//★★★★★★★ 329 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id329');

})(window);
//★★★★★★★ 330 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id330');

})(window);
//★★★★★★★ 331 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id331');

})(window);
//★★★★★★★ 332 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id332');

})(window);
//★★★★★★★ 333 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id333');

})(window);
//★★★★★★★ 334 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id334');

})(window);
//★★★★★★★ 335 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id335');

})(window);
//★★★★★★★ 336 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id336');

})(window);
//★★★★★★★ 337 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id337');

})(window);
//★★★★★★★ 338 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id338');

})(window);
//★★★★★★★ 339 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id339');

})(window);
//★★★★★★★ 340 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id340');

})(window);
//★★★★★★★ 341 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id341');

})(window);
//★★★★★★★ 342 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id342');

})(window);
//★★★★★★★ 343 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id343');

})(window);
//★★★★★★★ 344 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id344');

})(window);
//★★★★★★★ 345 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id345');

})(window);
//★★★★★★★ 346 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id346');

})(window);
//★★★★★★★ 347 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id347');

})(window);
//★★★★★★★ 348 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id348');

})(window);
//★★★★★★★ 349 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id349');

})(window);
//★★★★★★★ 350 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id350');

})(window);
//★★★★★★★ 351 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id351');

})(window);
//★★★★★★★ 352 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id352');

})(window);
//★★★★★★★ 353 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id353');

})(window);
//★★★★★★★ 354 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id354');

})(window);
//★★★★★★★ 355 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id355');

})(window);
//★★★★★★★ 356 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id356');

})(window);
//★★★★★★★ 357 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id357');

})(window);
//★★★★★★★ 358 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id358');

})(window);
//★★★★★★★ 359 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id359');

})(window);
//★★★★★★★ 360 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id360');

})(window);
//★★★★★★★ 361 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id361');

})(window);
//★★★★★★★ 362 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id362');

})(window);
//★★★★★★★ 363 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id363');

})(window);
//★★★★★★★ 364 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id364');

})(window);
//★★★★★★★ 365 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id365');

})(window);
//★★★★★★★ 366 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id366');

})(window);
//★★★★★★★ 367 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id367');

})(window);
//★★★★★★★ 368 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id368');

})(window);
//★★★★★★★ 369 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id369');

})(window);
//★★★★★★★ 370 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id370');

})(window);
//★★★★★★★ 371 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id371');

})(window);
//★★★★★★★ 372 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id372');

})(window);
//★★★★★★★ 373 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id373');

})(window);
//★★★★★★★ 374 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id374');

})(window);
//★★★★★★★ 375 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id375');

})(window);
//★★★★★★★ 376 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id376');

})(window);
//★★★★★★★ 377 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id377');

})(window);
//★★★★★★★ 378 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id378');

})(window);
//★★★★★★★ 379 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id379');

})(window);
//★★★★★★★ 380 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id380');

})(window);
//★★★★★★★ 381 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id381');

})(window);
//★★★★★★★ 382 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id382');

})(window);
//★★★★★★★ 383 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id383');

})(window);
//★★★★★★★ 384 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id384');

})(window);
//★★★★★★★ 385 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id385');

})(window);
//★★★★★★★ 386 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id386');

})(window);
//★★★★★★★ 387 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id387');

})(window);
//★★★★★★★ 388 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id388');

})(window);
//★★★★★★★ 389 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id389');

})(window);
//★★★★★★★ 390 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id390');

})(window);
//★★★★★★★ 391 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id391');

})(window);
//★★★★★★★ 392 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id392');

})(window);
//★★★★★★★ 393 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id393');

})(window);
//★★★★★★★ 394 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id394');

})(window);
//★★★★★★★ 395 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id395');

})(window);
//★★★★★★★ 396 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id396');

})(window);
//★★★★★★★ 397 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id397');

})(window);
//★★★★★★★ 398 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id398');

})(window);
//★★★★★★★ 399 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id399');

})(window);
//★★★★★★★ 400 ★★★★★★★
(function(global) {
let loc = document.querySelector('#id400');

})(window);
}); // DOMContentLoaded