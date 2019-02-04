//Game Data
var mapArray =
[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0],
[0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0],
[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
[0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0],
[0,1,1,1,1,0,1,1,1,0,1,3,1,0,1,1,1,1,0],
[0,0,0,0,1,0,0,0,2,0,2,0,0,0,1,0,0,0,0],
[2,2,2,0,1,0,2,2,2,2,2,2,2,0,1,0,2,2,2],
[2,2,2,0,1,0,2,0,0,0,0,0,2,0,1,0,2,2,2],
[2,2,2,0,1,2,2,0,0,0,0,0,2,2,1,0,2,2,2],
[2,2,2,0,1,0,2,0,0,0,0,0,2,0,1,0,2,2,2],
[2,2,2,0,1,0,2,0,0,0,0,0,2,0,1,0,2,2,2],
[2,2,2,0,1,2,2,0,0,0,0,0,2,2,1,0,2,2,2],
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
var wall = 0;
var coin = 1;
var blank = 2;
var pacman = 3;

//Draw map
function drawMap() {
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
