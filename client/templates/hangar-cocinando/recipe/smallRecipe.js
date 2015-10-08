Template.smallRecipe.rendered = function (){
	if($('#recipesSlide .item').size() == Session.get('currentRecipes').length){
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
	}
}
Template.smallRecipe.helpers({
	isBadColor: function () {
		return this.class == 'type4';
	}
});
