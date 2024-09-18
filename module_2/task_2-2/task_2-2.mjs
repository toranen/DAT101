"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const y = 2 +3 * (2-4) * 6;
printOut("2 +3 * (2-4) * 6 = " + y.toString());
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const meter = 25.34;
let mm = 25.4;
mm = mm / 1000;
const inches = meter / mm
const exactInches = inches.toFixed(2);

printOut("inches = " + exactInches.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const secondsInMinutes = 60;
const minutesInHour = 60;
const hourInDay = 24;
const part3_Answer = 
(3 * hourInDay * minutesInHour) + (12* minutesInHour) + 14 + (45 / secondsInMinutes);

printOut("part3_Answer = " + part3_Answer.toString());
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const numberOfMinutes = 6322.53;
let part4_Calc = numberOfMinutes / (60*24);
const part4_Days = Math.floor(part4_Calc);
printOut("Days = " + part4_Days);

part4_Calc = part4_Calc - part4_Days;
part4_Calc = part4_Calc * hourInDay;
const part4_Hours = Math.floor(part4_Calc);
printOut("hours = " + part4_Hours);

part4_Calc = part4_Calc - part4_Hours;
part4_Calc = part4_Calc * minutesInHour;
const part4_Minutes = Math.floor(part4_Calc);
printOut("minutes = " + part4_Minutes);

part4_Calc = part4_Calc - part4_Minutes;
part4_Calc = part4_Calc * secondsInMinutes;
const part4_Second = Math.floor(part4_Calc);
printOut("Seconds = " + part4_Second);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const NOK = 76 / 8.6;
const USD = 8.6 / 76;
let amountUSD = 54;
const amountNOK = Math.round(amountUSD * NOK);
printOut(amountUSD + " dollars is " + amountNOK + " kroner ");
amountUSD = Math.round(amountNOK * USD);
printOut( amountNOK + " kroner is " + amountUSD + " dollars");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);