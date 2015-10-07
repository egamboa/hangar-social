Template.recipe.rendered = function () {
	$('.recipes .recipe').height($('.recipe').first().width());
};
 Template.recipe.events({
 	'click .seeRecipe': function () {
 		Session.set('currentRecipe', {});
 		var self = this;
 		Meteor.call("getCurrentRecipe", self, function (error, result) { 
 			result = $.extend(result, self);
			Session.set('currentRecipe', result);
			$('#currentRecipe').addClass('opened');
	    });
 	}
 });