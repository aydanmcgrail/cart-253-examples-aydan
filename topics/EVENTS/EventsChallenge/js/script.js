/**
 * The Only Move Is Not To Play
 * Pippin Barr
 *
 * A game where your score increases so long as you do nothing.
 */

"use strict";

// Current score
let score = 0;

// Is the game over?
let gameOver = false;

//this will set a treshold for the mouse speed.
const mouseMoveThreshold = 5;

/**
 * Create the canvas
 */
function setup() {
  createCanvas(1600, 1000);
}

/**
 * Update the score and display the UI
 */
function draw() {
  background("#87ceeb");

  // Only increase the score if the game is not over
  if (!gameOver) {
    // Score increases relatively slowly
    score += 0.05;
  }
  displayUI();
  checkMouse();
}

/**
 * Show the game over message if needed, and the current score
 */
function displayUI() {
  if (gameOver) {
    push();
    textSize(110);
    textStyle(BOLD);
    fill("red");
    textAlign(CENTER, CENTER);
    text("You do not snooze, you lose!", width / 2, height / 3.5);
    pop();
  }
  displayScore();
}

/**
 * Display the score
 */
function displayScore() {
  push();
  textSize(360);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(floor(score), width / 2, height / 2);
  pop();
}
//when this function is called the game over event is triggered.
function lose() {
  gameOver = true;
}
//hiting any key makes the player loose.
function keyPressed() {
  lose();
}

//player looses when scrolling
function mouseWheel() {
  lose();
}

//clicking on the mouse makes the player loose.
function mousePressed() {
  lose();
}
//this will cause a loss if the player moves his mouse too fast. its taken from the conditionnal debugging file.
function checkMouse() {
  const mouseMovedDistance = dist(pmouseX, pmouseY, mouseX, mouseY);
  const moveTooMuch = mouseMovedDistance >= mouseMoveThreshold;
  //if the mouse is moved with a value over 5 which is the treshhold, the player will loose.
  if (moveTooMuch) {
    lose();
  }
}
