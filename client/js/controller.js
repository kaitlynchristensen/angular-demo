var movieControllers = angular.module('movieControllers', []);

movieControllers.controller('ListController', function MyController($scope, $http){
  $http.get('js/movies.json').success(function(data){
    $scope.movies = data;
  });
});


movieControllers.controller('DetailsController', function MyController($scope, $http, $routeParams){
  $http.get('js/movies.json').success(function(data){
    $scope.movies = data;
    $scope.whichItem = $routeParams.itemId;
  });
});
