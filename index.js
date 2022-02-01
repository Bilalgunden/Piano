var container = document.querySelector('.container');
var buttons = document.querySelector('.button');
var recordButton = document.getElementById('recordButton');
var playButton = document.getElementById('PlayButton');
var isRecording = false;
var source = '';
var recordArray = [];
var eventTimes = [];


container.addEventListener('click',function(elem){
    source = 'https://ia600106.us.archive.org/13/items/24-piano-keys/key' + elem.target.innerText + '.mp3';
    var eventTime = new Date().getTime();
    eventTimes.push(eventTime);
    checkRecord();
    playSound();
})

function checkRecord(){
    if(isRecording === true){
        recordArray.push(source);
    }
}

function playSound() {
    var sound = new Audio(source);
    sound.play();
}

recordButton.addEventListener('click', function(){
    isRecording = !isRecording;
    if (isRecording === true){
        recordButton.classList.add("changeColor");
        recordArray = [];
    }else{
        recordButton.classList.remove('changeColor');
    }
})


playButton.addEventListener('click', function(){
    var timeoutRange = 0;
    var timeout = 0;
    var oldDateTime = 0;
    var sound = new Audio(recordArray[0]);
    sound.play();
    for (let index = 1; index < recordArray.length; index++) {
        timeout = eventTimes[index] - eventTimes[index-1];
        timeoutRange = timeout + oldDateTime;
        oldDateTime = timeoutRange;
        setTimeout(function(){
            var sound2 = new Audio(recordArray[index]);
            sound2.play();
        },timeoutRange);
    }
    isRecording = false;
    recordButton.classList.remove('changeColor');
    eventTimes = [];
})