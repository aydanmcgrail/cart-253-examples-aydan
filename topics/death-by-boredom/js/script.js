/**
 * Death by Boredom
 * Pippin Barr
 * 
 * A creature that can die of boredom...
 */

"use strict";

// Our creature
const creature = {
    // Position
    x: 200,
    y: 200,
    // Size
   width:200,
   height:200,
    // Fill
    fill: "#000000", // Starts out bored
    // Possible fills for the creature that show its mood
    // We'll need these when we start changing its colour
    // and its nice to keep them along with all the other info
    // about the creature
    fills: {
        bored: "#000000", // Black
        happy: "#33cc33", // Green
        angry: "#cc3333", // Red
        dead: "#777777" // Grey

    },
    alive: true,
//how bored is the creature?
    boredomLevel:0,
//how bored can the creatureget before it dies?
    deathByBoredomThreshold: 500
}



    const creature2 = {
    // Position
    x: 200,
    y: 120,
    // Size
    width:120,
    height:130,
    // Fill
    fill: "#443cb9ff", // Starts out bored
    // Possible fills for the creature that show its mood
    // We'll need these when we start changing its colour
    // and its nice to keep them along with all the other info
    // about the creature
    fills: {
        bored: "#443cb9ff", // Black
        happy: "#33cc33", // Green
        angry: "#cc3333", // Red
        dead: "#777777" // Grey
    },
};



//is the creature alive?
    


/**
 * Creates the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Fills the background, displays the creature 
 */
function draw() {
    background(255, 200, 127);

    checkInput();
    drawCreature();
    drawCreature2();
}
/**
 * Creature is happy if being massaged and otherwise bored
 */
function checkInput() {
    //this here stops being affected to alive conditions. cest une boucle donc on doit le mettre en haut)
    if(!creature.alive){return;}

    // Calculate the distance between the cursor and the creature
    // and put it into a "distance" variable (using const again since
    // we won't change this again later!)
    const distance = dist(mouseX, mouseY, creature.x, creature.y);
    // Calculate whether the mouse overlaps the creature by checking whether
    // the distance is less than its radius! (Half its diameter)
    const mouseIsOverlapping = (distance < creature.width/2 , creature.height/2);
    // Check if EITHER movedX OR movedY are NOT equal to zero
    // and store the result in our mouseIsMoving variable (another
    // const because we don't want to change it later)
    const mouseIsMoving = (movedX !== 0 || movedY !== 0);
    // Check if the mouse if over the creature and moving
    if (mouseIsOverlapping && mouseIsMoving) {
        // The cursor is overlapping the creature AND it's moving
        // So the creature is happy! Massage!
        creature.fill = creature.fills.happy;
    }
    else {
        // Otherwise the creature is bored
        creature.fill = creature.fills.bored;
        // it gets a little bit more bored
        creature.boredomLevel +=1;
    if(creature.boredomLevel> creature.deathByBoredomThreshold){
        //creature dies of boredom
        creature.alive=false;
        //creature looks dead
        creature.fill=creature.fills.dead
    }
    }


    const distance2 = dist(mouseX, mouseY, creature2.x, creature2.y);
    // Calculate whether the mouse overlaps the creature by checking whether
    // the distance is less than its radius! (Half its diameter)
    const mouseIsOverlapping2 = (distance2 < creature2.size/2);
    // Check if EITHER movedX OR movedY are NOT equal to zero
    // and store the result in our mouseIsMoving variable (another
    // const because we don't want to change it later)
    const mouseIsMoving2 = (movedX !== 0 || movedY !== 0);
    // Check if the mouse if over the creature and moving
    if (mouseIsOverlapping2 && mouseIsMoving2) {
        // The cursor is overlapping the creature AND it's moving
        // So the creature is happy! Massage!
        creature2.fill = creature2.fills.happy;
    }
    else {
        // Otherwise the creature is bored
        creature2.fill = creature2.fills.bored;
}
}
/**
 * Handles the creature becoming happy
 */
function creatureHappy() {
    creature.fill = creature.fills.happy;
}

/**
 * Draws the creature
 */
function drawCreature() {
    push();
    noStroke();
    // Use the creature's fill
    fill(creature.fill);
    // Display the creature at its position and size
    ellipse(creature.x, creature.y, creature.width,creature.height);
    pop();
}

function drawCreature2() {
    push();
    noStroke();
    // Use the creature's fill
    fill(creature2.fill);
    // Display the creature at its position and size
    ellipse(creature2.x, creature2.y, creature2.width,creature2.height);
    pop();
}