Meteor.autorun(function() {
  Session.set("meteor_valid", !!Meteor.user()&&!!Meteor.user().emails[0].verified);
  if(Meteor.user() && Meteor.user().username === "player") {
    $('body').attr('class', 'player-user');
    $('body').attr('style', '');
  }
  else {
    $('body').attr('class', 'regular-user');
  }
});

Handlebars.registerHelper('valid',function(input){
    return Session.get(input);
});

Template.body.helpers({
	currentRoute: function(){
		return Router.current().route.getName();
	}
});