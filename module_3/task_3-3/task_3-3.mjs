"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

console.log("v Part 1 v");

function todaysDate(){

    
    const todaysDate = new Date();
    const day =  todaysDate.getDay();
    const month=  todaysDate.getMonth();
    const date = todaysDate.getDate();
    const year = todaysDate.getFullYear();

    const dayMonthValues = {
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], 
        months: ["January", "February", "Mars", "April", "May", "Jun", "July", "August", "September", "October", "November", "December"]
    }

    printOut(dayMonthValues.days[day] + ", " + dayMonthValues.months[month] + " " + date + ", " + year);
}

todaysDate()

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

console.log("v Part 2 v");

function todaysDate2(){

    const todaysDate = new Date();
    const day =  todaysDate.getDay();
    const month=  todaysDate.getMonth();
    const date = todaysDate.getDate();
    const year = todaysDate.getFullYear();

    const dayMonthValues = {
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], 
        months: ["January", "February", "Mars", "April", "May", "Jun", "July", "August", "September", "October", "November", "December"]
    }

    return{
        day: dayMonthValues.days[day],
        month: dayMonthValues.months[month],
        date: date,
        year: year 
    }

}

function countDown2(){
    const destination = new Date('May 14, 2025');
    const now = Date.now();

    const timeBetween = Math.ceil((destination.getTime() - now) / 1000 / 60 / 60 / 24);

    console.log(timeBetween);
5
    const event = todaysDate2();

    const todaysDate = [event.day, " " + event.month, " " + event.date, " " + event.year]

    printOut(`Todays date is ${todaysDate}, and there are ${timeBetween} days left until the epic release of 2XKO!`)
}   

todaysDate2();
countDown2();

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

console.log("v Part 3 v");
/*
function circleInfo(){
    const pi = Math.PI;
    const radius = parseInt(prompt("Enter the radius of the circle in cm: "));
    const diameter = radius * 2;
    const circumference = (2 * pi * radius).toFixed(3);
    const area = (pi * radius ** 2).toFixed(3);

    console.log(radius);
    console.log(diameter);
    console.log(circumference);

    printOut(`The diameter is ${diameter} cm, the circumference is ${circumference} cm and the area is ${area} cm.`);
}

circleInfo();
*/
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

console.log("v Part 4 v")
/*
function rectangleInfo(){
    const width = parseInt(prompt("Enter the width of the rectangle in cm: "));
    const height = parseInt(prompt("Enter the height of the rectangle in cm: "));
    const parimeter = 2 * (width + height)
    const area = (width * height).toFixed(3)

    console.log(width);
    console.log(height);
    console.log(parimeter);
    console.log(area);

    printOut(`The parameter of the rectangle is ${parimeter} cm and the area is ${area} cm.`)

}

rectangleInfo();
*/
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

console.log("v Part 5 v");

function tempConvert(temperature, type){
    let C, F, K

    if (type == "C"){
        F = Math.floor((temperature * 9/5) + 32);
        K = Math.floor(temperature + 273.15);
        printOut(`${temperature}°C is ${F}°F and ${K}K`)
    } else if (type == "F"){
        C = Math.floor((temperature - 32) * 5/9);
        K = Math.floor((temperature - 32) * 5/9 + 273.15);
        printOut(`${temperature}°F is ${C}°C and ${K}K`);
    } else if (type == "K"){
        C = Math.floor(temperature - 273.15);
        F = Math.floor((temperature - 273.15) * 9/5 + 32);
        printOut(`${temperature}K is ${C}°C and ${F}°F`);
    } else {
        printOut(`Invalid temperature type. Use 'C' for Celsius, 'F' for Fahrenheit, or 'K' for Kelvin.`)
    }
}

const temp = parseInt(prompt(`Please enter the temperature: `));
const tempId = (prompt(`Please enter "C" for celsius, "F" for fahrenheit or "K" for kelvin: `));

tempConvert(temp, tempId);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

console.log("v Part 6 v");

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

console.log("v Part 7 v");

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

console.log("v Part 8 v");

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

console.log("v Part 9 v");

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

console.log("v Part 10 v");

printOut(newLine);
