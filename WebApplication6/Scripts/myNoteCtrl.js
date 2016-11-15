app.controller("myNoteCtrl", function ($scope) {
    $scope.message = "";
    $scope.left = function () { return 100 - $scope.message.length; };
    $scope.save = function () { alert("保存成功") };
    $scope.clear = function () { $scope.message = ""; };
})