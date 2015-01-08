/**
 * Created by toddshelton on 1/7/15.
 */

var app = angular.module('app');

app.controller('HomeCtrl', function($scope){
    $scope.title = "Home Page";

    $scope.buzz = function(){
        navigator.vibrate([2000, 1000, 2000]);
    }
});