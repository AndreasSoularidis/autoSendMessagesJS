const MIN = 500;
const MAX = 2000;

let timeoutID;

let smallText = document.querySelector("#small-msg");
let mediumText = document.querySelector("#medium-msg");
let largeText = document.querySelector("#large-msg");

class Counter{
    static counter = 1;

    static increaseCounter(){
        this.counter += 1;
        return this.counter;
    }

    static resetCounter(){
        this.counter = 1;
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

function getMessageLength(){
    if(smallText.checked)
        return "small";
    if(mediumText.checked)
        return "medium";
    return "large";
}

function startSending(){
    let time = computeRandomTime(MIN, MAX);
    let messageLength = getMessageLength();
    sendMessage(messageLength);
    Counter.increaseCounter(); 
    timeoutID = setTimeout(startSending, time);
}

function stopSending(){
    clearTimeout(timeoutID);
    console.log("I stop sending messages!");
    console.log("Messages sent in total: ", Counter.counter-1);
    Counter.resetCounter();
}

function sendMessage(messageLength){
    console.log("I send a ", messageLength ," message with id ", Counter.counter);
}