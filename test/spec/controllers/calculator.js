'use strict';

describe('Controller: CalculatorCtrl', function () {

  // load the controller's module
  beforeEach(module('iiescApp'));

  var CalculatorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CalculatorCtrl = $controller('CalculatorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});
