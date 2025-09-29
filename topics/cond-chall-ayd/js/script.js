/**
 * circle master 
 * aydan mc grail
 * 
 * This will be a program in which the user can push a circle
 * on the canvas using their own circle.
 */

"use strict";

const puck={x:200,y:200,size:100,fill:"#9faa5dff"
};

const user={
    x:undefined,//mouseX
    y:undefined,//mouseY
    size:75,
    fill:"#000000"
};
const target={
    x:400,y:600,size:250,fill:"#e8edfaff",stroke:"#000000",stroke:"#b47e52ff",strokeWeight:26,fills:{score: "#33cc33",noGoal:"#e8edfaff"}}
   
/**
 * create the canvas here, the background will be in function draw
*/
function setup() { createCanvas(800,800);}

/**
 * Move the user circle, check for overlap, draw the two circles
*/
function draw() {
    background(150,220,210);
//move user circle
    moveUser();

//d=dist(user.x,user.y,puck.x,puck.y);

//puckOverlapsTarget && target



//draw user and puck and target
    drawTarget();//actually i think it has to go first here
    drawUser();
    drawPuck(); 
}

function checkInput(){
    const distanceTargetPuck =dist(mouseX,mouseY,target.x,target.y);
    const puckOverlapsTarget = (distanceTargetPuck<target.size/2);
    if(puckOverlapsTarget){target.fill=target.fills.score}else{creature.fill=creature.fills.noGoal}
    



}
//Sets the user position to the mouse position
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;}

//here is the target i put it first so it is behind
function drawTarget(){
    push();
    stroke(target.stroke);
    strokeWeight(target.strokeWeight);
    fill(target.fill);
    ellipse(target.x,target.y,target.size);
}

//displays user circle
function drawUser() {
    push(); noStroke(); fill(user.fill);
    ellipse(user.x,user.y,user.size);pop();
}

function drawPuck() {
  push();noStroke();fill(puck.fill);
  ellipse(puck.x, puck.y, puck.size);pop();}

function movePuck(){

}