Meteor.subscribe("queue");
Meteor.subscribe("songs");
Meteor.subscribe("players");

Template.hangarSongs.helpers({
  ableToAdd: function(){
    Meteor.call('checkUser', function(error, result){
      Session.set('ableToAdd', result);
    });
    return Session.get("ableToAdd");
  },
  isPlayer: function(){
    if(Meteor.user() && Meteor.user().username === "player") {
      return true;
    }
    return false;
  }
});