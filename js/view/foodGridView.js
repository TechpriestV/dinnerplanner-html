//ExampleView Object constructor
var FoodGridView = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	var select = $('.corseSelect');
	var recipesHolder = $('.recipes');

	// Get dishes of selected type
	var populateRecipes = function(select,holder){
		holder.html('');
		console.log(select.val().toLowerCase());
		var dishes = model.getAllDishes(select.val().toLowerCase());
		for(i in dishes){
			var dish = dishes[i];
			holder.append(function(){
				var content = '<div class="recipe-item">'+dish.name+'</div>';
				return content;
			});
		}
	}
	populateRecipes(select,recipesHolder);

	select.change(function(event) {
		// Populate the view with the correct recipes
		populateRecipes(select,recipesHolder);
	});
}

