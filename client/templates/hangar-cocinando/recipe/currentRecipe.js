Template.currentRecipe.helpers({
	recipe: function () {
		return Session.get('currentRecipe');
	}
});

Template.currentRecipe.events({
	'click .recipe-close': function () {
		$('#currentRecipe').removeClass('opened');
		$('body').removeClass('noscroll');
	}
});