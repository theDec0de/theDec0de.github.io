var a;
var b;
var c;
var startPoint;
var limit = 800;
var currentPoint;
var ri = 0;
var m;
var cri = 0;

function setup(){
	colorMode(HSB)
	createCanvas(1200, limit)
	stroke(255)
	background(0)
	currentPoint = createVector(0,0)
	a = createVector(random(0,limit),random(0,limit))
	b = createVector(random(0,limit),random(0,limit))
	c = createVector(random(0,limit),random(0,limit))
	startPoint = createVector(random(a.x,a.y),random(c.x,c.y));
}

function mouseClicked() {
	setup()
}

function draw() {
	
	stroke(255,0,100);
	textSize(22);
	fill(255)
	text('Click to reset',0,30)
	point(startPoint.x, startPoint.y);
	
	stroke(255);
	ellipse(a.x, a.y,5,5);
	ellipse(b.x, b.y,5,5);
	ellipse(c.x, c.y,5,5);
	
	if (cri >= 255)
            cri=0;
        else
            cri++;
        stroke(cri, 255, 255);
	
	ri = Math.round(random(1, 6));
            if (ri == 1 || ri == 2) {
                m = midpoint(currentPoint.x, a.x, currentPoint.y, a.y);
                point(m.x, m.y);
                currentPoint = m;
            } else if (ri == 3 || ri == 4) {
                m = midpoint(currentPoint.x, b.x, currentPoint.y, b.y);
                point(m.x, m.y);
                currentPoint = m;
            } else if (ri == 5 || ri == 6) {
                m = midpoint(currentPoint.x, c.x, currentPoint.y, c.y);
                point(m.x, m.y);
                currentPoint = m;
            }
}

function midpoint(x1,x2,y1,y2) {
	return createVector((x1+x2)/2,(y1+y2)/2);
}