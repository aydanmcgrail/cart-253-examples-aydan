/**
 * intro to arrays
 * aydan mcgrail copying pippin's work
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


// real order  0  1  2  3  4  5  6  7  8  9
let piArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];

let emptyArray = [];


/** 
 * To access a specific element in the array (either to get its value or to set its value) 
 * we use the element’s index along with “bracket notation”.
To get the first digit from our piArray we would write:
*/
let piArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
let firstDigitOfPi = piArray[0]; // 3



let piArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];

piArray[5] = 8; // Change element 5 from 9 to 8

let piArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];

let index = 7;
let eighthDigitOfPi = piArray[index]; // 6

let apple = 2;
let banana = 6;
let carrot = 4;
let nutritionalArray = [apple, banana, carrot]; // [2, 6, 4]


/**One last useful piece of information: arrays know how long they are, that is, how 
 * many elements they have. We can get that information with a property arrays have called length: */
let piArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];

let numberOfDigitsOfPi = piArray.length; // 10

let apple = 2;
let banana = 6;
let carrot = 4;
let nutritionalArray = [apple, banana, carrot];

let numberOfHealthySnacks = nutritionalArray.length; // 3
/*This will come in handy a bunch and using length is much much 
better than using a hardcoded number because, as we’ll see, arrays can change over time.
*/