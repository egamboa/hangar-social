Template['cookSmall'].__helpers = Template['cocinando'].__helpers;

Template.cookSmall.rendered = function () {
	setTimeout(function(){
		$('#recipesSlide').fadeIn(400).slick({
			arrows: false
		});
	}, 300);
};

Template.cookSmall.events({
	'click div.topContent': function () {
		$('html, body').animate({
			scrollTop: $("div.recipe").offset().top
		}, 1000);
	}
});
