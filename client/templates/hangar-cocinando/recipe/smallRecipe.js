Template.smallRecipe.rendered = function (){
	if($('#recipesSlide .item').size() == Session.get('currentRecipes').length){
		$('#cookSmall .loader').fadeOut(300);
		$('#recipesSlide').fadeIn(300).slick({
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			centerMode: true,
			variableWidth: true
		});
		$('#cookSmall').on('click', '.smallSeeRecipe', function(event){
			Meteor.call("getCurrentRecipe", $(event.target).attr('data-id'), function (error, result) { 
				$('.recipe-holder').animate({
					scrollTop: 0
				}, 300);
				Session.set('currentRecipe', result);
				$('body').addClass('noscroll');
				$('#currentRecipe').addClass('opened');
	    	});
		});
	}
}
Template.smallRecipe.helpers({
	isBadColor: function () {
		return this.class == 'type4';
	}
});
