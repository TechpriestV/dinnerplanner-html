//ExampleView Object constructor
var SingleDishView = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	var holder = $('#js-recipes');

	// Hårdkoda ett recept nu...
	var recipeId = 1;

	this.dish = model.getDish(recipeId);
	console.log(this.dish);
}

