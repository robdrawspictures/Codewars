// const n = 123456;
// let nA = Array.from(n.toString()).map(Number);
// testNum = 123;

// console.log(testNum.toString().length);

// console.log(testNum.toString().length !== 1);

// console.log(nA);

/*I have absolutely no idea where I found that map(Number) trick, but it's extremely cool. 
I had to test it to make sure I understood what it was doing, but basically it loops
over a given array (in this case an array made up from a number turned into a string)
and turns any string numbers into integers. No idea what happens if there are any
non-numbers in there, but my guess would be NaN or undefined. 

Also, just to note: The reason the number has to be converted to a string first is because
Array will split a string into individual characters, but it can't do that with a number.
See my tests below for details. */

function digitalRoot(n) {
	let nA = Array.from(n.toString()).map(Number);

	while (nA.reduce((t, a) => t + a, 0).toString().length !== 1) {
		let newNum = nA.reduce((t, a) => t + a, 0);
		nA = Array.from(newNum.toString()).map(Number);
		console.log(nA);
	}

	return nA.reduce((t, a) => t + a, 0);
}

console.log(digitalRoot(942));

// let testArr = ["1", "2", "3"];

// console.log(testArr);
// console.log(testArr.map(Number));

// console.log(Array.from(942));
// console.log(Array.from("942"));
