(function() {
  'use strict';

  angular
    .module('gameStore',[
      'ngRoute',
      'underscore',
    ])
    .config(function($routeProvider){
      $routeProvider
      .when('/',{
        templateUrl:'views/shopView.html',
        controller:'mainController'
      })
      .when('/shop/:gameId', {
        templateUrl:'views/gameView.html',
        controller:'mainController'
      })
      .when('/adminpower',{
        templateUrl:'views/adminShopView.html',
        controller:'adminController'
      })
      .when('/cart',{
        templateUrl:'views/cartView.html',
        controller:'cartController'
      })
      .when('/checkout',{
        templateUrl:'views/receiptView.html',
        controller:'cartController'
      })
      .when('/404',{
        templateUrl:'views/404.html',
      })
        .otherwise({  redirectTo: '/404'});
    });

    angular
      .module('underscore',[])
      .factory('_', function($window){
        return $window._;
      });





}());
