/* The description for this one on Codewars was absolutely dogshit, I had to go to
the comments just to figure out what it actually wants me to do.

Basically, you are trying to find the sub-section within an array from which the
highest total can be attained. So, in an array of all positive numbers, the max
would be the sum of all those numbers. In an empty array, or an array of all
negative numbers the max would be zero. So far so good.

Where it gets mind-melty is where you have an array like [-2, 1, -3, 4, -1, 2, 1, -5, 4].

Here, the highest total possible is 6, by totalling the section [4, -1, 2, 1]; any other
sequence results in a lower number (for example, if you tried to sneak in that 4 at the
end of the array, you'd also have to include the -5 which would mean you'd lose 1 overall.

So now I understand WHAT I have to do, but I haven't the first clue HOW I go about parsing
the array to find the most optimum sequence. 

One idea I have is to first take the sum of the whole array, then go through the array,
adding one number at a time until it either equals or is greater than the original total,
then return that number.

The problem is there could potentially be a greater number still if you start the sequence
at a later index. For example, if the first index is -10, then a string of positives, then
three negative indexes, then the optimum starting position is index[1].

So, if I can find a way to not start adding until I hit a positive number...that might just
do it.*/

const maxSequence = (arr) => {
	let total = 0;
    let arrSum = arr.reduce((x, y) => x + y, 0) 

    if(arr.length === 0 || !arr.some(x => x > 0)){
        total = 0
    } else {
        for(let i = 0; i < arr.length; i++){
            if(total === 0 && arr[i] < 0){
                total += 0
            } else if(total < arrSum){
                total += arr[i]
            } else if (total > arrSum && total + arr.splice((i+1), arr.length).reduce((x,y) => x + y, 0) > total){
                total += arr[i]
            }
        }
    }

    return total;
};

/* There's currently an issue in my function (imagine my shock) 
where arr1 is returning 0 and seemingly never even getting into 
the for loop, and I can't figure out why.

I'll look again in the morning, I feel like I'm really close to
cracking this though (which means I'm a million miles off). 

SURPRISE IT WAS SOMETHING REALLY DUMB, AS USUAL. On line 35,
I'd used arr.length = 0 rather than strict equals. Thank you,
Javascript. */

/* UPDATE (31/07/23) - Instead of spinning my wheels I decided
to look up a solution on the internet, including a brute force
solution and what I assume Codewars want's me to use: Kadane's
Algorithm. */

// Brute Force
const maxSubArray = (nums) => {
  let maxSum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    let currentSubArraySum = 0;

    for (let j = i; j < nums.length; j++) {
      currentSubArraySum += nums[j];
      maxSum = Math.max(maxSum, currentSubArraySum);
    }
  }

  return maxSum;
};

/* I think I understand about 95% of what's going on above.
maxSum is established as a massive negative number, then
within the first for loop the currentSubArraySum is defined
at 0.

Within the second for loop. whose starting index is established
by the current index of the first loop, the number at the current
j index is added to currentSubArraySum, then compared against
maxSum using Math.max and, if it's a bigger number it becomes
maxSum, if not it moves on the the next j index and repeats
the test until the max maxSum from that starting point is found,
then the process repeats.

So, if you have an array like:
let nums = [-1, 2, 4, -5, 8]

The first loop would start with i/j index of 0, and the maxSum
would end up as 8. Then the loop would repeat with i/j = 1 and
the maxSum would end up as 9, because this time the -1 in nums[0]
would be skipped (remember currentSubArraySum resets to 0 every loop).

After this, the process repeats again: currentSubArraySum resets to
0 and we start at i/j = 2, meaning this time the subArray total would
add up to 7, so maxSum would remain at the previous 9.

In essence, I think the trick is to establish the external maxSum, then
only update it when the new total exceeds it. This method is obviously
very inefficient though, and would probably break with larger arrays.

Still, at least I think I understand it now! */

