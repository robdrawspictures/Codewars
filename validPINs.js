// A valid PIN string can contain 4 OR 6 digits, nothing else.

let test = "sausages";
// console.log(test.length);

let regEx = /\d/;
let passingPIN = "1234";
let failingPIN = "!234";
let PINTooLong = "1234567";
let PINTooShort = "123";
let PINHasLetters = "1of2";
let PINIsAllLetters = "JoJo";
let passingLongPIN = "123456";

function validPIN(pin) {
	if (pin.length !== 4 && pin.length !== 6) {
		return false;
	} else {
		return /^[0-9]*$/.test(pin);
	}
}

const refactoredPIN = (pin) =>
	pin.length !== 4 && pin.length !== 6 && /^[0-9]*$/.test(pin);

console.log("Original Function: ");
console.log(validPIN(passingPIN));
console.log(validPIN(failingPIN));
console.log(validPIN(PINTooLong));
console.log(validPIN(passingLongPIN));
console.log(validPIN(PINTooShort));
console.log(validPIN(PINHasLetters));
console.log(validPIN(PINIsAllLetters));

console.log("Refactored Function:");
console.log(refactoredPIN(passingPIN));
console.log(refactoredPIN(failingPIN));
console.log(refactoredPIN(PINTooLong));
console.log(refactoredPIN(passingLongPIN));
console.log(refactoredPIN(PINTooShort));
console.log(refactoredPIN(PINHasLetters));
console.log(refactoredPIN(PINIsAllLetters));

// Passed this one on my own, although I still feel the solution could be refactored slightly better.
