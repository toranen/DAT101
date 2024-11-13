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

printOut("--- Part 2, 3, 4, 5, 6, 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

class TAccount {

    #type;
    #balanceBrukskonto;
    #balanceSparekonto;
    #balancePensjonskonto;
    #currency;
    #withdrawCount;

    static currencyTypes = {
        NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
        EUR: { value: 0.0985, name: "Europeiske euro", denomination: "€" },
        USD: { value: 0.1091, name: "United States dollar", denomination: "$" },
        GBP: { value: 0.0847, name: "Pound sterling", denomination: "£" },
        INR: { value: 7.8309, name: "Indiske rupee", denomination: "₹" },
        AUD: { value: 0.1581, name: "Australienske dollar", denomination: "A$" },
        PHP: { value: 6.5189, name: "Filippinske peso", denomination: "₱" },
        SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
        CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
        THB: { value: 3.3289, name: "Thai baht", denomination: "฿" },
    };

    constructor(initialType, brukskontoBalance, sparekontoBalance, pensjonskontoBalance, withdrawCount) {
        this.#type = initialType;
        this.#balanceBrukskonto = brukskontoBalance || 0;
        this.#balanceSparekonto = sparekontoBalance || 0;
        this.#balancePensjonskonto = pensjonskontoBalance || 0;
        this.#withdrawCount = withdrawCount || 0;
        this.#currency = TAccount.currencyTypes.NOK;
    }
    
    formatToMaxFourDecimals(num) {
        return num.toFixed(2).replace(/\.?0+$/, '');
    }

    setCurrency(currencyCode) {
        if (!TAccount.currencyTypes[currencyCode]) {
            printOut(`Currency code ${currencyCode} not recognized.`);
            throw new Error(`Currency code ${currencyCode} not recognized.`);
        }

        const newCurrency = TAccount.currencyTypes[currencyCode];

        this.#currency = newCurrency;
        printOut(`Currency changed to ${currencyCode}. New denomination: ${this.#currency.denomination}`);

        printOut(this.toString(this.#type));
    }

    getCurrency() {
        return this.#currency;
    }

    getDenomination() {
        return this.#currency.denomination;
      }

      toString() {
        if (this.#type == "Brukskonto") {
            return `${this.#type}, Balance: ${this.formatToMaxFourDecimals(this.#balanceBrukskonto * this.#currency.value)} ${this.#currency.denomination}`;
        } else if (this.#type == "Sparekonto") {
            return `${this.#type}, Balance: ${this.formatToMaxFourDecimals(this.#balanceSparekonto * this.#currency.value)} ${this.#currency.denomination}`;
        } else if (this.#type == "Pensjonskonto") {
            return `${this.#type}, Balance: ${this.formatToMaxFourDecimals(this.#balancePensjonskonto * this.#currency.value)} ${this.#currency.denomination}`;
        }
    }
    
    setType(typeA) {
        if (typeA == "Brukskonto" || typeA == "Sparekonto" || typeA == "Pensjonskonto");
        printOut(`Account is changed from ${this.#type} to ${typeA}.`);
        this.#type = typeA;
    }

    getBalance() {
        return `The balance is ${this.#balanceBrukskonto}`;
    }

    deposit(aAmount, typeA) {
        if (typeA == undefined){
            typeA = "NOK";
        }
        const typeACurrency = TAccount.currencyTypes[typeA];
        if (typeof typeA !== "undefined" && !(typeA in TAccount.currencyTypes)){
            printOut(`Could not read currency`);
            printOut(`${this.#type}, balance: ${this.formatToMaxFourDecimals(this.#balanceSparekonto)}${this.#currency.denomination}`);
        } else {
            switch (TAccount.currencyTypes[typeA]) {
            case typeACurrency: {
                const newCurrency = TAccount.currencyTypes[typeA].value;
                const depositedAmountInNOK = aAmount / newCurrency;
                if (this.#type == "Sparekonto"){
                    this.#balanceSparekonto += depositedAmountInNOK;
                    printOut(`Deposited ${this.formatToMaxFourDecimals(aAmount)}${TAccount.currencyTypes[typeA].denomination} to ${this.#type}.`);
                    printOut(`New balance is ${this.formatToMaxFourDecimals(this.#balanceSparekonto * this.#currency.value)}${this.#currency.denomination}.`);
                    console.log("newCurrency if");
                } else if (this.#type == "Brukskonto") {
                    this.#balanceBrukskonto += depositedAmountInNOK;
                    printOut(`Deposited ${this.formatToMaxFourDecimals(depositedAmount)}${TAccount.currencyTypes[typeA].denomination} to ${this.#type}.`);
                    printOut(`New balance is ${this.formatToMaxFourDecimals(this.#balanceBrukskonto / this.#currency.value)}${this.#currency.denomination}.`);
                    console.log("newCurrency else if");
                } 
            break
            }
            }
        }
    }

    withdraw(aAmount, typeA) {
        if (typeA == undefined){
            typeA = "NOK";
        }
        const typeACurrency = TAccount.currencyTypes[typeA];
        const aAmountToCurrency = this.formatToMaxFourDecimals(aAmount * TAccount.currencyTypes[typeA].value);
        let withdrawCount = 0;
        console.log(typeACurrency);
        if (typeof typeA !== "undefined" && !(typeA in TAccount.currencyTypes)){
            printOut(`Could not read currency`);
            printOut(`${this.#type}, balance: ${this.formatToMaxFourDecimals(this.#balanceSparekonto)}${this.#currency.denomination}`);
        } else {
            switch (this.#type){
                case "Brukskonto":{
                    withdrawCount = 0;
                    if (aAmountToCurrency > this.#balanceBrukskonto){
                        printOut(`You can not withdraw an amount greater than your balance`);
                        printOut(this.#type);
                    } else {
                        switch (TAccount.currencyTypes[typeA]){
                            case typeACurrency: {
                                this.#balanceBrukskonto -= aAmount / TAccount.currencyTypes[typeA].value;
                                printOut(`Withdrew ${aAmount}${this.#currency.denomination} from ${this.#type}`);
                                printOut(`New balance is ${this.formatToMaxFourDecimals(this.#balanceBrukskonto / this.#currency.value)}${this.#currency.denomination}.`);
                                break
                            }
                        }
                    }
                    break
                }
                case "Sparekonto":{
                    withdrawCount = 0;
                    if (aAmountToCurrency > this.#balanceSparekonto){
                        printOut(`You can not withdraw an amount greater than your balance`);
                        printOut(this.#type);
                    } else {
                        switch (TAccount.currencyTypes[typeA]){
                            case undefined || "NOK":{
                                withdrawCount ++;
                                if (withdrawCount >= 3){
                                    printOut(`You have reached the maximum number of withdrawals for ${this.#type}.`);
                                }
                                this.#balanceSparekonto -= aAmount;
                                printOut(`Withdrew ${aAmount}${this.#currency.denomination.NOK} from ${this.#type}`);
                                printOut(`New balance is ${this.formatToMaxFourDecimals(this.#balanceSparekonto / this.#currency.value)}${this.#currency.denomination.NOK}.`);
                                break
                            }
                            case TAccount.currencyTypes[typeA]: {
                                withdrawCount ++
                                if (withdrawCount >= 3){
                                    printOut(`You have reached the maximum number of withdrawals for ${this.#type}.`);
                                }
                                this.#balanceSparekonto -= aAmount / TAccount.currencyTypes[typeA].value;
                                printOut(`Withdrew ${aAmount}${TAccount.currencyTypes[typeA].denomination} from ${this.#type}`);
                                printOut(`New balance is ${this.formatToMaxFourDecimals(this.#balanceSparekonto / this.#currency.value)}${this.#currency.denomination}.`);

                                break
                            }
                        }
                    }
                    break
                }
                case "Pensjonskonto":{
                    withdrawCount = 0;
                    printOut(`You cannot withdraw from ${this.#type}`);
                    break;
                }
            }
        }
    }
    

    transfer (typeA, typeB, aAmount){

        switch (typeA, typeB) {
            case "Brukskonto" && "Sparekonto":{
                if(aAmount > this.#balanceBrukskonto){
                    printOut(`You  can not transfer an amount greater than your balance. Your balance is ${this.#balanceBrukskonto}${this.#currency.denomination}.`);
                } else {
                    printOut(`Transferring from Brukskonto to Sparekonto.`);
                    this.#balanceBrukskonto = this.#balanceBrukskonto - aAmount;
                    this.#balanceSparekonto = this.#balanceSparekonto + aAmount;
                    printOut(`Brukskonto = ${this.#balanceBrukskonto * this.#currency.value}${this.#currency.denomination}.`);
                    printOut(`Sparekonto = ${this.#balanceSparekonto * this.#currency.value}${this.#currency.denomination}.`);
                    break
                }
            }
            case "Sparekonto" && "Brukskonto":{
                if(aAmount > this.#balanceSparekonto){
                    printOut(`You  can not transfer an amount greater than your balance. Your balance is ${this.#balanceSparekonto * this.#currency.value}${this.#currency.denomination}.`);
                    } else {
                        printOut(`Transferring from  Sparekonto to Brukskonto.`);
                        this.#balanceBrukskonto += aAmount;
                        this.#balanceSparekonto -= aAmount;
                        printOut(`Brukskonto = ${this.#balanceBrukskonto * this.#currency.value}${this.#currency.denomination}.`);
                        printOut(`Sparekonto = ${this.#balanceSparekonto * this.#currency.value}${this.#currency.denomination}.`);
                        break
                    } 
            }
            case "Pensjonskonto":{
                console.log("case 3");
                printOut(`You can not transfer from or to you pensjonskonto.`);
                printOut(`Please select other accounts.`);
                break
            }
        }        
    }
}

const BankAccount = new TAccount("Brukskonto");
printOut(`myAccount = ${BankAccount}`);
BankAccount.setType("Sparekonto")
BankAccount.deposit(1, "NOK");
BankAccount.deposit(1, "EUR");
BankAccount.deposit(1, "USD");
BankAccount.deposit(1, "GBP");
BankAccount.deposit(1, "INR");
BankAccount.deposit(1, "AUD");
BankAccount.deposit(1, "PHP");
BankAccount.deposit(1, "SEK");
BankAccount.deposit(1, "CAD");
BankAccount.deposit(1, "THB");
BankAccount.setCurrency("NOK");
BankAccount.deposit(1, "faw");
BankAccount.withdraw(1, "USD");
BankAccount.withdraw(1);
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

console.log("v Part 8 v");
printOut(`I belive this is part 8 in task 3-3.`);

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
