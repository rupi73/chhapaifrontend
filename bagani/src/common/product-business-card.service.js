(function(){
angular.module('common')
.service('ProductBusinessCardService',ProductBusinessCardService);
ProductBusinessCardService.$inject=['$http','ApiPath'];
function ProductBusinessCardService($http,ApiPath){
  var service =this;
  service.bcardsjson = {};
  service.bproducts = {};
  service.product = {};
  service.setCurrentProduct = function(product){
    if(!arguments.length)
    productId = 122;
    else{
      
    }
    if(Object.keys(bproducts).length === 0 && bproducts.constructor === Object)
    service.bproducts = service.getProducts();
    if(Object.keys(bcardsjson).length === 0 && bcardsjson.constructor === Object)
    service.bcardsjson = service.getCommonJSON();

  };
  service.getProducts = function(){
     return $http.get(ApiPath +'jsons/bproducts.json').then(function(response){
      service.bproducts = response.data;
            return response.data;
    });
  };
  service.getCommonJSON = function(){
    return $http.get(ApiPath +'jsons/bcards.json').then(function(response){
      service.bcardsjson = response.data;
            return response.data;
    });
  };
}


})();