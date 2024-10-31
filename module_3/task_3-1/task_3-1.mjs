"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
let wakeUpTime = 8
if (wakeUpTime <= 7) {
  printOut("I can take the bus to school.");
} else if (wakeUpTime <= 8) {
  printOut("I can take the train to school");
} else {
  printOut("I have to take the car to school");
}

printOut(newLine);
 
printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let number = 0;

if (number < 0) {
  printOut(number.toString() + " is negative");
} else if (number > 0) {
  printOut(number.toString() + " is positive");
} else {
  printOut(number.toString() + " is zero");
}

printOut(newLine);

printOut("--- Part 6, 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let pictureMP = getRandomInt(1, 8);
printOut("The picture is " + (pictureMP.toString()) + "MP");

if (pictureMP >= 6){
  printOut("The image is too large!");
} else if (pictureMP < 4){
  printOut("The image is too small");
} else {
  printOut("Thank you!");
}

printOut(newLine);

printOut("--- Part 8, 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const monthList =["January", "February", "Mars", "April", "May", "Jun", "July", "August", "September", "October", "November", "December"];
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const noOfMonth = monthList.length;
  const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
  const monthIndex = monthList.indexOf(monthName);
  const days = daysInMonth[monthIndex];

  printOut(monthName.toString());

  printOut(`The month of ${monthName} has ${days} days.`)

if (monthName.includes("r")){
    printOut("You must take vitamin D");
} else {
  printOut("You do not need to take vitamin D");
}

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const monthList2 =["January", "February", "Mars", "April", "May", "Jun", "July", "August", "September", "October", "November", "December"];
const daysInMonth2 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const noOfMonth2 = monthList2.length;
  const monthName2 = monthList2[Math.floor(Math.random() * noOfMonth2)];
  const monthIndex2 = monthList2.indexOf(monthName2);
  const days2 = daysInMonth2[monthIndex2];

  printOut(monthName2.toString());

  printOut(`The month of ${monthName2} has ${days2} days.`);

console.log(monthName2)

if (monthName2 === "Mars" || monthName2 === "May") {
  printOut("The gallery is closed");
} else if (monthIndex2 === 3) {
  printOut("There is a temporary premises in the building next door");
} else {
  printOut("The art gallery is open");
}

/*hei*/
printOut(newLine);
