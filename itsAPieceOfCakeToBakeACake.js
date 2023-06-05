/* My logic for how to plan this out: You can only make as many cakes as your scarcest ingredient.
 So, if I make an array and populate it with ingredient/recipe item rounded down to the nearest one
 then use min(...array) to return the lowest number that should be the number of cakes I can make
 
 The tricky part is going to be figuring out the most efficient way to iterate over the recipe and
 ingredient items inside the objects. */

function cakes(recipe, available) {
	let need = Object.keys(recipe);
	let have = Object.keys(available);

	for (let i = 0; i < need.length; i++) {
		if (have.includes(need[i]) === false) {
			return 0;
		} else {
			let ingArr = [];

			for (let i = 0; i < need.length; i++) {
				if (have.includes(need[i]) === true) {
					ingArr.push(
						Math.floor(available[need[i]] / recipe[need[i]])
					);
				}
			}

			return Math.min(...ingArr);
		}
	}
}

console.log(
	cakes(
		{ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
		{ sugar: 500, flour: 2000, milk: 2000 }
	)
);

console.log(
	cakes(
		{ flour: 500, sugar: 200, eggs: 1 },
		{ flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
	)
);

console.log(
	cakes(
		{ flour: 500, sugar: 2000, eggs: 1 },
		{ flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
	)
);

// This is theoptimal solution from Codewars, but I'm not that keen on it. It's very impressive, but...I dunno.

const cakesUltra = (needs, has) =>
	Math.min(
		...Object.keys(needs).map((key) =>
			Math.floor(has[key] / needs[key] || 0)
		)
	);

// let testRecipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
// let testIngred = { sugar: 500, flour: 2000, milk: 2000 };
// let recipeKeys = Object.keys(testRecipe);
// // console.log(recipeKeys);
// let ingredKeys = Object.keys(testIngred);
// // console.log(ingredKeys);
// // let foundIngred = ingredKeys.includes(recipeKeys[0]);
// // console.log(foundIngred);

// let testWorkingRec = { flour: 500, sugar: 2000, eggs: 1 };
// let testWorkingIng = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
// let recWorkKeys = Object.keys(testWorkingRec);
// let ingWorkKeys = Object.keys(testWorkingIng);

// let ingArr = [];

// for (let i = 0; i < recWorkKeys.length; i++) {
// 	console.log(recWorkKeys[i]);
// 	console.log(ingWorkKeys.includes(recWorkKeys[i]));
// 	if (ingWorkKeys.includes(recWorkKeys[i]) === true) {
// 		console.log(testWorkingIng[recWorkKeys[i]]);
// 		ingArr.push(
// 			Math.floor(
// 				testWorkingIng[recWorkKeys[i]] / testWorkingRec[recWorkKeys[i]]
// 			)
// 		);
// 		console.log(ingArr);
// 		console.log(Math.min(...ingArr));
// 	}

// 	// return Math.min(...ingArr);
// }
