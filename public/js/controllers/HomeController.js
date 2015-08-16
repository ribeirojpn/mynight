angular.module('mynight').controller('HomeController',function ($scope,$resource) {
  $scope.search = {text: ""};
  $scope.places = {};

  $scope.find = function () {
    console.log('Busca por ' + $scope.search.text);
  };

});
