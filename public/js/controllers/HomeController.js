angular.module('mynight').controller('HomeController',function ($scope,$resource,$http) {
  $scope.search = {
    text: "",
    result: "",
    loading: false
  };
  $scope.places = [];

  var Bar = $resource('/api/bars/:location');

  $scope.find = function() {
    if ($scope.search.text){
      $scope.search.loading = true;
      $http.get('/api/bars/' + $scope.search.text).success(function(bars){
        $scope.places = bars;
  			if (bars.length == 0){
  				$scope.search.result = "We don't find any places in " + $scope.search.text +
          ". You can try again, make sure you enter the city name correctly.";
          $scope.search.loading = false;
  			} else {
  				$scope.search.result = '';
          $scope.search.loading = false;
  			}
      });
    }
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
