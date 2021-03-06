var movieControllers = angular.module('movieControllers', []);

movieControllers.controller('ListController', function MyController($scope, $http){
  $http.get('http://localhost:3001/api/movies').success(function(data){
    $scope.movies = data.movieList;
  });
});


movieControllers.controller('DetailsController', function MyController($scope, $http, $routeParams){
  var url = 'http://localhost:3001/api/movies/' + $routeParams.movieId;
  $http.get(url).success(function(data) {
    $scope.movie = data;
  });
});
