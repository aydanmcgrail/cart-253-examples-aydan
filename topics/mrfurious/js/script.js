/**
 * Mr. Furious
 * Pippin Barr
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 250,
  y: 125,
  size: 500,
  // Colour
  fill: {r: 120, g: 50, b: 80}
}

let apple = {
  x: 90,
  y: 430, 
  width: 200,
  height: 200,
  minHeight: 50,
  fill: {r: 150, g: 200, b: 60}
}

let hand = {
  // Position and size
  x: 0,
  y: 500,
  height: 70,
  width: 200
}

let mouth = {
    x: 500, 
    y: 500,
    height: 100,
    width: 50,
    maxHeight: 300,  
    maxWidth: 200,
    fill: {r: 255, g: 255, b: 255}
}

/**
 * Create the canvas
 */
function setup() {
    createCanvas(1000, 700);

    mrFurious.y = height / 4;
    //width is a p5 thing so it goes in setup
    
    mouth.x = width;
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
  background("#c1c866ff");
//apple
push();
  fill("#46693dff");
  ellipse(130,280, 80, 20);
  ellipse(70,295, 60, 15);
pop();
push();
  fill("#806132ff");
  rect(90,270, 15, 260);
pop();
push();
//pomme en tant que tel
  fill(apple.fill.r, apple.fill.g, apple.fill.b);
  ellipse(apple.x, apple.y, apple.width, apple.height);
pop();


  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  rect(mrFurious.x, mrFurious.y, mrFurious.size);
  rect(hand.x, hand.y, hand.width, hand.height);

  fill(mouth.fill.r, mouth.fill.g,mouth.fill.b);
  rect(mouth.x,mouth.y, mouth.width, mouth.height)
  

  pop();  
  fill(255,230,210);
  rect(width / 8 ,600, 750);
  rect(0, 570, 100, 350)
  

  push()
  ellipse()
  push(); 
  fill(255,255,255);
  ellipse(width/3, height/2.5 , 120);
  ellipse(width/1.5,  height/2.5 , 120);
  noStroke();
  ellipse(500, 500, 200, 100);
  pop();

  push(); 
  fill(0);
  ellipse(width/3, height/2.75, 70);
  ellipse(width/1.5, height/2.75, 70);
  pop();

  push();
  noStroke();
  fill("#6b5424ff");
  rect(300, 118, 400,60);
  rect(200, 118, 300); 
  pop();
}