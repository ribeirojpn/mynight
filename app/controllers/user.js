module.exports = function(){
  var controller = {};

  controller.getUser = function(req,res){
    res.json(user);
  };

  controller.addLocal = function(req, res){
    var id = req.params.id;
    user.locals.push(id);
  };


  return controller;
}
