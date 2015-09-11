Router.route('/', function () {
	this.redirect('/tradiciones');
});

/*Router.route('/news', function(){
	this.render('news');
});

Router.route('/songs', function () {
  this.render('hangarSongs');
});

Router.route('/happybs', function () {
  this.render('happyBs');
});

Router.route('/status', function () {
  this.render('hangar-status');
});*/

Router.route('/tradiciones', function(){
	this.render('cocinando');
},{
	name: "cocinando"
});