const testArray = [1, 1, 2, 3, 3, 4, 4, 4, 4];
const testArray2 = [1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5, 5, 5];
const testArray3 = [
	1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 9, 9,
];
// const filteredArray = testArray.filter((x) => x === 1);
// console.log(filteredArray.length % 2 === 0);
// console.log(testArray.length);
// console.log(filteredArray);

function findOdd(array) {
	let result = "No odd numbers found.";

	for (let i = 0; i < array.length; i++) {
		let total = array.filter((x) => x === array[i]);

		if (total.length % 2 !== 0) {
			result = array[i];
		}
	}

	return result;
}

console.log(findOdd(testArray));
console.log(findOdd(testArray2));
console.log(findOdd(testArray3));
