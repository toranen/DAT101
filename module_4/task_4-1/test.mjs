"use strict";

withdraw(aAmount, typeA) {
    const typeACurrency = TAccount.currencyTypes[typeA]
    const aAmountToCurrency = this.formatToMaxFourDecimals(aAmount * this.#currency.value);
    
    if (!(TAccount.currencyTypes[typeA])) {
        printOut(`Could not read currency`);
        printOut(`${this.#type}, balance: ${this.#balanceSparekonto}${this.#currency.denomination}`)
    } else {
        console.log(typeACurrency)
        switch (TAccount.currencyTypes[typeA]) {
            case undefined || "NOK":{
                console.log("case withdraw case: undefined || NOK");
                if (this.#type == "Sparekonto"){
                    this.#balanceSparekonto -= aAmount;
                printOut(`Withdrew ${this.aAmountToCurrency}${this.#currency.denomination} to ${this.#type}.`);
                printOut(`New balance is ${this.formatToMaxFourDecimals(this.#balanceSparekonto * this.#currency.value)}${this.#currency.denomination}.`);
                console.log("withdraw undefined if");
            } else if (this.#type == "Brukskonto") {
                this.#balanceBrukskonto -= aAmount;
                printOut(`Withdrew ${this.aAmountToCurrency}${this.#currency.denomination} to ${this.#type}.`);
                printOut(`New balance is ${this.formatToMaxFourDecimals(this.#balanceSparekonto * this.#currency.value)}${this.#currency.denomination}.`);
                console.log("undefined else if");
            }
            break
        }
            case "Brukskonto": {        //Jeg er her!!!!!!
                this.#withdrawcount = 0;

                if (aAmount > this.#balanceBrukskonto) {
                    printOut(`You cannot withdraw more than your current balance of ${this.#balanceBrukskonto}NOK.`);
                } else {
                    this.#balanceBrukskonto -= aAmount; 
                    printOut(`Withdrawing ${aAmountToCurrency}kr from ${this.#type}. New balance is ${this.formatToMaxFourDecimals(this.#balanceBrukskonto * this.#currency.value)}${this.#currency.denomination}.`);
                }
                break;
            }

            case "Sparekonto": {
                if (this.#withdrawcount >= 3) {
                    printOut(`You have reached the maximum number of withdrawals for ${this.#type}.`);
                } else if (aAmount > this.#balanceSparekonto) {
                    printOut(`You cannot withdraw more than your current balance of ${this.formatToMaxFourDecimals(this.#balanceSparekonto * this.#currency.value)}${this.#currency.denomination}.`);
                } else {
                    this.#withdrawcount++;
                    this.#balanceSparekonto -= aAmount;
                    printOut(`Withdrawing ${aAmountToCurrency}kr from ${this.#type}. New balance is ${this.formatToMaxFourDecimals(this.#balanceSparekonto * this.#currency.value)}${this.#currency.denomination}.`);
                }
                break;
            }

            case "Pensjonskonto": {
                    this.#withdrawcount = 0;
                    printOut(`You cannot withdraw from your pensjonskonto.`);
                    break;
            }
        }
    }
}