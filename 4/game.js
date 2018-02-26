var ctx, canvas, counter;
var playing = false;
var score = 0;
var time = 0;
var size = 60;

document.getElementsByTagName("body")[0].onload = function () {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext('2d');
  canvas.onclick = function () { onClick(event); };
};

function randomNum(max) {
  return Math.floor(Math.random() * max);
};

function onClick(event) {
  var clickX = event.offsetX;
  var clickY = event.offsetY;
  if (!playing) {
    playing = true;
    time = 10;
    countTime();
    counter = setInterval(countTime, 1000);
    drawRect();
    score = 0;
    document.getElementById("score").innerHTML = score;
  } else if (clickX >= x && clickX <= x + size && clickY >= y && clickY <= y + size) {
    score += 1;
    drawRect();
    document.getElementById("score").innerHTML = score;
  }
};
function drawRect() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  x = randomNum(canvas.width - size);
  y = randomNum(canvas.height - size);
  ctx.fillStyle = "#FFFF00";
  ctx.fillRect(x, y, size, size);
};
function countTime() {
  if (time == 0) {
    document.getElementById("timer").innerHTML =
      "GAME OVER, SCORE: ";
    playing = false;
    clearInterval(counter);
  }
  else {
    document.getElementById("timer").innerHTML =
      "TIME LEFT: " + time + " | SCORE: ";
    time -= 1;
  }
};