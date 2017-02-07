//ExampleView Object constructor
var SingleDishView = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.holder = $('#js-recipes');
	this.heading = container.find('.recipe-heading');
	this.imageHolder = container.find('.recipe-image');
	this.textHolder = container.find('.recipe-text');
	this.ingredientsHeading = container.find('.recipe-ingredients_heading');

	// Hårdkoda ett recept nu...
	var recipeId = 1;

	this.dish = model.getDish(recipeId);
	console.log(this.dish);

	this.heading.append(this.dish.name);
	this.imageHolder.append('<img src="images/'+this.dish.image+'"</div>');
	this.textHolder.append(this.dish.description);

	// Ingredients
	this.ingredientsHeading.html('Ingredients for '+model.getNumberOfGuests()+' people')
	
	this.allIngredients = model.getAllIngredientsDish(recipeId);
	console.log(this.allIngredients);


}

