'use strict';

/**
 * @ngdoc function
 * @name iiescApp.controller:DiskSizeCtrl
 * @description
 * # DiskSizeCtrl
 * Controller of the iiescApp
 */
angular.module('iiescApp')
  .controller('DiskSizeCtrl', function () {
    this.sizes = [];

    for(var i=21;i<322;i++) {
      this.sizes.push(i);
    }

    this.storageToI = function(storageSize) {
      return Math.floor(storageSize*(1-0.06794)+1);
    };

    this.mbToGb = function(s) {
      return Math.floor(s/1024);
    };
  });
