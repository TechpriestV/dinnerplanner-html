$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var sideBarView = new SideBarView($(".page"),model);
	
	if($('.view-1').length){
		var foodGridView = new FoodGridView($("#js-recipes"),model);
	}
	if($('.view-2').length){
		var singeDishView = new SingleDishView($("#js-recipes"),model);
	}
});