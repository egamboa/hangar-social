Template.cocinando.rendered = function () {
	$('.fancybox').fancybox();

	if ( window.matchMedia("(min-width: 970px)").matches ) {
		$('#fullpage').fullpage();
	}
};

Template.cocinando.helpers({
	recepies_p1: function () {
		return [
			{
				'thumbnail': 'images/cocinando/dish.png',
				'recepie_img': 'http://farm8.staticflickr.com/7496/15959236842_6dbcb5b4c8_b.jpg',
				'name': 'Gallo Pinto',
				'subtitle': '(ga-joe peen-toh)',
				'type': 'Main Dish'
			},
			{
				'thumbnail': 'images/cocinando/dish.png',
				'recepie_img': 'http://farm8.staticflickr.com/7496/15959236842_6dbcb5b4c8_b.jpg',
				'name': 'Sopa Negra',
				'subtitle': '(sou-pah neh-grah)',
				'type': 'Main Dish'
			},
			{
				'thumbnail': 'images/cocinando/dish.png',
				'recepie_img': 'http://farm8.staticflickr.com/7496/15959236842_6dbcb5b4c8_b.jpg',
				'name': 'Chrifrijo',
				'subtitle': '(chee-free-ho)',
				'type': 'Main Dish'
			},
			{
				'thumbnail': 'images/cocinando/dish.png',
				'recepie_img': 'http://farm8.staticflickr.com/7496/15959236842_6dbcb5b4c8_b.jpg',
				'name': 'Tortillas',
				'subtitle': '(tor-tee-yas)',
				'type': 'Side Dish'
			},
			{
				'thumbnail': 'images/cocinando/dish.png',
				'recepie_img': 'http://farm8.staticflickr.com/7496/15959236842_6dbcb5b4c8_b.jpg',
				'name': 'Plantain picadillo',
				'subtitle': '(pee-cah-dee-joe)',
				'type': 'Side Dish'
			},			
			{
				'thumbnail': 'images/cocinando/dish.png',
				'recepie_img': 'http://farm8.staticflickr.com/7496/15959236842_6dbcb5b4c8_b.jpg',
				'name': 'Mango ceviche',
				'subtitle': '(man-go seh-vee-cheh)',
				'type': 'Side Dish'
			},
		]
	}, 

	recepies_p2: function () {
		return [
			{
				'thumbnail': 'images/cocinando/dish.png',
				'recepie_img': 'http://farm8.staticflickr.com/7496/15959236842_6dbcb5b4c8_b.jpg',
				'name': 'Horchata',
				'subtitle': '(or-chat-ah)',
				'type': 'Beverage'
			},
			{
				'thumbnail': 'images/cocinando.dish.png',
				'recepie_img': 'http://farm8.staticflickr.com/7496/15959236842_6dbcb5b4c8_b.jpg',
				'name': 'Agua Dulce',
				'subtitle': '(ah-goo-ah dool-seh)',
				'type': 'Beverage'
			},
			{
				'thumbnail': 'images/cocinando/dish.png',
				'recepie_img': 'http://farm8.staticflickr.com/7496/15959236842_6dbcb5b4c8_b.jpg',
				'name': 'Agua de sapo',
				'subtitle': '(ah-goo-ah de sa-poh)',
				'type': 'Beverage'
			},
			{
				'thumbnail': 'images/cocinando/dish.png',
				'recepie_img': 'http://farm8.staticflickr.com/7496/15959236842_6dbcb5b4c8_b.jpg',
				'name': 'Plátano dulce',
				'subtitle': '(plah-tah-no dool-seh)',
				'type': 'Dessert'
			},
			{
				'thumbnail': 'images/cocinando/dish.png',
				'recepie_img': 'http://farm8.staticflickr.com/7496/15959236842_6dbcb5b4c8_b.jpg',
				'name': 'Cocadas',
				'subtitle': '(coke-ah-das)',
				'type': 'Dessert'
			},
			{
				'thumbnail': 'images/cocinando/dish.png',
				'recepie_img': 'http://farm8.staticflickr.com/7496/15959236842_6dbcb5b4c8_b.jpg',
				'name': 'Pan de elote',
				'subtitle': '(pan de el-oh-teh)',
				'type': 'Dessert'
			}
		]
	}

});