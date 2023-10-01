var startStop = document.getElementById('startStop');
var reset = document.getElementById('reset');

var h = document.getElementById("hour");
var m = document.getElementById("minute");
var s = document.getElementById("sec");

var startTimer = null;
var isRunning = false;

startStop.addEventListener('click', function(){
    if (!isRunning) {
        startInterval();
        startStop.innerText = "Stop";
    } else {
        stopInterval();
        startStop.innerText = "Start";
    }
    isRunning = !isRunning;
})

reset.addEventListener('click', function(){
    h.value = 0;
    m.value = 0;
    s.value = 0;
    stopInterval();
    startStop.innerText = "Start";
    isRunning = false;
})

function timer(){
    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = 0;
        m.value = 0;
        s.value = 0;
    }
     else if(s.value != 0){
        s.value--;
    } else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
    } else if(h.value != 0 && m.value == 0){
        m.value = 60;
        h.value--;
    }
}



function startInterval(){
    startTimer = setInterval(function() {
        timer();
    }, 1000);
}

function stopInterval() {
    clearInterval(startTimer);
}
