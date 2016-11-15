var angularEg = angular.module('angularEg', []);
angularEg.controller("myContacts", function ($scope) {
    $scope.contacts = [
         {
             name: "java",
             country: "usa",
             web: "http://baidu.com"
         }, {
             name: "php",
             country: "fdf",
             web: "http://bqwasdu.com"
         },
         {
             name: "ios",
             country: "wq",
             web: "http://badfu.com"
         },
         {
             name: "andriod",
             country: "rer",
             web: "http://bafu.com"
         }

    ];
});