Template.recipe.rendered = function () {
	$('.recipes .recipe').height($('.recipe').first().width());
};
Template.recipe.events({
	'click .seeRecipe': function () {
		Session.set('currentRecipe', {});
		var self = this;
		Meteor.call("getCurrentRecipe", self.id, function (error, result) { 
			Session.set('currentRecipe', result);
			$('#currentRecipe').addClass('opened');
			$('body').addClass('noscroll');
    	});
	}
});