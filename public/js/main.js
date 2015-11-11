var app = angular.module('outletsApp', [
  'ngRoute'
]);
/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  // Home
  .when("/", {templateUrl: "partials/home.html", controller: "homeController"})
  // API
  .when("/api", {templateUrl: "partials/api.html", controller: "apiController"})
  // else 404
  .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('homeController', function (/* $scope, $location, $http */) {
  console.log("home Controller reporting for duty.");
});

app.controller('apiController', function (/* $scope, $location, $http */) {
  console.log("api Controller reporting for duty.");
});
