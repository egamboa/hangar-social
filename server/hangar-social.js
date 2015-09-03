Accounts.config({
  sendVerificationEmail: true,
  restrictCreationByEmailDomain: function(email) {
    var domain = email.slice(email.lastIndexOf("@")+1),
    allowed = ["criticalmass.com", "thehangar.cr"];
    return _.contains(allowed, domain);
  }
});

Accounts.validateNewUser(function (user) {

    var email = user.emails[0].address,
    domain = email.slice(email.lastIndexOf('@') + 1, email.length),
    cmUsername = email.slice(0, email.lastIndexOf('@')),
    cmUserFound = Meteor.users.findOne( { emails: { $elemMatch: { address: cmUsername + "@criticalmass.com" } } } ),
    hgUserFound = Meteor.users.findOne( { emails: { $elemMatch: { address: cmUsername + "@thehangar.cr" } } } );

    if(domain === "thehangar.cr" && typeof cmUserFound === "undefined"){
        return true;
    }
    if(domain === "criticalmass.com" && typeof hgUserFound === "undefined"){
        return true;
    }

    throw new Meteor.Error(403, "Username already found");
});

Meteor.settings.api = {
    key: "37EAD7F9F8CC7FADDB7324E93E532",
    devServer: "http://localhost:8080/hgrper",
    prodServer: "http://performance.thehangar.cr/hgrper"
}

Meteor.methods({
    getAllInactive: function(){
        return Meteor.users.find( { emails: { $elemMatch: { verified: false } } }, {} ).fetch();
    }
});

Meteor.startup(function () {
  if (Meteor.users.find({}).count() === 0 ) {
    Accounts.createUser({
        username: 'player',
        email: 'player@criticalmass.com',
        password: 'imthesupervisor'
    });
    Accounts.createUser({
        username: 'test1',
        email: 'miguelac@criticalmass.com',
        password: 'testing'
    });
    Accounts.createUser({
        username: 'test2',
        email: 'juandr@criticalmass.com',
        password: 'testing'
    });
    Accounts.createUser({
        username: 'test3',
        email: 'jaimee@criticalmass.com',
        password: 'testing'
    });
    Accounts.createUser({
        username: 'test4',
        email: 'estebang@criticalmass.com',
        password: 'testing'
    });
    //Validating
    var users = Meteor.users.find({});
    users.forEach(function (user) {
      Meteor.users.update({ _id: user._id},{ $set: { emails : [  {  "address" : user.emails[0].address,  "verified" : true } ] } } )
    });

    Accounts.createUser({
        username: 'notvalid',
        email: 'notvalid@criticalmass.com',
        password: 'testing'
    });
  }
});
