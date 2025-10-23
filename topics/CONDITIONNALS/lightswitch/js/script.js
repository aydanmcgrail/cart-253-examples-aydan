/**
 * Lightswitch
 * Pippin Barr
 * 
 * An example of storing a boolean value! In this case whether a 
 * light is on or off
*/

"use strict";
let target1={
  fill: "#cc3333",
  fills:{
    touch:"#33cc33",
    normal:"#cc3333",
    click:"#e6ca4eff"
  },
  x:1280,
  y:560,
  width:550,
  height:550,
  //size:550
}

// Our lightswitch
const lightswitch = {
    // Just one property which is whether or not the lightswitch
    // is turned on. Starts out false (light is off)
    on: false
};

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(1800, 900);
    background("blue");
}

/**
 * Checks the lightswitch and displays the "room"
 */
function draw() {
    checkLightswitch();
    displayRoom();
    checkInput();
   drawTarget1();

}

/**
 * Handles turning the lightswitch on and off with the mouse
 */
function checkLightswitch() {
    if (mouseIsPressed) {
        lightswitch.on = true;
    }
    else {
        lightswitch.on = false;
    }
}


function checkInput(){

   const distanceTarget1Mouse =dist(mouseX,mouseY,target1.x,target1.y);
    const mouseOverlapsLips = (distanceTarget1Mouse<target1.width/2 & target1.height/2);
    const stungColor =(target1.fill=target1.fills.stung);


    if (mouseOverlapsLips){
      target1.fill=target1.fills.touch;
      }else if (
        mouseIsPressed){
        lightswitch.on=true;
        }else{
            target1.fill=target1.fills.normal;
        }
      
     
    }


function displayRoom() {
    if (lightswitch.on) {
        target1.fill=target1.fills.stung;
    }
    else {
         target1.fill=target1.fills.normal;
    }
}


function drawTarget1() {
    push();
    noStroke();
    fill(target1.fill);
    // Display the target1 at its position and size         FOR THE BODY!!!!!!!
    ellipse(target1.x, target1.y, target1.width,target1.height);
    pop();  
 } 
