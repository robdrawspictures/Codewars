/* Greed is allegecly a dice game where you roll five six-sided dice and
score based on matching numbers or specific ones worth points. The scoring
system is confusing so I'm including it here for posterity because otherwise
this will make absolutely no sense.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point

 Where things get confusing is if, for example, you get four 1's, that would
 be worth 1100 points

 For the purposes of the function, tests will always be passed in as an array
 of five numbers.

*/

function score(dice) {
    let score = 0;

     dice.filter((x) => x === 1).length >= 3
			? (score += 1000 + ((dice.filter((x) => x === 1).length - 3) * 100))
			: score += dice.filter((x) => x === 1).length * 100; 

     dice.filter((x) => x === 5).length >= 3
			? (score += 500 + ((dice.filter((x) => x === 5).length - 3) * 50))
			: score += dice.filter((x) => x === 5).length * 50;

    for(let i = 2; i < 7; i++){
        i != 5 && (
             dice.filter((x) => x === i).length >= 3 && (score += i * 100))
    }

    return score;
}

// Tests

const arr1 = [1, 2, 3, 4, 5] // Should score 150 PASS
const arr2 = [2, 2, 3, 2, 1] // Should score 200 PASS
const arr3 = [1, 5, 1, 1, 1] // Should score 1150 PASS
const arr4 = [1, 1, 1, 1, 1] // Should score 1200 PASS
const arr5 = [1, 3, 3, 3, 2] // Should score 400 PASS

const failTst = [4, 4, 4, 3, 3]; // Should score 400 PASS
const failTst2 = [2, 4, 4, 5, 4]; // Should score 450 PASS
const failTst3 = [2, 3, 3, 2, 3]; // Should score 300 PASS
const failTst4 = [3, 3, 3, 3, 3]; // Should score 300 FAIL returns 0 and I know why
const failTst5 = [5, 5, 5, 3, 2]; // Should score 500 FAIL returns 1000 and now I know why
const failTst6 = [5, 5, 5, 5, 5]; // Should score 600 FAIL returns 1100 and now I know why
const failTst7 = [6, 6, 6, 3, 2]; // Should score 600 FAIL returns 1100 and now I know why

// console.log(score(arr1));
// console.log(score(arr2));
// console.log(score(arr3));
// console.log(score(arr4));
// console.log(score(arr5));
// console.log(score(failTst));
// console.log(score(failTst2));
// console.log(score(failTst3));
// console.log(score(failTst4));
console.log(score(failTst5));
console.log(score(failTst6));
console.log(score(failTst7));

// let fiveScore = 0;

// let famouseFive = failTst5.filter((x) => x === 5).length >= 3
// 			? (fiveScore += 500 + (failTst5.filter((x) => x === 5).length - 3) * 50)
// 			: (fiveScore += failTst5.filter((x) => x === 5).length * 50);

// console.log(fiveScore);

/* Had a really stupid trip up here that I never would have solved
if a comment on Codewars hadn't suggested trying an array of nothing
but 3s. Previously, the code on line 35 was set to length === 3, but
this meant if you had more than three matching 2s, 3s or 4s, then it
was adding 0 to the score. Dumbass.

Dumbass Part 2: Somehow throughout all of this I never realised or
factored in the sixth side of the six-sided dice, but once I did
suddenly all my tests with 5s started breaking...it took me longer
than I'm willing to admit to realise this was because my for loop
was now running through the 5s twice, doubling the score. (And then
also because I got the for loop wrong again to factor in the 6.)

All tests now appear to be working, but my function is ghastly. 
Can't wait to see how someone did this in one line, as usual. */

function scoreBest(dice) {
	var dc = [0, 0, 0, 0, 0, 0];
	var tdr = [1000, 200, 300, 400, 500, 600];
	var sdr = [100, 0, 0, 0, 50, 0];
	dice.forEach(function (x) {
		dc[x - 1]++;
	});
	return dc.reduce(function (s, x, i) {
		return s + (x >= 3 ? tdr[i] : 0) + sdr[i] * (x % 3);
	}, 0);
}

/* This was the top-voted solution but I don't care for it very much,
the rest were all fairly similar to mine, I didn't really see anything
that was leagues more efficient, but I guess I'll save this one too since
it's at least a different way of doing things:
*/

function scoreCase(dice) {
	var sum = 0;
	dice = dice.sort();
	for (var i = 0; i < dice.length; i++) {
		if (dice[i] == dice[i + 1] && dice[i + 1] == dice[i + 2]) {
			switch (dice[i]) {
				case 1:
					sum += 1000;
					break;
				case 6:
					sum += 600;
					break;
				case 5:
					sum += 500;
					break;
				case 4:
					sum += 400;
					break;
				case 3:
					sum += 300;
					break;
				case 2:
					sum += 200;
			}
			i = i + 2;
			continue;
		} else if (dice[i] == 1) {
			sum += 100;
		} else if (dice[i] == 5) {
			sum += 50;
		}
	}
	return sum;
}