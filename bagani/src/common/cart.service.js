(function(){

  angular.module('common')
  .service('Cart',CartService);
  function CartService(){
  service = this;
  service.items = {};
  service.count = 0;
  service.addItem = function(){
    service.count++;
  };
  service.removeItem = function(){
    service.count--;
  };
  service.getTotalPrice = function(){};
  service.clearItems = function(){};
  service.saveItems = function(){};
  service.loadItems = function(){};

  }
})();