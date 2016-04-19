'use strict';
angular.module('starlab.services', [])
.constant('baseURL', 'http://localhost:3000/')
.factory('biradFactory', ['$resource', 'baseURL', function($resource, baseURL){
  var biradFac = {};
  biradFac.getChartObject = function(){
      return $resource(baseURL+'birad/dataset1');
  };
  return biradFac;
}]);