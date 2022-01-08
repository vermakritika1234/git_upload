console.log("welcome to spotify");

//initialise the variables
let songIndex =0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');

let songs=[
     {songs:"Salam-e-Ishq", filepath:"songs/1.mp3", coverpath:"covers/1.jpg"},
     {songs:"Salam-e-Ishq", filepath:"songs/1.mp3", coverpath:"covers/1.jpg"},
     {songs:"Salam-e-Ishq", filepath:"songs/1.mp3", coverpath:"covers/1.jpg"},
    ]
// let audioElement = new Audio('1.mp3');

//handle play/pause click;
masterplay.addEventListener('click',()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove
    }
}

//listen to events
document.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
})