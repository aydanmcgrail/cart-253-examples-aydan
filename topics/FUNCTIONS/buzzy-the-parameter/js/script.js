/**
 * Buzzy the parameter
 * Pippin Barr
 * 
 * A fly that buzzes around on the canvas
 */

"use strict";

// Our fly that will buzz around
let buzzyTheFly = {
    x: 200,
    y: 200,
    size: 30,
    buzziness: 4
};

let jazzyTheFly = {
    x: 300,
    y: 250,
    size: 10,
    buzziness: 10
};

/**
 * Create a canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Background, move and draw buzzy
 */
function draw() {
    background("#87ceeb");

    // Move buzzy 
    moveFly(buzzyTheFly);
    moveFly(jazzyTheFly);
    // Draw buzzy
    drawFly(buzzyTheFly);
    drawFly(jazzyTheFly);

}

function moveFly(fly) {
    // Move buzzy            negative= -4     positive=4   8 range
    fly.x += random(-fly.buzziness, fly.buzziness);
    fly.y += random(-fly.buzziness, fly.buzziness);
}



//instead of buzzy we could make it more general and flexible. instead of buzzy write fly there could be many flies
function drawFly(fly) {
    // Draw buzzy
    push();
    noStroke();
    fill(0);
    ellipse(fly.x, fly.y, fly.size);
    pop();
}