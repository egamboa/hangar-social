Template['cookLarge'].__helpers = Template['cocinando'].__helpers;

$('.arrow').on('click', function(){
	
})

Template.cookLarge.events({
	'click div.arrow': function () {
		$('html, body').animate({
			scrollTop: $("div.allRecipes").offset().top
		}, 500);
	}
});