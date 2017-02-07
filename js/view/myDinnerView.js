// Gustav Bergman & Viktor Ceder 2017
var MyDinnerView = function (container, model) {
    // Get all the relevant elements of the view (ones that show data
    // and/or ones that responed to interaction)
	// var select = $('.courseSelect'); //SKA BYTAS
	var dishesHolder = $('.dinnerOverview'); 


  //Hårdkodad uppsättning dishes
    this.guests = model.guests;
    var menu = [1,2,3]//model.menu;

    var populateDishes = function (holder) {
        holder.html('');
        for (id in menu) {
            console.log("HEJ")
            var dish = model.getDish(menu[id]);
            console.log(dish);
            holder.append(function() {
                var content = '<div class="recipe-item">';
                content += '<div class="recipe-item_image"><img src="images/'+dish.image+'"</div>';
                content += '<div class="recipe-item_heading">'+dish.name+'</div>';
                content += '</div>';
                return content;
            });
        }
    }
    // This should be in the controller
    // change back to using .this in order for the controller to use acess from outside
    populateDishes(dishesHolder);


}
