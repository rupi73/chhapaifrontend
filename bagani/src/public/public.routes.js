(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html',
      controller:'HomeController',
      controllerAs:'homeCtrl'       
    })
    .state('public.productbusinesscard', {
      url: '/public/product/{productname}',
      templateUrl: 'src/public/product/product.html',
      controller:'ProductBusinessCardController',
      controllerAs:'pbcctrl',
      resolve :{
        bproducts: ['ProductBusinessCardService',function (ProductBusinessCardService){
          var bproducts = ProductBusinessCardService.bproducts;
          if(Object.keys(bproducts).length === 0 && bproducts.constructor === Object)
          return ProductBusinessCardService.getProducts();
          else
          return ProductBusinessCardService.bproducts;
        }],
        bcardsjson: ['ProductBusinessCardService',function (ProductBusinessCardService){
          var bcardsjson = ProductBusinessCardService.bcardsjson;
          if(Object.keys(bcardsjson).length === 0 && bcardsjson.constructor === Object)
          return ProductBusinessCardService.getCommonJSON();
          else
          return ProductBusinessCardService.bcardsjson;
        }
      ]
      }      
    })
    .state('public.bcards', {
      url: '/public/bcards',
      templateUrl: 'src/public/pages/bcards.html',
      controller:'PagesController',
      controllerAs:'pagesCtrl'       
    })
    .state('public.samplepack', {
      url: '/public/samplepack',
      templateUrl: 'src/public/pages/samplepack.html',
      controller:'PagesController',
      controllerAs:'pagesCtrl'       
    });
}
})();
