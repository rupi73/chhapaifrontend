(
function(){
  "use strict"
  angular.module('public')
  .controller('CartController',CartController);
  CartController.$inject = ['$rootScope','CartService'];
  function CartController($rootScope,CartService){
    var cc = this;
    cc.items = CartService.getItems();
    console.log(cc.items);
  }

})();