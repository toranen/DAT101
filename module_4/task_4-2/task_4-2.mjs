"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
console.log(`v Part 1 v`)

let date = Date.now();

const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let i = 0; numberList[i] <= numberList[19]; i++) {
    printOut(`${numberList[i]}`);
}

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
console.log(`v Part 2 v`)

let text = "<ul>" + numberList + "</ul>";
printOut(`${text}`);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
console.log(`v Part 3 v`)

const hiThere = "Hello there, how are you?";
let array = [];
array = hiThere.split(" ");

for (let i = 0; i < array.length; i++){
    printOut(`Word ${i + 1}: "${array[i]}": Index: ${array.indexOf(array[i])}`);
}

//console.log(`word ${i}, ${array.indexOf(array[i])}, ${array[i]}`);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
console.log(`v Part 4 v`)

let names = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid",
"Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

function removeElement(names, index){

    console.log(index, "index")
    let word = names[index];
    console.log(word, "element word")
    let wordIndex = names.indexOf(names[index]);
    if (word == undefined){
        printOut(`The element: "${index}", does not exist in the array.`);
        console.log("element is undefined")
        return
    }

    let removedWord = names.splice(index, 1);
    printOut(`Array length is: ${names.length+1}`)
    printOut(`The word: "${word}", at index ${wordIndex} is removed from the array. New array length is: ${names.length}`);
    
    return {
        word, wordIndex, names, removedWord
    }
}

const index = prompt(`What element do you want to remove?`);
let result = removeElement(names, index);
console.log(result)

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
console.log(`v Part 5 v`)

let namesBoys = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah",
"Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"];
let namesMerged = names.concat(namesBoys);

printOut(`${namesMerged.join(" , ")}`);
console.log(namesMerged, names, namesBoys);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
console.log(`v Part 6 v`)

class TBook {
    #title
    #author
    #isbn

    constructor(aTitle, aAuthor, aIsbn){
        this.#title = aTitle;
        this.#author = aAuthor;
        this.#isbn = aIsbn;
    }

