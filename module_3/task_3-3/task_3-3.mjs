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

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

console.log("v Part 4 v")

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

function price(grossAmount, taxGroup){
    let vat = 0;
    
    if (taxGroup == "normal"){
        vat = 25;
        printOut(`The net price is ${grossAmount} and the price after Tax is ${(100 * grossAmount) / (vat + 100)}`);
    } else if (taxGroup == "food"){
        vat = 15;
        printOut(`The net price is ${grossAmount} and the price after Tax is ${(100 * grossAmount) / (vat + 100)}`);
    } else if (taxGroup == "hotel" || taxGroup == "transport" || taxGroup == "cinema"){
        vat = 10;
        printOut(`The net price is ${grossAmount} and the price after Tax is ${(100 * grossAmount) / (vat + 100)}`);
    } else if (taxGroup == "goblins") {
        vat = NaN
        printOut(`The net price is ${grossAmount} and the price after Tax is ${(100 * grossAmount) / (vat + 100)}`);
    } else {
        return "Unknown VAT group!"
    }

    return (100 * grossAmount) / (vat + 100);
}

const grossAmount = prompt("what is the gross amount? ")
const taxGroup = prompt("What is the tax group? ")

price(grossAmount, taxGroup);

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

console.log("v Part 7 v");

function speedDistanceTime(speed, time, distance){
    if([speed, time, distance].filter(element => element == "").length > 1){
        printOut("NaN");
       return
    }

    if (speed == ""){
        speed = distance / time;
    }   else if (time == ""){
        time = distance / speed;
    }   else if (distance == ""){
        distance = speed * time;
    }   else{
        console.log(NaN)
    }
    console.log(speed, time, distance);
    printOut(`The speed is ${speed}, the time is ${time}, and the distance is ${distance}.`);
} 

const speed = prompt("speed: ");
const time = prompt("time: ");
const distance = prompt("distance");

console.log(speedDistanceTime(speed, time, distance));

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

console.log("v Part 8 v");

function extendString(text, maxSize, char, insertBefore) {
    if (text.length < maxSize) {
        let charsToInsert = maxSize - text.length;
        let insertionString = char.repeat(charsToInsert);

        if (insertBefore) {
            text = insertionString + text;
        } else {
            text = text + insertionString;
        }
    }

    printOut(text);
    return text;
}

const string1 = prompt("string 1");;

extendString(string1, 10, "-", true);
extendString(string1, 12, "-", false);
extendString(string1, 8, "-", true);
extendString(string1, 10, "-", false);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

console.log("v Part 9 v");

function testMathExpressions() {
    let leftStart = 1;

    for (let line = 1; line <= 200; line++) {
        let leftLength = line + 1;
        let rightLength = line;
        

        let leftSum = 0;
        for (let i = leftStart; i < leftStart + leftLength; i++) {
            leftSum += i;
        }

        let rightSum = 0;
        let rightStart = leftStart + leftLength;
        for (let i = rightStart; i < rightStart + rightLength; i++) {
            rightSum += i;
        }

        if (leftSum !== rightSum) {
            printOut(`Mismatch on line ${line}: Left sum = ${leftSum}, Right sum = ${rightSum}`);
            return;
        }

        leftStart = rightStart + rightLength;
        console.log()
    }

    printOut("Maths fun!");
}

testMathExpressions();

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

console.log("v Part 10 v");

function factorial(x){
    if (x === 0) return 1;
    
    return x * factorial(x - 1);
}

const numberToFactorial = prompt("number to factorial: ");

printOut(`The factorial of ${numberToFactorial} is ${factorial(parseInt(numberToFactorial))}`);

printOut(newLine);
