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
