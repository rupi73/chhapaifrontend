(function(){
angular.module('common')
.service('ProductBusinessCardService',ProductBusinessCardService);
ProductBusinessCardService.$inject=['$http','ApiPath'];
function ProductBusinessCardService($http,ApiPath){
  var service =this;
  service.bcardsjson = {};
  service.bproducts = {};
  service.getProducts = function(){
     return $http.get(ApiPath +'jsons/bproducts.json').then(function(response){
      service.bproducts = response.data;
            return response.data;
    });
  }
  service.getCommonJSON = function(){
    return $http.get(ApiPath +'jsons/bcards.json').then(function(response){
      service.bcardsjson = response.data;
            return response.data;
    });
  }
}


})();