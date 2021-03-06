<?php
  include "./db_conn.php";
  $obj = new Connection();
  $conn = $obj->connection();
  
  $query = " SELECT player.name AS player, score.score AS score FROM player INNER JOIN score ON player.id = score.player_id ORDER BY score DESC LIMIT 5 ";
  $result = mysqli_query($conn, $query);
?>

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
  <div class="start-screen">Press Any Key To Start</div>
  <div id="timer"></div>
  <div class="end-screen"onclick="restart()">Game Ended<br><p>(Click To Restart)</p></div>
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
      rainbow derp = 100<br><br>
      Player:
      <div class="name"></div><br>
      <div class="leaderboard">
        <h4>Top Scores:</h4>
        <?php
            while ($row_users = mysqli_fetch_array($result)) {
              echo "<li>" . ($row_users['player']) . ": " . ($row_users['score']) . "</li>";
            }
         ?>
      </div>
    </div>
  </div>
</body>

</html>
<!-- https://ihatetomatoes.net/create-custom-preloading-screen/ -->

<!--1. Highscore die kan worden opgeslagen en opgehaald en getoond d.m.v. een **database** of **datasource.**

2. Er is gebruik gemaakt van **GIT** en er zijn regelmatig commits gedaan. -->



<!-- # Beoordeling Database-deel

6. In je code zorg je ervoor dat gegevens die maar 1 keer opgeslagen hoeven worden, ook **niet vaker in de tabel** komen te staan.
Bijv. een player-naam zal logischerwijs maar 1 keer voorkomen.
7. Met je code breng je de gegevens ook weer in beeld, met een **toegevoegde SQL**-functie (LIMIT, ORDER BY etc.)
8. De connectie met de database wordt gemaakt dmv een **class.**
9. De class staat in een **aparte file**.
10. Er zit een **error afhandeling** in de class, bijv. als de connectie niet lukt. -->