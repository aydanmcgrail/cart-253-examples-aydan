/**
 * Mr. Furious
 * Pippin Barr
 *
 * A guy who becomes visibly furious!
 */

"use strict";

let myName = "Mister Furious is about to be so mad... look at him";

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
  minY: 430,
  maxY: 480,
  minHeight: 100,
  maxHeight: 200,
  fill: {r: 150, g: 200, b: 60}
}

let hand = {
  // Position and size
  x: 0,
  y: 500,
  height: 70,
  width: 200
}

let sourcils = {
    y:130,
    maxY:180,
    minY:120 
}

let mouth = {
    x: 500, 
    y: 500,
    height: 150,
    width: 200,
    maxHeight: 300, 
    minHeight: 150,
    maxWidth: 400,
    minWidth: 200,
    fill: {r: 255, g: 255, b: 255}
}

/**
 * Create the canvas
 */
function setup() {
    createCanvas(1000, 700);

  
    
    
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
  apple.height = apple.height / 1.005;
  apple.height = constrain(apple.height,apple.minHeight,apple.maxHeight);

  apple.y = apple.y +0.5;
  apple.y = constrain(apple.y,apple.minY,apple.maxY);
  apple.fill.r = apple.fill.r -1
  apple.fill.b = apple.fill.b -0.5
  apple.fill.g = apple.fill.g + -0.25


pop();


  // Draw Mr. Furious as a coloured circle
push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  rect(mrFurious.x, mrFurious.y, mrFurious.size);
  rect(hand.x, hand.y, hand.width, hand.height);
    mrFurious.fill.r = mrFurious.fill.r +1;
pop();

push();
//mouth
  fill(mouth.fill.r, mouth.fill.g,mouth.fill.b);
  ellipse(mouth.x,mouth.y, mouth.width, mouth.height);
  mouth.height=mouth.height-1;
  mouth.width=mouth.width+1;
  mouth.height=constrain(mouth.height,mouth.minHeight,mouth.maxHeight)
  mouth.width=constrain(mouth.width,mouth.minWidth,mouth.maxWidth)
pop();  

  fill(255,230,210);
  rect(width / 8 ,600, 750);
  rect(0, 570, 100, 350)  
pop();

  //white eye//
push(); 
  fill(255,255,255);
  //left
  ellipse(width/3, height/2.90 , 120);
  //right
  ellipse(width/1.5,  height/2.9 , 120);
pop();

push(); 
  //black eye
  fill(0);
  //left
  ellipse(width/3.17, height/2.75, 70);
  //right
  ellipse(650, height/2.75, 70);
pop();

push();
  //sourcils
  fill(70,30,40);
  rect(250,sourcils.y,180,60);
  rect(570,sourcils.y,180,60);
  sourcils.y=sourcils.y+0.25;
  sourcils.y= constrain(sourcils.y,sourcils.minY,sourcils.maxY);
pop()

push();
  //hat//
  noStroke();
  fill("#6b5424ff");
  rect(200, 118, 600,60);
  rect(325, 25, 350, 150); 
pop();

push();
//texte//
  fill(0);
  textSize(40);
  textAlign(CENTER, CENTER);
  textStyle(BOLDITALIC);
  text(myName,width/2,100);
pop();


}