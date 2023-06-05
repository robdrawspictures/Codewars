function findUniq(arr) {
	for (let i = 0; i < arr.length; i++) {
		let groupedNum = arr.filter((n) => n === arr[i]);
		if (groupedNum.length === 1) {
			return groupedNum[0];
		}
	}
}

function findSingle(ar, ar_size) {
	// Do XOR of all elements and return
	let res = ar[0];
	for (let i = 1; i < ar_size; i++) res = res ^ ar[i];

	return res;
}

// Tests
let ar = [2, 3, 5, 4, 5, 3, 4];
let ar2 = [2, 3, 3, 4, 4, 5, 5];
let testArray = [1, 1, 2, 3, 3, 4, 4, 5, 5];
let testArray2 = [1, 2, 3, 1, 4, 4, 3];
let testArray3 = [2, 1, 1, 3, 3, 4, 4, 5, 5];
let n = ar.length;
console.log(findSingle(ar, n)); // returns 2, as expected
console.log(findSingle(ar2, ar2.length)); // returns 2, as expected
console.log(findSingle(testArray, testArray.length)); // returns 7, fuck knows why
console.log(findSingle(testArray2, testArray2.length)); // returns 2, as expected
console.log(findSingle(testArray3, testArray3.length)); // returns 7, no idea
