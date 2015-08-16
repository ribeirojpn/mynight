module.exports = function (app) {
  var controller = app.controllers.user;

  app.route('/user')
    .get(controller.getUser);

  app.route('/user/:id')
    .post(controller.addLocal);
};
