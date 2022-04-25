let pageNum = 1; //declare a variable to hold current page number (current state)
let numPages = 6; //declare a variable to hold total number of pages (states)


//sounds
var moveonbedSound;
var liftarmSound;
var showerSound;
var letsgoSound;
var milkSound;

//cereal pebbles
let y = 100;
let speed = 5;
let value;
let grav = 0.1;

//declare variable for vector object globally
let starField = [];
let numStars = 200;
var drop = [];


function preload(){
   moveonbedSound=loadSound("zapsplat_household_alarm_clock_small_digital_beeping_72638.mp3");
  
liftarmSound=loadSound ("zapsplat_cartoon_very_fast_whoosh_swipe_swish_air_008_80465.mp3");
  
  showerSound=loadSound("554013__itinerantmonk108__shower-sound.wav");
  
  letsgoSound=loadSound("zapsplat_multimedia_male_voice_processed_says_lets_go_002_23681.mp3");
  
  
milkSound=loadSound("zapsplat_food_cereal_in_milk_in_ceramic_bowl_spoon_in_lift_and_drop_back_in_splatter_62341.mp3");
}


function setup() {
 
  
   
  createCanvas(400, 400);
  console.log(pageNum); //during setup, print current page (zero)
  for (let i = 0; i < numStars; i++) {
    starField[i] = createVector(
      random(0, width),
      random(0, height),
      random(0, 255)
    );
  }
  for (var i = 0; i < 200; i++) {
    drop[i] = new Drop();
  }
  value = random(-0.55, -0.94);
}

function keyTyped1(){
  if (key === 'a') {
  if(moveonbedSound.isPlaying()==false){
    moveonbedSound.play();
  }
     
 fill(0);
      circle(145, 150, 40);
      circle((width * 23) / 40, (width * 15) / 40, (width * 40) / 400);
   
       
  } else if (key === 'b') {
    moveonbedSound.stop();
    
   line(
        (width * 129) / 400,
        (width * 15) / 40,
        (width * 16) / 40,
        (width * 15) / 40
      );
      line(
        (width * 213) / 400,
        (width * 155) / 400,
        (width * 245) / 400,
        (width * 155) / 400
      );
   
  }
  
   
}




