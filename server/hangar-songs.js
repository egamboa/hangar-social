Meteor.publish("queue", function () {
  return Queue.find();
});
Meteor.publish("songs", function () {
  return Songs.find({}, {limit: 27, sort: {likesCount: -1}});
});
Meteor.publish("players", function () {
  return Players.find({}, {limit: 27, sort: {likesCount: -1}});
});

Meteor.methods({
  addToQueue: function(song) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized", "not-authorized");
    }
    var songExists = Queue.findOne(
       { uTubeId: song.id.videoId, played: false }
    );
    if(typeof songExists != "undefined"){
      throw new Meteor.Error("songAdded", "Song is already added.");
    }
    Queue.insert({
      owner: Meteor.userId(),
      username: Meteor.user().username,
      email: Meteor.user().emails[0].address,
      img: song.snippet.thumbnails.default.url,
      uTubeId: song.id.videoId,
      title: song.snippet.title,
      date: new Date(),
      likes: [],
      likesCount: 0,
      played: false,
      nowPlaying: false
    });
  },
  removeQueue: function(songId, validCount, isOwner){
    if ( Meteor.user().username !== "player" && !isOwner) {
      // If the task is private, make sure only the owner can delete it
      throw new Meteor.Error("not-authorized");
    }
    if(validCount){
      Meteor.call('updateHistory', Queue.findOne(songId));
      var lastPlayed = Queue.findOne({nowPlaying: true});
      if(lastPlayed){
        Queue.update(lastPlayed._id, {$set: {nowPlaying: false}});
      }
      Queue.update(songId, {$set: {played: true, nowPlaying: true}});
    }else{
      Queue.remove(songId);
    }
  },
  updateHistory: function(chosenSong){
    var song = Songs.findOne({uTubeId: chosenSong.uTubeId});
    if(song){
      Songs.update(song._id, {
          $inc: {
            likesCount: chosenSong.likesCount,
            timesPlayed: 1
          }
      });
    }else{
      Songs.insert({
        img : chosenSong.img,
        uTubeId : chosenSong.uTubeId,
        title : chosenSong.title,
        likesCount : chosenSong.likesCount,
        timesPlayed : 1
      });
    }
    var player = Players.findOne({userId: chosenSong.owner});
    var userA = Meteor.users.findOne(chosenSong.owner);
    if(!player){
      var emailHangar = userA.emails[0].address;
      emailHangar = emailHangar.slice(0, emailHangar.lastIndexOf('@'));
      var response = Meteor.http.call("GET", Meteor.settings.api.prodServer+"/api/getEmployee?email="+emailHangar+"@thehangar.cr&apikey="+Meteor.settings.api.key);
      Players.insert({
        userId: userA._id,
        name: response.data.name ? response.data.name : emailHangar, 
        likes: chosenSong.likesCount, 
        department:response.data.department,
        img: response.data.img
      });
    }else{
      Players.update(player._id, { $inc: { likes: (chosenSong.likesCount)} });
    }
  },
  likeQueue: function(songId){
    var song = Queue.findOne(songId);
    if(Meteor.call('checkForVotes', songId, Meteor.userId())){
      song.likes.push(Meteor.userId());
      Queue.update(songId, { $set: { likes: (song.likes)}, $inc: {likesCount: 1} }); 
    }
  },
  dislikeQueue: function(songId){
    var song = Queue.findOne(songId), index;
    if(!Meteor.call('checkForVotes', songId, Meteor.userId())){
      index = song.likes.indexOf(Meteor.userId());
      if (index > -1) {
          song.likes.splice(index, 1);
      }
      Queue.update(songId, { $set: { likes: (song.likes)}, $inc: {likesCount: -1} }); 
    }
  },
  checkForVotes: function(songId, userId){
    if(Meteor.user().username == "player"){
      return true;
    }
    var songAdded = Queue.findOne(
       { _id: songId, played: false }
    );
    if(songAdded.likes.lastIndexOf(userId) != -1){
      return false;
    }else{
      return true;
    }
  },
  checkUser: function(){
    var songAdded = Queue.findOne(
       { owner: Meteor.userId(), played: false }
    );
    if(songAdded && Meteor.user().username != "player"){
      return false;
    }
    return true;
  },
  cleanNowPlaying: function(){
    var theSong = Queue.findOne({nowPlaying: true});
    if(theSong){
      Queue.update(theSong._id, { $set: { nowPlaying: false} }); 
    }
  },
  cleanQueue: function(){
    Queue.remove({});
  }
});