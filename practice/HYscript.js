// functions--------------------------------



function HyListStrCharAndFreq(str) {
  let obj = {};
  for(let i = 0; i < str.length; i++) {
    if(obj[str.charAt(i)]) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  } 
  return obj;
}
// method 2:
function HyFindMostChar2(str) {
  let obj = HyListStrCharAndFreq(str);
  console.log(obj);
  let value = 0;
  let propMost = '';
  let arr = [];
  for(let prop in obj) {
    if(obj[prop] > value) {
      value = obj[prop];
      propMost = prop;
    }
  }
  arr.push(propMost, value);
  return arr;
}
// let str = 'ggdegreaeeew';
// console.log(HyFindMostChar2(str));


// method 1:
function HyFindMostChar1(str) {
  let unique = HyMakeStrUnique(str);
  let charMost = '';
  let freq = 0;
  let arr = [];
  for(let i = 0; i < unique.length; i++) {
    let findChar = new HyFindChar(str, unique[i]);
    if(freq < findChar.frequency) {
      freq = findChar.frequency;
      charMost = unique.charAt(i);
    }
    arr.push(charMost, freq);
   return arr;
  }
}
// let str = 'ggdegraeeew';
// console.log(HyFindMostChar(str));




// remove the repeated char to form a new string
function HyMakeStrUnique(str){
  let strUnique = str[0];
  for(let i = 1; i < str.length; i++) {
    if(strUnique.indexOf(str[i]) === -1) {
      strUnique += str[i];
    }
  }
  return strUnique;
}




// unique elements
function HyMakeArrUnique(arr) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
//let arr = [3, 4, 6, 1, 3, 7, 3, 1];
//console.log(HyMakeUnique(arr));



function HyDate(){
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let dates = date.getDate();
let day = date.getDay();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
hours = hours<10? '0'+hours:hours;
minutes = minutes<10? '0'+minutes:minutes;
seconds = seconds<10? '0'+seconds:seconds;
let arrDay = 
['Sunday', 'Monday', 
'Tuesday', 'Wednesday',
'Thursday', 'Friday', 'Saturday'];
let formatTime = 
`Today is: 
${year}-${month+1}-${dates} ${arrDay[day]}
${hours}:${minutes}:${seconds}`;
return formatTime;
}


function HyBubbleSort (DataArray, largerBoolean) {
  let arr = DataArray;
  for (let j = 0; j < arr.length - 1; j++) {
    for (let i = 0; i < arr.length -1 - j; i++) {
      if(largerBoolean){
        if(arr[i] > arr[i+1]) {
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        }
      } else {
        if(arr[i] < arr[i+1]) {
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        }
      }
    }
  }
}



function HySwapArray(arr) {
  let arrNew = [];
  console.log(arrNew);
  // attention: show the result as if console is behind for cycle
  for(let i = 0; i < arr.length; i++) {
    arrNew[i] = arr[arr.length-1-i];
  }
  return arrNew;
}



//objects----------------------------------------

let HyoBubbleSort = {
  larger: function () {
            let arr = arguments;
            for(i = 0; i < arguments.length; i++) { 
            // keep or remove: same result
              arr[i] = arguments[i];
            }
            console.log(arr);
            for (let j = 0; j < arr.length - 1; j++) {
              for (let i = 0; i < arr.length -1 - j; i++) {
                if(arr[i] > arr[i+1]) { // > -> larger
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                }
              }
            }
            return arr;    
          },
  smaller: function () {
            let arr = arguments;
            for (let j = 0; j < arr.length - 1; j++) {
              for (let i = 0; i < arr.length -1 - j; i++) {
                if(arr[i] < arr[i+1]) { // < -> smaller
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                }
              }
            }
            return arr;
          }
};

//3. object 
let HyoFindXL = {
  findMax: function (arr) {
    let max = arr[0];
    let obj = {};
    for(let i = 1; i < arr.length; i++) {
      max = arr[i]>max? arr[i]:max;
    }
    return max;
  },
  findMin: function (arr) {
    let min = arr[0];
    let obj = {};
    for(let i = 1; i < arr.length; i++) {
      min = arr[i]<min? arr[i]:min;
    }
    return min;
  }
};
// let arrEg = [3,2,4,6,8];
// console.log(HyFindXL.findMax(arrEg));





// constructor function
function HycCountDown(time) {
  let timeStamp = Date.now();
  let timeInput = +new Date(time);
  let timeLeft = (timeInput - timeStamp)/1000;
  // let obj = {};
  // console.log(timeInput);
  d = Math.floor(timeLeft/60/60/24);
  hours = Math.floor(timeLeft/60/60%24);
  minutes = Math.floor(timeLeft/60%60);
  seconds = Math.floor(timeLeft%60)
  
  hours = hours<10? '0'+hours:hours;
  minutes = minutes<10? '0'+minutes:minutes;
  seconds = seconds<10? '0'+seconds:seconds;
  this.d = d;
  this.hours = hours;
  this.minutes = minutes;
  this.seconds = seconds;
}
// let countDownNewYear = 
// new HyCountDown('2022-2-1 0:0:0');
// console.log(countDownNewYear);
// console.log(countDownNewYear.d);

function HycTimer(time) {
  let timeStamp = 0;
  let timeInput = time;
  let timeLeft = (timeInput - timeStamp);
  // let obj = {};
  // console.log(timeInput);
  d = Math.floor(timeLeft/60/60/24);
  hours = Math.floor(timeLeft/60/60%24);
  minutes = Math.floor(timeLeft/60%60);
  seconds = Math.floor(timeLeft%60)
  
  hours = hours<10? '0'+hours:hours;
  minutes = minutes<10? '0'+minutes:minutes;
  seconds = seconds<10? '0'+seconds:seconds;
  this.d = d;
  this.hours = hours;
  this.minutes = minutes;
  this.seconds = seconds;
}
//2. constructor function 

function HycFindXL(arr) {
  let max = arr[0];
  let min = arr[0];
  let maxIndex = 0;
  let minIndex = 0;
  let obj = {};
  for(let i = 1; i < arr.length; i++) {
    max = arr[i]>max? arr[i]:max;
    min = arr[i]<min? arr[i]:min;
  }
  for(let j = 0; j < arr.length; j++) {
  	maxIndex = max === arr[j] ? j : maxIndex;
  	minIndex = min === arr[j] ? j : minIndex;
  }
  this.maxIndex = maxIndex;
  this.minIndex = minIndex;
  this.maxValue = max;
  this.minValue = min;

}
// let arrEg = [3,2,4,6,8];
// let findXL = new HyFindXL(arrEg);
// console.log(findXL);
// console.log(findXL.max);
// new indicates an instantiation of 
// a constructor function 


// find index and frequency of occurrence
// of a given character in a str

function HyFindChar(str, char) {
  let index = [];
  let frequency = 0;
  for(let i = 0; i < str.length; i++) {
    if(str.indexOf(char, i) === -1) {
      break;
    } else {
      index.push(str.indexOf(char, i));
      i = str.indexOf(char, i);
    }
  }
  this.frequency = index.length;
  this.index = index;
// attention: return can also be used as usuall 
//with new-this, but this cannot be invoked
}

// console.log(new HyFindChar('abcddceefc', 'c'));



