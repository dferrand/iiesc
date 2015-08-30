'use strict';

/**
 * @ngdoc function
 * @name iiescApp.controller:CalculatorCtrl
 * @description
 * # CalculatorCtrl
 * Controller of the iiescApp
 */
angular.module('iiescApp')
  .controller('CalculatorCtrl', function ($scope) {

  var self = this;

  self.showResult = false;

  var compute = function(){
    self.sizes = [];
    var minLun = Math.ceil(self.lunCount*self.asp/100);
    var maxLun = self.lunCount*3;

    for(var i = minLun;i<=maxLun;i++){
      self.sizes.push({count: i,
        storageSize: i*self.lunSize,
        viosSize: i*self.lunSize*1024,
        ibmiSize: i*(Math.floor(self.lunSize*1024*(1-0.06794))+1),
        asp: self.asp*self.lunCount/i});
    }

    self.showResult = self.sizes.length > 0;

  };

  $scope.$watchGroup(["calculator.lunSize","calculator.lunCount","calculator.asp"],compute);
  });
