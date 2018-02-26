function onLoad() {
  var audio = document.getElementsByTagName("audio")[0];
  document.getElementById("play").onclick = function () { audio.play(); };
  document.getElementById("pause").onclick = function () { audio.pause(); };
}

function setVolume(val) {
  var audio = document.getElementsByTagName("audio")[0];
  audio.volume = val / 100;
}