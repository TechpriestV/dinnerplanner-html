//ExampleView Object constructor
var SingleDishView = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.holder = $('#js-recipes');
	this.heading = container.find('.recipe-heading');
	this.imageHolder = container.find('.recipe-image');
	this.textHolder = container.find('.recipe-text');
	this.ingredientsHeading = container.find('.recipe-ingredients_heading');
	this.ingredientsContent = container.find('.recipe-ingredients_content');
	this.summaryHolder = container.find('.recipe-summary');
 
	this.numberOfGuests = model.getNumberOfGuests();

	// Hårdkoda ett recept nu...
	var recipeId = 1;

	this.dish = model.getDish(recipeId);
	// console.log(this.dish);

	this.heading.append(this.dish.name);
	this.imageHolder.append('<img src="images/'+this.dish.image+'"</div>');
	this.textHolder.append(this.dish.description);

	// Ingredients
	this.ingredientsHeading.html('Ingredients for '+this.numberOfGuests+' people')
	
	this.allIngredients = model.getAllIngredientsDish(recipeId);
	this.totalprice = 0;
	for(i in this.allIngredients){
		var ingredient = this.allIngredients[i];
		this.totalprice += ingredient.price * this.numberOfGuests;
		console.log(ingredient);
		var quantity = ingredient.quantity * this.numberOfGuests;
		var content = '\
			<tr>\
			<td>'+quantity+' '+ ingredient.unit+'</td>\
			<td>'+ingredient.name+'</td>\
			<td>SEK</td>\
			<td>'+ingredient.price * this.numberOfGuests+'</td>\
			</tr>';
		this.ingredientsContent.append(content);
	}
	this.summaryHolder.append('<div class="recipe-totalprice">'+this.totalprice+'</div>');
}

