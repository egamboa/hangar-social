Template.currentSong.helpers({
	mySong: function(){
    	return Queue.findOne({played: false, owner: Meteor.userId()})
  	}
});

Template.currentSong.events({
	"click .deleteSong": function(event){
		event.preventDefault();
		Session.set('ableToAdd', true);
		Meteor.call("removeQueue", Queue.findOne({played: false, owner: Meteor.userId()})._id, false, true);
	}
});