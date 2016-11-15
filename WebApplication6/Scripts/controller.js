var myControllerModule = angular.module("myControllerModule ", []);
myControllerModule.controller("myCtrl", function ($scope, $timeout) {
    $scope.clock = { now: new Date() };
    var updateClock = function () {
        $scope.clock.now = new Date();
    };
    setInterval(updateClock, 1000);
    setInterval(function () {
        $scope.$apply(updateClock);
    }, 1000);
    updateClock();
})