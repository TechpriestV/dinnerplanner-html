//ExampleView Object constructor
var ExampleView = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest")
	this.numberOfGuests.html(model.getNumberOfGuests());

	this.plusButton.click(function(event) {
		model.setNumberOfGuests('up');
		$(numberOfGuests).html(model.getNumberOfGuests());
	});
	this.minusButton.click(function(event) {
		model.setNumberOfGuests('down');
		$(numberOfGuests).html(model.getNumberOfGuests());
	});
}
 
