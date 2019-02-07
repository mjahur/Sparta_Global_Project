//Game Data
var mapArray =
[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0],
[0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0],
[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,0],
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
// ghost = 4;

var pacman = [7,9];
var ghost = [3,17];
var countdown = 60;
var score = document.getElementById('score').innerHTML;
function changeScore() {
 score = Number(score) + 10;
 document.getElementById('score').innerHTML = score;
};

//score
setInterval(function(){
  if (countdown!= 0) {
    countdown--;
    document.getElementById("timer").innerHTML = countdown
  }else {
    document.location = "game_over.html"
  }
},1000);

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
  else if (mapArray[y][x] == 4) {
    $(".gamebody").append("<div class='ghost tile'></div>");
  }
}
}
};
drawMap();

//ghost Movement

// var ghostmove = setInterval( function(){
//   var moveDirestion = [ghost[1]-1];
//
//   if((mapArray[ghost[0]][ghost[1]-1] != 0)&&(moveDirestion < 16))
//   {
//     moveDirestion = moveDirestion+1;
//     mapArray[ghost[0]][ghost[1]] = 2;
//     mapArray[ghost[0]][ghost[1]-1] = 4;
//     ghost = [ghost[0], ghost[1]-1];
//     console.log(moveDirestion +"if");
//     drawMap()}
//     else if((mapArray[ghost[0]][ghost[1]+1] != 0) && (moveDirestion >=16))
//       {
//         moveDirestion++;
//         mapArray[ghost[0]][ghost[1]] = 2;
//         mapArray[ghost[0]][ghost[1]+1] = 4;
//         ghost = [ghost[0], ghost[1]+1];
//         console.log(moveDirestion +"ifelse");
//         drawMap()}
//         moveDirestion = moveDirestion%34;
//         console.log(moveDirestion+ "mod");
//
//
//   }, 400);
// ghostmove();
// clearInterval(ghostmove);



var ghostright = setInterval( function(){
  if(mapArray[ghost[0]][ghost[1]-1] != 0)
  {console.log(1);
    mapArray[ghost[0]][ghost[1]] = 2;
    mapArray[ghost[0]][ghost[1]-1] = 4;
    ghost = [ghost[0], ghost[1]-1];
    drawMap()}
    else{
    clearInterval(ghostright);
    ghostleft();
    }
  }, 400);
clearInterval(ghostright);


console.log("right");
var ghostleft =  setInterval( function(){
  console.log("time");
    if(mapArray[ghost[0]][ghost[1]+1] != 0)
    {
      mapArray[ghost[0]][ghost[1]] = 2;
      mapArray[ghost[0]][ghost[1]+1] = 4;
      ghost = [ghost[0], ghost[1]+1];
      drawMap()}
      else{
        clearInterval(ghostleft);
      }
    }, 400);
clearInterval(ghostleft);
console.log("left");


//Movement of pacman
document.onkeydown = function(event) {
  //Below allows pacman to move down BUT not past walls.
  if (event.keyCode === 40) {
    if ( mapArray[pacman[0]+1][pacman[1]] == 1) {
      changeScore()
    };
    if (mapArray[pacman[0]+1][pacman[1]] !== 0) {
      mapArray[pacman[0]][pacman[1]] = 2;
      mapArray[pacman[0]+1][pacman[1]] = 3;
      pacman = [pacman[0]+1,pacman[1]];
    };
  }
  //Below allows pacman to move up BUT not past walls.
    else if (event.keyCode === 38) {
      if ( mapArray[pacman[0]-1][pacman[1]] == 1) {
        changeScore()
      };
     if (mapArray[pacman[0]-1][pacman[1]] !== 0) {
       mapArray[pacman[0]][pacman[1]] = 2;
       mapArray[pacman[0]-1][pacman[1]] = 3;
       pacman = [pacman[0]-1,pacman[1]];
     };
   }
   //Below allows pacman to move to users left BUT not past walls.
     else if (event.keyCode === 37) {
       if ( mapArray[pacman[0]][pacman[1]-1] == 1) {
         changeScore()
       };
      if (mapArray[pacman[0]][pacman[1]-1] !== 0) {
        mapArray[pacman[0]][pacman[1]] = 2;
        mapArray[pacman[0]][pacman[1]-1] = 3;
        pacman = [pacman[0],pacman[1]-1];
      };
  }
  //Below allows pacman to move to users right BUT not past walls.
  else if (event.keyCode === 39) {
    if ( mapArray[pacman[0]][pacman[1]+1] == 1) {
      changeScore()
    };
   if (mapArray[pacman[0]][pacman[1]+1] !== 0) {
     mapArray[pacman[0]][pacman[1]] = 2;
     mapArray[pacman[0]][pacman[1]+1] = 3;
     pacman = [pacman[0],pacman[1]+1];
   };
 }
  drawMap();
  if (score == 1560) {
    document.location = "you_win.html"
  };
};
