let bubbleAnimate = false;
let yPos = 0;
let cnv;
let gif_createImg;
let testBubble = [];
let prevMillis = 3 //variable to be updated each time the timer is triggered
let interval = 1356; //1 second timer


function preload() {
  gif_createImg = createImg("giphy.gif");
}
function setup() {
  createCanvas(400, 400);
noStroke();
  fill(0,0,0,30)
   cnv = createCanvas(600, 700);
  cnv.parent("container");
 gif_createImg.parent("container");
}

function draw() {
    clear();
  
   if (millis() - prevMillis > interval){
    makeSmoke(); //call function
    prevMillis = millis(); //set new prevMillis value
  }
 
  for (let i = 0; i < 100; i++) {
    if (bubbleAnimate) {
      testBubble[i].move();
      testBubble[i].display();
    }
  }
  
   

  
  gif_createImg.position(50, 50);
}

function makeSmoke() {
  bubbleAnimate = true;
  for (let i = 0; i < 100; i++) {
    let diam = random(10, 70)
    testBubble[i] = new Bubble(290, 290, diam, diam / 20);
  }
}

class Bubble {
  constructor(xIn, yIn, diameter, speedIn) {
    this.x = xIn;
    this.y = yIn;
    this.diameter = diameter;
    this.speed = speedIn;
  }

  move() {
    this.x += random(-10, 14);
    this.x += this.speed;
    this.y -= this.speed;
  }

  display() {
    fill(219, 219, 219,127);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
