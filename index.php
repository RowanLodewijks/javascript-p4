<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Derp Hunt</title>
  <link rel="stylesheet" href="./assets/css/style.css">
  <script src="./assets/js/script.js" defer></script>
</head>

<body>
  <!-- <button id="end" onclick="end_game()">Einde van het spel</button> -->
  <form action="" method="POST" id="form" onsubmit="return save_score()">
    <label for="name">Name:</label>
    <input type="text" name="name" id="name" maxlength="3" required />
    <br><br>
    <input type="submit" name="continue" value="Ga verder">
  </form>

  <div id="highscores"></div>

  <div class="start-screen">Press Any Key To Start</div>
  <div id="timer"></div>
  <div class="end-screen">Game Ended</div>
  <div class="score-screen">Your score:</div>
  <div id="derp1" onclick="hit(10,1)" class="derp"></div>
  <div id="derp2" onclick="hit(20,2)" class="derp"></div>
  <div id="derp3" onclick="hit(50,3)" class="derp"></div>
  <div id="derp4" onclick="hit(100,4)" class="derp"></div>
  <div class="scoreboard">Your Score:
    <div class="score"><?php
      echo "o";
    ?>
    </div><br>
    <div class="scorecount">
      blue derp = 10<br>
      yellow derp = 20<br>
      red derp = 50<br>
      rainbow derp = 100<br>
      <div class="name"></div>
    </div>
  </div>
</body>

</html>
<!-- https://ihatetomatoes.net/create-custom-preloading-screen/ -->

<!-- 1. De game heeft een duidelijk **begin** en een **einde**.

2. Highscore die kan worden opgeslagen en opgehaald en getoond d.m.v. een **database** of **datasource.**

3. Er is gebruik gemaakt van **GIT** en er zijn regelmatig commits gedaan. -->



<!-- # Beoordeling Database-deel

6. In je code zorg je ervoor dat gegevens die maar 1 keer opgeslagen hoeven worden, ook **niet vaker in de tabel** komen te staan.
Bijv. een player-naam zal logischerwijs maar 1 keer voorkomen.
7. Met je code breng je de gegevens ook weer in beeld, met een **toegevoegde SQL**-functie (LIMIT, ORDER BY etc.)
8. De connectie met de database wordt gemaakt dmv een **class.**
9. De class staat in een **aparte file**.
10. Er zit een **error afhandeling** in de class, bijv. als de connectie niet lukt. -->