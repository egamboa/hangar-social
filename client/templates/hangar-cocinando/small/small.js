Template['cookSmall'].__helpers = Template['cocinando'].__helpers;

Template.cookSmall.rendered = function () {
	setTimeout(function(){
		$('#recipesSlide').fadeIn(300).slick({
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			centerMode: true,
			variableWidth: true
		});

		$('#cookSmall').on('click', '.smallSeeRecipe', function(event){
			Meteor.call("getCurrentRecipe", $(event.target).attr('data-id'), function (error, result) { 
				Session.set('currentRecipe', result);
				$('body').addClass('noscroll');
				$('#currentRecipe').addClass('opened');
	    	});
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
