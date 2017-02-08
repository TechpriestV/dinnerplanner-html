$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	//var sideBarView = new SideBarView($(".page"),model);
	
	if($('.view-1').length){
		var sideBarView = new SideBarView($(".page"),model);
		var foodGridView = new FoodGridView($("#js-recipes"),model);
	}
	if($('.view-2').length){
		var sideBarView = new SideBarView($(".page"),model);
		var singeDishView = new SingleDishView($("#js-recipes"),model);
	}
	if ($('.view-3').length){
		model.addDishToMenu(1);
		model.addDishToMenu(100);
		model.addDishToMenu(202);
		var myDinnerView = new MyDinnerView($("#js-dinnerOverview"), model);
	}

	if ($('.view-4').length){
		model.addDishToMenu(1);
		model.addDishToMenu(100);
		model.addDishToMenu(202);
		var printView = new PrintView($("#js-dinnerPrint"), model);
	}
});