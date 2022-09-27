//constants & variables.
//we use helping variables to store the counting inside them.
//to make a timer we need to use 'setInterval' & 'clearInterval' JScommands; and for that we must define a 'interval' variable by 'var' keyword.
const start = document.querySelector(".startButton");
const stop = document.querySelector(".stopButton");
const reset = document.querySelector(".resetButton");
let second0 = 00;
let centisecond0 = 00;
const second = document.querySelector(".sec");
const centisecond = document.querySelector(".centisec");
var interval;
//------------------------------------------------------------------------------------------------------------------------------------------------

//we need to define a function to tell the js what to whit decimal numbers.
//we can not make the spans to start counting, so  must use helping variables as the have been used below, in 'starter' function.
const starter = function () {
  centisecond0++;

  if (centisecond0 <= 9) {
    centisecond.innerHTML = "0" + centisecond0;
  }
  if (centisecond0 > 9) {
    centisecond.innerHTML = centisecond0;
  }

  if (centisecond0 > 99) {
    centisecond0 = 0;
    centisecond.innerHTML = "0" + 0;
    second0++;
    second.innerHTML = "0" + second0;
  }

  if (second0 > 9) {
    second.innerHTML = second0;
  }
};

//we use 'starter' function we have defined & 'setInterval' & 'clearInterval' commands, to make the ultimate function which we want to be run by pressing the 'start' button.
//'setInterval(interval)' command means: start to count.
const startTimer = function () {
  clearInterval(interval);
  interval = setInterval(starter, 10);
};

//'clearInterval(interval)' command means: stop counting.
const stopper = function () {
  clearInterval(interval);
};

//the 'span' tag is not like 'p' tag using '.textContent' method to rich inside and make changes, so . . .
//we use '.innerHTML' method with 'span' tags, to rich inside and make changes inside the 'span' tag.
const resetter = function () {
  clearInterval(interval);
  centisecond0 = "00";
  second0 = "00";
  centisecond.innerHTML = centisecond0;
  second.innerHTML = second0;
};
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//these are ultimate functions to run, by clicking on each button; these are refactored.
start.addEventListener("click", startTimer);

reset.addEventListener("click", resetter);

stop.addEventListener("click", stopper);
