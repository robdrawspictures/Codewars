/* I immediately regret attempting this. I'm supposed to take
a single string input (i.e. 'abc') then produce an array
containing every possible permutation of that grouping of
letters.

So, in the case of 'abc', you'd have:
['abc', 'bac', 'acb', 'cba', 'cab', 'bca']

At least I think that's all of them, off the top of my head.
The simplest way I can think to do this is using the shift()
method then pushing each permutation to the array, but I can
already tell this is going to have pitfalls.

Okay, right off the bat shift() isn't going to work because
it's for arrays. Excellent.
*/

let a = 'a';
let aa = 'aa';
let ab = 'ab';
let abc = 'abc';
let abcd = 'abcd';
let aacd = 'aacd';
let aadd = 'aadd';

function permutations(string) {
    let returnArr = []
    if(string.length <= 2){
        if(string.length === 2 && string[0] !== string[1]){
        return [`${string[0]}${string[1]}`, `${string[1]}${string[0]}`]
        }
        
        return [string]
    }

    for(let i = 0; i< string.length; i++){
        let currentChar = string[i]

        let otherChars = string.slice(0,i) + string.slice(i + 1, string.length);
        
        for(let permutation of permutations(otherChars)){
            returnArr.push(currentChar + permutation);
        }
    }

    return [...new Set(returnArr)];
}

/* This is mental. I don't think I've ever seen a function call itself.

I actually can't wrap my head around how this is working and not getting stuck
in an endless loop. 

I'm submitting this to Codewars because even though I needed a lot of help I
added a lot of my own stuff, too. I just wish I could understand how that recursion
is working... */

console.log(permutations(a));
console.log(permutations(aa));
console.log(permutations(ab));
console.log(permutations(abc));
console.log(permutations(abcd));
console.log(permutations(aacd));
console.log(permutations(aadd));

function permutationsBest(str) {
	return str.length <= 1
		? [str]
		: Array.from(
				new Set(
					str
						.split("")
						.map((char, i) =>
							permutations(
								str.substr(0, i) + str.substr(i + 1)
							).map((p) => char + p)
						)
						.reduce((r, x) => r.concat(x), [])
				)
		  );
}

/* Using Set seemed to be a popular part of the solutions so that's
good, but beyond that this is melting my brain. */