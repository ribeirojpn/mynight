angular.module('mynight').controller('HomeController',function ($scope,$resource,$http) {
  $scope.search = {text: ""};
  $scope.places = [];

  var Bar = $resource('/api/bars/:location');

  $scope.find = function() {
    // API foursquare
    // var CLIENT_ID = 'B30D50RL5AZBNBR5OVHVISJYW5CBB3UCOLDRURFUQC1IO5V4';
    // var CLIENT_SECRET = '4HN4BB42W2RR4QNX0DCXDSXEOQAARKE12AILALSEZLSCZEF1';
    // var json = 'https://api.foursquare.com/v2/venues/search?client_id='+
    // CLIENT_ID+'&client_secret='+CLIENT_SECRET+'&near='+
    // $scope.search.text + '&query=bar&v=20150816';

    $http.get('/api/bars/' + $scope.search.text).success(function(bars){
      $scope.places = bars;
			if (bars.length == 0){
				// $scope.myBars.text = "We don't find any places.";

			} else {
				// $scope.myBars.text = '';
        console.log('recebido');
			}
    });


    // $http.get(json).then(function (response) {
    //   $scope.places = response.data.response.venues;
    // });
    //
    // console.log('Busca por ' + $scope.search.text);
  };

  $scope.setGo = function(place,state){
    for (var i in $scope.places){
      if($scope.places[i].name === place.name){
        $scope.places[i].going = state;
      }
    }
    console.log(place.name +" : " + state);
    console.log(place);
  };

});
