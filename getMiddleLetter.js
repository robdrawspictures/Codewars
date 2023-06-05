let testEven = "test";
let testOdd = "testy";
let testOne = "A";

function getMiddle(s) {
	let stringArr = s.split("");

	if (stringArr.length % 2 === 0) {
		let newArr = [];
		newArr.push(stringArr[stringArr.length / 2 - 1]);
		newArr.push(stringArr[stringArr.length / 2]);
		return newArr.join("");
	} else {
		return stringArr[(stringArr.length - 1) / 2];
	}
}

// This is probably something I could have come up with if I'd known about these methods
function betterSolution(s) {
	var middle = s.length / 2;
	return s.length % 2
		? s.charAt(Math.floor(middle))
		: s.slice(middle - 1, middle + 1);
}

// I like this one a lot.
/* The substr(index, amount) method extracts part of a string, based on provided starting position, and how many characters you want.
If no amount is provided, then the remainder of the string after the index position will be returned. 

In the below function, it's taking the index position by dividing the string length by 2 then subtracting 1 (to account for indexes starting
at 0, then using Math.ceil to round that up to the nearest whole number. It then checks if the string length is perfectly divisible by zero
(i.e. is the number odd or even) and sets the amount of returned characters as 2 if yes (even), 1 if no (odd).*/
function bestSolution(s) {
	return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

// The big takeaway from this exercise is you don't have to split a string into an array to access individual characters.

let testCalc = (5 - 1) / 2 + 1; // Should return 3

// console.log(testCalc);
console.log(getMiddle(testOdd));
console.log(getMiddle(testEven));
console.log(getMiddle(testOne));
