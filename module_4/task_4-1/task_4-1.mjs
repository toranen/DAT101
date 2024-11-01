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

printOut("--- Part 2, 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

class TAccount1 {

    #type;
    #typeA;
    #typeB;
    #balanceBrukskonto;
    #balanceSparekonto;
    #balancePensjonskonto;
    #withdrawcount;

    constructor(initialType, brukskontoBalance, sparekontoBalance, pensjonskontoBalance, withdrawcount) {
        this.#type = initialType;
        this.#balanceBrukskonto = ~~ brukskontoBalance;
        this.#balanceSparekonto = ~~ sparekontoBalance;
        this.#balancePensjonskonto = ~~ pensjonskontoBalance;
        this.#withdrawcount = ~~ withdrawcount;
    }
    
    toString() {
        if (this.#type == "Brukskonto") {
            return this.#type + ", Balance: " + this.#balanceBrukskonto;
        } else if (this.#type == "Sparekonto") {
            return this.#type + ", Balance: " + this.#balanceSparekonto;
        } else if (this.#type == "Pensjonskonto") {
            return this.#type + ", Balance: " + this.#balanceSparekonto;
        }
       
    }
    
    setType(typeA) {
        printOut(`Account is changed from ${this.#type} to ${typeA}.`);
        this.#type = typeA;
    }

    getBalance() {
        return `The balance is ${this.#balanceBrukskonto}`;
    }

    deposit(aAmount) {
        if (this.#type == "Sparekonto"){
            this.#balanceSparekonto = this.#balanceSparekonto + aAmount;
            printOut(`Deposited ${aAmount} to ${this.#type}. New balance is ${this.#balanceSparekonto}.`);

        } else if (this.#type == "Brukskonto") {
            this.#balanceBrukskonto = this.#balanceBrukskonto + aAmount;
            printOut(`Deposited ${aAmount} to ${this.#type}. New balance is ${this.#balanceBrukskonto}.`);
        }
    
    }

    withdraw(aAmount) {
        switch(this.#type){
            case "Brukskonto":{
                this.#withdrawcount = 0;
                if (aAmount > this.#balanceBrukskonto){
                    printOut(`You can not withdraw a greater amount than what is in your account.`);
                } else {
                    this.#balanceBrukskonto = this.#balanceBrukskonto - aAmount;
                    printOut(`Withdrawing ${aAmount} from ${this.#type}. New balance is ${this.#balanceBrukskonto}.`);
                }
                break
            }

            case "Sparekonto":{
                console.log(this.#balanceSparekonto)
                if (this.#withdrawcount >=3){
                    printOut(`You have reached the maximum amount of withdraws.`)
                } else if (aAmount > this.#balanceSparekonto){
                    printOut(`You can not withdraw a greater amount than what is in your account.`);
                } else {
                    this.#withdrawcount ++;
                    console.log(this.#balanceSparekonto)
                    this.#balanceSparekonto = this.#balanceSparekonto - aAmount;
                    printOut(`Withdrawing ${aAmount} from ${this.#type}. New balance is ${this.#balanceSparekonto}.`);
                    
                }
                break 
            }

            case "Pensjonskonto": {
                this.#withdrawcount = 0;
                printOut(`You can not withdraw from your pensjonskonto.`)
                break
            }
        }
    }

    transfer (typeA, typeB, aAmount){
        switch (typeA, typeB) {
            case "Brukskonto" && "Sparekonto":{
                console.log("case 1");
                if(aAmount > this.#balanceBrukskonto){
                    printOut(`You  can not transfer an amount greater than your balance. Your balance is ${this.#balanceBrukskonto}.`);
                } else {
                    printOut(`Transferring from Brukskonto to Sparekonto.`);
                    this.#balanceBrukskonto = this.#balanceBrukskonto - aAmount
                    this.#balanceSparekonto = this.#balanceSparekonto + aAmount
                    printOut(`Brukskonto = ${this.#balanceBrukskonto}.`)
                    printOut(`Sparekonto = ${this.#balanceSparekonto}.`)
                    break
                }
                }
                case "Sparekonto" && "Brukskonto":{
                    console.log("case 2");
                    if(aAmount > this.#balanceSparekonto){
                        printOut(`You  can not transfer an amount greater than your balance. Your balance is ${this.#balanceSparekonto}.`);
                    } else {
                        printOut(`Transferring from  Sparekonto to Brukskonto.`)
                        this.#balanceBrukskonto = this.#balanceBrukskonto + aAmount
                        this.#balanceSparekonto = this.#balanceSparekonto - aAmount
                        printOut(`Brukskonto = ${this.#balanceBrukskonto}.`)
                        printOut(`Sparekonto = ${this.#balanceSparekonto}.`)
                        break
                    }
                    
                }
               case "Pensjonskonto":{
                console.log("case 3");
                printOut(`You can not transfer from or to you pensjonskonto.`)
                printOut(`Please select other accounts.`)
                break
               }
         }
        
    }
}

/* I had a little fun whilst trying to understand how class works xD */

const BankAccount1 = new TAccount1("Brukskonto");

printOut(`myAccount = ${BankAccount1}`);
BankAccount1.deposit(25);
BankAccount1.deposit(75);
BankAccount1.withdraw(30);
BankAccount1.withdraw(30);
BankAccount1.withdraw(30);
BankAccount1.setType("Pensjonskonto");
BankAccount1.withdraw(30);
BankAccount1.setType("Sparekonto");
BankAccount1.transfer("Brukskonto", "Sparekonto", 10);
BankAccount1.withdraw(10);
//BankAccount1.transfer("Sparekonto", "Brukskonto", 30) /* I could use the prompt function like I did in task 3-3 part 6, but it is annoying when testing the code*/


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
