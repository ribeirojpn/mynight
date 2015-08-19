angular.module('mynight').controller('HomeController',function ($scope,$resource,$http) {
  $scope.search = {text: ""};
  $scope.places = [];

  var Bar = $resource('/api/bars/:location');

  $scope.find = function() {

    $http.get('/api/bars/' + $scope.search.text).success(function(bars){
      $scope.places = bars;
			if (bars.length == 0){
				// $scope.myBars.text = "We don't find any places.";

			} else {
				// $scope.myBars.text = '';
        console.log('recebido');
			}
    });
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
