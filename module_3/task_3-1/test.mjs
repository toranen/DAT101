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


// Part 4, 5 //

const number = Math.round(0)

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

// Part 6, 7 //

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  let pictureMP = getRandomInt(1, 8);
  printOut("The picture is " + (pictureMP.toString()) + "MP");
  
if (pictureMP >= 6){
    printOut(`The picture is too large`);
} else if (pictureMP < 4){
    printOut(`The picture is too small`);
} else {
    printOut(`Thank You!`)
}


// Part 8, 9 //

const monthList =["January", "February", "Mars", "April", "Mai",
    "Jun", "Juli", "August", "September", "October", "November", "December"];
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const noOfMonth = monthList.length;
    const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
    const monthIndex = monthList.indexOf(monthName);
    const days = daysInMonth[monthIndex];

    printOut(`${monthName}`);

if (monthName.includes("r")){
    printOut(`You have to take vitamin D`)
}   else{
    printOut(`You do not need to take vitamin D`)
}

// Part 10 //

printOut("The month of " + monthName2.toString() +  "has " + days2.toString() + " days.");

console.log(monthName2)

if (monthName2 === "Mars" || monthName2 === "May") {
  printOut("The gallery is closed");
} else if (monthIndex2 === 3) {
  printOut("There is a temporary premises in the building next door");
} else {
  printOut("The art gallery is open");
}