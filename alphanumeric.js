/* I thought this seemed extremely simple, and I still believe it is,
but as usual there's a couple bumps along the way.

The goal is to take in a string and assess whether or not it's purely
alphanumeric (i.e. no characters except for a-z, 0-9; ignoring case),
and I've essentially managed to do that. Kind of.

The problem, as far as I can tell, is that regex.test only checks if
the characters designated are there, it doesn't fail if there are characters
which shouldn't be there. 

So basically I have half the puzzle, I just need to figure out how to make
it fail, ideally without having to write a massive regex of invalid characters.
*/

function alphanumeric(string) {
	let regex = /^[a-z0-9]*$/ig
    return string.length === 0 ? false : regex.test(string);
}

function alphanumericRemastered(string) {
	let regex = /^[a-z0-9]+$/ig
    return regex.test(string);
}

let emptyString = "";
let whiteSpace = '        ';
let testPass = 'Pa55word'
let testFail = 'P@ssw0rd!'
let randPass = 'kK2fyfCFH5';
let randFail = "4S_9E!UF@Ag$$Ry";

console.log("Pa55word: " + alphanumeric(testPass));
console.log("P@ssw0rd!: " + alphanumeric(testFail));
console.log("kK2fyfCFH5: " + alphanumeric(randPass));
console.log("4S_9E!UF@Ag$$Ry: " + alphanumeric(randFail));
console.log('Whitespace: ' + alphanumeric(whiteSpace));
console.log('Empty String: ' + alphanumeric(emptyString));

console.log(emptyString.length);

/* In a strange turn of events, I can't get my code to pass submission
on Codewars, because it keeps saying that string="" returns true, but
when I test it here it returns false like it should.

I've left a comment raising the issue but the mods on Codewars are even
snootier than on Reddit, if you can believe it, so I expect a thoroughly
passive-aggressive response calling me a moron, if anything at all.

For now, though, I consider this kata completed.

UPDATE: The response wasn't actually as prickish as I expected, and I
managed to get around it in the end, then found this solution: */

let alphanumericBest = (s) => /^[a-z\d]+$/i.test(s);

/* I have no idea why this code passed but mine didn't without putting
the additional length check in, the only difference I can see is a +
instead of the * I used.

Also still not sure why VSC recognises an empty string as false but
nowhere else does, but I guess it never hurts to strengthen your
code so you definitely know it's working for the right reasons.

I think I just figured out why it's not working and if I'm right
Codewars can go fuck itself. I just noticed in my accepted solution I
do the same conditional check for string length twice, but the working
code uses an if statement while the failing code uses a ternary operator.

I think whatever Codewars is using can't understand ternary operators and
that's breaking it. It's the only thing that makes sense.

The plot thickens: I decided to do the kata again to test my theory, and
now suddenly it accepts my code as I had it written originally, with
just the ternary operator. I got rid of that entirely and swapped the * for a +
and that also works so clearly that was the problem, but I'm going full
tinfoil here and saying the mod went in and changed the tests because he knew
something was wrong but didn't want to admit I was right. */