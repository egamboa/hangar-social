Template.songItem.helpers({
  alreadyVoted: function (){
    if(Meteor.user()&&Meteor.user().username === "player"){
      return false;
    }else{
      return this.likes.indexOf(Meteor.userId()) != -1;
    }
  },
  toggleEdit: function(){
    return Session.get("deleteQueue");
  }
});

Template.songItem.events({
  "click .like-vote": function(event){
    event.preventDefault();
    Meteor.call("likeQueue", this._id);
    return false;
  },
  "click .dislike-vote": function(event){
    event.preventDefault();
    Meteor.call("dislikeQueue", this._id);
    return false;
  },
  "click .deleteSong": function(event){
    event.preventDefault();
    Meteor.call("removeQueue", this._id, false, false);
    return false;
  }
});