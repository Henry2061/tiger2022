/*self-defined words:
attention. 
note. 
remember. 
SMR. 
topic. 
*/
window
.addEventListener(
	'DOMContentLoaded', function(){

//★★★★★★★ 026 timer 2v4★★★★★★★
(function (global) {
let loc = document.querySelector('#id026');

let intervalMain = null;
let intervalStopWatch = null;
let titleModule = {
	titleEle: document.querySelector('.title'),
	displayTitleWork: function (cycle, workCycle) {
		this.titleEle.innerHTML = 
		`W#${cycle}: ${displaySecs(workCycle)} Work`;
		this.titleEle.display = 'none';
	},
	displayTitleBreak: function (breakCycle) {
		this.titleEle.innerHTML = 
		`B#${cycle}: ${displaySecs(breakCycle)} Break`;
	},
	displayTitleStopW: function (stopWatch) {
		this.titleEle.innerHTML = 
		`${displaySecs(stopWatch)}`;
	},
	displayReset: function () {
		this.titleEle.innerHTML = 
		`Tiger Timer 2v4`;
	}
};

let inputModule = {
	inputEle: loc.querySelector('.line1'),
	workEle: loc.querySelector('.work'),
	breakEle: loc.querySelector('.break'),
	cycleEle: loc.querySelector('.cycle'),
	totalEle: loc.querySelector('.total'),

	inputDisabled: function (Boo) {
		this.workEle.disabled = Boo;
		this.breakEle.disabled = Boo;
		this.cycleEle.disabled = Boo;
		// attention: disabled works for input
	},
	getWorkValue: function() {
		return parseFloat(this.workEle.value)*60;
	},
	getBreakValue: function() {
		return parseFloat(this.breakEle.value)*60;
	},
	getCycleValue: function() {
		return parseFloat(this.cycleEle.value);
	},
	getTotalSecs: function () {
		let temp = (this.getWorkValue() +
			this.getBreakValue()) *
		this.getCycleValue();
		return temp;
	},
	anyZero: function () {
		return	this.getWorkValue() == 0 || 
		this.getBreakValue() == 0;
	},
	isReady: function () {
		let temp =
		this.getWorkValue() > 0 &&
		this.getBreakValue() > 0 &&
		(this.getWorkValue() + 
			this.getBreakValue()) > 0 &&
		this.getCycleValue() >=1 &&
		Number.isInteger(this.getCycleValue());
		console.log(temp)
		console.log(this.getWorkValue() + 
			this.getBreakValue())
		return temp;
		// console.log(temp)
	}
	
};

let countdownModule = {
	totalEle: 
		loc.querySelector('.total'),
	countdownEle: 
		loc.querySelector('.countdown'),
	progressEle: loc.querySelector('.progress'),
	cycleNoEle: 
		loc.querySelector('.cycleNo'),
	displayMain: function(secs) {
		//attention. miss arguement of function 
		this.countdownEle.innerHTML = 
		`${displaySecs(secs)}`;
	},
	countDownMode: function() {
		this.totalEle.innerHTML =
			`Countdown  --:--:--`; 
	},
	stopWatchMode: function() {
		this.totalEle.innerHTML = 
			`Stopwatch`; 
	},
	displayProgress: function (ratio) {
		this.progressEle.style.width = `${ratio*100}%`;
	},
	displayTotal: function() {
		if(inputModule.isReady()) {
			this.totalEle.innerHTML = 
			`Countdown: ${displaySecs(inputModule.getTotalSecs())}`;
		} 
		else {
			this.totalEle.innerHTML = 
			`Stopwatch / Countdown`;

		} 
	},
	displayTimeLeft: function(secs) {
		if(inputModule.isReady()) {
		this.totalEle.innerHTML = 
		`Countdown: ${displaySecs(secs)}`;
		} else {
			this.totalEle.innerHTML = 
			`Stopwatch / Countdown`;
		}
	},
	displayCycleNo: function(cycle) {
		this.cycleNoEle.innerHTML =
	 `#Cycle: ${cycle}`;
	} 
};

let btnModule = {
	startBtnEle: 
		loc.querySelector('.btn').children[0],
	resetBtnEle: 
		loc.querySelector('.btn').children[1],
	skipBtnEle:
		loc.querySelector('.btn').children[2],
	start: false,
	stop: false,
	reset: false,
	skip: false,
	btnState: 'ready',
	startDisabled: function (Boo) {
		this.startBtnEle.disabled = Boo;
		if(Boo) {
		this.startBtnEle.style
			.backgroundColor = 'initial';
		} else {
			this.startBtnEle.style
			.backgroundColor = 'white';
		}	
	},
	resetDisabled: function (Boo) {
		this.resetBtnEle.disabled = Boo;
		if(Boo) {
		this.resetBtnEle.style
			.backgroundColor = 'initial';
		} else {
			this.resetBtnEle.style
			.backgroundColor = 'white';
		}	
	},
	skipDisabled: function (Boo) {
		this.skipBtnEle.disabled = Boo;
		if(Boo) {
		this.skipBtnEle.style
			.backgroundColor = 'initial';
		} else {
			this.skipBtnEle.style
			.backgroundColor = 'white';
		}	
	},
	changeStopApparence: function() {
		this.startBtnEle.innerHTML = 'STOP';
		// this.startBtnEle.style.backgroundColor =
		// 'rgb(302, 210, 123)';
	},
	changeStartApparence: function() {
		this.startBtnEle.innerHTML = 'START';
		// this.startBtnEle.style.backgroundColor =
		// 'rgb(239, 75, 23);';
	}
}; 

let recordModule = {
	workRecordEle: 
	loc
	.querySelector('.record').children[0],
	breakRecordEle: 
	loc
	.querySelector('.record').children[1],

	displayWorkRecord: function (secs) {
		return `Work: ${displaySecs(secs)}`;
	},
	displayBreakRecord: function (secs) {
		return `Break: ${displaySecs(secs)}`;
	},
	workLight: function (Boo) {
		if(Boo) {
			this.workRecordEle.style
			// .backgroundColor = 'rgb(239, 75, 23)';
			.backgroundColor = 'rgb(229, 104, 80)';

			this.workRecordEle.style
			.boxShadow = '0 5px 5px darkred';
			this.workRecordEle.style
			.borderRadius = '8px';
		} else {
			this.workRecordEle.style
			.backgroundColor = 'inherit';
			this.workRecordEle.style
			.boxShadow = 'none';
		}
	},
	breakLight: function (Boo) {
		if(Boo) {
			this.breakRecordEle.style
			// .backgroundColor = 'rgb(239, 75, 23)';
			.backgroundColor = 'rgb(229, 104, 80)';

			this.breakRecordEle.style
			.boxShadow = '0 5px 5px darkred';
			this.breakRecordEle.style
			.borderRadius = '8px';
		} else {
			this.breakRecordEle.style
			.backgroundColor = 'inherit';
			this.breakRecordEle.style
			.boxShadow = 'none';
		}
	}
}; 

let audioModule = {
	audioEle0: loc.querySelector('.audio').children[0],
	audioEle1: loc.querySelector('.audio').children[1],
	audioEle2: loc.querySelector('.audio').children[2],
	playAudio: function(i, muteB, loadB, playB) {
		loc.querySelector('.audio').children[i].muted = muteB;
		if(loadB) {loc.querySelector('.audio').children[i].load();}
		if(playB) {loc.querySelector('.audio').children[i].play();}
	}
};

// functions
function displaySecs (secs) {
	let HycTimer1 = new HycTimer(secs);
	let hh = 
		HycTimer1.hours;
	let mm = 	
		HycTimer1.minutes;
	let ss = 	
		HycTimer1.seconds;
	return `${hh}:${mm}:${ss}`;
}
// question. pass by reference
// function test(secs) {
// 	let num = secs;
// 	setInterval(function(){
// 		num--;
// 		console.log(displaySecs(num));
// 	},1000);
// }
// // console.log(test(10));
// test(10);
// states
function initialState () {
	btnModule.startDisabled(false);
	btnModule.resetDisabled(true);
	btnModule.skipDisabled(true);	
}


function inputState () {
	// console.log(inputModule.isReady());
	btnModule.startDisabled(false);
	btnModule.resetDisabled(true);
	btnModule.skipDisabled(true);	
	btnModule.btnState = 'ready';
	if(inputModule.isReady())	{
		
		countdownModule.displayTotal();
	} else {
		
		countdownModule.totalEle.innerHTML =
			`Countdown: --:--:--`; 
		setTimeout(function() {
			if(!inputModule.isReady())	{
				countdownModule.totalEle.innerHTML =
					`Stopwatch`;
			}
		}, 1000);

			

	}


}

function startState () {
	if(inputModule.isReady()) {
		btnModule.skipDisabled(false);	
	} else {
		btnModule.skipDisabled(true);	
	}
	
	btnModule.startDisabled(false);
	btnModule.resetDisabled(false);
	inputModule.inputDisabled(true);

	// let display = 
	// countdownModule.countdownEle.innerHTML;
	// attention. innerHTML assignment logic error
	let gameOver = false;
	let numCycle = inputModule.getCycleValue();
	let onceCycleOver = 1;
	// console.log(numCycle)
	let numWork = 
		Math.round(inputModule.getWorkValue());
	let numBreak = 
		Math.round(inputModule.getBreakValue());
	// let numKey = 0;
	let endProcess = false;
	// let cycle = 'workInitial';
	let cycleCount = 1;
	let left = inputModule.getTotalSecs();
	let workTime = 0;
	let breakTime = 0;
	let ratio = 0;

	audioModule.playAudio(0,true,true,true);
	let numKey = numWork;
	let cycle = 'inWork';
	// btnModule.skip = false;
		intervalMain = setInterval(function() {
			// console.log(cycle +'+'+endProcess)
			// console.log(ratio);

		

		if(numKey>0) {
			if(btnModule.btnState === 'start'){
				numKey--;
				left--;

				// ratio = 1 - (numKey)/(numWork);
				if (cycle === 'inWork' || 
					cycle === 'breakInitial') {
					workTime++;
					recordModule.workLight(true);
					recordModule.breakLight(false);
					ratio = 1 - (numKey)/(numWork);
					titleModule.displayTitleWork(cycleCount, numKey);
				}
				if (cycle ==='inBreak' ||
					cycle === 'workInitial' ||
					cycle === 'gameOver') {
					recordModule.workLight(false);
					recordModule.breakLight(true);
					breakTime++;
					ratio = 1 - (numKey)/(numBreak);
					titleModule.displayTitleBreak(cycleCount, numKey);
				}
			}
			
			if(numKey<0) {numKey = 0;}
			countdownModule.countdownEle.innerHTML =
		 		displaySecs(numKey);
		 	if(numKey==0) {
		 			endProcess =true;
		 	} 


		} 
		countdownModule.displayCycleNo(cycleCount);
		if(ratio>1) {ratio = 1;}
		countdownModule.displayProgress(ratio);


		if(left<0) {left = 0;}
		countdownModule.displayTimeLeft(left);


		recordModule.workRecordEle.innerHTML = 
			recordModule.displayWorkRecord(workTime);
		recordModule.breakRecordEle.innerHTML = 
			recordModule.displayBreakRecord(breakTime);	
		



		// console.log(numKey)
		// console.log(ratio)
		switch (cycle) {
			case 'inWork': {
				if(endProcess || btnModule.skip) {	
					if(!btnModule.skip) {
		 				audioModule.playAudio(0,false,true,true);
		 			}
					endProcess = false;
					btnModule.skip = false;
		 			left = left - numKey;
					numKey = numBreak;
					cycle = 'inBreak';
					
				} 
				break;
			}
			case 'inBreak': {
				if(endProcess || btnModule.skip) {
					if(cycleCount<numCycle) {
						if(!btnModule.skip) {
		 					audioModule.playAudio(1,false,false,true);
		 				}
		 				left = left - numKey;
						numKey = numWork;
						cycle = 'inWork';
						endProcess = false;
						// btnModule.skip = false;
						cycleCount++;
						// break;
					}
					else {
						cycle = 'gameOver';
						audioModule.playAudio(2,false,true,true);
					}
					btnModule.skip = false;
				}
				break;
			}
			case 'gameOver': {
				// numKey = 0;
				overState();
				// break;
			}
			default: break;
		}
		// console.log(numKey+','+cycle);
		// console.log(cycle)
	}, 1000);
}

	
	
	

function stopState () {
	
}

function relaunchState () {

}
function resetState () {
	overState();
	countdownModule.displayTotal();
	// attention.
	countdownModule.displayCycleNo(0);
	recordModule.workRecordEle.innerHTML =	
	recordModule.displayWorkRecord(0);
	recordModule.breakRecordEle.innerHTML =
	recordModule.displayBreakRecord(0);
	countdownModule.displayProgress(0);
}
function skipState () {
	btnModule.skip = true;
}
function overState () {
	
	
	inputModule.workEle.disabled = false;
	inputModule.breakEle.disabled = false;
	inputModule.cycleEle.disabled = false;
	btnModule.startDisabled(false);
	btnModule.resetDisabled(false);
	btnModule.skipDisabled(true);	
	btnModule.changeStartApparence();
	countdownModule.displayTotal();
	titleModule.displayReset();
	if(inputModule.isReady()) {
		clearInterval(intervalMain);
		// countdownModule.displayTimeLeft(0);
	} else {
		clearInterval(intervalStopWatch);
		
	}
	
	countdownModule.countdownEle.innerHTML =
	 	displaySecs(0);
	countdownModule.displayProgress(0);	
	btnModule.btnState = 'over';
	recordModule.workLight(false);
	recordModule.breakLight(false);
}
function stopWatchState() {
	audioModule.playAudio(0,true,true,true);
	btnModule.startDisabled(false);
	btnModule.resetDisabled(false);
	btnModule.skipDisabled(true);
	inputModule.inputDisabled(true);
	countdownModule.stopWatchMode();
	countdownModule.displayMain(0);
	let numKey = 0;

	intervalStopWatch = setInterval(function() {
		
		if(btnModule.btnState === 'start') {
			numKey++;
			countdownModule.displayMain(numKey);
		} 
		
		titleModule.displayTitleStopW(numKey);
	}, 1000);
}

// main
initialState();

inputModule.inputEle.addEventListener('keyup', 
function() {
		inputState();
});


btnModule.startBtnEle.addEventListener('click',
function() {
	switch (btnModule.btnState) {
		// case 'stopWatch': {
			
		// 	btnModule.btnState = 'start';
		// 	btnModule.changeStopApparence();
		// 	stopWatchState();
		// 	break;
		// }
		case 'ready': {
			btnModule.btnState = 'start';
			btnModule.changeStopApparence();
			if(inputModule.isReady()) {
				startState();
			} else {
				stopWatchState();
			}
			
			break;
		}
		case 'start': {
			btnModule.btnState = 'stop';
			btnModule.changeStartApparence();
			break;
		}
		case 'stop': {
			btnModule.btnState = 'start';
			btnModule.changeStopApparence();
			break;
		}
		case 'over': {
			btnModule.btnState = 'start';
			btnModule.changeStopApparence();
			if(inputModule.isReady()) {
				startState();
			} else {
				stopWatchState();
			}
			break;
		}
		default: break;
	}
});

// console.log(inputModule.workEle.value);
btnModule.resetBtnEle.addEventListener('click',
	function () {
	resetState();
});
btnModule.skipBtnEle.addEventListener('click',
function() {
	skipState();
});


})(window);

}); // DOMContentLoaded