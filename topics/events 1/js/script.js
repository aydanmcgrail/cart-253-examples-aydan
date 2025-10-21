/**
 * introducing events
 * Aydan Mc Graine
 * 
 * il faut savoir le bag pour le faire le bag
 */

"use strict";


const bg = {
    fill: "black",
    fills: {
        black: "black",
        white: "white"
    },
    switchKey: 32
}
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500, 600);

    window.addEventListener("keydown", changeBG)




}


/**
 * for this we will not use draw
*/
function draw() {
    background(bg.fill);

}
///all this so only on key in this case it is space
function changeBG(event) {
    if (event.keyCode === bg.switchKey) {


        if (bg.fill === bg.fills.black) {
            bg.fill = bg.fills.white;
        }
        else {
            bg.fill = bg.fills.black;
        }
    }
}

//function keyPressed() {}









//draws a circle at mouse location
//function mousePressed() {
//push();
//noStroke();
//fill(255, 255, 0);
//ellipse(mouseX, mouseY, 50);
//pop();
//}