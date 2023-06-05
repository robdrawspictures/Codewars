let testString = "is2 tes4t Th1is 3a";
// let stringArray = testString.split(" ");
// console.log(stringArray);
// let correctOrder = `${stringArray[2]} ${stringArray[0]} ${stringArray[3]} ${stringArray[1]}`;
// console.log(correctOrder);

// console.log(0 == "0");
// console.log(0 == "1");
// console.log(0 === "0");

// let testWord = "Th1s";
// let testArray = testWord.split("");
// console.log(testArray);
// console.log(testArray.join(""));

// let i = 0;
// console.log(i);
// console.log((i + 1).toString());

function order(words) {
	if (words === "") {
		return "empty input should return empty string";
	} else {
		let wordsArray = words.split(" ");
		// console.log(wordsArray);
		let sortedArray = [];

		for (let i = 0; i < wordsArray.length; i++) {
			let wordArray = wordsArray[i].split("");
			// console.log(wordArray);
			if (wordArray.filter((n) => n == i + 1)) {
				let rejoinedWord = wordArray.join("");
				// console.log(rejoinedWord);
				sortedArray.push(rejoinedWord);
				// console.log(sortedArray);
			}
		}

		return sortedArray;
	}
}

console.log(order(testString));
// console.log(order(""));

function orderBetter(words) {
	var array = words.split(" ");
	var sortedArray = [];
	for (i = 0; i <= array.length; i++) {
		for (j = 0; j < array.length; j++) {
			if (array[j].indexOf(i) >= 0) {
				sortedArray.push(array[j]);
			}
		}
	}
	return sortedArray.join(" ");
}

console.log(orderBetter(testString));

function orderBest(words) {
	return words
		.split(" ")
		.sort(function (a, b) {
			return a.match(/\d/) - b.match(/\d/);
		})
		.join(" ");
}

console.log(orderBest(testString));

//I didn't solve this one, and honestly looking at the solutions I still don't really understand how they work. Using regex seems to be the preferrable solution.
