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
      templateUrl: '../src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html',
      controller:'HomeController',
      controllerAs:'homeCtrl'       
    })
    .state('public.product', {
      url: '/public/product',
      templateUrl: 'src/public/product/product.html',
      controller:'ProductController',
      controllerAs:'productCtrl'

       
    });
}
})();
