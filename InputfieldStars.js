document.addEventListener('DOMContentLoaded', function () {
	document.querySelectorAll('.InputfieldStars .rater').forEach((el) => {
		let input = el.parentElement.previousElementSibling;
		let settings = JSON.parse(el.dataset.settings);
		let step = settings.allowHalf ? 0.5 : 1;

		// Initialise rater
		let myRater = raterJs({
			element: el,
			rating: parseFloat(input.value),
			max: settings.starsNumber,
			starSize: settings.starSize,
			step: step,
			color: settings.starColor,
			rateCallback: function rateCallback(rating, done) {
				this.setRating(rating);
				input.value = rating;
				done();
			},
		});

		// Clear button
		let clearButton = el.nextElementSibling;
		clearButton.addEventListener('click', function() {
			myRater.clear();
			input.value = '';
		});

	});
});
