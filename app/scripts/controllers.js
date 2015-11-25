'use strict';

angular
       .module('parkingApp')
       .controller('parkingCtrl', function($scope){

       	console.log('with in parking ctrl');

       	$scope.cars =[
       	              {plate:'02ca123'},
       	              {plate:'02ca345'},
                      {plate:'02ca789'},
                      {plate:'02ca011'}
                     ];



                     $scope.save = function(car){
                     	$scope.cars.push(angular.copy(car));
                     	delete $scope.car;
                     };
                     
       });