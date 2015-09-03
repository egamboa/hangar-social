Session.set("searchResult", []);

Template.songSearch.helpers({
  searchResult: function () {
    return Session.get("searchResult");
  }
});

Template.songSearch.events({
  "click .add-to-queue": function () {
    
    event.preventDefault();
    
    Session.set("searchResult", []);
    Session.set('ableToAdd', false);

    $('#utube-search').val('');
    
    Session.set("errorMessage", "");
    
    Meteor.call("addToQueue", this, function (error, result) { 
      if (error && error.error === "songAdded") {
        Session.set("errorMessage", "Song already added.");
      }
    });

  }
});