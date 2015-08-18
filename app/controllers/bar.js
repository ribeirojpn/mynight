var yelp = require('yelp').createClient({
  consumer_key: "nPHOfuorJutDptSlQHo-oA",
  consumer_secret: "RvEcCf7J1ds32sBYBpCtjlC_Bbg",
  token: "Usu66Cc4KpWODvAyEuZz0kukyLsUNf0o",
  token_secret: "Ab3rLl0EZwiXofRC446fvlue-pQ"
});

module.exports = function (argument) {
  var controller = {};

  controller.getBars = function (req,res) {
    yelp.search({category_filter: "nightlife", location: req.params.location},
     function(error, data) {
      res.json(data);
    });
  };

  return controller;
}
