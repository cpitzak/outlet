/**
 * Controls the scheduler
 */
app.controller('schedulerController', function ($scope, $log) {
  $scope.mytime = new Date();
  $scope.hstep = 1;
  $scope.mstep = 1;
  $scope.scheduleOn = false;
  $scope.showScheduleSuccess = false;
  $scope.errorMsg = null;
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

  $scope.$watchCollection('checkModel', function () {
    scheduleChange();
  });
  
  function clone(obj) {
    var copy, attr;
    if (null == obj || "object" != typeof obj) return obj;
       copy = obj.constructor();
    for (attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
  }

  function nonSelected(checkModel) {
    var attr;
    for (attr in checkModel) {
        if (checkModel.hasOwnProperty(attr)) {
           if (checkModel[attr]) {
              return false;
           }
        }
    }
    return true;
  }

  function scheduleChange() {
    $scope.showScheduleSuccess = false;
    $scope.errorMsg = null;
  }
  

  $scope.formatAMPM = function(date) {
    var hours = date.getHours(),
        minutes = date.getMinutes(),
        ampm = hours >= 12 ? 'pm' : 'am',
        strTime;
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  function isScheduleEqual(obj1, obj2) {
    return obj1.date.getTime() === obj2.date.getTime() &&
        angular.equals(obj1.checkModel, obj2.checkModel) &&
        obj1.on === obj2.on;
  }

  $scope.closeSuccess = function() {
    $scope.showScheduleSuccess = false;
  };

  $scope.toggleOnOff = function() {
    scheduleChange();
    $scope.scheduleOn = !$scope.scheduleOn;
  };

  $scope.getDayString = function(checkModel) {
    var result = '';
    
    if (checkModel.sun) {
       result += 'Su, ';
    }
    if (checkModel.mon) {
       result += 'M, ';
    }
    if (checkModel.tues) {
       result += 'T, ';
    }
    if (checkModel.wed) {
       result += 'W, ';
    }
    if (checkModel.thurs) {
       result += 'Th, ';
    }
    if (checkModel.fri) {
       result += 'F, ';
    }
    if (checkModel.sat) {
       result += 'S, ';
    }

    return result.substring(0, result.length - 2);
  };

  $scope.changed = function() {
      scheduleChange();
    };

  $scope.remove = function(i) {
    scheduleChange();
    $scope.schedules.splice(i, 1);
  };

  $scope.add = function() {
    var schedule = {},
        tempSchedule,
        i;
    if (nonSelected($scope.checkModel)) {
      $scope.errorMsg = 'You must select a day';
      return;
    }

    schedule.date = $scope.mytime;
    schedule.on = $scope.scheduleOn;
    schedule.checkModel = clone($scope.checkModel);

    for (i = 0; i < $scope.schedules.length; i++) {
      tempSchedule = $scope.schedules[i];
      if (isScheduleEqual(tempSchedule, schedule)) {
        $scope.errorMsg = 'Cannot add a duplicate schedule';
        return;
      }
    }
    $scope.showScheduleSuccess = true;
    $scope.schedules.push(schedule);
  };

});