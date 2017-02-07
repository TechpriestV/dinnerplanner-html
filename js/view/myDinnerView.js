// Gustav Bergman & Viktor Ceder 2017
var MyDinnerView = function (container, model) {
    // Get all the relevant elements of the view (ones that show data
    // and/or ones that responed to interaction)
	// var select = $('.courseSelect'); //SKA BYTAS
	var dishesHolder = $('.dinnerOverview'); 
    

  //Hårdkodad uppsättning dishes
    var guests = model.getNumberOfGuests();
    var menu = model.getFullMenu();
    console.log(menu)
    var populateDishes = function (holder) {
        holder.html('');
        for (dish in menu) {
            console.log("HEJ")
            var dish = menu[dish];
            console.log(dish);
            
            holder.append(function() {
                var content = '<div class="recipe-item">';
                content += '<div class="recipe-item_image"><img src="images/'+dish.image+'"</div>';
                content += '<div class="recipe-item_heading">'+dish.name+'</div>';
                content += '<div class="">'+model.detDishPrice(dish.id)*guests+ '  SEK </div>';
                content += '</div>';
                return content;
            });
        }
        holder.append(function(){
            var content ='<div>';
            content += '<div> Total: <br></div>'
            content += '<div> ' + model.getTotalMenuPrice() + '  SEK</div>';
            content += '</div>';
            return content
        });
    }

    // This should be in the controller
    // change back to using .this in order for the controller to use acess from outside
    populateDishes(dishesHolder);


}
