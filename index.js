class CreditCard {
  constructor(cardType, cardNumber) {
    this.cardType = cardType;
    this.cardNumber = cardNumber;
  }

  isCreditCardValid() {
    if (this.cardType === "Master Card") {
      const masterCardRegex = /^5[1-5][0-9]{14}$/;
      return masterCardRegex.test(this.cardNumber);
    } else if(this.cardType === "Visa Card") {
      const visaCardRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
      return visaCardRegex.test(this.cardNumber);
    } else {
      return false;
    };
  };
}

let creditCard1 = new CreditCard("Master Card", "5105105105105100");
let creditCard2 = new CreditCard("Visa Card", "4121116111150132");

console.log(creditCard1.isCreditCardValid());
console.log(creditCard2.isCreditCardValid());