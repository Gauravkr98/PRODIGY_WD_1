
var time;

// variables for time
var mili = 0;
var s = 0;
var m = 0;

// html elements
var min;
var sec;
var ms;

var lap = 0;

// Buttons
var start;
var pause; 
var resume;

var audio;

function startClock() {
	
audio = document.getElementById("audio");
	audio.play();


min = document.getElementById("min");
 sec = document.getElementById("sec");
 ms = document.getElementById("ms");


 time = setInterval(function() {
 
	mili += 1;

	
	if(mili == 10) {
		mili = 0;
		s++;
	}
	
	if(s == 60) {
		s = 0;
		m++;
	}
	
	if(mili < 10) {
		ms.innerHTML = "0" + mili;
	}else {
		ms.innerHTML = mili;
	}
	if(s < 10) {
		sec.innerHTML ="0" + s;
	}else{
	sec.innerHTML = s;
	}
	if(m < 10) {
		min.innerHTML = "0" + m;
	} else {
	min.innerHTML = m;
	}
	
	},100);
	
  pause = document.getElementById("pause");
pause.style.display = "inline";

  start = document.getElementById("start");
start.style.display = "none";

}

function resetClock() {
	
	audio.pause();

	clearInterval(time);
	
	 mili = 0;
	 s = 0;
	 m = 0;
	 
	min.innerHTML = "00";
	sec.innerHTML = "00";
	ms.innerHTML = "00";
	
	resume = document.getElementById("resume");
	
	start.style.display = "inline";
	pause.style.display = "none";
	resume.style.display = "none";
	
}

function getLap() {
	
	lap++;
	
	console.log("Lap "+lap+ " on " + " "+min.innerHTML+":"+sec.innerHTML + ":" +  ms.innerHTML);
	
}

function pauseClock() {
	
	audio.pause();
	
	clearInterval(time);
	
	resume = document.getElementById("resume");
	resume.style.display = "inline";
	pause.style.display = "none";
}
 
function resumeClock() {
	
	audio.play();
	
	pause.style.display = "inline";
	resume.style.display = "none";
	
	
	time = setInterval(function() {
 
	mili += 1;
	
	
	if(mili == 10) {
		mili = 0;
		s++;
	}
	
	if(s == 60) {
		s = 0;
		m++;
	 }
	
	  if(mili < 10) {
		ms.innerHTML = "0" + mili;
	}else {
		ms.innerHTML = mili;
	}
	if(s < 10) {
		sec.innerHTML ="0" + s;
	}else{
	sec.innerHTML = s;
	}
	if(m < 10) {
		min.innerHTML = "0" + m;
	} else {
	min.innerHTML = m;
	}
	
	
	
	},100);
	
	
}
 

