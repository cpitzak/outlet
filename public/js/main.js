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
  .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('schedulerController', function ($scope, $log) {
  $scope.mytime = new Date();
  $scope.hstep = 1;
  $scope.mstep = 1;
  $scope.scheduleOn = false;
  $scope.schedules = [];

  $scope.checkModel = {
    sun: false,
    mon: false,
    tues: false,
    wed: false,
    thurs: false,
    fri: false,
    sat: false
  };

  $scope.toggleOnOff = function() {
    $scope.scheduleOn = !$scope.scheduleOn;
  };

  $scope.add = function() {
    var d = new Date(),
        schedule = {};
    d.setHours( 14 );
    d.setMinutes( 0 );
    $scope.mytime = d;
    schedule.date = $scope.mytime;
    schedule.on = $scope.scheduleOn;
    schedule.checkModel = $scope.checkModel;
    $scope.schedules.push(schedule);
    $log.log('sun: ' + $scope.checkModel.sun);
    $log.log('Time changed to: ' + $scope.mytime);
    $log.log('Number of schedules: ' + $scope.schedules.length);
    $log.log(JSON.stringify($scope.schedules));
  };

});

app.controller('timerController', function ($scope/* $scope, $location, $http */) {
  console.log("timer Controller reporting for duty.");
});
app.controller('onOffController', function ($scope/* $scope, $location, $http */) {
  $scope.radioModel = '';
  console.log("on off Controller reporting for duty.");
});
