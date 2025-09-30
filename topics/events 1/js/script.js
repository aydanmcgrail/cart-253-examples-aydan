/**
 * introducing events
 * Aydan Mc Graine
 * 
 * il faut savoir le bag pour le faire le bag
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500, 600);
    background("blue")



}


/**
 * for this we will not use draw
*/
function draw() {
    //background(blue);

}

//draws a circle at mouse location

function mousePressed() {
    push();
    noStroke();
    fill(255, 255, 0);
    ellipse(mouseX, mouseY, 50);
    pop();
}