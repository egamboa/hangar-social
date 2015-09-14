Template.cocinando.rendered = function () {
	$(".fancybox")
    .attr('rel', 'gallery')
    .fancybox({
        padding : 50, 
        tpl: {
	    	closeBtn: '<a title="Close" class="fancybox-item fancybox-close fancyClose" href="javascript:;"></a>'
		}
    });

	if ( window.matchMedia("(min-width: 970px)").matches ) {
		$('#fullpage').fullpage();
	}
};

Template.cocinando.helpers({
	recepies_p1: function () {
		return [
			{
				'thumbnail': 'images/tradiciones/icons/gallo-pinto.svg',
				'recepie_img': 'http://farm8.staticflickr.com/7496/15959236842_6dbcb5b4c8_b.jpg',
				'name': 'Gallo Pinto',
				'subtitle': '(ga-joe peen-toh)',
				'type': 'Main Dish'
			},
			{
				'thumbnail': 'images/tradiciones/icons/sopa-negra.svg',
				'recepie_img': 'http://farm8.staticflickr.com/7496/15959236842_6dbcb5b4c8_b.jpg',
				'name': 'Sopa Negra',
				'subtitle': '(sou-pah neh-grah)',
				'type': 'Main Dish'
			},
			{
				'thumbnail': 'images/tradiciones/icons/chifrijo.svg',
				'recepie_img': 'http://farm8.staticflickr.com/7496/15959236842_6dbcb5b4c8_b.jpg',
				'name': 'Chrifrijo',
				'subtitle': '(chee-free-ho)',
				'type': 'Main Dish'
			},
			{
				'thumbnail': 'images/tradiciones/icons/tortillas.svg',
				'recepie_img': 'http://farm8.staticflickr.com/7496/15959236842_6dbcb5b4c8_b.jpg',
				'name': 'Tortillas',
				'subtitle': '(tor-tee-yas)',
				'type': 'Side Dish'
			},
			{
				'thumbnail': 'images/tradiciones/icons/platanitos-dulces.svg',
				'recepie_img': 'http://farm8.staticflickr.com/7496/15959236842_6dbcb5b4c8_b.jpg',
				'name': 'Plantain picadillo',
				'subtitle': '(pee-cah-dee-joe)',
				'type': 'Side Dish'
			},			
			{
				'thumbnail': 'images/tradiciones/icons/mango.svg',
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
				'thumbnail': 'images/tradiciones/icons/horchata.svg',
				'recepie_img': 'http://farm8.staticflickr.com/7496/15959236842_6dbcb5b4c8_b.jpg',
				'name': 'Horchata',
				'subtitle': '(or-chat-ah)',
				'type': 'Beverage'
			},
			{
				'thumbnail': 'images/tradiciones/icons/agua-dulce.svg',
				'recepie_img': 'http://farm8.staticflickr.com/7496/15959236842_6dbcb5b4c8_b.jpg',
				'name': 'Agua Dulce',
				'subtitle': '(ah-goo-ah dool-seh)',
				'type': 'Beverage'
			},
			{
				'thumbnail': 'images/tradiciones/icons/agua-de-sapo.svg',
				'recepie_img': 'http://farm8.staticflickr.com/7496/15959236842_6dbcb5b4c8_b.jpg',
				'name': 'Agua de sapo',
				'subtitle': '(ah-goo-ah de sa-poh)',
				'type': 'Beverage'
			},
			{
				'thumbnail': 'images/tradiciones/icons/platanitos-dulces.svg',
				'recepie_img': 'http://farm8.staticflickr.com/7496/15959236842_6dbcb5b4c8_b.jpg',
				'name': 'Plátano dulce',
				'subtitle': '(plah-tah-no dool-seh)',
				'type': 'Dessert'
			},
			{
				'thumbnail': 'images/tradiciones/icons/cocadas.svg',
				'recepie_img': 'http://farm8.staticflickr.com/7496/15959236842_6dbcb5b4c8_b.jpg',
				'name': 'Cocadas',
				'subtitle': '(coke-ah-das)',
				'type': 'Dessert'
			},
			{
				'thumbnail': 'images/tradiciones/icons/pan-elote.svg',
				'recepie_img': 'http://farm8.staticflickr.com/7496/15959236842_6dbcb5b4c8_b.jpg',
				'name': 'Pan de elote',
				'subtitle': '(pan de el-oh-teh)',
				'type': 'Dessert'
			}
		]
	}

});