/**
 * Title of Project
 * Author Name
 *
 *interactive speech process
 */

"use strict";
/////////////    0        1       2            3
let speech = ["weni.", "Vidi.", "Vici", "Sensi malum."];
//which sentence to display, starts at 0= weni
let speechIndex = 0;

function setup() {
  createCanvas(600, 100);
}

function draw() {
  background(0);

  //get the current line of speech
  let currentLine = speech[speechIndex];

  // display the line
  push();
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text(currentLine, width / 2, height / 2);
  pop();
}

function mousePressed() {
  //next line
  speechIndex = speechIndex + 1;
  //handle the end of the speech
  if (speechIndex >= speech.length) {
    speechIndex = 0;
  }
}
