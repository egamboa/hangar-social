Template.cocinando.rendered = function () {
	$(".fancybox")
    .fancybox({
        padding : 50,
        margin: 50,
        preload: 2,
        tpl: {
	    	closeBtn: '<a title="Close" class="fancybox-item fancybox-close fancyClose" href="javascript:;"></a>'
		},
		helpers:  {
	        title:  null
	    },
	    afterClose: function(){
	    	$.fn.fullpage.setAllowScrolling(true);
	    	$.fn.fullpage.setKeyboardScrolling(true);
	    }
    });

    $(".fancybox").click(function(event) {
    	event.preventDefault();
    	$.fn.fullpage.setAllowScrolling(false);
    	$.fn.fullpage.setKeyboardScrolling(false);
    });
};

Template.cocinando.helpers({
	recepies_p1: function () {
		return [
			{
				'thumbnail': 'images/tradiciones/icons/gallo-pinto.svg',
				'recepie_img': 'images/tradiciones/popups/pinto.png',
				'name': 'Gallo Pinto',
				'subtitle': '(ga-joe peen-toh)',
				'type': 'Main Dish'
			},
			{
				'thumbnail': 'images/tradiciones/icons/sopa-negra.svg',
				'recepie_img': 'images/tradiciones/popups/sopa-negra.png',
				'name': 'Sopa Negra',
				'subtitle': '(sou-pah neh-grah)',
				'type': 'Main Dish'
			},
			{
				'thumbnail': 'images/tradiciones/icons/chifrijo.svg',
				'recepie_img': 'images/tradiciones/popups/chifrijo.png',
				'name': 'Chrifrijo',
				'subtitle': '(chee-free-ho)',
				'type': 'Main Dish'
			},
			{
				'thumbnail': 'images/tradiciones/icons/tortillas.svg',
				'recepie_img': 'images/tradiciones/popups/tortillas.png',
				'name': 'Tortillas',
				'subtitle': '(tor-tee-yas)',
				'type': 'Side Dish'
			},
			{
				'thumbnail': 'images/tradiciones/icons/picadillo.svg',
				'recepie_img': 'images/tradiciones/popups/picadillo-platano.png',
				'name': 'Plantain picadillo',
				'subtitle': '(pee-cah-dee-joe)',
				'type': 'Side Dish'
			},			
			{
				'thumbnail': 'images/tradiciones/icons/mango.svg',
				'recepie_img': 'images/tradiciones/popups/mango-ceviche.png',
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
				'recepie_img': 'images/tradiciones/popups/horchata.png',
				'name': 'Horchata',
				'subtitle': '(or-chat-ah)',
				'type': 'Beverage'
			},
			{
				'thumbnail': 'images/tradiciones/icons/agua-dulce.svg',
				'recepie_img': 'images/tradiciones/popups/agua-dulce.png',
				'name': 'Agua Dulce',
				'subtitle': '(ah-goo-ah dool-seh)',
				'type': 'Beverage'
			},
			{
				'thumbnail': 'images/tradiciones/icons/agua-de-sapo.svg',
				'recepie_img': 'images/tradiciones/popups/agua-sapo.png',
				'name': 'Agua de sapo',
				'subtitle': '(ah-goo-ah de sa-poh)',
				'type': 'Beverage'
			},
			{
				'thumbnail': 'images/tradiciones/icons/platanitos-dulces.svg',
				'recepie_img': 'images/tradiciones/popups/platano-dulce.png',
				'name': 'Plátano dulce',
				'subtitle': '(plah-tah-no dool-seh)',
				'type': 'Dessert'
			},
			{
				'thumbnail': 'images/tradiciones/icons/cocadas.svg',
				'recepie_img': 'images/tradiciones/popups/cocadas.png',
				'name': 'Cocadas',
				'subtitle': '(coke-ah-das)',
				'type': 'Dessert'
			},
			{
				'thumbnail': 'images/tradiciones/icons/pan-elote.svg',
				'recepie_img': 'images/tradiciones/popups/pan-elote.png',
				'name': 'Pan de elote',
				'subtitle': '(pan de el-oh-teh)',
				'type': 'Dessert'
			}
		]
	}

});