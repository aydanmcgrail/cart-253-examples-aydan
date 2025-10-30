/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
const tongue = {
    x: 500,
    y: 25;
    size: 20,
    angle: 0
};

function setup() {
    createCanvas(500, 500);

    angleMode(DEGREES);
}

function draw() {
    background(0);

    // Move the tongue
    tongue.x = mouseX;

    // How fast it wobble. 
    // 10 degrees per frame at the centre
    // 50 degrees per frame at the limit
    const frequency = map(tongue.x, width / 2, 100, 10, 30, true);
    tongue.angle += frequency;

    // Calculate the sine, this will be a number between -1 and 1
    const sine = sin(tongue.angle);

    // Calculate how big the motion is
    // 0 wobble at the centre
    // 10 pixels up and down at the limit
    const amplitude = map(tongue.x, width / 2, 100, 0, 10, true);

    // How much to change y this frame
    const offset = sine * amplitude;

    stroke(255);
    line(width, height / 2, tongue.x, tongue.y + offset);

    ellipse()
}