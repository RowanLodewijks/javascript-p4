var seconds = 60;
var timer;

function runFunction() {}
let textbox = document.querySelector(".start-screen");

let playername = "";

window.addEventListener("load", () => {
  let person = prompt("Please enter your name", "Must contain 3 characters");
  playername = person;
  document.querySelector(".name").innerHTML = person;
  if (person == null || person == "Max 3 characters" || person.length !== 3) {
    location.reload();
  }
  document.body.style.opacity = 1;
});


window.addEventListener("keydown", (e) => {
  setInterval(moveDerps, 2000);
  setInterval(moveDerp2, 2430);
  setInterval(moveDerp3, 1000);
  setInterval(spawnGolden, 5000);
  setInterval(countdown, 1000);

  countdown();
  var audio = new Audio('/assets/img/music.mp3');
  audio.play();

  if (e.key) {
    textbox.style.display = "none";
    runFunction();
  }
});

var score = 0;
var scoreboard = document.querySelector(".score");
scoreboard.innerHTML = score;

function hit(value, id) {
  score = score + value;
  scoreboard.innerHTML = score;

  var audio = new Audio('/assets/img/diesound.mp3');
  audio.play();

}

function moveDerps() {
  moveDerps = function () {};
  for (a = 1; a < 5; a++) {
    document.querySelector("#derp" + a).style.top = Math.floor((Math.random() * 500) + 1) + "px";
    document.querySelector("#derp" + a).style.left = Math.floor((Math.random() * 1200) + 1) + "px";
  }
}

function moveDerp2() {
  moveDerp2 = function () {};
  for (a = 1; a < 4; a++) {
    document.querySelector("#derp" + 2).style.top = Math.floor((Math.random() * 500) + 1) + "px";
    document.querySelector("#derp" + 2).style.left = Math.floor((Math.random() * 1200) + 1) + "px";
  }
}

function moveDerp3() {
  moveDerp3 = function () {};
  for (a = 1; a < 4; a++) {
    document.querySelector("#derp" + 3).style.top = Math.floor((Math.random() * 500) + 1) + "px";
    document.querySelector("#derp" + 3).style.left = Math.floor((Math.random() * 1200) + 1) + "px";
  }
}

function spawnGolden() {
  var img = document.getElementById('derp4');
  img.style.visibility = 'visible';

  setInterval(() => {
    var img = document.getElementById('derp4');
    img.style.visibility = 'hidden';
  }, 999);
}

let blocked = false
function countdown() {
  countdown = function () {};
  if (seconds <= 60) {
    document.getElementById("timer").innerHTML = seconds;
  }
  if (seconds > 0) {
    seconds--;
  } else {
    clearInterval(timer);
    var div = document.querySelector(".end-screen");
    div.style.visibility = 'visible';
    // var audio = new Audio('/assets/img/gameover.mp3');
    // audio.play();
    if(!blocked) {
      gameover();
      blocked = true
    }
    
  }
}
document.getElementById("textarea").onkeypress = function () {
  if (!timer) {
    timer = window.setInterval(function () {
      countdown();
    }, 1000); // every second
  }
}

function gameover() {
  fetch(`saveHighScore.php?player=${playername}&score=${score}`);
  console.log("game over");
}

function restart() {
    setTimeout(function(){
    window.location.reload(1);
  }, 100);
}

document.getElementById("timer").innerHTML = "1:00";