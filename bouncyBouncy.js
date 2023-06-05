function bouncingBall(h, bounce, window) {
	if (bounce >= 1 || window >= h) {
		return -1;
	} else {
		let bounceHeight = h * bounce;
		let viewCount = 1;

		while (bounceHeight > window) {
			viewCount = viewCount + 2;
			bounceHeight = bounceHeight * bounce;
		}

		return viewCount;
	}
}

// This is pure pottery, basically the same premise as what I had but distilled to the bare essentials.
// Also some handy shorthand with += and *= that I always forget
function bestSolution(h, bounce, window) {
	var rebounds = -1;
	if (bounce > 0 && bounce < 1)
		while (h > window) (rebounds += 2), (h *= bounce);
	return rebounds;
}

console.log(bouncingBall(3.0, 0.66, 1.5)); // Should return 3
console.log(bouncingBall(30.0, 0.66, 1.5)); // Should return 15
