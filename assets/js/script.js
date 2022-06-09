function runFunction() {
}
let textbox = document.querySelector(".start-screen");

window.addEventListener("keydown", (e) => {
  // console.log('hello');
  setInterval(moveDerps, 2000);
  setInterval(moveDerp2, 2430);
  setInterval(moveDerp3, 1000);
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
  moveDerps = function() {};
  for (a = 1; a < 5; a++) {
    document.querySelector("#derp" + a).style.top = Math.floor((Math.random() * 500) + 1) + "px";
    document.querySelector("#derp" + a).style.left = Math.floor((Math.random() * 1200) + 1) + "px";
  }
}
// setInterval(moveDerps, 2000);

function moveDerp2() {
  moveDerp2 = function() {};
  for (a = 1; a < 4; a++) {
    document.querySelector("#derp" + 2).style.top = Math.floor((Math.random() * 500) + 1) + "px";
    document.querySelector("#derp" + 2).style.left = Math.floor((Math.random() * 1200) + 1) + "px";
  }
}
// setInterval(moveDerp2, 2430);

function moveDerp3() {
  moveDerp3 = function() {};
  for (a = 1; a < 4; a++) {
    document.querySelector("#derp" + 3).style.top = Math.floor((Math.random() * 500) + 1) + "px";
    document.querySelector("#derp" + 3).style.left = Math.floor((Math.random() * 1200) + 1) + "px";
  }
}
// setInterval(moveDerp3, 1000);

// function spawnGolden() {
//   var img = document.getElementById('derp4');
//   img.style.visibility = 'visible';
// }

// setInterval(spawnGolden, 5000);

// function despawnGolden() {
//   var img = document.getElementById('derp4');
//   img.style.visibility = 'hidden';
// }

// setInterval(despawnGolden, 6000);



function spawnGolden() {
  var img = document.getElementById('derp4');
  img.style.visibility = 'visible';

  setInterval(() => {
    var img = document.getElementById('derp4');
    img.style.visibility = 'hidden';
}, 1000);
}

setInterval(spawnGolden, 5000);




// let c = 0;
// setInterval(() => {
//   c += 1;
//   if (c === 2)
//   var img = document.getElementById('derp4');
//   img.style.visibility = 'visible';
//   if (c === 4) 
//   var img = document.getElementById('derp4');
//   img.style.visibility = 'hidden';
//   if (c === 5) c = 0;

//   console.log(c);
// }, 1000);