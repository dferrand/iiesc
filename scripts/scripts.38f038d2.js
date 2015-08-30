"use strict";angular.module("iiescApp",["ngAnimate","ngRoute","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{redirectTo:"/diskSize"}).when("/diskSize",{templateUrl:"views/diskSize.html",controller:"DiskSizeCtrl",controllerAs:"diskSize",id:"diskSize"}).when("/calculator",{templateUrl:"views/calculator.html",controller:"CalculatorCtrl",controllerAs:"calculator",id:"calculator"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about",id:"about"}).otherwise({redirectTo:"/"})}]),angular.module("iiescApp").controller("DiskSizeCtrl",function(){this.sizes=[];for(var a=21;322>a;a++)this.sizes.push(a);this.storageToI=function(a){return Math.floor(.93206*a+1)},this.mbToGb=function(a){return Math.floor(a/1024)}}),angular.module("iiescApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("iiescApp").controller("CalculatorCtrl",["$scope",function(a){var b=this;b.showResult=!1;var c=function(){b.sizes=[];for(var a=Math.ceil(b.lunCount*b.asp/100),c=3*b.lunCount,d=a;c>=d;d++)b.sizes.push({count:d,storageSize:d*b.lunSize,viosSize:d*b.lunSize*1024,ibmiSize:d*(Math.floor(1024*b.lunSize*.93206)+1),asp:b.asp*b.lunCount/d});b.showResult=b.sizes.length>0};a.$watchGroup(["calculator.lunSize","calculator.lunCount","calculator.asp"],c)}]),angular.module("iiescApp").controller("HeaderCtrl",["$route",function(a){this.isActive=function(b){return void 0!==a.current?a.current.id==b:!1}}]),angular.module("iiescApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="jumbotron"> <p>IBM i External Storage Calculator</p> <p>version 0.1.0</p> </div>'),a.put("views/calculator.html",'<form class="form-horizontal"> <div class="form-group"> <label for="lunSize" class="col-sm-4 control-label">Storage size (GB)</label> <div class="col-sm-8"><input type="number" class="form-control" id="lunSize" ng-model="calculator.lunSize"></div> </div> <div class="form-group"> <label for="lunCount" class="col-sm-4 control-label">Volume count</label> <div class="col-sm-8"><input type="number" class="form-control" id="lunCount" ng-model="calculator.lunCount"></div> </div> <div class="form-group"> <label for="asp" class="col-sm-4 control-label">ASP %</label> <div class="col-sm-8"><input type="number" class="form-control" id="asp" ng-model="calculator.asp"></div> </div> <div class="form-group"> <label for="asp-data" class="col-sm-4 control-label">ASP data (GB)</label> <div class="col-sm-8"><input class="form-control" id="asp-data" readonly value="{{(calculator.lunSize*calculator.lunCount*(1-0.06794)+1)*calculator.asp/100 | number:3}}"></div> </div> </form> <table class="table table-striped table-condensed" ng-show="calculator.showResult"> <thead> <tr> <th>Volume count</th> <th>Storage size (GB)</th> <th>VIOS size (MB)</th> <th>IBM i size (MB)</th> <th>ASP %</th> </tr> </thead> <tbody> <tr ng-repeat="s in calculator.sizes"> <td>{{s.count}}</td> <td>{{s.storageSize}}</td> <td>{{s.viosSize}}</td> <td>{{s.ibmiSize}}</td> <td>{{s.asp | number:2}}</td> </tr> </tbody> </table>'),a.put("views/diskSize.html",'<table class="table table-striped table-condensed"> <thead> <tr> <th>Storage size (GB)</th> <th>VIOS size (MB)</th> <th>IBM i size (MB)</th> <th>IBM i size (GB)</th> </tr> </thead> <tbody> <tr ng-repeat="s in diskSize.sizes"> <td>{{s}}</td> <td>{{s*1024}}</td> <td>{{diskSize.storageToI(s*1024)}}</td> <td>{{diskSize.mbToGb(diskSize.storageToI(s*1024))}}</td> </tr> </tbody> </table>')}]);