( function(){
  "use strict";
  angular.module('common')
  .service('PageService',PageService);
  PageService.$inject = ['$http','ApiPath'];
  
  function PageService($http,ApiPath){
    var service =this;
    
    service.getPageContent = function(){
      return $http.get(ApiPath +'bcardscalc').then(function(response){
        console.log(response.data);
        return response.data;
      });
    }
  }

})();