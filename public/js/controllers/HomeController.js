angular.module('mynight').controller('HomeController',function ($scope,$resource,$http) {
  $scope.search = {text: ""};
  $scope.places = [];

  $scope.find = function () {
    // API foursquare
    var CLIENT_ID = 'B30D50RL5AZBNBR5OVHVISJYW5CBB3UCOLDRURFUQC1IO5V4';
    var CLIENT_SECRET = '4HN4BB42W2RR4QNX0DCXDSXEOQAARKE12AILALSEZLSCZEF1';
    var json = 'https://api.foursquare.com/v2/venues/search?client_id='+
    CLIENT_ID+'&client_secret='+CLIENT_SECRET+'&near='+
     $scope.search.text + '&query=bar&v=20150816';
    // API Yelp
    //  var CLIENT_ID = 'nPHOfuorJutDptSlQHo-oA';
    //  var CLIENT_SECRET = 'RvEcCf7J1ds32sBYBpCtjlC_Bbg';
    //  var json = 'http://api.yelp.com/v2/search?client_id='+
    //  CLIENT_ID+'&client_secret='+CLIENT_SECRET+'&location='+
    //   $scope.search.text + '&category_filter=nightlife';

    $http.get(json).then(function (response) {
      $scope.places = response.data.response.venues;
      console.log($scope.places[0].name);
    });

    console.log('Busca por ' + $scope.search.text);
  };

});