    setBook(aTitle) {

        switch (aTitle){
            
            case "Harry Potter": {
                this.#title = "Harry Potter";
                this.#author = "J. K. Rowling";
                this.#isbn = "9780545069670"; //9780545069670
                let book = this.#title;
                let author = this.#author
                let isbn = this.#isbn
                return this.toString(this.#title, this.#author, this.#isbn);
            }
            case "Shogun": {
                this.#title = "Shogun";
                this.#author = "James Clavell";
                this.#isbn = "9780340203163";//9780340203163
                let book2 = this.#title;
                let author2 = this.#author
                let isbn2 = this.#isbn
                return this.toString(this.#title, this.#author, this.#isbn);
            }
            case "Looking Forward": {
                this.#title = "Looking Forward";
                this.#author = "Marcia Willett";
                this.#isbn = "9780755385164";//9780755385164
                let book3 = this.#title;
                let author3 = this.#author;
                let isbn3 = this.#isbn;
                return this.toString(this.#title, this.#author, this.#isbn);
            }
            default: {
                console.log(`This book is not in the bookshelf. Please try another book.`);
                break
            }
        }
    }

    toString() {

        switch (this.#title){
            case "Harry Potter": {
                printOut(`${this.#title}, Author: ${this.#author}, ISBN: ${this.#isbn}`);
                return (`${this.#title}, Author: ${this.#author}, ISBN: ${this.#isbn}`);
            }
            case "Shogun": {
                printOut(`${this.#title}, Author: ${this.#author}, ISBN: ${this.#isbn}`);
                return (`${this.#title}, Author: ${this.#author}, ISBN: ${this.#isbn}`);
            }
            case "Looking Forward": {
                printOut(`${this.#title}, Author: ${this.#author}, ISBN: ${this.#isbn}`);
                return (`${this.#title}, Author: ${this.#author}, ISBN: ${this.#isbn}`);
            }
            default: {
                return (`This book is not in the bookshelf. Please try another book.`);
            }
        }
    }
}

const classTBook = ["Harry Potter", "Shogun", "Looking Forward"];
const bookshelf = new TBook();
for (let i = 0; i < classTBook.length; i++){
    console.log(i);
    console.log(bookshelf.setBook(classTBook[i]));
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
console.log(`v Part 7 v`)

const EWeekDays = {
    WeekDay1: {value: 0x01, name: "Monday"},
    WeekDay2: {value: 0x02, name: "Tuesday"},
    WeekDay3: {value: 0x04, name: "Wednesday"},
    WeekDay4: {value: 0x08, name: "Thursday"},
    WeekDay5: {value: 0x10, name: "Friday"},
    WeekDay6: {value: 0x20, name: "Saturday"},
    WeekDay7: {value: 0x40, name: "Sunday"},
    Workdays: {value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Workdays"},
    Weekends: {value: 0x20 + 0x40, name: "Weekend"},
};

const keys = Object.keys(EWeekDays);

keys.forEach(key => {
    printOut(`${key}: value: ${EWeekDays[key].value}, name: ${EWeekDays[key].name}`);
    console.log(`${key}:`, EWeekDays[key]); 
});

printOut(newLine);

printOut("--- Part 8, 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
console.log(`v Part 8, 9 v`)

const randomNumbers = Array.from({ length: 35 }, () => Math.floor(Math.random() * 20) + 1);
printOut(`Original Array: ${randomNumbers}`);
console.log(`Original Array: ${randomNumbers}`);

const ascendingOrder = [...randomNumbers].sort((a, b) => a - b);
console.log("Ascending Order:", ascendingOrder);
printOut(`Ascending order: ${ascendingOrder}`);

const descendingOrder = [...randomNumbers].sort((a, b) => b - a);
console.log("Descending Order:", descendingOrder);
printOut(`Descending order: ${descendingOrder}`);

const frequencyMap = {};
randomNumbers.forEach((num) => {
  frequencyMap[num] = (frequencyMap[num] || 0) + 1;
});

const frequencyArray = Object.entries(frequencyMap).map(([num, freq]) => ({
  number: parseInt(num),
  frequency: freq,
}));

frequencyArray.sort((a, b) => {
  if (b.frequency === a.frequency) {
    return a.number - b.number;
  }
  return b.frequency - a.frequency;
});
printOut(newLine);
console.log("\nNumbers and Their Frequency:");
printOut(`Numbers and Their Frequency:`);
frequencyArray.forEach(({ number, frequency }) => {
  console.log(`Number: ${number}, Frequency: ${frequency}`);
  printOut(`Number: ${number}, Frequency: ${frequency}`);
});

const groupedByFrequency = {};
frequencyArray.forEach(({ number, frequency }) => {
  if (!groupedByFrequency[frequency]) {
    groupedByFrequency[frequency] = [];
  }
  groupedByFrequency[frequency].push(number);
});

const sortedFrequencies = Object.entries(groupedByFrequency)
  .map(([freq, numbers]) => ({
    frequency: parseInt(freq),
    numbers: numbers.sort((a, b) => a - b),
  }))
  .sort((a, b) => b.frequency - a.frequency);

printOut(newLine);
console.log("\nFrequencies and Corresponding Numbers:");
printOut(`Frequencies and Corresponding Numbers:`);
sortedFrequencies.forEach(({ frequency, numbers }) => {
  console.log(`Frequency: ${frequency}, Numbers: ${numbers.join(", ")}`);
  printOut(`Frequency: ${frequency}, Numbers: ${numbers.join(", ")}`);
});

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
console.log(`v Part 10 v`)

const array1 = [];

for (let row = 0; row < 5; row++) {

  const rowArray1 = [];

  for (let col = 0; col < 9; col++) {
    rowArray1.push(`Row ${row + 1}, Col ${col + 1}`);
  }

  array1.push(rowArray1);
}

console.log("Array with rows and columns:");
printOut(`Array with rows and columns:`);

for (let row = 0; row < array1.length; row++) {
  let rowText = "";
  for (let col = 0; col < array1[row].length; col++) {
    rowText += array1[row][col] + "\t";
  }
  console.log(rowText);
  printOut(`${rowText}`);
}

let endDate = Date.now();

let runtime = endDate - date;
console.log(`${runtime} ms`);

printOut(newLine);
