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

let titleModule = {
	titleEle: document.querySelector('.title'),
	displayTitleWork: function (workCycle) {
		this.titleEle.innerHTML = 
		`工作: ${displaySecs(workCycle)}`;
	},
	displayTitleBreak: function (breakCycle) {
		this.titleEle.innerHTML = 
		`休息: ${displaySecs(breakCycle)}`;
	}
};

let inputModule = {
	inputEle: loc.querySelector('.line1'),
	workEle: loc.querySelector('.work'),
	breakEle: loc.querySelector('.break'),
	cycleEle: loc.querySelector('.cycle'),
	totalEle: loc.querySelector('.total'),
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
	isReady: function () {
		let temp =
		this.getWorkValue() >= 0 &&
		this.getBreakValue() >= 0 &&
		(this.getWorkValue() + 
			this.getBreakValue()) > 0 &&
		this.getCycleValue() >=1 &&
		Number.isInteger(this.getCycleValue());
		// console.log(temp)
		return temp;
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
	displayProgress: function (ratio) {
		this.progressEle.style.width = `${ratio*100}%`;
	},
	displayTotal: function(secs) {
		return `总时间: ${displaySecs(secs)}`;
	},
	displayTimeLeft: function(secs) {
		return `剩余计时: ${displaySecs(secs)}`;
	},
	displayCycleNo: function(cycle) {
		this.cycleNoEle.innerHTML =
	 `#次数: ${cycle}`;
	} 
};

let btnModule = {
	startBtnEle: 
		loc
		.querySelector('.btn').children[0],
	resetBtnEle: 
		loc
		.querySelector('.btn').children[1],
	start: false,
	stop: false,
	reset: false,
	btnState: 'disable',
	changeStopApparence: function() {
		this.startBtnEle.innerHTML = '暂停';
		// this.startBtnEle.style.backgroundColor =
		// 'rgb(302, 210, 123)';
	},
	changeStartApparence: function() {
		this.startBtnEle.innerHTML = '开始';
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
		return `工作: ${displaySecs(secs)}`;
	},
	displayBreakRecord: function (secs) {
		return `休息: ${displaySecs(secs)}`;
	}
}; 

let audioModule = {
	audioEle: loc.querySelector('audio')
	// mutedAudio: function (TorF) {
	// 	this.audioEle.muted = TorF;
	// }
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
	btnModule.startBtnEle.disabled = true;
	btnModule.resetBtnEle.disabled = true;
	btnModule.startBtnEle.style.backgroundColor =
	 'rgb(275, 211, 184)';
	btnModule.resetBtnEle.style.backgroundColor =
	 'rgb(275, 211, 184)'; 
}


function inputState () {
	// console.log(inputModule.isReady());
	if(inputModule.isReady())	{
		btnModule.btnState = 'ready';
		countdownModule.totalEle.innerHTML = 
			countdownModule
			.displayTotal(inputModule.getTotalSecs());
		btnModule.startBtnEle.disabled = false;
		btnModule.resetBtnEle.disabled = false;
		btnModule.startBtnEle.style.backgroundColor =
	 	'white';
		btnModule.resetBtnEle.style.backgroundColor =
	  'white'; 
	} else {
		countdownModule.totalEle.innerHTML = 
			`Total: --:--:--`;
		btnModule.startBtnEle.disabled = true;
		btnModule.resetBtnEle.disabled = true;
		btnModule.startBtnEle.style.backgroundColor =
	 'rgb(275, 211, 184)';
		btnModule.resetBtnEle.style.backgroundColor =
	 'rgb(275, 211, 184)'; 
	}


}

function startState () {

	
	inputModule.workEle.disabled = true;
	inputModule.breakEle.disabled = true;
	inputModule.cycleEle.disabled = true;

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
	audioModule.audioEle.muted = true;
	audioModule.audioEle.load();
	audioModule.audioEle.play();
	let numKey = numWork;
	let cycle = 'inWork';

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
				ratio = 1 - (numKey)/(numWork);
				titleModule.displayTitleWork(numKey);
			}
			if (cycle ==='inBreak' ||
				cycle === 'workInitial' ||
				cycle === 'gameOver') {
				breakTime++;
				ratio = 1 - (numKey)/(numBreak);
				titleModule.displayTitleBreak(numKey);
			}
		}
			
			if(numKey<0) {numKey = 0;}
			countdownModule.countdownEle.innerHTML =
		 		displaySecs(numKey);
		 	if(numKey==0) {
		 		endProcess =true;
		 			audioModule.audioEle.muted = false;
					audioModule.audioEle.load();
					audioModule.audioEle.play();
		 		
		 	} 


		} 
		countdownModule.displayCycleNo(cycleCount);
		if(ratio>1) {ratio = 1;}
		countdownModule.displayProgress(ratio);


		if(left<0) {left = 0;}
		countdownModule.totalEle.innerHTML = 
			countdownModule.displayTimeLeft(left);


		recordModule.workRecordEle.innerHTML = 
			recordModule.displayWorkRecord(workTime);
		recordModule.breakRecordEle.innerHTML = 
			recordModule.displayBreakRecord(breakTime);	
		
		// titleModule.displayTitleWork(workTime);
		// titleModule.displayTitleBreak(breakTime);


		// console.log(numKey)
		// console.log(ratio)
		switch (cycle) {
			case 'inWork': {
				if(endProcess) {
					endProcess = false;
					// audioModule.audioEle.muted = false;
					// audioModule.audioEle.load();
					// audioModule.audioEle.play();
					numKey = numBreak;
					cycle = 'inBreak';
				} 
				break;
			}
			case 'inBreak': {
				if(endProcess) {
					// audioModule.audioEle.muted = false;
					// audioModule.audioEle.load();
					// audioModule.audioEle.play();
					
					if(cycleCount<numCycle) {
						numKey = numWork;
						cycle = 'inWork';
						endProcess = false;
						cycleCount++;
					}
					else {
						cycle = 'gameOver';
					}
				}
				break;
			}
			case 'gameOver': {
				overState();
				break;
			}
			default: break;
		}
	}, 1000);
}

	
	
	

function stopState () {
	
}

function relaunchState () {

}
function resetState () {
	overState();
	countdownModule.totalEle.innerHTML = 
		countdownModule
		.displayTotal(inputModule.getTotalSecs());
	// attention.
	countdownModule.displayCycleNo(0);
	recordModule.workRecordEle.innerHTML =	
	recordModule.displayWorkRecord(0);
	recordModule.breakRecordEle.innerHTML =
	recordModule.displayBreakRecord(0);
	countdownModule.displayProgress(0);
}

function overState () {
	clearInterval(intervalMain);
	inputModule.workEle.disabled = false;
	inputModule.breakEle.disabled = false;
	inputModule.cycleEle.disabled = false;
	btnModule.startBtnEle.disabled = false;
	btnModule.resetBtnEle.disabled = false;
	btnModule.startBtnEle.style.backgroundColor =
 	'white';
	btnModule.resetBtnEle.style.backgroundColor =
  'white'; 
	btnModule.changeStartApparence();
	countdownModule.displayTimeLeft(0);
	countdownModule.countdownEle.innerHTML =
	 	displaySecs(0);
	btnModule.btnState = 'over';
	
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
		case 'ready': {
			btnModule.btnState = 'start';
			btnModule.changeStopApparence();
			startState();
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
			startState();
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



})(window);

}); // DOMContentLoaded