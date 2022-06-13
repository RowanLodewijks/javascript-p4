var seconds = 60;
var timer;

function runFunction() {}
let textbox = document.querySelector(".start-screen");




// var eventList = ["keydown", "click"];
// for (event of eventList) {
//   document.addEventListener(event, function (e) {
//     setInterval(moveDerps, 2000);
//     setInterval(moveDerp2, 2430);
//     setInterval(moveDerp3, 1000);
//     setInterval(spawnGolden, 5000);
//     setInterval(countdown, 1000);
//     countdown();
//     var audio = new Audio('/assets/img/music.mp3');
//     audio.play();

//     if (e.key) {
//       textbox.style.display = "none";
//       runFunction();
//     }
//   });
// }




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

function countdown() {
  countdown = function () {};
  if (seconds <= 60) { // I want it to say 1:00, not 60
    document.getElementById("timer").innerHTML = seconds;
  }
  if (seconds > 0) { // so it doesn't go to -1
    seconds--;
  } else {
    clearInterval(timer);
    var div = document.querySelector(".end-screen");
    div.style.visibility = 'visible';
    var audio = new Audio('/assets/img/gameover.mp3');
    audio.play();
  }
}
document.getElementById("textarea").onkeypress = function () {
  if (!timer) {
    timer = window.setInterval(function () {
      countdown();
    }, 1000); // every second
  }
}

document.getElementById("timer").innerHTML = "1:00";