<?php

include "./db_conn.php";

$player = $_GET['player'];
$score = $_GET['score'];

$query = " INSERT INTO `player` (name) VALUES('$player') ";
$result = mysqli_query($conn, $query);

$player_id = $conn->insert_id;
$query = " INSERT INTO `score` (player_id, score) VALUES('$player_id', '$score') ";
$result = mysqli_query($conn, $query);

echo ($score . "/" . $player);