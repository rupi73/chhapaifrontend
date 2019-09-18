(function () {
  angular.module('common')
    .service('ProductBusinessCardService', ProductBusinessCardService);
  ProductBusinessCardService.$inject = ['$q', '$http', 'ApiPath'];

  function ProductBusinessCardService($q, $http, ApiPath) {
    var service = this;
    service.bcardsjson = {};
    service.bproducts = {};
    service.product = {};

    service.getProducts = function () {
      return $http.get(ApiPath + 'jsons/bproducts.json').then(function (response) {
        service.bproducts = response.data;
        return response.data;
      });
    };
    service.getCommonJSON = function () {
      return $http.get(ApiPath + 'jsons/bcards.json').then(function (response) {
        service.bcardsjson = response.data;
        return response.data;
      });
    };


    service.setCurrentProduct = function (product) {
      /*Check for arguments length if not set default product Id*/
      if (!arguments.length)
        var productId = 122;
      /*Check for argument is object or is string or integer */
      /*--To be done later--*/
      var deferred = $q.defer();//promise
      if (Object.keys(service.bproducts).length === 0 && service.bproducts.constructor === Object)
        service.bproducts = service.getProducts();
      if (Object.keys(service.bcardsjson).length === 0 && service.bcardsjson.constructor === Object)
        service.bcardsjson = service.getCommonJSON();
      console.log(service.bproducts);
      $q.all([service.bproducts, service.bcardsjson]).then(function (response) {
        if (typeof productId === 'undefined') {
          /*fetch product id from product slug name */
          var productId = service.bproducts.productNameId[product];
        }
        service.product = service.bproducts[productId];
        console.log(service.product);
        service.product.productId = productId;
        service.setProductQuantity();
        service.setProductSize();
        service.setProductPrinting();
        service.setProductPapers();
        service.setProductTreatments();
        service.setProductAccessories();
        service.setProductDesigns();
        return deferred.resolve(service.product);
      }).catch(function (errorResponse) {
        return deferred.reject('Error Occurs');
      });

      return deferred.promise;

    };

    /*Set Product Quantity */
    service.setProductQuantity = function () {
      var quantity = service.product.quantity || {};
      if (Object.keys(quantity).length === 0 && quantity.constructor === Object)
        service.product.quantity = service.bcardsjson.quantity;
    };
    /*Set Product Size */
    service.setProductSize = function () {
      var size = service.product.size || {};
      if (Object.keys(size).length === 0 && size.constructor === Object)
        service.product.size = service.bcardsjson.size;
    };
    /*Set Product Printing */
    service.setProductPrinting = function () {
      var printing = service.product.printing || {};
      if (Object.keys(printing).length === 0 && printing.constructor === Object)
        service.product.printing = service.bcardsjson.printing;
    };

    /*Set Product Papers */
    service.setProductPapers = function () {
      var paper = service.product.paper || {};
      if (Object.keys(paper).length === 0 && paper.constructor === Object)
        service.product.paper = service.bcardsjson.paper;
    };

    /*Set Product Treatments */
    service.setProductTreatments = function () {

    };

    /*Set Product Accessories */
    service.setProductAccessories = function () {

    };

    /*Set Product Designs */
    service.setProductDesigns = function () {

    };







    /* service.getProductSettings = function(settings){
      var obj = {};
      console.log($ctrl.product);
  if(typeof $ctrl.product[settings] !== 'undefined'){
      
      for(var i of $ctrl.product[settings] ){
          if(typeof bcardsjson[settings].opts[i] !== 'undefined')
          obj[i]=bcardsjson[settings].opts[i];
      }
  }
  return obj;
  }; */
  }


})();