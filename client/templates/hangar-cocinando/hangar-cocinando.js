Template.cocinando.rendered = function () {
	Meteor.call("getAllRecipes", function (error, result) { 
    	Session.set('currentRecipes', result);
    });
};

Meteor.startup(function () {
	Session.set("resize", null); 
	Session.set("wSize", $(window).width());
	window.addEventListener('resize', function(){
		Session.set("resize", new Date());
		Session.set("wSize", $(window).width());
	});
});

Template.cocinando.helpers({
	isMobile: function () {
		if (Session.get("wSize") < 600) {
			return true;
		}
		return false;
	},

	resize: function() {
		if($(window).width() > 600){
			$('.recipes .recipe').height($('.recipe').first().width());
		}else{
			$('.recipes .recipe').height('auto');
		}
		
		return Session.get('resize');
	},

	allRecipes: function(recipes) {
		return Session.get('currentRecipes');
	},
	beverages: function (recipes) {
		return _.filter(Session.get('currentRecipes'), function(recipe){ return recipe.type == "Beverage"; });
	},
	mainDishes: function (recipes) {
		return _.filter(Session.get('currentRecipes'), function(recipe){ return recipe.type == "Main Dish"; });
	},
	desserts: function (recipes) {
		return _.filter(Session.get('currentRecipes'), function(recipe){ return recipe.type == "Dessert"; });	
	},
	sideDishes: function (recipes) {
		return _.filter(Session.get('currentRecipes'), function(recipe){ return recipe.type == "Side Dish"; });
	}
});