module.exports = function(app){
  var controller = {};

  var User = app.models.User;

  controller.addLocal = function(req,res){
    if(req.user){
      var id = req.body._id;
      User.findByIdAndUpdate(id, req.body).exec().then(function(user){
          res.json(user);
        }, function (erro) {
          console.error(erro);
          res.status(500).json(erro);
        }
      );
    }
  };

  return controller;
}
