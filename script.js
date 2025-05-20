
let resetBtnEl = document.getElementById("reset");
let startBtnEl = document.getElementById("start");
let stopBtnEl = document.getElementById("stop");

let hour = 0;
let minute = 0;
let second = 0;
let isRunning = false;
let myInterval = null;

function updateTime(){
    second ++;
    if(second === 60){
        second = 0;
        minute ++;
    }

    if(minute === 60){
        minute = 0;
        hour ++;
    }
    
    const format = (num) => (num<10? `0${num}`:`${num}`);
    document.getElementById("time").textContent = `${format(hour)}:${format(minute)}:${format(second)}`;

}
function start(){
    if(!isRunning){
        isRunning = true;
        myInterval = setInterval(updateTime,1000)
    }
}

function stop(){
    isRunning = false;
    clearInterval(myInterval);
}

function reset(){
    stop();
    hour = 0;
    minute = 0;
    second = 0;
    document.getElementById("time").textContent = "00:00:00";
}


startBtnEl.addEventListener("click",start);
stopBtnEl.addEventListener("click",stop);
resetBtnEl.addEventListener("click",reset);