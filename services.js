(function() {
  'use strict';

    angular
      .module('gameStore')
      .factory('gameStoreService', function($http, _){
        var url = 'https://tiny-tiny.herokuapp.com/collections/boardgames4u';
        var carturl = 'https://tiny-tiny.herokuapp.com/collections/boardgameCart';

        var getGames = function(){
          return $http.get(url);
        };

        var buyGame = function(game){
          $http.post(carturl, game).success(function(res){
            console.log(res);
          });
        };

        var gameDetails = function(gameId){
          return $http.get(url+"/"+gameId);
        };

        var reviewGame = function(game){
          $http.put(url+"/"+game._id, game);
        };

        return {
          getGames : getGames,
          buyGame : buyGame,
          gameDetails: gameDetails,
          reviewGame: reviewGame
        };


      })

      .factory('cartService', function($http, _){
        var url = "https://tiny-tiny.herokuapp.com/collections/boardgameCart";

        var removeCartItem = function(game){
          $http.delete(url+"/"+ game._id);
        };

        var clearCart = function(){
          var pubArr = $http.get(url);
          _.each(pubArr, function(el){
            $http.delete(url+"/"+el._id);
          });
        };

        var buyItems = function(){

        };

        var getCart = function(){
          return $http.get(url);
        };

        var getTotal = function(cartGames){
          var sum = 0;
          _.each(cartGames, function(el){
            sum += (el.gamePrice*100);
          });
          return sum/100;
        };

        return {
          getTotal : getTotal,
          getCart : getCart,
          buyItems : buyItems,
          clearCart : clearCart,
          removeCartItem : removeCartItem
        };
      })

      .factory('adminService', function($http, _){
        var url = "https://tiny-tiny.herokuapp.com/collections/boardgames4u";

        var deleteGame = function(game){
          $http.delete(url+"/"+game._id);
          console.log("deleted game");
        };

        var addGame = function(newGame){
          $http.post(url, newGame).success(function(res){
            console.log(res);
          });
        };

        var getGames = function(){
          return $http.get(url);
        };

        var editGame = function(game){
          $http.put(url+"/"+game._id, game).then(function(res){
            console.log(res);
          });
        };

        return{
          deleteGame : deleteGame,
          addGame : addGame,
          editGame : editGame,
          getGames : getGames

        };
      });



}());
