var app = angular.module('outletsApp', [
  'ngAnimate',
  'ngRoute',
  'ui.bootstrap'
]);
/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  // Home
  .when("/", {templateUrl: "partials/home.html", controller: "schedulerController"})
  .when("/", {templateUrl: "partials/home.html", controller: "timerController"})
  .when("/", {templateUrl: "partials/home.html", controller: "onOffController"})
  // API
  .when("/api", {templateUrl: "partials/api.html", controller: "apiController"})
  // else 404
  .otherwise("/404", {templateUrl: "partials/404.html", controller: "pageNotFoundController"});
}]);