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
         place.id = data.businesses[i].id;
         place.name = data.businesses[i].name;
         place.url = data.businesses[i].url;
         place.image_url = data.businesses[i].image_url;

         Bar.findOrCreate(
          {'yelpId':place.id},
          {'name': place.name,
          'url': place.url,
          'url_image': place.image_url},
          function (erro, place) {
            if(erro){
              console.log(erro);
            }
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
