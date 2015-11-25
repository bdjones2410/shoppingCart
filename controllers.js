(function() {
  'use strict';

    angular
    .module('gameStore')

    .controller('mainController', function($scope, gameStoreService, $routeParams){
      gameStoreService.getGames().success(function(games){
        $scope.games = games;
      });

      $scope.buyGame = function(game){
        delete game._id;
        gameStoreService.buyGame(game);
      };

      $scope.reviewGame = function(game){
        gameStoreService.reviewGame(game);
      };

      if($routeParams.gameId){
        gameStoreService.gameDetails($routeParams.gameId).success(function(game){
          $scope.game = game;
          console.log(game);
        });
      }


    })

    .controller('adminController', function($scope, adminService){
      adminService.getGames().success(function(games){
        $scope.games = games;
      });

      $scope.addGame = function(newGame){
        adminService.addGame(newGame);
      };
      $scope.deleteGame = function(game){
        adminService.deleteGame(game);
      };


    })
    .controller('cartController', function($scope, cartService){
      cartService.getCart().success(function(games){
        $scope.games = games;
        $scope.cartTotal = cartService.getTotal(games);
      });

      $scope.removeCartItem = function(game){
        cartService.removeCartItem(game);
      };


    });

}());
