/**
 * introducing variables
 * aydan mc grail
 * 
 * getting the hang on what variables are
 *get the friggin bag
 */

"use strict";

/**
 * create a canva here so we can work on it
*/
function setup() {
    createCanvas(840,280);
}


/**
 * draws a circle in the center of the canvas
 * variable for center of image = width / 2, height / 2
 * draw to follow cursor = mouseX, mouseY, 
 * change circle on center widht/height with mouse = (width / 2, height / 2, mouseX, mouseY);
 * fill color with cursor position = fill(mouseX, mouseY, 0);
*/
function draw() {
    background(0);
    
// draw the circle
   push();
   fill(255,255,0);
   noStroke();
   ellipse( mouseX, mouseY, 100, 100);
   pop();
}