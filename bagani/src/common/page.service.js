( function(){
  "use strict";
  angular.module('common')
  .service('PageService',PageService);
  PageService.$inject = ['$http','ApiPath'];
  
  function PageService($http,ApiPath){
    var service =this;
    
    service.getPageContent = function(){
      return $http.get(ApiPath +'pages/557/contentElementor').then(function(response){
              return response.data;
      });
    }
  }

})();