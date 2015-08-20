module.exports = function (app) {
  app.route('/')
    .get(function (req, res) {
  		var name = '';
  		var photoUrl = '';
  		if(req.user){
  			name = req.user.name;
  			photoUrl = req.user.photo;
  		}

		  res.render('index',{"usuarioLogado":name, "usuarioPhotoUrl":photoUrl});
    });
};
