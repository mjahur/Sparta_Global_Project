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
// pacman = 3;

var pacman = [7,9];

//Draw map
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
    $(".gamebody").append("<div class='pacman tile'></div>");
  }
}
}
};
drawMap();

//Movement
document.onkeydown = function(event) {
  //Below allows pacman to move down BUT not past walls.
  if (event.keyCode === 40) {
    if (mapArray[pacman[0]+1][pacman[1]] !== 0) {
      mapArray[pacman[0]][pacman[1]] = 2;
      mapArray[pacman[0]+1][pacman[1]] = 3;
      pacman = [pacman[0]+1,pacman[1]];
    };
  }
  //Below allows pacman to move up BUT not past walls.
    else if (event.keyCode === 38) {
     if (mapArray[pacman[0]-1][pacman[1]] !== 0) {
       mapArray[pacman[0]][pacman[1]] = 2;
       mapArray[pacman[0]-1][pacman[1]] = 3;
       pacman = [pacman[0]-1,pacman[1]];
     };
   }
   //Below allows pacman to move to users left BUT not past walls.
     else if (event.keyCode === 37) {
      if (mapArray[pacman[0]][pacman[1]-1] !== 0) {
        mapArray[pacman[0]][pacman[1]] = 2;
        mapArray[pacman[0]][pacman[1]-1] = 3;
        pacman = [pacman[0],pacman[1]-1];
      };
  }
  //Below allows pacman to move to users right BUT not past walls.
  else if (event.keyCode === 39) {
   if (mapArray[pacman[0]][pacman[1]+1] !== 0) {
     mapArray[pacman[0]][pacman[1]] = 2;
     mapArray[pacman[0]][pacman[1]+1] = 3;
     pacman = [pacman[0],pacman[1]+1];
   };
 }
  drawMap();
};
