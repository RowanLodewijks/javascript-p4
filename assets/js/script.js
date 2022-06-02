var score = 0;
var scoreboard = document.querySelector(".score");
scoreboard.innerHTML = score;
function hit(value, id)
{
  score = score + value;
  scoreboard.innerHTML = score; 
  
}
function moveDerps(){
  for (a=1;a<4;a++)
    {
      document.querySelector("#derp"+a).style.top = Math.floor((Math.random() * 500) + 1) + "px";  
      document.querySelector("#derp"+a).style.left = Math.floor((Math.random() * 1200) + 1) + "px"; 
    }
}
setInterval(moveDerps, 2000);