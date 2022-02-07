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
		return `Total: ${displaySecs(secs)}`;
	},
	displayTimeLeft: function(secs) {
		return `Time Left: ${displaySecs(secs)}`;
	},
	displayCycleNo: function(cycle) {
		this.cycleNoEle.innerHTML =
	 `#Cycle: ${cycle}`;
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
		this.startBtnEle.innerHTML = 'STOP';
		// this.startBtnEle.style.backgroundColor =
		// 'rgb(302, 210, 123)';
	},
	changeStartApparence: function() {
		this.startBtnEle.innerHTML = 'START';
		this.startBtnEle.style.backgroundColor =
		'rgb(239, 75, 23);';
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
	} else {
		countdownModule.totalEle.innerHTML = 
			`Total: --:--:--`;
		btnModule.startBtnEle.disabled = true;
		btnModule.resetBtnEle.disabled = true;
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
	let numKey = 0;
	let endProcess = false;
	let cycle = 'workInitial';
	let cycleCount = 1;
	let left = inputModule.getTotalSecs();
	let workTime = 0;
	let breakTime = 0;
	let ratio = 0;
	// audioModule.audioEle.muted = true;
	// audioModule.audioEle.load();
	// audioModule.audioEle.play();


	intervalMain = setInterval(function() {
		// console.log(cycle +'+'+endProcess)
		// console.log(ratio);

	switch (cycle) {
		case 'workInitial': {
			numKey = numWork;
			cycle = 'inWork';
			ratio = 1 - (numKey-1)/(numWork);
			break;
		}
		case 'inWork': {
			ratio = 1 - (numKey-1)/(numWork);
			if(endProcess) {
				cycle = 'breakInitial';
				endProcess = false;
				audioModule.audioEle.muted = false;
				audioModule.audioEle.load();
				audioModule.audioEle.play();

			} 
			break;
		}
		case 'breakInitial': {
			numKey = numBreak;
			cycle = 'inBreak';
			ratio = 1 - (numKey-1)/(numBreak);

			break;
		}
		case 'inBreak': {
			ratio = 1 - (numKey-1)/(numBreak);
			if(endProcess) {
				audioModule.audioEle.muted = false;
				audioModule.audioEle.load();
				audioModule.audioEle.play();
				if(cycleCount<numCycle) {
					cycle = 'workInitial';
					endProcess = false;
					cycleCount++;

				}
				else {
					cycle = 'gameOver';
					// clearInterval(intervalMain);
					// overState();
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

	if(numKey>0) {
		if(btnModule.btnState === 'start'){
			numKey--;
		left--;
		if (cycle === 'inWork' || 
			cycle === 'breakInitial') {
			workTime++;
		}
		if (cycle ==='inBreak' ||
			cycle === 'workInitial' ||
			cycle === 'gameOver') {
			breakTime++;
		}
	}
		
		if(numKey<0) {numKey = 0;}
		countdownModule.countdownEle.innerHTML =
	 		displaySecs(numKey);
	 	if(numKey==1) {
	 		endProcess =true;
	 		
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
	
	
	console.log(numKey)
	console.log(ratio)
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
	btnModule.changeStartApparence();

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