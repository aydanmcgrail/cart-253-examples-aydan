/**
 * introducing variables
 * aydan mc grail
 * 
 * getting the hang on what variables are
 *get the friggin bag
 */

"use strict";

let cheeseGreen = 255;
let cheeseRed = 255;
let cheeseBlue = 0;

let holeSize = 120;
let holeShade = 0;
let holeX = 140;
let holeY = 100;

/**
 * create a canva here so we can work on it
*/
function setup() {
    createCanvas(980,340);
}


/**
 * draws a circle in the center of the canvas
 * variable for center of image = width / 2, height / 2
 * draw to follow cursor = mouseX, mouseY, 
 * change circle on center widht/height with mouse = (width / 2, height / 2, mouseX, mouseY);
 * fill color with cursor position = fill(mouseX, mouseY, 0);
 * 
 * draw a hole in a piece of cheese
*/
function draw() {
    //the cheese
    background(cheeseRed, cheeseGreen, cheeseBlue);
    
// draw the circle
   push();
   fill(holeShade);
   noStroke();
   ellipse(holeX, holeY, holeSize);
   pop();
}