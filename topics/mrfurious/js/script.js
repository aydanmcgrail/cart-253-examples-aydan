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
  fill: {
    r: 120,
    g: 50,
    b: 80
  }
};

let mouth = {
    x: width 
    size: 90
maxSize: 300   
}

/**
 * Create the canvas
 */
function setup() {
    createCanvas(1000, 700);

    mrFurious.y = height / 4;
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {




  background("#a6bb5eff");
   fill("#c14f1bff")
  // Draw Mr. Furious as a coloured circle
  push();
  rect(500, 350 , 200)
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  rect(mrFurious.x, mrFurious.y, mrFurious.size);
  pop();  
  fill(255,230,210);
  rect(width / 8 ,600, 750);

  push()
  ellipse()
  push(); 
  fill(255,255,255);
  ellipse(width/3, height/2.5 , 120);
  ellipse(width/1.5,  height/2.5 , 120);
  pop();

  push(); 
  fill(0);
  ellipse(width/3, height/2.75, 70);
  ellipse(width/1.5, height/2.75, 70);
  pop();
}