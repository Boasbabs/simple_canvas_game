//Create the canvas

var canvas = document.createElement("canvas"),
    ctx    = canvas.getContext("2d");

canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Add Background Image
var bgReady = false,
    bgImage = new Image();

bgImage.onload = function() {
  bgReady = true;
}
bgImage.src = "images/background.png";
