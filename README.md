# Credit Card Validator

This is a simple JavaScript class named `CreditCard` designed to validate credit card numbers based on their type (Master Card or Visa Card).

## Usage

1. **Instantiate the CreditCard class:**
   ```javascript
   const creditCard = new CreditCard(cardType, cardNumber);
   ```

2. **Check if the credit card is valid:**
   ```javascript
   console.log(creditCard.isCreditCardValid());
   ```

## Example

```javascript
// Instantiate a Master Card
const creditCard1 = new CreditCard("Master Card", "5399237114031848");

// Check if the credit card is valid
console.log(creditCard1.isCreditCardValid());
```

## Supported Card Types

- Master Card
- Visa Card

## Validation Rules

1. **Master Card:**
   - Should start with a digit '5'.
   - The second digit should be in the range 1-5.
   - Followed by 14 digits.

2. **Visa Card:**
   - Should start with a digit '4'.
   - Followed by either 12 or 15 digits.

## Notes

- Invalid card types will always result in a validation failure.