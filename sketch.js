var n = 0;
var c = 3.5;
var angle = 135.5;

function mouseClicked() {
  n = 0;
  background(0);
}

function setup() {
  angleMode(DEGREES);
  colorMode(HSB);
  createCanvas(800, 800);
  background(0);
  textSize(22);
  noStroke();
  fill(255);

  slidera = createSlider(0, 300, angle, 0.5);
  slidera.position(0, 0);

  sliderc = createSlider(0, 20, 2, 1);
  sliderc.position(0, 30);
}

function draw() {
  noStroke();
  text("angle", 220, 20);
  text("spacing", 220, 50);

  angle = slidera.value();
  c = sliderc.value();
  
  var a = n * angle;
  var r = c * sqrt(n);

  var x = r * cos(a) + width / 2;
  var y = r * sin(a) + height / 2;

  fill(n % 255, n, 255);

  ellipse(x, y, 6, 6);
  n++;
}