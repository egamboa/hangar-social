var recipes =[
{
	'id': 1,
	'class': 'type1',
	'thumbnail': 'images/tradiciones/icons/gallo-pinto.svg',
	'name': 'Gallo Pinto',
	'subtitle': '(ga-joe peen-toh)',
	'type': 'Main Dish',
	'color': '68bc68',
	'extra': {
		'position': false,
		'color': 'tenedor'
	}
},
{
	'id': 2,
	'class': 'type2',
	'thumbnail': 'images/tradiciones/icons/chifrijo.svg',
	'name': 'Chrifrijo',
	'subtitle': '(chee-free-ho)',
	'type': 'Main Dish',
	'color': '53a751'
},
{
	'id': 3,
	'class': 'type3',
	'thumbnail': 'images/tradiciones/icons/sopa-negra.svg',
	'name': 'Sopa Negra',
	'subtitle': '(sou-pah neh-grah)',
	'type': 'Main Dish',
	'color': '8dd3cb'
},
{
	'id': 4,
	'class': 'type4',
	'thumbnail': 'images/tradiciones/icons/tortillas.svg',
	'name': 'Tortillas',
	'subtitle': '(tor-tee-yas)',
	'type': 'Side Dish',
	'color': 'ede4ca',
	'extra': {
		'position': true,
		'color': 'cuchara'
	}
},
{
	'id': 5,
	'class': 'type5',
	'thumbnail': 'images/tradiciones/icons/mango.svg',
	'name': 'Mango ceviche',
	'subtitle': '(man-go seh-vee-cheh)',
	'type': 'Side Dish',
	'color': 'f2c000'
},
{
	'id': 6,
	'class': 'type6',
	'thumbnail': 'images/tradiciones/icons/picadillo.svg',
	'name': 'Plantain picadillo',
	'subtitle': '(pee-cah-dee-joe)',
	'type': 'Side Dish',
	'color': 'fdf6dc'
},
{
	'id': 7,
	'class': 'type5',
	'thumbnail': 'images/tradiciones/icons/agua-dulce.svg',
	'name': 'Agua Dulce',
	'subtitle': '(ah-goo-ah dool-seh)',
	'type': 'Beverage',
	'color': 'f2c000'
},
{
	'id': 8,
	'class': 'type3',
	'thumbnail': 'images/tradiciones/icons/horchata.svg',
	'name': 'Horchata',
	'subtitle': '(or-chat-ah)',
	'type': 'Beverage',
	'color': '8dd3cb',
	'extra': {
		'position': false,
		'color': 'salsa'
	}
},
{
	'id': 9,
	'class': 'type3',
	'thumbnail': 'images/tradiciones/icons/agua-de-sapo.svg',
	'name': 'Agua de sapo',
	'subtitle': '(ah-goo-ah de sa-poh)',
	'type': 'Beverage',
	'color': '8dd3cb'
},
{
	'id': 10,
	'class': 'type4',
	'thumbnail': 'images/tradiciones/icons/platanos-dulces.svg',
	'name': 'Plátano dulce',
	'subtitle': '(plah-tah-no dool-seh)',
	'type': 'Dessert',
	'color': 'ede4ca',
	'extra': {
		'position': false,
		'color': 'confites'
	}
},
{
	'id': 11,
	'class': 'type1',
	'thumbnail': 'images/tradiciones/icons/cocadas.svg',
	'name': 'Cocadas',
	'subtitle': '(coke-ah-das)',
	'type': 'Dessert',
	'color': '68bc68'
},
{
	'id': 12,
	'class': 'type2',
	'thumbnail': 'images/tradiciones/icons/pan-elote.svg',
	'name': 'Pan de elote',
	'subtitle': '(pan de el-oh-teh)',
	'type': 'Dessert',
	'color': '53a751'
}
];

var textRecipes = [
	{
		'id': 1,
		'description': 'Commonly known as Pinto, gallo pinto is Costa Rica’s signature dish. This surprisingly delicious combo of rice and beans is eaten for lunch, breakfast or dinner in households all over the country.',
		'ingredients': [	
			{'name': '3 cups cooked rice'},
			{'name': '2 cups cooked beans'},
			{'name': 'Half a celery stalk, minced'},
			{'name': 'Half an onion, minced'},
			{'name': 'Half a red bell pepper, minced'},
			{'name': '1 TBSP Worcestershire sauce'},
			{'name': '1 TSP ground cumin'},
			{'name': '1 TBP cooking oil'},
			{'name': 'Salt & ground pepper'},
			{'name': '1/4 cup fresh coriander'}
		],
		'preparation': 'In a large skillet, melt the butter at medium heat and add in the garlic, onion, sweet pepper and celery. Stir-fry for 3 minutes, and then add in the black beans and their broth. Before incorporating the rice, season the beans with Worcestershire sauce and cook for 5 minutes. Mix the rice slowly and cook until the liquid has evaporated. Add the cilantro, salt and pepper to taste and serve.',
		'difficulty': 'easy',
		'duration': '20 minutes',
		'serves': 4
	}
]


Meteor.methods({
	getAllRecipes: function(){
		return recipes;
	},
	getCurrentRecipe: function(theRecipe) {
		return _.first(_.filter(textRecipes, function(recipe){ return recipe.id == theRecipe.id; }));
	}
});