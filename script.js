const MIN = 500;
const MAX = 2000;

let intervalId;

class Counter{
    static counter = 1;

    static increaseCounter(){
        this.counter += 1;
        return this.counter;
    }
}

document.querySelector("#start-btn").onclick = function(){ 
    startSending();
};

document.querySelector("#stop-btn").onclick = function(){
    stopSending();
}

function computeRandomTime(min, max){
    return Math.floor(Math.random() * (max - min) ) + min;
}

function startSending(){
    let time = computeRandomTime(MIN, MAX);
    sendMessage();
    intervalId = setTimeout(startSending, time);
}

function stopSending(){
    clearInterval(intervalId);
    console.log("I stop sending messages!");
    console.log("Messages were sent in total: ", Counter.counter);
}

function sendMessage(){
    console.log("I send the message with id ", Counter.counter);
    Counter.increaseCounter();  
}