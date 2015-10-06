Template['cookSmall'].__helpers = Template['cocinando'].__helpers;

Template.cookSmall.rendered = function () {
	$('#recipesSlide').slick({
		mobileFirst: true,
		arrows: false
	});
};

Template.cookSmall.events({
	'click div.topContent': function () {
		$('html, body').animate({
			scrollTop: $("div.recipe").offset().top
		}, 1000);
	}
});