// Kodane's Algorithm
const kodaneArr = (nums) => {
  let maxSum = Number.MIN_SAFE_INTEGER;
  let runningSum = 0;

  for (let i = 0; i < nums.length; i++) {
    runningSum = Math.max(runningSum + nums[i], nums[i]);
    maxSum = Math.max(maxSum, runningSum);
  }

  return maxSum;
};

const kodaneTest = (nums) => {
  let maxSum = Number.MIN_SAFE_INTEGER;
  let runningSum = 0;
  let newArr = arrFilter(nums);

  for (let i = 0; i < newArr.length; i++) {
    runningSum = Math.max(runningSum + newArr[i], newArr[i]);
    maxSum = Math.max(maxSum, runningSum);
  }

  return maxSum;
};

/* The only part that initially confused me above was the extra parameter
in the runningSum Math.max, but after looking at the examples on the site
I get it.

It's not an extra parameter at all, it's actually testing if the sum of
the existing runningSum and the new number are higher than the new number
alone. If the latter, then discard the existing runningSum and make it
the current number. 

For example:
Math.max(-2 + 1, 1)

This would return 1, because -2 + 1 = -1 so the 1 alone is the higher
number.

So basically this algorithm simultaneous parses the array for the
highest subArray total while simultaneously updating MaxSum.

I do wonder if you could make it slightly more efficient by first using a method
to chop off any negative numbers at the front and back of an array to save
on loops, but that might add to more complexity overall and I'm not really
sure how I could test which code was more efficient. */

const arr1 = [5, 12, 8, -130, 44];
const arr2 = [5, -12, 8, -130, -44];
const arr3 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const arr4 = []

const testArr = [1,2,3,4]

// console.log(testArr.slice(2,4))
// console.log(testArr.slice(2,4).reduce((x,y)=> x + y, 0));

// console.log(arr1.some(x => x > 0));
// console.log(!arr2.some(x => x > 0));

// console.log(maxSequence(arr1));
// console.log(maxSequence(arr2));
// console.log(maxSequence(arr3));
// console.log(maxSubArray(arr1));
// console.log(maxSubArray(arr2));
// console.log(maxSubArray(arr3));
// console.log(maxSubArray(arr4));

const arrFilter = (arr) => {
    let filteredArr = arr;

  for(negative of filteredArr){
    if(filteredArr[0] >= 0){
        break
    } else {
        filteredArr.splice(0, 1)
    }
  }

  for(negative of filteredArr){
    let i = filteredArr.length - 1
    if(filteredArr[i] >= 0){
        break
    } else {
        filteredArr.splice(i , 1)
    }
  }

  return filteredArr;
}

/* I am colossally dumb. I couldn't work out why splice
was removing seemingly random numbers from my array until
I realised I was passing in the number AT the index position,
not the index position itself.

Just another day of being me. */

let testArray = [-1,-2,3,-4]
let testArray2 = [-1, -2, 3, -4, 5, -6, -7]
// testArray.splice(0, 1);

// console.log(testArray)

// console.log(arrFilter(testArray));
// console.log(arrFilter(testArray2));

console.time(kodaneArr(testArray2));
console.timeEnd(kodaneArr(testArray2));

console.time(kodaneTest(testArray2));
console.timeEnd(kodaneTest(testArray2));

console.time(kodaneArr(testArray));
console.timeEnd(kodaneArr(testArray));

console.time(kodaneTest(testArray));
console.timeEnd(kodaneTest(testArray));

console.time(kodaneArr(arr3));
console.timeEnd(kodaneArr(arr3));

console.time(kodaneTest(arr3));
console.timeEnd(kodaneTest(arr3));

/* I found this neat method for testing the efficiency of
a function, but the results from my tests are strange.

In all but the first case, my version of the function is
marginally slower (by a fraction of miliseconds, but still).

In the first case though, the difference in times is
staggering, relatively speaking, so I'm willing to write it
off as an anomaly and concllude the best Kodane algorithm
is the more efficient method without my meddling.

It was still fun to come up with the filter function, though.
I'm not submitting this one to Codewars since I essentially
just stole the answer, but I will chuck it up on Github
because I learned a lot. */