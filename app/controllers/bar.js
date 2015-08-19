var yelp = require('yelp').createClient({
  consumer_key: "nPHOfuorJutDptSlQHo-oA",
  consumer_secret: "RvEcCf7J1ds32sBYBpCtjlC_Bbg",
  token: "Usu66Cc4KpWODvAyEuZz0kukyLsUNf0o",
  token_secret: "Ab3rLl0EZwiXofRC446fvlue-pQ"
});

module.exports = function (app) {
  var controller = {};

  var Bar = app.models.Bar;

  controller.getBars = function (req,res) {
    yelp.search({category_filter: "nightlife", location: req.params.location},
     function(error, data) {
       var bars= [];
       for (var i in data.businesses){
         var place = {};
         var bar = data.businesses[i];
         place.id = bar.id;
         place.name = bar.name;
         place.url = bar.url;
         place.image_url = bar.image_url;

         Bar.findOrCreate(
          {'yelpId':bar.id},
          {'name': bar.name,
          'url': bar.url,
          'url_image': bar.image_url},
          function (erro, bar) {
            if(erro){
              console.log(erro);
              // return done(erro);
            }
            // return done(null,bar);
          }
        );
        bars.push(place);
      }
      res.json(bars);
      console.log("Enviado: " + bars[0].name);
    });
  };

  return controller;
}
