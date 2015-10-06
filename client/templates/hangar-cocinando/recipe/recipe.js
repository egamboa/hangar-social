Template.recipe.rendered = function () {
	$('.recipes .recipe').height($('.recipe').first().width());
};
 Template.recipe.events({
 	'click .seeRecipe': function () {
 		console.log('listo');
 	}
 });