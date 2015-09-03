Template.twentysevens.helpers({
  tops: function () {
    return Players.find({}, {sort: {likes: -1}});
  },
  topSongs: function () {
    return Songs.find({}, {sort: {likesCount: -1}});
  }
});

Template.onePlayer.rendered = function(){

}

Template.oneSong.rendered = function(){
	
}