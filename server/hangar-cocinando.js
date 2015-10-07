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
		'countServes': 'Serves 4',
		'isVegan': true
	},
	{
		'id': 2,
		'description': 'This healthy and easy recipe is made from the leftover liquid from when you cook black beans.  After trying it, black bean soup will be all you will wish for. You can’t imagine how wonderful this tastes on a chilly day, snuggled in a blanket and accompanied by your favorite book.',
		'ingredients': [	
			{'name': '2 cups of cooked black beans'},
			{'name': '4 cups of black vean broth'},
			{'name': '½ an onion, minced'},
			{'name': '½ cup chopped cilantro'},
			{'name': '½ a red bell pepper, minced'},
			{'name': '3 garlic cloves, minced'},
			{'name': 'salt, pepper and ground cumin to taste'},
			{'name': '4 tortillas, cut into strips and toasted'},
			{'name': '4 tbsp of sour cream'},
			{'name': '¼ cup of unsalted butter'},
			{'name': '4 hard boiled eggs'}
		],
		'preparation': 'Melt the butter and stir-fry the vegetables in a pot at médium heat. Once the onion has cristalized, add in the remaining ingredients. Remove the pot from the heat once it begins to boil. Decorate with tortillas, sour cream, hard-boiled egg and chopped cilantro.',
		'difficulty': 'easy',
		'duration': '20 minutes', 
		'countServes': 'Serves 4',
		'isVegan': false
	},
	{
		'id': 3,
		'description': 'The ultimate Costa Rican bar food. Created in the nineties in San José, the chifrijo has quickly become the ideal dish to pair will a chilled Imperial while watching a soccer game or just talking to your friends at the local bar.',
		'ingredients': [
			{
				'title': 'Main Ingredients',
				'list': [
					{'name': 'Tortilla chips'},
					{'name': '3 cups of red beans, cooked and unseasoned'},
					{'name': '2 cups of rice, cooked'},
					{'name': 'Pork rinds'},
					{'name': 'Refried beans'},
					{'name': 'Pico de gallo'}
				]
			},
			{
				'title': 'Pork rinds',
				'list': [
					{'name': '250 grams pork rinds'},
					{'name': '1 tbsp paprika'},
					{'name': '1 tbsp cayene pepper'},
					{'name': '2 tbsp water'},
					{'name': 'salt to taste'},
					{'name': 'cooking oil'}
				]
			},
			{
				'title': 'Beans',
				'list': [
					{'name': '3 garlic cloves, minced'},
					{'name': '1 red bell pepper, diced'},
					{'name': '½ cup of diced celery'},
					{'name': 'salt & pepper to taste'},
					{'name': 'cooking oil'}
				]
			},
			{
				'title': 'Pico de gallo',
				'list': [
					{'name': '1 avocado, diced'},
					{'name': '2 medium tomatoes, diced'},
					{'name': '1 tblsp of tabasco'},
					{'name': '¼ cup of olive oil'},
					{'name': 'sal & pepper to taste'}
				]
			}
		],
		'preparation': 'For the pico de gallo, mix all of the ingredients in a bowl and set aside. \nTo prepare the pork rinds, marinate the meat in a separate bowl with salt, spices and oil.  Cut into small, 1-inch cubes and fry them in a skillet with enough oil until golden.  Before removing them from the heat, add some water and leave them for one or two minutes. Then place them on a paper towel to remove the excess oil. \nHeat the oil in a saucepan and add the garlic, red pepper and celery for the beans.  Once the vegetable mixture has crystalized, add the beans and cook the mixture until the broth has reduced. If desired, add some chop pork rinds and set aside. \nPlating the chifrijo is easy: In medium-sized bowls, add a layer of rice, a layer of refried beans, pork rinds and pico de gallo. Serve with tortilla chips.',
		'difficulty': 'easy',
		'duration': '45 minutes', 
		'countServes': 'Serves 4', 
		'isVegan': false
	},
	{
		'id': 4,
		'description': 'A vegan spin on the traditional ceviche dish is perfect for summer cooking. This dish, which is also reminiscent of street food favorite – mango with lime and salt – is bright, simple and fruity.  You can have it as a salad, serve it alongside tortilla chips as a snack or as a side dish for your favorite meat, poultry or fish.',
		'ingredients': [
			{'name': '1 large red onion, thinly sliced'},
			{'name': '2 large riped mangoes, diced'},
			{'name': 'juice of 4 limes'},
			{'name': '¼ tsp salt'},
			{'name': '1 jalapeño pepper , sedes and finely chopped'},
			{'name': 'leaves from 2 cilantro sprigs, finely chopped'}
		],
		'preparation': 'Place the sliced red onion in iced water for 10 minutes while you’re preparing the rest of the ingredients. On a separate bowl, add the diced mangoes, half of the lime juice and salt.  Drain the onion; add the pepper and cilantro leaves and taste for balance.  Mix everything gently and leave in the fridge for at least 15 minutes to chill and marinate. Serve.',
		'difficulty': 'easy',
		'duration': '20 minutes',
		'countServes': 'Serves 4', 
		'isVegan': true
	},
	{
		'id': 5,
		'description': 'Tortillas: the base of Latin American cuisine. For those unskilled cooks, they’re a true lifesaver. You can just fill them with virtually anything that’s lying around in your fridge or pantry. You’ll never have a boring meal if you have tortillas!',
		'ingredients': [
			{'name': '1 cup of corn flour'},
			{'name': '¾ cup of warm water'},
			{'name': '¼ tsp. salt'}
		],
		'preparation': 'Combine the corn flour with warm water until the dough comes together.  Make sure the dough is moist enough so that the tortillas don’t loose their flexibility. Add salt and separate the dough into 1-inch sized balls. \nPreheat a large skillet over medium-high heat.  Cover two cutting boards or plates with waxing paper and press each ball softly until flat. Place the tortilla on the skillet.  Don’t forget to turn it over and allow it to puff up. Repeat the process with the remaining dough.',
		'difficulty': 'easy',
		'duration': '30 minutes',
		'countServes': 'Serves 6',
		'isVegan': true
	},
	{
		'id': 6,
		'description': 'The picadillo is one of those dishes that remind you of home.  Picadillo is to Latin America what mashed potates with gravy, mac & cheese and apple pies are to the United States: they’re a kind reminder of what home tastes like when you’re away from it.',
		'ingredients': [
			{'name': '4 plantains, peeled and cut into 3 pieces'},
			{'name': '½ a pound of ground beef'},
			{'name': '2 cloves of garlic, minced'},
			{'name': '2 tbsp. of minced onion'},
			{'name': '2 tsp. salt'},
			{'name': '½ tsp. pepper'},
			{'name': '1 ½ tbsp. of chopped cilantro'},
			{'name': '½ cup of tomato, chopped'},
			{'name': '2 tsp. of Worcestershire sauce'},
			{'name': '1 dash of hot pepper sauce'}
		],
		'preparation': 'Simmer the plantain pieces in salted water over medium-high heat until tender. Drain and allow them to cool completely before chopping them in small pieces. Then, heat the cooking oil in a large skillet over medium heat. Stir in the onion and the garlic until crystallized. Add the beef, season with salt and pepper.  Once the meat has cooked, stir in the chopped plantain, cilantro and tomato, and season with Worcestershire sauce and hot pepper sauce.  Cook for approximately 10 minutes.',
		'difficulty': 'intermediate',
		'duration': '70 minutes',
		'countServes': 'Serves 8',
		'isVegan': false
	},
	{
		'id': 7,
		'description': 'Original from the northern part of Costa Rica, a tall glass of horchata is all you will need to quench your thirst and fight through the sometimes unbearable Costa Rican heat.  Hating the weather? Just… keep calm and drink a cold glass of horchata.',
		'ingredients': [
			{'name': '2 cups of rice'},
			{'name': '2 ½ cups of milk'},
			{'name': '3 tbsp. of cocoa powder'},
			{'name': '2 tbsp. of grounded cinnamon'},
			{'name': '1 tsp. of vanilla extract'},
			{'name': '1 cup of sugar'}
		],
		'preparation': 'Leave in the milk and the rice overnight in a pitcher in the refrigerator. Once the rice has softened, place the mixture in a blender and drain. Discard the rice. Incorporate the cocoa, cinnamon, vanilla and sugar.  Mix well.  Chill well before enjoying your drink.',
		'difficulty': 'easy',
		'duration': '15 minutes',
		'countServes': 'Serves 3',
		'isVegan': false
	},
	{
		'id': 8,
		'description': 'The signature dish of the province of Limón. This surprisingly refreshing and spicy drink is usually prepared with unrefined whole cane sugar, known in Costa Rica as tapa de dulce or panela.  We’ve modified the recipe with supermarket-friendly products.',
		'ingredients': [
			{'name': '4 cups of water'},
			{'name': '50 grams of ginger'},
			{'name': '3 leaves of lemon grass'},
			{'name': '½ cup of honey'},
			{'name': '½ cup of lemon juice'}
		],
		'preparation': 'Add water, ginger and lemon grass in a pot and boil until aromas are released. Strain the mixture and add honey. Once it’s cooled, incorporate the lemon juice and serve cold.',
		'difficulty': 'easy',
		'duration': '15 minutes',
		'countServes': 'Serves 4',
		'isVegan': true
	},
	{
		'id': 9,
		'description': 'The taste of agua dulce is pleasant and heartwarming, the perfect comforting beverage during a cold, rainy day.  Rumor has it; the perfect cure fore a cold is a steaming cup of agua dulce with a little rum in it.',
		'ingredients': [
			{'name': '2 tbsp of panela (whole cane sugar)'},
			{'name': '1 cup of boiling water'}
		],
		'preparation': 'Boil one cup of water and add panela until it dissolves.',
		'difficulty': 'easy',
		'duration': '5 minutes',
		'countServes': 'Serves 1',
		'isVegan': false
	},
	{
		'id': 10,
		'description': 'There are few dishes as perfect as plantains in syrup. You can have them as dessert or as a side dish in your casado. After trying these plantains, you’ll understand why ripe plantain is such a perfect ingredient for those cooks who aren’t afraid to try something new.',
		'ingredients': [
			{'name': '2 ripe plantains'},
			{'name': '½ cup of orange juice'},
			{'name': '4 cloves'},
			{'name': '2 cinnamon sticks'},
			{'name': '½ cup of sugar'},
			{'name': 'Butter'},
			{'name': '2 cups of water'},
			{'name': 'Optional: Shredded cheese'}
		],
		'preparation': 'Cut the plantain into half-inch slices and fry them in a skillet until golden.  On a separate pot, add the water, sugar, cloves and cinnamon.  Allow it to boil until the syrup thickens. Before adding the syrup to the plantains, add the orange juice and stir generously. Top with shredded mozzarella and serve warm.',
		'difficulty': 'intermediate',
		'duration': '25 minutes',
		'countServes': 'Serves 5',
		'isVegan': false
	},
	{
		'id': 11,
		'description': 'In Costa Rica, corn is used as a main ingredient in both sweet and savory dishes. A sweeter version of the corn dough may be used for tortillas, or for breads, such as the sweet cornbread. And there is nothing more perfect than a cup of freshly brewed coffee with milk and a piece of warm cornbread to lighten up your afternoon.',
		'ingredients': [
			{'name': '2 cups of sweet corn'},
			{'name': '½ cup of sugar'},
			{'name': '2 eggs'},
			{'name': '½ cup of flour'},
			{'name': '½ tsp of baking powder'},
			{'name': 'Vanilla extract to taste'}
		],
		'preparation': 'Preheat the oven to 500 F.  Combine all the ingredients, minus the flour, in a blender.  Pour the wet mixture in a bowl and use a whisk to gently incorporate the flour. Place the dough in greased baking dish and bake for 25 minutes or until golden. Use a toothpick to check if the cornbread in ready.',
		'difficulty': 'easy',
		'duration': '60 minutes',
		'countServes': 'Serves 10',
		'isVegan': false
	},
	{
		'id': 12,
		'description': 'A perfect dessert for those amateur bakers. Although the original recipe is made with coconut flesh, milk and sugar, but we are introducing you to a much lighter, easy-to-make dessert. Store this babies in a tin can, and you’ll be enjoying the gooey goodness of paradise for days.',
		'ingredients': [
			{'name': '2 2/3 cups of shredded unsweetened coconut'},
			{'name': '¾ cup of sweetened condensed milk'},
			{'name': '1 egg'},
			{'name': '1 tsp. almond extract'}
		],
		'preparation': 'Preheat the oven at 325 F. In a bowl, whisk in the condensed milk, egg and almond extract before incorporating the shredded coconut. Mix in well.  Pour one spoonful of the mixture for each cocada, making sure these are one inch apart. Bake until golden and cool on a wire rack.',
		'difficulty': 'easy',
		'duration': '20 minutes',
		'countServes': 'Serves 12',
		'isVegan': false
	}
]


Meteor.methods({
	getAllRecipes: function(){
		return recipes;
	}
});