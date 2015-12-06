'use strict';

angular.module('parkingApp')
       .filter('hypencasing', function(){
       	return function(data, symbol){
       		var data1=data.substring(0,3);
       		var data2= data.substring(3,7);
       		var ss=data1+symbol+data2 ;
       		return ss;

       	}
       })