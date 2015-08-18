module.exports = function(app){
  var controller = app.controllers.bar;

  app.route('/api/bars/:location')
    .get(controller.getBars);
}
