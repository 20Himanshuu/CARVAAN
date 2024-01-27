console.log("Welcome to Carvaan");

//INITALIZE THE VARIABLES
let songIndex= 0;
let audioElement = new Audio('songss/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems= Array.from(document.getElementsByClassName('songItem'));

let songs =[
    {songName:"AE DIL HE MUSHKIL", filePath:"songss/1.mp3", coverPath:"coverr/1.jpg"},
    {songName:"DIL SAMBHAL JA JARA", filePath:"songss/2.mp3", coverPath:"coverr/2.jpg"},
    {songName:"HEERIYE", filePath:"songss/3.mp3", coverPath:"coverr/3.jpg"},
    {songName:"JANAM JANAM", filePath:"songss/4.mp3", coverPath:"coverr/4.jpg"},
    {songName:"KESARIYA", filePath:"songss/5.mp3", coverPath:"coverr/5.jpg"},
    {songName:"O MAHI", filePath:"songss/6.mp3", coverPath:"coverr/6.jpg"},
    {songName:"LUTT PUTT GAYA", filePath:"songss/7.mp3", coverPath:"coverr/7.jpg"},
    {songName:"SATRANGA", filePath:"songss/8.mp3", coverPath:"coverr/8.jpg"},
    {songName:"TERE PYAR MEIN", filePath:"songss/9.mp3", coverPath:"coverr/9.jpg"},
]
songItems.forEach((element,i)=>{
  element.getElementsByTagName("img")[0].src=songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText=songs[i].songName;



})

//audioElement.play();
//Handle play/pause
masterPlay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
//LISTEN TO EVVENTS
audioElement.addEventListener('timeupdate',()=>{
    //Update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value=progress;
}
)
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
    
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src =`songss/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    })
})
//NEXT BUTTON
document.getElementById('next').addEventListener('click', ()=>{
    if (songIndex>=9) {
        songIndex = 0;
    }
    
    else{
        songIndex += 1;
    }
    audioElement.src =`songss/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
//PREVIOUS BUTTON
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
    songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src =`songss/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})