function draw() {
  //display something different on the canvas depending on current page (current state)
  if (pageNum == 1) {
    background(255, 0, 0);
    text("page 1", 160, 50);

    background(51);
    
    
    //bed
    fill(240, 87, 5);
    rect(48, 70, 290, 330);

    //pillow
    fill(255, 255, 255);
    rect(
      (width * 88) / 400,
      (width * 70) / 400,
      (width * 20) / 40,
      (width * 140) / 400,
      (width * 20) / 400
    );

    //head
    fill(191, 129, 88);
    circle((width * 19) / 40, (width * 16) / 40, (width * 18) / 40);

    fill(0);
    //eyes
    line(
      (width * 129) / 400,
      (width * 15) / 40,
      (width * 16) / 40,
      (width * 15) / 40
    );
    line(
      (width * 213) / 400,
      (width * 155) / 400,
      (width * 245) / 400,
      (width * 155) / 400
    );

    fill(191, 129, 88);
    strokeWeight(0.5);
    stroke(1);

    triangle(
      (width * 187) / 400,
      (width * 16) / 40,
      (width * 175) / 400,
      (width * 194) / 400,
      (width * 20) / 40,
      (width * 194) / 400
    );
    console.log(mouseX + "," + mouseY);

    line(
      (width * 12) / 40,
      (width * 125) / 400,
      (width * 170) / 400,
      (width * 125) / 400
    );

    line(
      (width * 25) / 40,
      (width * 125) / 400,
      (width * 20) / 40,
      (width * 125) / 400
    );

    fill(16, 155, 201);
    rect(
      (width * 157) / 400,
      (width * 345) / 400,
      (width * 65) / 400,
      (width * 55) / 40
    );

    fill(0);

    rect(
      (width * 12) / 40,
      (width * 69) / 400,
      (width * 139) / 400,
      (width * 35) / 400
    );
    circle((width * 11) / 40, (width * 70) / 400, (width * 50) / 400);
    circle((width * 13) / 40, (width * 60) / 400, (width * 50) / 400);
    circle((width * 15) / 40, (width * 55) / 400, (width * 50) / 400);
    circle((width * 18) / 40, (width * 55) / 400, (width * 50) / 400);
    circle((width * 21) / 40, (width * 55) / 400, (width * 50) / 400);
    circle((width * 24) / 40, (width * 55) / 400, (width * 50) / 400);
    circle((width * 27) / 40, (width * 80) / 400, (width * 50) / 400);
    circle((width * 26) / 40, (width * 60) / 400, (width * 50) / 400);
    circle((width * 105) / 400, (width * 85) / 400, (width * 50) / 400);

    fill(255, 255, 255);

    // rect(width*143/400, width*204/400,width* 90/400,width*30/400, width*20/40);

    fill(0);
    strokeWeight(0.5);
    stroke(1);
    //  line(width*143/400,width* 22/40, width*232/400, width*22/40);
    // line(width*209/400,width*233/400,width*209/400,width*204/400);
    //  line(width*189/400,width*233/400,width*189/400,width*204/400);
    //  line(width*17/40,width*233/400,width*17/40,width*204/400);

    fill(191, 129, 88);
    // strokeWeight(0);
    noStroke();
    rect(
      (width * 17) / 40,
      (width * 248) / 400,
      (width * 4) / 40,
      (width * 2) / 40
    );

    fill("red");
    strokeWeight(0);
    rect(
      (width * 155) / 400,
      (width * 266) / 400,
      (width * 7) / 40,
      (width * 119) / 400,
      (width * 9) / 400
    );
    rect(
      (width * 13) / 40,
      (width * 266) / 400,
      (width * 6) / 40,
      (width * 5) / 40,
      (width * 1) / 40
    );
    rect(
      (width * 195) / 400,
      (width * 266) / 400,
      (width * 6) / 40,
      (width * 5) / 40,
      (width * 1) / 40
    );

    strokeWeight(0.5);
    stroke(0);
    line(
      (width * 143) / 400,
      (width * 22) / 40,
      (width * 232) / 400,
      (width * 22) / 40
    );

    //sheet
    fill(255, 255, 255);
    rect(60, 286, 270, 130);

    keyTyped1();
    
    
    
    
  } else if (pageNum == 2) {
    background(255, 255, 0);
    text("page 2", 100, 100);

    fill(191, 129, 88);
    background(51);
    circle((width * 19) / 40, (width * 16) / 40, (width * 18) / 40);

    fill(0);

    circle((width * 14) / 40, (width * 15) / 40, (width * 40) / 400);
    circle((width * 23) / 40, (width * 15) / 40, (width * 40) / 400);

    fill(191, 129, 88);
    strokeWeight(0.5);
    stroke(1);

    triangle(
      (width * 187) / 400,
      (width * 16) / 40,
      (width * 175) / 400,
      (width * 194) / 400,
      (width * 20) / 40,
      (width * 194) / 400
    );
    console.log(mouseX + "," + mouseY);

    line(120, 125, 160, 125);
    line(
      (width * 25) / 40,
      (width * 125) / 400,
      (width * 20) / 40,
      (width * 125) / 400
    );

    fill(16, 155, 201);
    rect(
      (width * 157) / 400,
      (width * 345) / 400,
      (width * 65) / 400,
      (width * 55) / 40
    );

    fill(0);

    rect(
      (width * 12) / 40,
      (width * 69) / 400,
      (width * 139) / 400,
      (width * 35) / 400
    );
    circle((width * 11) / 40, (width * 70) / 400, (width * 50) / 400);
    circle((width * 13) / 40, (width * 60) / 400, (width * 50) / 400);
    circle((width * 15) / 40, (width * 55) / 400, (width * 50) / 400);
    circle((width * 18) / 40, (width * 55) / 400, (width * 50) / 400);
    circle((width * 21) / 40, (width * 55) / 400, (width * 50) / 400);
    circle((width * 24) / 40, (width * 55) / 400, (width * 50) / 400);
    circle((width * 27) / 40, (width * 80) / 400, (width * 50) / 400);
    circle((width * 26) / 40, (width * 60) / 400, (width * 50) / 400);
    circle((width * 105) / 400, (width * 85) / 400, (width * 50) / 400);

    fill(255, 255, 255);

    // rect(width*143/400, width*204/400,width* 90/400,width*30/400, width*20/40);

    fill(0);
    strokeWeight(0.5);
    stroke(1);
    //  line(width*143/400,width* 22/40, width*232/400, width*22/40);
    // line(width*209/400,width*233/400,width*209/400,width*204/400);
    //  line(width*189/400,width*233/400,width*189/400,width*204/400);
    //  line(width*17/40,width*233/400,width*17/40,width*204/400);

    fill(191, 129, 88);
    // strokeWeight(0);
    noStroke();
    rect(
      (width * 17) / 40,
      (width * 248) / 400,
      (width * 4) / 40,
      (width * 2) / 40
    );

    //Arms
    //fill(191, 129, 88);
    //strokeWeight(0);
    //rect(width*35/400,width* 275/400, width*12/40,width* 29/400,width* 10/40);

    //fill(191, 129, 88);
    //strokeWeight(0);
    //rect(width*23/40,width* 275/400, width*12/40, width*29/400, width*10/40);

    if (keyIsPressed === true) {
    if(liftarmSound.isPlaying()==false){
      liftarmSound.play();
    }
      fill(0);
      ellipse(188, 217, 30, 30);
      strokeWeight(0);
      fill(191, 129, 88);
      rect(
        (width * 20) / 400,
        (width * 177) / 400,
        (width * 3) / 40,
        (width * 105) / 400,
        (width * 100) / 400
      );

      strokeWeight(0);
      fill(191, 129, 88);
      rect(
        (width * 325) / 400,
        (width * 187) / 400,
        (width * 3) / 40,
        (width * 102) / 400,
        (width * 100) / 400
      );

      //lower arm
      fill(191, 129, 88);
      strokeWeight(0);
      rect(
        (width * 35) / 400,
        (width * 268) / 400,
        (width * 12) / 40,
        (width * 40) / 400,
        (width * 10) / 40
      );

      fill(191, 129, 88);
      strokeWeight(0);
      rect(
        (width * 23) / 40,
        (width * 275) / 400,
        (width * 12) / 40,
        (width * 40) / 400,
        (width * 10) / 40
      );

      strokeWeight(0);
      circle((width * 40) / 400, (width * 285) / 400, (width * 4.3) / 40);

      strokeWeight(0);
      circle((width * 339) / 400, (width * 293) / 400, (width * 4.3) / 40);

      //hand
      fill(191, 129, 88);
      strokeWeight(0);
      circle((width * 35) / 400, (width * 170) / 400, (width * 5) / 40);

      fill(191, 129, 88);
      circle((width * 340) / 400, (width * 177) / 400, (width * 5) / 40);
    } else {
      strokeWeight(0.5);
      stroke(1);
      arc(170, 200, 90, 50, 0.4, HALF_PI);
      //arm
      fill(191, 129, 88);
      strokeWeight(0);
      rect(
        (width * 35) / 400,
        (width * 275) / 400,
        (width * 12) / 40,
        (width * 29) / 400,
        (width * 10) / 40
      );

      fill(191, 129, 88);
      strokeWeight(0);
      rect(
        (width * 23) / 40,
        (width * 275) / 400,
        (width * 12) / 40,
        (width * 29) / 400,
        (width * 10) / 40
      );
      //hands
      fill(191, 129, 88);
      strokeWeight(0);
      circle((width * 35) / 400, (width * 287) / 400, (width * 5) / 40);

      fill(191, 129, 88);
      circle((width * 340) / 400, (width * 290) / 400, (width * 5) / 40);
    }

    print(keyIsPressed);

    fill("red");
    strokeWeight(0);
    rect(
      (width * 155) / 400,
      (width * 266) / 400,
      (width * 7) / 40,
      (width * 119) / 400,
      (width * 9) / 400
    );
    rect(
      (width * 13) / 40,
      (width * 266) / 400,
      (width * 6) / 40,
      (width * 5) / 40,
      (width * 1) / 40
    );
    rect(
      (width * 195) / 400,
      (width * 266) / 400,
      (width * 6) / 40,
      (width * 5) / 40,
      (width * 1) / 40
    );

    // fill(191, 129, 88);
    // strokeWeight(0);
    //circle(width*35/400, width*287/400,width* 5/40);

    //fill(191, 129, 88);
    //circle(width*340/400, width*290/400,width* 5/40);
  } else if (pageNum == 3) {
    
    background(186, 211, 222);

    //head
    fill(191, 129, 88);
    circle((width * 19) / 40, (width * 16) / 40, (width * 18) / 40);

    fill(0);

    circle((width * 14) / 40, (width * 15) / 40, (width * 40) / 400);
    circle((width * 23) / 40, (width * 15) / 40, (width * 40) / 400);

    fill(191, 129, 88);
    strokeWeight(0.5);
    stroke(1);

    triangle(
      (width * 187) / 400,
      (width * 16) / 40,
      (width * 175) / 400,
      (width * 194) / 400,
      (width * 20) / 40,
      (width * 194) / 400
    );
    console.log(mouseX + "," + mouseY);

    line(120, 125, 160, 125);
    line(
      (width * 25) / 40,
      (width * 125) / 400,
      (width * 20) / 40,
      (width * 125) / 400
    );

    strokeWeight(0.5);
    stroke(1);
    arc(170, 200, 90, 50, 0.4, HALF_PI);

    //body
    fill(191, 129, 88);
    stroke(0);
    strokeWeight(0);
    rect(
      (width * 150) / 400,
      (width * 268) / 400,
      (width * 80) / 400,
      (width * 55) / 40
    );

    //chest
    fill(117, 89, 55);
    ellipse(166, 298, 10, 10);

    fill(117, 89, 55);
    ellipse(210, 298, 10, 10);

    fill(117, 89, 55);
    ellipse(188, 380, 10, 10);

    //leftarm
    fill(191, 129, 88);
    noStroke();
    rect(115, 270, 35, 55, 30, 15, 10, 5);
    rect(124, 268, 35, 35, 10);
    rect(113.5, 313, 35, 55, 30, 15, 10, 5);
    rect(113.5, 353, 35, 55, 30, 15, 10, 5);

    //right arm
    fill(191, 129, 88);
    noStroke();
    rect(231, 270, 35, 55, 30, 15, 10, 5);
    rect(221, 268, 35, 35, 10);
    rect(231, 313, 35, 55, 30, 15, 10, 5);
    rect(231, 353, 35, 55, 30, 15, 10, 5);

    //shower head
    fill(191, 191, 191);
    stroke(0);
    strokeWeight(0.5);
    rect(45, 0.2, 310, 10);

    //hair
    fill(0);

    rect(
      (width * 12) / 40,
      (width * 69) / 400,
      (width * 139) / 400,
      (width * 35) / 400
    );
    circle((width * 11) / 40, (width * 70) / 400, (width * 50) / 400);
    circle((width * 13) / 40, (width * 60) / 400, (width * 50) / 400);
    circle((width * 15) / 40, (width * 55) / 400, (width * 50) / 400);
    circle((width * 18) / 40, (width * 55) / 400, (width * 50) / 400);
    circle((width * 21) / 40, (width * 55) / 400, (width * 50) / 400);
    circle((width * 24) / 40, (width * 55) / 400, (width * 50) / 400);
    circle((width * 27) / 40, (width * 80) / 400, (width * 50) / 400);
    circle((width * 26) / 40, (width * 60) / 400, (width * 50) / 400);
    circle((width * 105) / 400, (width * 85) / 400, (width * 50) / 400);

    fill(255, 255, 255);

    // rect(width*143/400, width*204/400,width* 90/400,width*30/400, width*20/40);

    fill(0);
    strokeWeight(0.5);
    stroke(1);
    //  line(width*143/400,width* 22/40, width*232/400, width*22/40);
    // line(width*209/400,width*233/400,width*209/400,width*204/400);
    //  line(width*189/400,width*233/400,width*189/400,width*204/400);
    //  line(width*17/40,width*233/400,width*17/40,width*204/400);

    fill(191, 129, 88);
    // strokeWeight(0);
    noStroke();
    rect(
      (width * 17) / 40,
      (width * 248) / 400,
      (width * 4) / 40,
      (width * 2) / 40
    );
    for (let i = 0; i < 200; i++) {
      drop[i].show();
      drop[i].update();
    }
    //Arms
    //fill(191, 129, 88);
    //strokeWeight(0);
    //rect(width*35/400,width* 275/400, width*12/40,width* 29/400,width* 10/40);

    //fill(191, 129, 88);
    //strokeWeight(0);
    //rect(width*23/40,width* 275/400, width*12/40, width*29/400, width*10/40);
    
 
    if (keyIsPressed === true) {
    if(showerSound.isPlaying()==false){
      showerSound.play();
    }
      else{
        showerSound.stop();
      }
    }
       print(keyIsPressed); 
    
  } else if (pageNum == 4) {
    background(255, 166, 71);

    //cereal pebbles
    fill(255, 212, 20);
    if (keyIsPressed === true) {
    if(milkSound.isPlaying()==false){
      milkSound.play();
    }
      
      fill(255, 212, 20);
      ellipse(220, y, 20, 20);
      ellipse(200, y, 20, 20);
      ellipse(190, y, 20, 20);
      ellipse(180, y, 20, 20);
      ellipse(170, y, 20, 20);

      y = y + speed;
      speed = speed + grav;
      if (y > 300 || y < 0) {
        speed = value * speed;
      }
    } else {
      milkSound.stop();
      fill(255, 212, 20);
      circle(188, 10, 40);
    }

    print(keyIsPressed);

    //cereal box
    fill(99, 151, 184);
    rect(130, 1, 125, 55);
    rect(95, 31, 35, 25);
    rect(255, 31, 35, 25);

    //text
    fill(255);
    textSize(22);
    text("Cereal", 158, 30);

    //table
    fill(232, 63, 63);
    stroke(0.5);
    rect(74, 390, 240, 15);

    //bowl
    fill(181, 181, 181);
    stroke(0.5);
    arc(193, 335, 120, 110, -0.8, PI + QUARTER_PI, CHORD);
    
  } else if (pageNum == 5) {
    background(28, 157, 255);
     //head
    fill(191, 129, 88);
    circle((width * 19) / 40, (width * 16) / 40, (width * 18) / 40);

    fill(0);

    circle((width * 14) / 40, (width * 15) / 40, (width * 40) / 400);
    circle((width * 23) / 40, (width * 15) / 40, (width * 40) / 400);

    fill(191, 129, 88);
    strokeWeight(0.5);
    stroke(1);

    triangle(
      (width * 187) / 400,
      (width * 16) / 40,
      (width * 175) / 400,
      (width * 194) / 400,
      (width * 20) / 40,
      (width * 194) / 400
    );
    console.log(mouseX + "," + mouseY);

    line(120, 125, 160, 125);
    line(
      (width * 25) / 40,
      (width * 125) / 400,
      (width * 20) / 40,
      (width * 125) / 400
    );



    //body
    fill(255);
    stroke(0);
    strokeWeight(0);
    rect(
      (width * 150) / 400,
      (width * 268) / 400,
      (width * 80) / 400,
      (width * 55) / 40
    );

    

    //leftarm
    fill(191, 129, 88);
    noStroke();
    rect(115, 270, 35, 55, 30, 15, 10, 5);
    rect(124, 268, 35, 35, 10);
    rect(113.5, 313, 35, 55, 30, 15, 10, 5);
    rect(113.5, 353, 35, 55, 30, 15, 10, 5);

    //right arm
    fill(191, 129, 88);
    noStroke();
    rect(231, 270, 35, 55, 30, 15, 10, 5);
    rect(221, 268, 35, 35, 10);
    rect(231, 313, 35, 55, 30, 15, 10, 5);
    rect(231, 353, 35, 55, 30, 15, 10, 5);
//hair
    fill(0);

    rect(
      (width * 12) / 40,
      (width * 69) / 400,
      (width * 139) / 400,
      (width * 35) / 400
    );
    circle((width * 11) / 40, (width * 70) / 400, (width * 50) / 400);
    circle((width * 13) / 40, (width * 60) / 400, (width * 50) / 400);
    circle((width * 15) / 40, (width * 55) / 400, (width * 50) / 400);
    circle((width * 18) / 40, (width * 55) / 400, (width * 50) / 400);
    circle((width * 21) / 40, (width * 55) / 400, (width * 50) / 400);
    circle((width * 24) / 40, (width * 55) / 400, (width * 50) / 400);
    circle((width * 27) / 40, (width * 80) / 400, (width * 50) / 400);
    circle((width * 26) / 40, (width * 60) / 400, (width * 50) / 400);
    circle((width * 105) / 400, (width * 85) / 400, (width * 50) / 400);

  fill(191, 129, 88);
    // strokeWeight(0);
    noStroke();
    rect(
      (width * 17) / 40,
      (width * 248) / 400,
      (width * 4) / 40,
      (width * 2) / 40
    );  
    
    if (keyIsPressed === true) {
     if(letsgoSound.isPlaying()==false){
      letsgoSound.play();
     }
      fill(0);
      ellipse(188, 217, 30, 30);
    
     
    } else {
      
  strokeWeight(0.5);
        stroke(1);
        arc(170, 200, 90, 50, 0.4, HALF_PI);

      
      
    }

    print(keyIsPressed);
 

 
  }
}
function Drop() {
  this.x = random(0, width);
  this.y = random(0, -height);

  this.show = function () {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, random(1, 5), random(1, 5));
  };
  this.update = function () {
    this.speed = random(5, 10);
    this.gravity = 1.05;
    this.y = this.y + this.speed * this.gravity;

    if (this.y > height) {
      this.y = random(0, -height);
      this.gravity = 0;
    }
  };
}

//mousePressed() function will run each time the mouse is clicked
function mousePressed() {
  //if the numerical value of the current page is less than the total number of pages, we can increment the pageNum variable's value and move to the next page
  if (pageNum < numPages) {
    pageNum++;
  }

  //otherwise, reset to first page
  else {
    pageNum = 1;
  }

  //after each click, print the current page number to the console
  console.log(pageNum);
}
