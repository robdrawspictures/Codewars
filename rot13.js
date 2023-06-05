const testReg = /[a-z]/g;
let test = "apple";
let testArray = test.split("");

let alphabet = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

function getIndexes(string) {
	let stringArray = string.split("");
	let alphaIndexes = [];
	for (let i = 0; i < stringArray.length; i++) {
		// console.log(stringArray[i]);
		alphaIndexes.push(alphabet.indexOf(stringArray[i]));
		// console.log(alphabet.indexOf(stringArray[i]));
	}
	// console.log(alphaIndexes);
	return alphaIndexes;
}

getIndexes(test);

function convertIndexes(indArr) {
	let newArr = [];
	for (let i = 0; i < indArr.length; i++) {
		if (indArr[i] + 13 > 25) {
			newArr.push(alphabet[Math.abs(26 - (indArr[i] + 13))]);
		} else {
			newArr.push(alphabet[indArr[i] + 13]);
		}
	}

	return newArr.join("");
}

console.log("apple: " + convertIndexes(getIndexes("apple"))); // returns 'apple: nccyr'
console.log("test: " + convertIndexes(getIndexes("test"))); // returns 'test: grfg'
console.log("banana: " + convertIndexes(getIndexes("banana"))); // returns 'banana: onanan'
console.log("crush40: " + convertIndexes(getIndexes("crush40"))); // returns 'crush40: pehfumm'

// console.log(Math.abs(25 - (15 + 13)));

// So this technically works, at least for just letters, but it is horrifically inefficent. I am sure there is a solution using regex but I can't figure it out.

const rot13 = (message) => {
	const alpha =
		"abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM";
	return message.replace(
		/[a-z]/gi,
		(letter) => alpha[alpha.indexOf(letter) + 13]
	);
};

console.log(rot13("test"));
console.log(rot13("Test"));
console.log(rot13("Test40"));
