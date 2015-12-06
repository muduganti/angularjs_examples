'use strict';

angular
       .module('parkingApp')
       .controller('parkingCtrl', function($scope){

       	console.log('with in parking ctrl');

       	$scope.cars =[
       	              {name:"Ramya",phno:'123-456-7890',plate:'02ca123',timein:'8:10am'},
                      {name:"Arun",phno:'113-446-8190',plate:'02ca145',timein:'8:10am'},
                      {name:"Srinu",phno:'123-856-9890',plate:'02ca128',timein:'8:10am'},
                      {name:"Kalpana",phno:'123-436-9840',plate:'02ca103',timein:'8:10am'},
                      {name:"Padma",phno:'916-169-7890',plate:'02ca783',timein:'8:10am'},
                      {name:"Bhavana",phno:'235-456-7009',plate:'02ca238',timein:'8:10am'}
                      
                     ];



                     $scope.save = function(car){
                     	$scope.cars.push(angular.copy(car));
                     	delete $scope.car;
                     };

                     $scope.editCar= function(car){
                      $scope.car = angular.copy(car);
                      $scope.car = car;
                    };
                    //  editObj = {};
                    //  var i;
                    //  for(i in $scope.cars){
                     //  if(editObj.name == $scope.cars[i].name){
                      //    editObj.newname = $scope.cars[i].name;
                        //  editObj.newPhno = $scope.cars[i].phno;
                        //  editObj.newPlate = $scope.cars[i].plate;
                         // editObj.newTimein = $scope.cars[i].timein;
                         // editObj.newTimeout = $scope.cars[i].timeout;
                       // }
                     // }
                     //};
                     $scope.deleteCar = function(name)
                    {
                      var i;
                      if(confirm("Are you sure want to delete")== true) {
                        for (i in $scope.cars) {
                          if ($scope.cars[i].name == name) {
                            $scope.cars.splice(i, 1);
                          }
                        }
                      }
                    };
                     
       });