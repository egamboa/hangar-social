Template.cookSmall.events({
	'click div.topContent': function () {
	    $('html, body').animate({
	      scrollTop: $("div.recipe").offset().top
	    }, 1000)
	}
});