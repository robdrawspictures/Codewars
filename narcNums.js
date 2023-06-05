/*Narcissist Numbers are numbers which add up to themselves when each individual digit is
multiplied to the power of the number of digits in the number.

For example, 153:
1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 */

function narcissistic(value) {
	let numStr = value.toString();
	let numArr = numStr.split("");
	let numTotal = 0;

	for (let i = 0; i < numArr.length; i++) {
		numTotal += Math.pow(parseInt(numArr[i]), numArr.length);
	}

	return numTotal === value;
}

console.log(narcissistic(153));

// This was the second-top solution on CW, mainly saving because of the ** which I assume is an alt to Math.pow()

function narcissisticBest(value) {
	return (
		value
			.toString()
			.split("")
			.map((x, i, arr) => x ** arr.length)
			.reduce((a, b) => +a + +b) === value
	);
}
