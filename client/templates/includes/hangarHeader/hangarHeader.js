Session.set('checkAdd', true);

Template.loginTemplate.helpers({
  canAddCheck: function () {
  	Meteor.call('checkUser', function(error, result){
      Session.set('checkAdd', result);
    });
    return Session.get("checkAdd");
  },
});

Template.hangarHeader.rendered = function(){
	$('#login-buttons').click(function(){
		$('.infoPopover').popover('hide');
	});
}

Template.hangarHeader.helpers({
	nowPlaying: function(){
		return Queue.findOne({nowPlaying: true});
	}
});

Template.cantAdd.rendered = function(){
	initPopover("cantAdd", 1500, 3000);
}
Template.verifyEmail.rendered = function(){
	initPopover("verifyEmail", 1500, 4000);	
}

function initPopover(popoverEl, timeWait, timeOff){
	$('[data-toggle="'+popoverEl+'"]').popover()
	setTimeout(function(){ 
		$('[data-toggle="'+popoverEl+'"]').popover('show');
	}, timeWait);
	setTimeout(function(){ 
		$('[data-toggle="'+popoverEl+'"]').popover('hide');
	}, timeOff);
}



