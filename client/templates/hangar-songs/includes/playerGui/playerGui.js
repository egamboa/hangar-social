Session.set('hasInit', false);
Session.set('playerOrform', false);
Session.set('isPlaying', false);
Session.set('deleteQueue', false);
Session.set('currentSong', {});

Template.playerGui.helpers({
  hasInit: function(){
    return Session.get('hasInit');
  },
  playerOrform: function(){
    if(Session.get('playerOrform'))
      return 'checked'
    else
      return ''
  },
  hasQueue: function(){
    return !Queue.find({}).count()==0;
  },
  isPlaying: function(){
    return Session.get('isPlaying');
  },
  currentSong: function(){
    return Session.get('currentSong');
  }
});
Template.playerGui.events({
  "click .playerInit": function(event){
    event.preventDefault();
    var firstSong = Queue.findOne({played: false}, {sort: {likesCount: -1}, limit: 1});
    currentVideo = firstSong.uTubeId;
    Session.set('hasInit', true);
    Session.set('isPlaying', true);
    Session.set('currentSong', firstSong);
    initPlayer();
    Meteor.call("removeQueue", firstSong._id, true);
  },
  "click .playerPlay": function(event){
    event.preventDefault();
    if(player){
      Session.set('isPlaying', true);
      player.playVideo();
    }
  },
  "click .playerPause": function(event){
    event.preventDefault();
    if(player){
      Session.set('isPlaying', false);
      player.pauseVideo();
    }
  },
  "click .playerNext": function(event){
    event.preventDefault();
    var firstSong = Queue.findOne({played: false}, {sort: {likesCount: -1}, limit: 1});
    Session.set('isPlaying', true);
    Session.set('currentSong', firstSong);
    if(player){
      player.loadVideoById(firstSong.uTubeId);
    }
    Meteor.call("removeQueue", firstSong._id, true);
  }
});