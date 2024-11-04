"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

class TAccount {
    #type;
    #balanceBrukskonto;       // Balance is stored in NOK
    #balanceSparekonto;
    #balancePensjonskonto;
    #currency;                 // Display currency
    #withdrawcount;

    static currencyTypes = {
        NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
        USD: { value: 0.1091, name: "United States dollar", denomination: "$" },
        // other currencies...
    };

    constructor(initialType = "Brukskonto", brukskontoBalance = 0, sparekontoBalance = 0, pensjonskontoBalance = 0, withdrawcount = 0) {
        this.#type = initialType;
        this.#balanceBrukskonto = brukskontoBalance;       // Stored as NOK
        this.#balanceSparekonto = sparekontoBalance;
        this.#balancePensjonskonto = pensjonskontoBalance;
        this.#withdrawcount = withdrawcount;
        this.#currency = TAccount.currencyTypes.NOK;       // Default display currency
    }

    setCurrency(currencyCode) {
        if (!TAccount.currencyTypes[currencyCode]) {
            printOut(`Currency code ${currencyCode} not recognized.`);
            throw new Error(`Currency code ${currencyCode} not recognized.`);
        }
        this.#currency = TAccount.currencyTypes[currencyCode];
        printOut(`Currency changed to ${currencyCode}. New denomination: ${this.#currency.denomination}`);
    }

    deposit(amountInNOK) {
        // Deposits are always added in NOK terms
        if (this.#type === "Sparekonto") {
            this.#balanceSparekonto += amountInNOK;
            printOut(`Deposited ${amountInNOK} NOK to ${this.#type}. New balance is ${this.#balanceSparekonto.toFixed(2)} NOK.`);
        } else if (this.#type === "Brukskonto") {
            this.#balanceBrukskonto += amountInNOK;
            printOut(`Deposited ${amountInNOK} NOK to ${this.#type}. New balance is ${this.#balanceBrukskonto.toFixed(2)} NOK.`);
        }
    }

    withdraw(amountInNOK) {
        // Withdrawals are handled in NOK terms
        if (this.#type === "Brukskonto") {
            if (amountInNOK > this.#balanceBrukskonto) {
                printOut(`You cannot withdraw more than your current balance of ${this.#balanceBrukskonto.toFixed(2)} NOK.`);
            } else {
                this.#balanceBrukskonto -= amountInNOK;
                printOut(`Withdrawing ${amountInNOK} NOK from ${this.#type}. New balance is ${this.#balanceBrukskonto.toFixed(2)} NOK.`);
            }
        } else if (this.#type === "Sparekonto") {
            if (this.#withdrawcount >= 3) {
                printOut(`You have reached the maximum number of withdrawals for ${this.#type}.`);
            } else if (amountInNOK > this.#balanceSparekonto) {
                printOut(`You cannot withdraw more than your current balance of ${this.#balanceSparekonto.toFixed(2)} NOK.`);
            } else {
                this.#withdrawcount++;
                this.#balanceSparekonto -= amountInNOK;
                printOut(`Withdrawing ${amountInNOK} NOK from ${this.#type}. New balance is ${this.#balanceSparekonto.toFixed(2)} NOK.`);
            }
        }
    }

    getBalanceInCurrentCurrency() {
        const conversionRate = this.#currency.value;
        if (this.#type === "Brukskonto") {
            return (this.#balanceBrukskonto * conversionRate).toFixed(2);
        } else if (this.#type === "Sparekonto") {
            return (this.#balanceSparekonto * conversionRate).toFixed(2);
        } else if (this.#type === "Pensjonskonto") {
            return (this.#balancePensjonskonto * conversionRate).toFixed(2);
        }
        return "0.00";
    }

    toString() {
        const balanceInDisplayCurrency = this.getBalanceInCurrentCurrency();
        return `${this.#type}, Balance: ${balanceInDisplayCurrency} ${this.#currency.denomination}`;
    }
}

// Example usage:
const BankAccount = new TAccount("Brukskonto");
printOut(`myAccount = ${BankAccount}`);
BankAccount.setCurrency("USD");       // Set display to USD
BankAccount.deposit(25);              // Deposit 25 NOK
BankAccount.deposit(75);              // Deposit 75 NOK
BankAccount.withdraw(30);             // Withdraw 30 NOK
BankAccount.setCurrency("NOK");       // Set display to NOK
printOut(`${BankAccount}`);


printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
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
