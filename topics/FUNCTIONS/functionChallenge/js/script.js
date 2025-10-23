/**
 * Bouncy Ball Ball Bonanza
 * Pippin Barr
 *
 * The starting point for a ball-bouncing experience of
 * epic proportions!
 */

"use strict";
let ball1 = undefined;
let ball2 = undefined;

let paddle1 = undefined;
let paddle2 = undefined;

/**
 * Create the canvas
 */
function setup() {
  createCanvas(1200, 700);
  ball1 = createBall();
  ball2 = createBall();
  paddle1 = createPaddle1();
  paddle2 = createPaddle2();
}

function createPanel() {}

function createBall() {
  let ball = {
    x: random(200, 600),
    y: 20,
    x2: 600,
    size: 15,
    velocity: {
      x: random(0, 3),
      y: 0.05,
    },
    acceleration: {
      x: 0,
      y: 0.2,
    },
  };
  return ball;
}

function createPaddle1() {
  let paddle1 = {
    x: 200,
    y: 690,
    width: 140,
    height: 20,
    minX: 0,
    maxX: 800,
  };
  return paddle1;
}
function createPaddle2() {
  let paddle2 = {
    x: 600,
    y: 690,
    width: 140,
    height: 20,
    minX: 0,
    maxX: 800,
  };
  return paddle2;
}

/**
 * Move and display the ball and paddle
 */
function draw() {
  background("#87ceeb");

  movePaddle1(paddle1);
  movePaddle2(paddle2);
  moveBall(ball1);
  moveBall(ball2);

  ballLimits(ball1);
  ballLimits(ball2);

  handleBounce1(ball1, paddle1);
  handleBounce2(ball2, paddle2);

  push();
  fill("blue");
  drawBall(ball1);
  pop();

  push();
  fill("red");
  drawBall(ball2);
  pop();

  //display the paddle
  push();
  fill("blue");
  drawPaddle1(paddle1);
  pop();

  push();
  fill("red");
  drawPaddle2(paddle2);
  pop();
}

/**
 * Moves the paddle
 */
function movePaddle1(paddle1) {
  if (keyIsDown(RIGHT_ARROW)) {
    paddle1.x += 6;
  }

  if (keyIsDown(LEFT_ARROW)) {
    paddle1.x -= 6;
  }
}
function movePaddle2(paddle2) {
  if (keyIsDown(65)) {
    paddle2.x -= 6;
  }
  if (keyIsDown(68)) {
    paddle2.x += 6;
  }
}

/**
 * Moves the ball passed in as a parameter
 */
function moveBall(ball) {
  //sets the acceleration of the ball
  ball.velocity.x += ball.acceleration.x;
  ball.velocity.y += ball.acceleration.y;
  //sets the velocity of ball
  ball.x += ball.velocity.x;
  ball.y += ball.velocity.y;
}
/**
 * Bounces the provided ball off the provided paddle
 */
function handleBounce1(ball, paddle1) {
  const overlap =
    ball.x + ball.size > paddle1.x &&
    ball.x < paddle1.x + paddle1.width &&
    ball.y + ball.size > paddle1.y &&
    ball.y < paddle1.y + paddle1.height;
  // If there is an overlap, bounce the ball back up
  if (overlap) {
    ball.velocity.y *= -1;
    //and make it go right or left randomly
    ball.velocity.x += random(-5, 5);
  }
}

function handleBounce2(ball, paddle2) {
  const overlap =
    ball.x + ball.size > paddle2.x &&
    ball.x < paddle2.x + paddle2.width &&
    ball.y + ball.size > paddle2.y &&
    ball.y < paddle2.y + paddle2.height;
  // If there is an overlap, bounce the ball back up
  if (overlap) {
    ball.velocity.y *= -1;
    ball.velocity.x += random(-5, 5);
  }
}

function ballLimits(ball) {
  if (ball.x > 1200) {
    ball.velocity.x -= 3;
  }

  if (ball.x < 0) {
    ball.velocity.x += 3;
  }
}

/**
 * Draws the 2 paddles on the canvas
 */
function drawPaddle1(paddle1) {
  push();
  rectMode(CENTER);
  noStroke();
  rect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
  pop();
}
///AT THIS POINT I DID NOT KNOW HOW TO SET TWO X POSITIONS (200 AND 600) SO I MADE TWO  FUNCTIONS.
//I DID THE SAME THING FOR THE PADDLES.
function drawPaddle2(paddle2) {
  push();
  rectMode(CENTER);
  noStroke();
  rect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
  pop();
}

/**
 * Draws the specified ball on the canvas
 */
function drawBall(ball) {
  push();
  rectMode(CENTER);
  noStroke();
  rect(ball.x, ball.y, ball.size);
  pop();
}

/**
 * Returns true if rectA and rectB overlap, and false otherwise
 * Assumes rectA and rectB have properties x, y, width and height to describe
 * their rectangles, and that rectA and rectB are displayed CENTERED on their
 * x,y coordinates.
 */
function checkOverlap(rectA, rectB) {
  return (
    rectA.x + rectA.width / 2 > rectB.x - rectB.width / 2 &&
    rectA.x - rectA.width / 2 < rectB.x + rectB.width / 2 &&
    rectA.y + rectA.height / 2 > rectB.y - rectB.height / 2 &&
    rectA.y - rectA.height / 2 < rectB.y + rectB.height / 2
  );
}
