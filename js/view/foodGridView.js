//ExampleView Object constructor
var FoodGridView = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	var select = $('.courseSelect');
	var recipesHolder = $('.recipes');
	var search = $('.search');

	// Get dishes of selected type
	var populateRecipesSelect = function(select,holder){
		// Clear the holder first, before we add the correct recipes
		holder.html('');
		var dishes = model.getAllDishes(select.val().toLowerCase());
		for(i in dishes){
			var dish = dishes[i];
			holder.append(function(){
				var content = '<a href="view2.html"><div class="recipe-item">';
				content += '<div class="recipe-item_image"><img src="images/'+dish.image+'"</div>';
				content += '<div class="recipe-item_heading">'+dish.name+'</div>';
				content += '</div>';
				content += '</a>';
				return content;
			});
		}
	}
	// This should be in the controller
	// change back to using .this in order for the controller to use acess from outside
	populateRecipesSelect(select,recipesHolder);
	select.change(function(event) {
		// Populate the view with the correct recipes
		populateRecipesSelect(select,recipesHolder);
	});

	var populateRecipesSearch = function(search,holder){
	}
}

