var recipes =[
{
	'thumbnail': 'images/tradiciones/icons/gallo-pinto.svg',
	'name': 'Gallo Pinto',
	'subtitle': '(ga-joe peen-toh)',
	'type': 'Main Dish',
	'color': '68bc68',
	'extra': {
		'position': false,
		'image': '/',
		'color': 'tenedor'
	}
},
{
	'thumbnail': 'images/tradiciones/icons/chifrijo.svg',
	'name': 'Chrifrijo',
	'subtitle': '(chee-free-ho)',
	'type': 'Main Dish',
	'color': '53a751'
},
{
	'thumbnail': 'images/tradiciones/icons/sopa-negra.svg',
	'name': 'Sopa Negra',
	'subtitle': '(sou-pah neh-grah)',
	'type': 'Main Dish',
	'color': '8dd3cb'
},
{
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
	'thumbnail': 'images/tradiciones/icons/mango.svg',
	'name': 'Mango ceviche',
	'subtitle': '(man-go seh-vee-cheh)',
	'type': 'Side Dish',
	'color': 'f2c000'
},
{
	'thumbnail': 'images/tradiciones/icons/picadillo.svg',
	'name': 'Plantain picadillo',
	'subtitle': '(pee-cah-dee-joe)',
	'type': 'Side Dish',
	'color': 'fdf6dc'
},
{
	'thumbnail': 'images/tradiciones/icons/agua-dulce.svg',
	'name': 'Agua Dulce',
	'subtitle': '(ah-goo-ah dool-seh)',
	'type': 'Beverage',
	'color': 'f2c000'
},
{
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
	'thumbnail': 'images/tradiciones/icons/agua-de-sapo.svg',
	'name': 'Agua de sapo',
	'subtitle': '(ah-goo-ah de sa-poh)',
	'type': 'Beverage',
	'color': '8dd3cb'
},
{
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
	'thumbnail': 'images/tradiciones/icons/cocadas.svg',
	'name': 'Cocadas',
	'subtitle': '(coke-ah-das)',
	'type': 'Dessert',
	'color': '68bc68'
},
{
	'thumbnail': 'images/tradiciones/icons/pan-elote.svg',
	'name': 'Pan de elote',
	'subtitle': '(pan de el-oh-teh)',
	'type': 'Dessert',
	'color': '53a751'
}
];

Meteor.methods({
	getAllRecipes: function(){
		return recipes;
	}
});