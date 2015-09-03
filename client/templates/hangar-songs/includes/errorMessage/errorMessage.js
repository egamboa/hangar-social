Session.set("errorMessage", "");

Template.errorMessage.helpers({
  message: function () {
  	if(Session.get("errorMessage") != ""){
  		$('#mainError').fadeIn('slow');
	    setTimeout(function(){
	      $('#mainError').fadeOut("slow");
	    }, 3000);
  	}
    return Session.get("errorMessage");
  }  
});