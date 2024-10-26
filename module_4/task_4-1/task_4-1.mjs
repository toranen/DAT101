"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

console.log("v Part 1 v");

const accountType = {
    normal: "Brukskonto",
    saving: "Sparekonto",
    credit: "Kreditkonto",
    pension: "pensionskonto",
}

printOut(`${accountType.normal}, ${accountType.saving}, ${accountType.credit}, ${accountType.pension}`)
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

console.log("v Part 2 v");

class TAccount {
    #type;
    
    constructor(initialType) {
        this.#type = initialType;
    }
    
    toString() {
        return this.#type;
    }
    
    setType(newType) {
        printOut(`Account is changed from ${this.#type} to ${newType}`);
        this.#type = newType;
    }
}

const myAccount = new TAccount("Brukskonto");

printOut(`myAccount = ${myAccount}`);

myAccount.setType("Sparekonto");

printOut(`myAccount = ${myAccount}`);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

console.log("v Part 3 v");

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

console.log("v Part 4 v");

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

console.log("v Part 5 v");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

console.log("v Part 6 v");

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

console.log("v Part 7 v");

printOut(newLine);
