testString = "camelCaseExample";

function solution(string) {
	return string.split(/(?=[A-Z])/).join(" ");
}

// Refactored
const camelCrusher = (string) => string.split(/(?=[A-Z])/).join(" ");

console.log(solution(testString));
console.log(camelCrusher(testString));
