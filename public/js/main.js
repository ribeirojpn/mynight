angular.module('mynight',['ngRoute','ngResource']).config(function ($routeProvider) {


  $routeProvider.when('/',{
    templateUrl: 'partials/home.html',
    controller: 'HomeController'
  });

  $routeProvider.when('/auth',{
    templateUrl:'partials/auth.html'
  });

  $routeProvider.otherwise({redirectTo:'/'});
});
