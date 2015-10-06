Template['cookSmall'].__helpers = Template['cocinando'].__helpers;

Template.cookSmall.rendered = function () {
	setTimeout(function(){
		$('#recipesSlide').fadeIn(300).slick({
			arrows: false
		});
	}, 500);
};

Template.cookSmall.events({
	'click div.topContent': function () {
		$('html, body').animate({
			scrollTop: $("div.recipe").offset().top
		}, 1000);
	}
});
