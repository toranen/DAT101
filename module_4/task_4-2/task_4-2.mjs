"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
console.log(`v Part 1 v`)

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

    return {
        word, wordIndex, names, removedWord
    }
}

const index = prompt(`What element do you want to remove?`);
removeElement(names, index);
console.log(removeElement(names, index))

// Jobber med å få til denne funksjonen!
// Funksjonen fjerner først orde, så går den gjennom igjen og fjerner elementet på nytt igjen



printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
console.log(`v Part 5 v`)
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
console.log(`v Part 6 v`)
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
console.log(`v Part 7 v`)
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
console.log(`v Part 8 v`)
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
console.log(`v Part 9 v`)
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
console.log(`v Part 10 v`)
printOut("Replace this with you answer!");
printOut(newLine);
