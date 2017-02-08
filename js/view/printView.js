// Gustav Bergman & Viktor Ceder 2017
var PrintView = function (container, model) {
    // Get all the relevant elements of the view (ones that show data
    // and/or ones that responed to interaction)
	var dishesHolder = $('.dinnerPrint'); 
    

  //Hårdkodad uppsättning dishes
    var guests = model.getNumberOfGuests();
    var menu = model.getFullMenu();
    var populateDishes = function (holder) {
        holder.html('');
        for (dish in menu) {
            var dish = menu[dish];
            console.log(dish);
            
            holder.append(function() {
                var content = '<div class="print-item">';
                content += '<div class="print-item_col col_1"><img src="images/'+dish.image+'"></div>';
                content += '<div class="print-item_col col_2"><h3>'+dish.name+'</h3>Lorem ipsum detta är en kort beskrivning</div>';
                content += '<div class="print-item_col col_3">'+dish.description+'</div>';
                content += '</div>';
                return content;
            });
        }
    }

    populateDishes(dishesHolder);


}
