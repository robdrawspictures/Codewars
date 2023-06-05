function queueTime(customers, n) {
	if (customers.length === 0) {
		return 0;
	} else if (n === 1) {
		return customers.reduce((total, num) => total + num, 0); // Method loops over array and performs the provided function, in this case establishing a total then adding to that with each iteration. The 0 represents the starting value.
	} else if (
		customers[0] >=
		customers.reduce((total, num) => total + num, 0) - customers[0]
	) {
		return customers[0];
	} else if (n > customers.length) {
		return Math.max(...customers); // Method searches through provided integers and returns largest (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
	} else {
		let tillPool1 = 0;
		let tillPool2 = 0;

		for (let i = 0; i < customers.length; i++) {
			if (tillPool1 === 0 || tillPool2 > tillPool1) {
				tillPool1 += customers[i];
				console.log(tillPool1);
			} else {
				tillPool2 += customers[i];
				console.log(tillPool2);
			}
		}

		return Math.max(tillPool1, tillPool2);
	}
}

// console.log(queueTime([1, 2, 3, 4], 1));
// console.log(queueTime([10, 5, 7, 8], 1));
// console.log(queueTime([10, 2, 3, 3], 2));
// console.log(queueTime([1, 2, 10, 3], 2));
// console.log(queueTime([1, 11, 10, 3], 5));

let arrays = [[], [], []];

arrays[0].push(1);

function generateArrays(numArr) {
	let arrays = [];
	for (let i = 0; i < numArr; i++) {
		arrays.push([]);
	}

	return arrays;
}

function sortNumbers(numbers, numArr) {
	let arrays = generateArrays(numArr);

	for (let i = 0; i < numbers.length; i++) {
		if (i + 1 > arrays.length) {
			arrays[i - i].push(numbers[i]);
		} else {
			if (
				arrays[i].length !== 0 &&
				arrays[i + 1].length !== 0 &&
				arrays[i].reduce((total, num) => total + num, 0) >
					arrays[i + 1].reduce((total, num) => total + num, 0)
			) {
				arrays[i + 1].push(numbers[i]);
			} else {
				arrays[i].push(numbers[i]);
			}
		}
	}

	return arrays;
}

let testNums = [1, 3, 2, 4];

// console.log(generateArrays(5));
// console.log(sortNumbers(testNums, 4));
// console.log(sortNumbers(testNums, 2));

// let redArr = [[1, 2], [5]];

// console.log(
// 	redArr[0].reduce((total, num) => total + num, 0) >
// 		redArr[0 + 1].reduce((total, num) => total + num, 0)
// );

// console.log(arrays);

let tillPool = new Array(5).fill(0);

// console.log(tillPool);

// I caved and looked up a solution online, but I'm glad I did because this is absolutely brilliant.

/* Line 101 is my favourite part. This single line loocates the index positon of the smallest current value by using min() on the tillPool array.
Basically, indexOf returns the index position of whatever value you provide it (assuming it exists in the array). So all you have to do is use
min() to identify the smallest current number and feed that in to get the index position that should be updated. */

function queueTimeUltra(queue, n) {
	let tillPool = new Array(n).fill(0); // Creates an array of the length specified by n, then uses the fill method to populate each array index with a 0;
	for (let customer of queue) {
		let i = tillPool.indexOf(Math.min(...tillPool));
		tillPool[i] += customer;
	}
	return Math.max(...tillPool);
}

// console.log(queueTimeUltra([1, 2, 3, 4], 1));
// console.log(queueTimeUltra([10, 5, 7, 8], 1));
// console.log(queueTimeUltra([10, 2, 3, 3], 2));
// console.log(queueTimeUltra([1, 2, 10, 3], 2));
// console.log(queueTimeUltra([1, 11, 10, 3], 5));
// console.log(queueTimeUltra([1, 11, 10, 3], 2));

let indexOfTest = ["Apple", "Sneed", "Chuck"];
let i = indexOfTest.indexOf("Sneed");

console.log(i); // Should return 1, if my understanding is correct
