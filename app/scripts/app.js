'use strict';

/**
 * @ngdoc overview
 * @name iiescApp
 * @description
 * # iiescApp
 *
 * Main module of the application.
 */
angular
  .module('iiescApp', [
    'ngAnimate',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        redirectTo: '/diskSize'
      })
      .when('/diskSize', {
        templateUrl: 'views/diskSize.html',
        controller: 'DiskSizeCtrl',
        controllerAs: 'diskSize',
        id: 'diskSize'
      })
      .when('/calculator', {
        templateUrl: 'views/calculator.html',
        controller: 'CalculatorCtrl',
        controllerAs: 'calculator',
        id: 'calculator'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        id: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
