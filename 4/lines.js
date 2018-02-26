var canvas;
var ctx;
document.getElementsByTagName("body")[0].onload = function () {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext('2d');
  canvas.onmousedown = function () { mouseDown(event); };
  canvas.onmouseup = function () { mouseUp(event); };
  canvas.onmousemove = function () { mouseMove(event); };
  canvas.onmouseout = function () { mouseOut(); };
};
var drawing = false;
var xStart;
var yStart;
var lines = [];
function drawLine(line) {
  ctx.beginPath();
  ctx.moveTo(line.xStart, line.yStart);
  ctx.lineTo(line.xEnd, line.yEnd);
  ctx.stroke();
  ctx.closePath();
}
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  linesLen = lines.length;
  for (i = 0; i < linesLen; i++)
    drawLine(lines[i]);
}
function mouseDown(event) {
  xStart = event.offsetX;
  yStart = event.offsetY;
  drawing = true;
}
function mouseUp(event) {
  lines.push({
    xStart: xStart, yStart: yStart,
    xEnd: event.offsetX, yEnd: event.offsetY
  })
  drawing = false;
}
function mouseMove(event) {
  if (drawing) {
    draw();
    ctx.beginPath();
    ctx.moveTo(xStart, yStart);
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    ctx.closePath();
  }
}
function mouseOut() {
  drawing = false;
}
