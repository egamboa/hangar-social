// Navigation Logic

Template.navigation.helpers({
	nowPlaying: function(){
		return Queue.findOne({nowPlaying: true});
	},
	topPlayer: function(){
		return Players.find({}, {limit: 1, sort: {likes: -1}}).fetch();
	}
});