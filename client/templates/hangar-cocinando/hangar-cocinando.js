Template.cocinando.rendered = function () {
	Meteor.call("getAllRecipes", function (error, result) { 
    	Session.set('currentRecipes', result);
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
					$('#currentRecipe').addClass('opened');
		    	});
			});
		}, 300);
    });
};

Session.set("resize", null); 
Session.set("wSize", $(window).width());

Meteor.startup(function () {
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
			$('.recipe .vertical img').height($('.recipe .vertical img').first().width()); 
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