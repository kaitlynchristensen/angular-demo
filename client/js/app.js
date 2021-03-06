var myApp = angular.module('myApp', [
  'ngRoute',
  'movieControllers'
]);

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.
  when('/list',{
    templateUrl: 'partial/list.html',
    controller: 'ListController'
  }).
  when('/details/:movieId', {
    templateUrl: 'partial/details.html',
    controller: 'DetailsController'
  }).
  otherwise({
    redirectTo: '/list'
  });

}]);
