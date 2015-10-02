Template.cocinando.rendered = function () {
	$(".fancybox")
    .fancybox({
        padding : 50,
        margin: 50,
        tpl: {
	    	closeBtn: '<a title="Close" class="fancybox-item fancybox-close fancyClose" href="javascript:;"></a>'
		},
		helpers:  {
	        title:  null
	    }
    });

    $(".fancybox").click(function(event) {
    	event.preventDefault();
    });

    $('.recipes .recipe').height($('.recipe').first().width());
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
		}else{
			return false;
		}
	},

	resize: function() {
		if($(window).width() > 419){
			$('.recipes .recipe').height($('.recipe').first().width());
		}else{
			$('.recipes .recipe').height('auto');
		}
		
		return Session.get('resize');
	},
	recipes_col1: function () {
		return [
			{
				'thumbnail': 'images/tradiciones/icons/gallo-pinto.svg',
				'recepie_img': 'images/tradiciones/popups/pinto.png',
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
				'recepie_img': 'images/tradiciones/popups/chifrijo.png',
				'name': 'Chrifrijo',
				'subtitle': '(chee-free-ho)',
				'type': 'Main Dish',
				'color': '53a751'
			},
			{
				'thumbnail': 'images/tradiciones/icons/sopa-negra.svg',
				'recepie_img': 'images/tradiciones/popups/sopa-negra.png',
				'name': 'Sopa Negra',
				'subtitle': '(sou-pah neh-grah)',
				'type': 'Main Dish',
				'color': '8dd3cb'
			}
		]
	},
	recipes_col2: function () {
		return [
			{
				'thumbnail': 'images/tradiciones/icons/tortillas.svg',
				'recepie_img': 'images/tradiciones/popups/tortillas.png',
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
				'recepie_img': 'images/tradiciones/popups/mango-ceviche.png',
				'name': 'Mango ceviche',
				'subtitle': '(man-go seh-vee-cheh)',
				'type': 'Side Dish',
				'color': 'f2c000'
			},
			{
				'thumbnail': 'images/tradiciones/icons/picadillo.svg',
				'recepie_img': 'images/tradiciones/popups/picadillo-platano.png',
				'name': 'Plantain picadillo',
				'subtitle': '(pee-cah-dee-joe)',
				'type': 'Side Dish',
				'color': 'fdf6dc'
			}
		]
	},
	recipes_col3: function () {
		return [
			{
				'thumbnail': 'images/tradiciones/icons/agua-dulce.svg',
				'recepie_img': 'images/tradiciones/popups/agua-dulce.png',
				'name': 'Agua Dulce',
				'subtitle': '(ah-goo-ah dool-seh)',
				'type': 'Beverage',
				'color': 'f2c000'
			},
			{
				'thumbnail': 'images/tradiciones/icons/horchata.svg',
				'recepie_img': 'images/tradiciones/popups/horchata.png',
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
				'recepie_img': 'images/tradiciones/popups/agua-sapo.png',
				'name': 'Agua de sapo',
				'subtitle': '(ah-goo-ah de sa-poh)',
				'type': 'Beverage',
				'color': '8dd3cb'
			}
		]
	},
	recipes_col4: function(){
		return [
			{
				'thumbnail': 'images/tradiciones/icons/platanos-dulces.svg',
				'recepie_img': 'images/tradiciones/popups/platano-dulce.png',
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
				'recepie_img': 'images/tradiciones/popups/cocadas.png',
				'name': 'Cocadas',
				'subtitle': '(coke-ah-das)',
				'type': 'Dessert',
				'color': '68bc68'
			},
			{
				'thumbnail': 'images/tradiciones/icons/pan-elote.svg',
				'recepie_img': 'images/tradiciones/popups/pan-elote.png',
				'name': 'Pan de elote',
				'subtitle': '(pan de el-oh-teh)',
				'type': 'Dessert',
				'color': '53a751'
			}
		]
	}

});