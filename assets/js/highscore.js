end_game = () => {
  document.getElementById("end").style.display = "none";
  document.getElementById("form").style.display = "block";
}

save_score = () => {
  //alert('aaa');
  if (document.getElementById("name").value === "") {
      document.getElementById("name").style.border = "1px solid red";
      document.getElementById("name").placeholder = "Vul een naam in aub";
      return false;
  } else {
      let name = document.getElementById("name").value;
      // voor nu random score
      let score = Math.floor(Math.random() * 100);
      let xmlhttp =  new XMLHttpRequest();

      xmlhttp.open("GET", "save_score.php?n=" + name + "&s=" + score, true);
      xmlhttp.send();
      xmlhttp.onreadystatechange = function () {
          if (xmlhttp.readyState == XMLHttpRequest.DONE) {
              if (xmlhttp.status == 200) {

                  console.log(xmlhttp.responseText);
                  var json = JSON.parse(xmlhttp.responseText);
                  console.log(json);
                  var tbl = document.createElement('table');
                  tbl.style.width = '100%';
                  tbl.setAttribute('border', '1');
                  var tbdy = document.createElement('tbody');
                  tbl.appendChild(tbdy);

                  for (var i = 0; i < json.length; i++) {
                      var obj = json[i];
                      var tr = document.createElement('tr');
                      var td = document.createElement('td');
                      td.appendChild(document.createTextNode(obj.name));
                      tr.appendChild(td);
                      var td = document.createElement('td');
                      td.appendChild(document.createTextNode(obj.score));
                      tr.appendChild(td);
                      var td = document.createElement('td');
                      td.appendChild(document.createTextNode(obj.playdate));
                      tr.appendChild(td);
                      tbdy.appendChild(tr);

                  }
                  document.getElementById('highscores').style.display = "block";
                  document.getElementById('highscores').appendChild(tbl);
                  console.log(tbl);
              } else if (xmlhttp.status == 400) {
                  alert('er was een 400 error');
              } else {
                  alert('erwas een andere return dan 200');
              }
          }
      };
      document.getElementById('form').style.display = "none";
      return false;
  }
};