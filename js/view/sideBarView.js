//ExampleView Object constructor
var SideBarView = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
  	this.header = $('.header');
  	this.content = '\
		<div class="sidebar">\
			<div class="sidebar-top">\
				<h2>My dinner</h2>\
				People: <span class="guests">1</span>\
			</div>\
			<div class="sidebar-headline clearfix">\
				<div class="left">Dish Name</div>\
				<div class="right">Cost</div>\
			</div>\
			<div class="sidebar-bottom clearfix">\
				<div class="bb">\
					<div class="left">Pending</div>\
					<div class="right">0.00</div>\
				</div>\
			</div>\
			<div class="sidebar-bottomest">\
				<div class="right">\
					SEK: 0.00\
				</div>\
				<br><br>\
				<a class="btn stretched disabled" href="#">Confirm Dinner </a> \
			</div>\
		</div>';

  	$(this.content).insertAfter(this.header);

}

