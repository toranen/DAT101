"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));


const wakeUpTime = 7

if (wakeUpTime <= 7){
    printOut(`I can catch the bus to school`);
}   else if (wakeUpTime > 7){
    printOut(`I have to take the car to school`);
}   


// part 3 //

if (wakeUpTime <= 7){
    printOut(`I can catch the bus to school`);
}   else if (wakeUpTime <= 8){
    printOut(`I can take the train to school`);
}   else {
    printOut(`I have take the car to school`);
}


// Part 4 //

const number = Match.round(0)

if (number < 0){
    printOut(`${number} is negative`);
    printOut(number.toString() + " is negative");
}   else if (number > 0){
    printOut(`${number} is positive`);
    printOut(number.toString() + " is positive");
}   else{
    printOut(`${number} is zero`);
    printOut(number.toString() + " is zero");
}
