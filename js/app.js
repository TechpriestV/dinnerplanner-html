$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var sideBarView = new SideBarView($(".page"),model);
	var foodGridView = new FoodGridView($("#js-recipes"),model);
});