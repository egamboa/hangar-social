// 2. This code loads the IFrame Player API code asynchronously.
function initPlayer(){
	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
var currentVideo ="";
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
	  height: '1',
	  width: '1',
	  playerVars: {
	  	controls: 0,
	  	showinfo: 0,
	  	disablekb: 0,
	  	modestbranding: 0
	  },
	  videoId: currentVideo,
	  events: {
	    'onReady': onPlayerReady,
	    'onStateChange': onPlayerStateChange
	  }
	});
}

function onPlayerReady(event) {
	event.target.playVideo();
}

function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.ENDED) {
	  $('.playerNext').click();
	}
}