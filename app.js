var player = document.querySelector("audio");
player.addEventListener("play", hello);

function hello(event){
  console.log("hello");
  console.log(event);
}


function goodbye(event){
  console.log("goodbye");
}


var playButton = document.querySelector("#playButton");
playButton.addEventListener("click", playMusic);

function playMusic(event){
   player.play();

   playButton.hidden = true;
   pauseButton.hidden = false;

}


var pauseButton = document.querySelector("#pauseButton");
pauseButton.addEventListener("click", pauseMusic);

function pauseMusic(event){
  player.pause();

  playButton.hidden = true;
  pauseButton.hidden = false;

}


window.addEventListener("load", initialize);

function initialize(event){
   pauseButton.hidden = true;
}


var skipButton = document.querySelector("#skipButton");
skipButton.addEventListener("click", skip10sec);

function skip10sec(event){
   player.currentTime = player.currentTime + 10;
}


var backButton = document.querySelector("#backButton");
backButton.addEventListener("click", back10sec);

function back10sec(event){
   player.currentTime = player.currentTime - 10;
}


var volumenControl = document.querySelector("volumeControl");
volumeControl.addEventListener("change", changeVolume);

function changeVolume(event){
  player.volume = volumenControl.value;
}


var seekBar = document.querySelector("seekBar");
seekBar.addEventListener("change", timeupdate);

function seekBar(event){
  player.timeupdate = seekBar.value;
}

seekBar.max
