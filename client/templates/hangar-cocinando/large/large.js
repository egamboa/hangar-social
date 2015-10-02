Template.cookLarge.rendered = function () {
	Meteor.call("getAllRecipes", function (error, result) { 
    	Session.set('currentRecipes', result);
    });
};
Template.cookLarge.helpers({
	beverages: function () {
		return _.filter(Session.get('currentRecipes'), function(recipe){ return recipe.type == "Beverage"; });
	},
	mainDishes: function () {
		return _.filter(Session.get('currentRecipes'), function(recipe){ return recipe.type == "Main Dish"; });
	},
	desserts: function () {
		return _.filter(Session.get('currentRecipes'), function(recipe){ return recipe.type == "Dessert"; });	
	},
	sideDishes: function () {
		return _.filter(Session.get('currentRecipes'), function(recipe){ return recipe.type == "Side Dish"; });
	}
});