var container = document.querySelector('.container');
var buttons = document.querySelector('.button');
var recordButton = document.getElementById('recordButton');
var playButton = document.getElementById('PlayButton');
var isRecording = false;
var source = '';
var recordArray = [];

function playSound() {
    var sound = new Audio(source);
    sound.play();
}

function checkRecord(){
    if(isRecording === true){
        recordArray.push(source);
    }
}

container.addEventListener('click',function(elem){
    switch(elem.target.innerText){
        case '1':
            source = 'https://ia600106.us.archive.org/13/items/24-piano-keys/key02.mp3';
            checkRecord();
            playSound();
            break;
        case '2':
            source = 'https://ia800106.us.archive.org/13/items/24-piano-keys/key04.mp3';
            checkRecord();
            playSound();
            break;
        case '3':
            source = 'https://ia600106.us.archive.org/13/items/24-piano-keys/key06.mp3';
            checkRecord();
            playSound();
            break;
        case '4':
            source = 'https://ia600106.us.archive.org/13/items/24-piano-keys/key08.mp3';
            checkRecord();
            playSound();
            break;
        case '5':
            source = 'https://ia600106.us.archive.org/13/items/24-piano-keys/key10.mp3';
            checkRecord();
            playSound();
            break;
        case '6':
            source = 'https://ia600106.us.archive.org/13/items/24-piano-keys/key12.mp3';
            checkRecord();
            playSound();
            break;
        case '7':
            source = 'https://ia600106.us.archive.org/13/items/24-piano-keys/key14.mp3';
            checkRecord();
            playSound();
            break;
        case '8':
            source = 'https://ia600106.us.archive.org/13/items/24-piano-keys/key16.mp3';
            checkRecord();
            playSound();
            break;
        case '9':
            source = 'https://ia600106.us.archive.org/13/items/24-piano-keys/key18.mp3';
            checkRecord();
            playSound();
            break;
        case '10':
            source = 'https://ia600106.us.archive.org/13/items/24-piano-keys/key20.mp3';
            checkRecord();
            playSound();
            break;
        case '11':
            source = 'https://ia600106.us.archive.org/13/items/24-piano-keys/key22.mp3';
            checkRecord();
            playSound();
            break;
        case '12':
            source = 'https://ia600106.us.archive.org/13/items/24-piano-keys/key24.mp3';
            checkRecord();
            playSound();
            break;
        default:
            console.log('error');
    }
})

recordButton.addEventListener('click', function(){
    recordArray = [];
    isRecording = !isRecording;
    if (isRecording === true){
        recordButton.classList.add("changeColor");
    }else{
        recordButton.classList.remove('changeColor');
    }
})

playButton.addEventListener('click', function(){
    var sound = new Audio(recordArray[0]);
    sound.play();
    for (let index = 1; index < recordArray.length; index++) {
        setTimeout(function(){
            var sound2 = new Audio(recordArray[index]);
            sound2.play();
        },index*1000);
    }
})