(function(){

  angular.module('common')
  .service('CartService',CartService);
  CartService.$inject = ['$rootScope']
  function CartService($rootScope){
  service = this;
  service.items = [];
  service.count = 0;
  service.addItem = function(product){
    $rootScope.cartCount = ++service.count;
service.items.push(product);
service.saveItems();

  };
  service.removeItem = function(index){
    service.items.splice(index,1);
    service.saveItems();
  };
  service.getItems = function(){
    return service.items;
  }
  service.getTotalPrice = function(){};
  service.clearItems = function(){};
  service.saveItems = function(){
    if (localStorage != null && JSON != null) {
      localStorage["chhp_items"] = JSON.stringify(service.items);
  }
  };
  service.loadItems = function(){
    var items = localStorage != null ? localStorage["chhp_items"] : null;
    if (items != null && JSON != null) {
        try {
            service.items = JSON.parse(items);
            
        }
        catch (err) {
            // ignore errors while loading...
        }
    }
  };
service.loadItems();
  }
})();