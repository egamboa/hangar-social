Session.set("filterRank", false);

Template.switchView.events({
  "click #playerOrform": function(event){
    Session.set("playerOrform", $("#playerOrform").is(':checked'));
  },
  "click .cleanNowPlaying": function(event){
    event.preventDefault();
    Meteor.call("cleanNowPlaying");
  },
  "click .cleanQueue": function(event){
    event.preventDefault();
    Meteor.call("cleanQueue");
  },
  "change #fs-switch": function(event){
    event.preventDefault();
    $('body').toggleClass('fs');
  }
});

Template.addedSongs.helpers({
  queue: function () {
    if(Meteor.user() && Meteor.user().username === "player")
      return Queue.find({played: false}, {sort: {likesCount: -1}});
    else if(Session.get("filterRank")){
      return Queue.find({played: false}, {sort: {date: -1}});
    }
    else
      return Queue.find({played: false}, {sort: {likesCount: -1}});
  },
  filterRank: function () {
    if(Session.get("filterRank"))
      return 'checked'
    else
      return ''
  },
  isPlayer: function(){
    if(Meteor.user() && Meteor.user().username === "player") return true;
    return false;
  },
  noQueue: function(){
    return Queue.find({}).count() == 0;
  }
});

Template.addedSongs.events({
  "click #recently-added": function(event){
    Session.set("filterRank", $("#recently-added").is(':checked'));
  },
  "click #delete-queue": function(event){
    Session.set("deleteQueue", $("#delete-queue").is(':checked'));
  },
  "click .like-vote": function(event){
    event.preventDefault();
    Meteor.call("likeQueue", this._id);
    return false
  }
});

Template.addedSongs.uihooks({
  ".song": {
    container: ".list",
    insert: function(node, next, tpl) {
      $(node)
        .hide()
        .insertBefore(next)
        .fadeIn(1000);
    },
    move: function(node, next, tpl) {
      var $node = $(node), $next = $(next);
      var oldTop = $node.offset().top;
      var height = $(node).outerHeight(true);
      
      // find all the elements between next and node
      var $inBetween = $(next).nextUntil(node);
      if ($inBetween.length === 0)
        $inBetween = $(node).nextUntil(next);
      
      // now put node in place
      $(node).insertBefore(next);
      
      // measure new top
      var newTop = $(node).offset().top;
      
      // move node *back* to where it was before
      $(node)
        .removeClass('animate')
        .css('top', oldTop - newTop);
      
      // push every other element down (or up) to put them back
      $inBetween
        .removeClass('animate')
        .css('top', oldTop < newTop ? height : -1 * height)
        
      
      // force a redraw
      $(node).offset();
      
      // reset everything to 0, animated
      $(node).addClass('animate').css('top', 0);
      $inBetween.addClass('animate').css('top', 0);
    },
    remove: function(node, tpl) {
      $(node).fadeOut(function() {
        $(this).remove();
      });
    }
  }
});