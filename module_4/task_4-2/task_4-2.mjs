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
    #Author
    #isbn

    constructor(aTitle, aAuthor, aIsbn){
        this.#title = aTitle;
        this.#Author = aAuthor;
        this.#isbn = aIsbn;
    }

    toString() {
        if (this.#title === "Harry Potter"){
            console.log(`${book1}, Author: ${author1}, ISBN: ${isbn1}`);
            return (`${book1}, Author: ${author1}, ISBN: ${isbn1}`);
        } else if (this.#title === "Shogun"){
            console.log(`${book2}, Author: ${author2}, ISBN: ${isbn2}`);
            return (`${book2}, Author: ${author2}, ISBN: ${isbn2}`);
        } else if (this.#title === "Looking Forward"){
            console.log(`${book3}, Author: ${author3}, ISBN: ${isbn3}`);
            return (`${book3}, Author: ${author3}, ISBN: ${isbn3}`);
        }
    }
    
    setBook(aTitle) {

        switch (aTitle){
            
            case "Harry Potter": {
                this.#title = "Harry Potter";
                this.#Author = "J. K. Rowling";
                this.#isbn = "harrypotterISBN"; //9780545069670
                let book1 = this.#title;
                let author1 = this.#Author
                let isbn1 = this.#isbn
                break
            }
            case "Shogun": {
                this.#title = "Shogun";
                this.#Author = "James Clavell";
                this.#isbn = "shogunISBN";//9780340203163
                let book2 = this.#title;
                let author2 = this.#Author
                let isbn2 = this.#isbn
                break
            }
            case "Looking Forward": {
                this.#title = "Looking Forward";
                this.#Author = "Marcia Willett";
                this.#isbn = "lookingforwardISBN";//9780755385164
                let book3 = this.#title;
                let author3 = this.#Author;
                let isbn3 = this.#isbn;
                console.log(aTitle);
                break
            }
            default: {
                console.log(`This book is not in the bookshelf. Please try another book.`);
                break
            }
        }
    }
}

const bookShelf = new TBook("Harry Potter");
bookShelf.setBook("Harry Potter")
console.log(bookShelf);
bookShelf.setBook("Shogun");
console.log(bookShelf);
bookShelf.setBook("Looking Forward");
console.log(bookShelf);
bookShelf.setBook("En Pingles Dagbok");
console.log(bookShelf);



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
