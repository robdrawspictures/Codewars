/* The purpose of this kata was to create a very basic Pig Latin generator. Very basic because it
only works when there's a space between any punctuation and actual words. The biggest headache
in this exercise was that, for some reason, if you make the regex global then the test method
doesn't work on the word 'is', but it DOES work using the exact same regex outside of the function.

I'm sure there's a really simple explanation for why (I only tested outside the function on the word
itself, not as part of a sentence) but as it stands I at least got my function to pass to Codewars
satisfaction. */

function pigIt(str) {
    let abcReg = /[a-z]/i
	let strArr = str.split(' ')

    for(let i = 0; i < strArr.length; i++){
        if(abcReg.test(strArr[i])){
            strArr[i] = strArr[i].substring(1) + strArr[i].substring(0, 1) + 'ay';
        }
    }

    return strArr.join(' ');
}


/* I kind of understand what is going on with these, based on reading up a bit on Regex properties.
Turns out you can actualy use Regex to identify entire words, so I guess with that in mind you really
don't need the whole array and for loop process. */

function pigItBetter(str) {
	return str.replace(/\w+/g, (w) => {
		return w.slice(1) + w[0] + "ay";
	});
}

/* This is pure nonsense to me right now, but hopefully the more experience I get with Regex it'll make
more sense. */

function pigItBest(str) {
	return str.replace(/(\w)(\w*)(\s|$)/g, "$2$1ay$3");
}

// Tests
let tstStr = 'Hello world .'
let problemStr = 'Pig Latin is so cool'

let tstWrd = 'Test';

let tstSmol = 'so'
let tstIs = 'is'

let puncReg = /.,\/#!$%\^&\*;:{}=\-_`~()/g;

let abcReg = /[a-z]/ig;

console.log(abcReg.test(tstSmol));
console.log(abcReg.test(tstIs));

// console.log(tstWrd.substring(1) + tstWrd.substring(0, 1));
// console.log(tstSmol.substring(1) + tstSmol.substring(0, 1) + 'ay');
// console.log(tstIs.substring(1) + tstIs.substring(0, 1) + 'ay');


// console.log(pigIt(tstStr));
// console.log(pigIt(problemStr));

// console.log(!puncReg.test(tstStr));
// console.log(tstStr.includes('.'));
// console.log(!tstStr.includes('.'));
// console.log(!tstWrd.includes('.'));