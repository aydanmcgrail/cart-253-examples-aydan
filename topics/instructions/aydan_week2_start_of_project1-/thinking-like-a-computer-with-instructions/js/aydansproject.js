/**
 * Thinking like a computer with instructions
 * Pippin Barr
 *
 * An ultra simple example of instructions
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
  createCanvas(1200, 650);
  background(100, 100, 10);

}

/**
 * Sets background, draws the eye
 */
function draw() {
  // The void
  background("#599ce8ff");

  aydansfunction();
  
  fill("#d3f0f6ff");
  ellipse(100,100,600,130)
  ellipse(700,60,150,50)
  ellipse(640,80,200,30)
  ellipse(720,80,170,40)
  ellipse(90,60,200,110)
  ellipse(240,60,190,90)
  ellipse(370,120,140,45)
  ellipse(1100,50,440,130)
  strokeWeight(2);
  stroke(255);
  fill("#3bbb7dff");
  ellipse(340,610,800,320) 
  ellipse(1300,650,1400,700)
  ellipse(800,650,1000,230)
  
 
  push();
  //noStroke();
  fill(240, 260, 100);
  stroke(0);
  ellipse(200, 90, 40, 140);
  ellipse(310, 200, 140, 40);
  ellipse(90, 200, 140, 40);
  angleMode(DEGREES)
  rotate(-30);
  ellipse(-10, 470, 110, 30);
  rotate(20);
  ellipse(150, 480, 110, 30);
  pop();

  
  fill(0)
  stroke(255);
  ellipse(200,340,39,33);
  ellipse(190,365,33);
  ellipse(178,388,30);
  ellipse(170,412,25);
  ellipse(173,432,20);
  ellipse(182,449,23);
  ellipse(191,468,25);
  ellipse(205,484,27);
  ellipse(220,499,32);
  ellipse(239,520,40);
  
  ellipse(252,550,80,60);
  ellipse(300,580,160,80);

 push();
  fill("#d56038ff")
  stroke("#9b521bff");
  strokeWeight(6);
  smooth(29);
  rect(210,580,180,120);
  rect(200,580,200,50);
  pop();


  fill(240, 60, 100);
  stroke(255);
  ellipse(200, 290, 100, 90);

 

  // The eye
  drawEye();
}

function aydansfunction() {
  fill(0, 212, 255);
  noStroke();
  rect(780, 30, 20, 600);
  
}

/**
 * Draws a creepy void eye
 */
function drawEye() {
  // Eyeball
  push();
  fill("#0c0c0cff");
  stroke(0);
  strokeWeight(3);

  fill("#ffffff");
  ellipse(200, 200, 100);
  pop();

  // Retina
  push();
  noStroke();
  fill("#000000");
  ellipse(200, 200, 25);
  pop();
}
