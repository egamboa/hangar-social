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

});