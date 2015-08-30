'use strict';

/**
 * @ngdoc function
 * @name iiescApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the iiescApp
 */
angular.module('iiescApp')
  .controller('HeaderCtrl', function ($route) {
    this.isActive = function(id) {
      if($route.current !== undefined) {
        return $route.current.id == id;
      } else {
        return false;
      }
    }
  });
