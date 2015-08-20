module.exports = function (app) {
  var controller = app.controllers.user;

  app.route('/user')
    .get(function (req, res) {
  		if(req.user){
  			res.json(req.user);
  		}
  })
    .post(controller.addLocal);;

};
