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
      .state('public.businesscardsdesign', {
        url: '/public/business-cards-design',
        templateUrl: 'src/public/pages/businesscardsdesign.html',
        controller:'PagesController',
        controllerAs:'pagesCtrl'       
      })
      .state('public.businesscardslogodesign', {
        url: '/public/business-cards-logo-design',
        templateUrl: 'src/public/pages/businesscardslogodesign.html',
        controller:'PagesController',
        controllerAs:'pagesCtrl'       
      })
      .state('public.businesscardstemplatedesign', {
        url: '/public/business-cards-template-design',
        templateUrl: 'src/public/pages/businesscardstemplatedesign.html',
        controller:'PagesController',
        controllerAs:'pagesCtrl'       
      })
      .state('public.notebook', {
        url: '/public/notebook',
        templateUrl: 'src/public/pages/notebook.html',
        controller:'PagesController',
        controllerAs:'pagesCtrl'       
      })
      .state('public.coaters', {
        url: '/public/coaters',
        templateUrl: 'src/public/pages/coaters.html',
        controller:'PagesController',
        controllerAs:'pagesCtrl'       
      })
      .state('public.accessories', {
        url: '/public/accessories',
        templateUrl: 'src/public/pages/accessories.html',
        controller:'PagesController',
        controllerAs:'pagesCtrl'       
      })
      .state('public.businesscardholders', {
        url: '/public/business-card-holders',
        templateUrl: 'src/public/pages/businesscardholders.html',
        controller:'PagesController',
        controllerAs:'pagesCtrl'       
      })
      .state('public.franchisee', {
        url: '/public/franchisee',
        templateUrl: 'src/public/pages/franchisee.html',
        controller:'PagesController',
        controllerAs:'pagesCtrl'       
      })
      .state('public.reseller', {
        url: '/public/reseller',
        templateUrl: 'src/public/pages/reseller.html',
        controller:'PagesController',
        controllerAs:'pagesCtrl'       
      })
      .state('public.samplepack', {
        url: '/public/samplepack',
        templateUrl: 'src/public/pages/samplepack.html',
        controller:'PagesController',
        controllerAs:'pagesCtrl'       
      })
      .state('public.howtoorder', {
        url: '/public/how-to-order',
        templateUrl: 'src/public/pages/howtoorder.html',
        controller:'PagesController',
        controllerAs:'pagesCtrl'       
      })
      .state('public.filesetup', {
        url: '/public/filesetup',
        templateUrl: 'src/public/pages/filesetup.html',
        controller:'PagesController',
        controllerAs:'pagesCtrl'       
      })
      .state('public.tracking', {
        url: '/public/tracking',
        templateUrl: 'src/public/pages/tracking.html',
        controller:'PagesController',
        controllerAs:'pagesCtrl'       
      })
      .state('public.treatments', {
        url: '/public/treatments',
        templateUrl: 'src/public/pages/treatments.html',
        controller:'PagesController',
        controllerAs:'pagesCtrl'       
      })
      .state('public.getaquote', {
        url: '/public/getaquote',
        templateUrl: 'src/public/pages/getaquote.html',
        controller:'PagesController',
        controllerAs:'pagesCtrl'       
      })
      .state('public.about', {
        url: '/public/about',
        templateUrl: 'src/public/pages/about.html',
        controller:'PagesController',
        controllerAs:'pagesCtrl'       
      })
      .state('public.contact', {
        url: '/public/contact',
        templateUrl: 'src/public/pages/contact.html',
        controller:'PagesController',
        controllerAs:'pagesCtrl'       
      })
      .state('public.terms', {
        url: '/public/terms',
        templateUrl: 'src/public/pages/termsandconditions.html',
        controller:'PagesController',
        controllerAs:'pagesCtrl'       
      })  
      .state('public.bcards', {
        url: '/public/bcards',
        templateUrl: 'src/public/pages/bcards.html',
        controller:'PagesController',
        controllerAs:'pagesCtrl'       
      })  
      .state('public.productbusinesscard', {
        url: '/public/product/{productname}',
        templateUrl: 'src/public/product/product.html',
        controller:'ProductBusinessCardController',
        controllerAs:'pbcctrl',
        resolve :{
          productData: ['$stateParams','ProductBusinessCardService',function ($stateParams,ProductBusinessCardService){
            return ProductBusinessCardService.setCurrentProduct($stateParams.productname);
            
          }]
        }      
      });
  }
  })();
  