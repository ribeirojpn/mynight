var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');

module.exports = function () {
  var schema = mongoose.Schema({
    yelpId: {
      type: String,
      require: true,
      index:{
        unique:true
      }
    },
    name: {
      type: String,
      require: true
    },
    url: {
      type: String,
      require: true
    },
    url_image:{
      type: String,
    },
    users_going: []
  });

  schema.plugin(findOrCreate);
  return mongoose.model('Bar', schema);
}
