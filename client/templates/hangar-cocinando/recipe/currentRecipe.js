Template.currentRecipe.helpers({
	recipe: function () {
		return Session.get('currentRecipe');
	},
	isMobile: function () {
		if (Session.get("wSize") < 600) {
			return true;
		}
		return false;
	}
});

Template.currentRecipe.events({
	'click .recipe-close': function () {
		$('#currentRecipe').removeClass('opened');
		$('body').removeClass('noscroll');
	}
});