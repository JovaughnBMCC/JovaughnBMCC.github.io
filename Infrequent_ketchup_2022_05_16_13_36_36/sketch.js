//may not work on safari
// Declare a "SerialPort" object
var serial;

// fill in the name of your serial port here:
//copy this from the serial control app
var portName = "/dev/tty.usbmodem11301";

//this array will hold transmitted data
var inMessage = 0;


//sound
var lightswitchSound;

function preload(){
lightswitchSound=loadSound("zapsplat_vehicles_car_roof_light_switch_click_004_80935.mp3");
}







function setup() {
  createCanvas(400, 400);
   // make an instance of the SerialPort object
  serial = new p5.SerialPort();

  // Get a list the ports available
  // You should have a callback defined to see the results. See gotList, below:
  // serial.list();

  // Assuming our Arduino is connected,  open the connection to it
  serial.open(portName);

  // When you get a list of serial ports that are available
  // serial.on('list', gotList);

  // When you some data from the serial port
  serial.on('data', gotData);
}


// Got the list of ports
// function gotList(thelist) {
//   // theList is an array of their names
//   for (var i = 0; i < thelist.length; i++) {
//     // Display in the console
//     console.log(i + " " + thelist[i]);
//   }
// }

// Called when there is data available from the serial port
function gotData() {
  var currentString = serial.readLine();  // read the incoming data
  trim(currentString);                    // trim off trailing whitespace
  if (!currentString) return;             // if the incoming string is empty, do no more
  console.log(currentString);
  inMessage=currentString; //reassign data from local var to global var
}

function draw() {
  background(0);
  


  
  if (inMessage > 800){
          //Lightbulb case
  fill(230, 237, 237);
ellipse(196, 36, 195, 145);
   // bulb
    fill(255);
   
   if(lightswitchSound.isPlaying()==false){
    lightswitchSound.play();
  }
  }
  //bulb
  else{
     background(144, 175, 224);
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
    //smile
     strokeWeight(0.5);
        stroke(1);
        arc(170, 200, 90, 50, 0.4, HALF_PI);
    
  //Lightbulb case
  fill(230, 237, 237);
ellipse(196, 36, 195, 145);
    //bulb
  fill(255,255,0);
  }
  ellipse(196,51, 50, 45);
  
  //Lightbulb holder
  fill(144, 145, 145);
  noStroke();
  rect(178.5, 0, 35, 35);
  
  
}