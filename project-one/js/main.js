//Game Data
var mapArray =
[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0],
[0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0],
[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
[0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0],
[0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0],
[0,0,0,0,1,0,0,0,2,0,2,0,0,0,1,0,0,0,0],
[2,2,2,0,1,0,2,2,2,3,2,2,2,0,1,0,2,2,2],
[2,2,2,0,1,0,2,0,0,0,0,0,2,0,1,0,2,2,2],
[2,2,2,0,1,1,1,1,1,1,1,1,1,1,1,0,2,2,2],
[2,2,2,0,1,0,2,0,0,0,0,0,2,0,1,0,2,2,2],
[2,2,2,0,1,0,2,0,0,0,0,0,2,0,1,0,2,2,2],
[2,2,2,0,1,1,1,1,1,1,1,1,1,1,1,0,2,2,2],
[2,2,2,0,1,0,2,0,0,0,0,0,2,0,1,0,2,2,2],
[2,2,2,0,1,0,2,2,2,2,2,2,2,0,1,0,2,2,2],
[0,0,0,0,1,0,0,0,2,0,2,0,0,0,1,0,0,0,0],
[0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0],
[0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0],
[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
[0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0],
[0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];
// key:
// wall = 0;
// coin = 1;
// blank = 2;
// pacman = 3, 4, 5, 6;
// ghost = 7

var pacman = [7,9];
var countdown = 60;
//initial score:
var score = 0;
document.getElementById('score').innerHTML = "SCORE: "+ score;
//Created function to change score when appropriate.
function changeScore() {
 score = Number(score) + 10;
 document.getElementById('score').innerHTML = "SCORE: "+ score;
};

//Countdown
setInterval(function(){
  if (countdown!= 0) {
    countdown--;
    document.getElementById("timer").innerHTML = countdown
  }else {
    document.location = "game_over.html"
  }
},1000);

//Function to draw map from the array:
function drawMap() {
  $('.tile').remove();
  for (var y = 0; y < mapArray.length; y++) {
  for (var x = 0; x < mapArray[y].length; x++) {
  if (mapArray[y][x] == 0) {
    $(".gamebody").append("<div class='wall tile'></div>");
  }
  else if (mapArray[y][x] == 1) {
    $(".gamebody").append("<div class='coin tile'></div>");
  }
  else if (mapArray[y][x] == 2) {
    $(".gamebody").append("<div class='blank tile'></div>");
  }
  else if (mapArray[y][x] == 3) {
    $(".gamebody").append("<div class='pacmanright tile'></div>");
  }
  else if (mapArray[y][x] == 4) {
    $(".gamebody").append("<div class='pacmanleft tile'></div>");
  }
  else if (mapArray[y][x] == 5) {
    $(".gamebody").append("<div class='pacmanup tile'></div>");
  }
  else if (mapArray[y][x] == 6) {
    $(".gamebody").append("<div class='pacmandown tile'></div>");
  }
  else if (mapArray[y][x] == 7) {
    $(".gamebody").append("<div class='ghost tile'></div>");
  }
}
}
};
drawMap();

//Ghost
//Spawn Ghost
var ghostSpawn= setInterval( function(){
  var x = Math.floor(Math.random() * 11) + 4;
  var y = Math.floor(Math.random() * 18) + 1;
  if (mapArray[y][x] != 0 && mapArray[y][x] != 3 && mapArray[y][x] != 4 && mapArray[y][x] != 5 && mapArray[y][x] != 6) {
    var beforespawn = mapArray[y][x];
    mapArray[y][x] = 7;
    setTimeout(function(){mapArray[y][x] = beforespawn},2000)
  }
  drawMap();}, 500);

//Movement of pacman
document.onkeydown = function(event) {
  //Below allows pacman to move down BUT not past walls.
  if (event.keyCode === 40) {
    if (mapArray[pacman[0]+1][pacman[1]] == 1) {
      changeScore();
    }
    else if (mapArray[pacman[0]+1][pacman[1]] == 7){
      document.location = "game_over.html"
    }
    if (mapArray[pacman[0]+1][pacman[1]] !== 0) {
      mapArray[pacman[0]][pacman[1]] = 2;
      mapArray[pacman[0]+1][pacman[1]] = 6;
      pacman = [pacman[0]+1,pacman[1]];
    };
  }
  //Below allows pacman to move up BUT not past walls.
    else if (event.keyCode === 38) {
      if ( mapArray[pacman[0]-1][pacman[1]] == 1) {
        changeScore();
      }
      else if (mapArray[pacman[0]-1][pacman[1]] == 7){
          document.location = "game_over.html"
        }
     if (mapArray[pacman[0]-1][pacman[1]] !== 0) {
       mapArray[pacman[0]][pacman[1]] = 2;
       mapArray[pacman[0]-1][pacman[1]] = 5;
       pacman = [pacman[0]-1,pacman[1]];
     }
   }
   //Below allows pacman to move to users left BUT not past walls.
     else if (event.keyCode === 37) {
       if ( mapArray[pacman[0]][pacman[1]-1] == 1) {
         changeScore();
       }
       else if (mapArray[pacman[0]][pacman[1]-1] == 7){
           document.location = "game_over.html"
         }
      if (mapArray[pacman[0]][pacman[1]-1] !== 0) {
        mapArray[pacman[0]][pacman[1]] = 2;
        mapArray[pacman[0]][pacman[1]-1] = 4;
        pacman = [pacman[0],pacman[1]-1];
      }
  }
  //Below allows pacman to move to users right BUT not past walls.
  else if (event.keyCode === 39) {
    if ( mapArray[pacman[0]][pacman[1]+1] == 1) {
      changeScore();
    }
    else if (mapArray[pacman[0]][pacman[1]+1] == 7){
        document.location = "game_over.html"
      }
   if (mapArray[pacman[0]][pacman[1]+1] !== 0) {
     mapArray[pacman[0]][pacman[1]] = 2;
     mapArray[pacman[0]][pacman[1]+1] = 3;
     pacman = [pacman[0],pacman[1]+1];
   }
 }
  drawMap();
  if (score == 1560) {
    document.location = "you_win.html"
  };
};
