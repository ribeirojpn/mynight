angular.module('mynight').controller('HomeController',function ($scope,$resource,$http) {
  $scope.search = {
    text: "",
    result: "",
    loading: false
  };
  $scope.places = [];

  var Bar = $resource('/api/bars/:location');
  var User = $resource('/user');

  $scope.find = function() {
    if ($scope.search.text){
      $scope.search.loading = true;
      $http.get('/api/bars/' + $scope.search.text).success(function(bars){
        if ($scope.user){
          for (var i in bars){
            if ($scope.user.places.indexOf(bars[i].id) >= 0){
              bars[i].going = true;
            }
          }
        }
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

  function getUser(){
    $http.get('/user').success(function(user){
      if (user){
        $scope.user = user;
      }
    });
  }
  getUser();

  $scope.setGo = function(place,state){
    if ($scope.user && state === true){
      $scope.user.places.push(place.id);
      $http.post('/user',$scope.user).then(function(user) {
        for (var i in $scope.places){
          if($scope.places[i].name === place.name){
            $scope.places[i].going = true;
          }
        }
      },function (erro) {
        console.error(erro);
        console.log('Não foi possivel lhe adicionar');
      });
    } else if($scope.user && state === false){
      $scope.user.places.splice($scope.user.places.indexOf(place.id),1);
      $http.post('/user',$scope.user).then(function(user) {
        for (var i in $scope.places){
          if($scope.places[i].name === place.name){
            $scope.places[i].going = false;
          }
        }
      },function (erro) {
        console.error(erro);
        console.log('Não foi possivel lhe remover');
      });
    }
  };

});
