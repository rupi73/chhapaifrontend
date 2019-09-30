(function() {
  'use strict';
  
  angular.module('public')
  .config(routeConfig);
  
  /**
   * Configures the routes and views
   */
  routeConfig.$inject = ['$stateProvider','$locationProvider','$urlRouterProvider'];
  function routeConfig ($stateProvider,$locationProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
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
      .state('public.signin', {
        url: '/public/signin',
        templateUrl: 'src/public/pages/signin.html',
        controller:'PagesController',
        controllerAs:'pagesCtrl'  
      })     
      .state('public.register', {
        url: '/public/register',
        templateUrl: 'src/public/pages/register.html',
        controller:'PagesController',
        controllerAs:'pagesCtrl'  
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
      .state('public.coasters', {
        url: '/public/coasters',
        templateUrl: 'src/public/pages/coasters.html',
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
      .state('public.franchise', {
        url: '/public/franchise',
        templateUrl: 'src/public/pages/franchise.html',
        controller:'PagesController',
        controllerAs:'pagesCtrl'       
      })
      .state('public.reseller', {
        url: '/public/reseller',
        templateUrl: 'src/public/pages/reseller.html',
        controller:'PagesController',
        controllerAs:'pagesCtrl'       
      })
      .state('public.blog', {
        url: '/public/blog',
        templateUrl: 'src/public/pages/blog.html',
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
      .state('public.premiumcards', {
        url: '/public/premium-cards',
        templateUrl: 'src/public/pages/premiumcards.html',
        controller:'PagesController',
        controllerAs:'pagesCtrl'       
      }) 
      .state('public.envirocards', {
        url: '/public/enviro-cards',
        templateUrl: 'src/public/pages/envirocards.html',
        controller:'PagesController',
        controllerAs:'pagesCtrl'       
      })     
      .state('public.bespokecards', {
        url: '/public/bespoke-cards',
        templateUrl: 'src/public/pages/bespokecards.html',
        controller:'PagesController',
        controllerAs:'pagesCtrl'       
      })  
      .state('public.uniquecards', {
        url: '/public/unique-cards',
        templateUrl: 'src/public/pages/uniquecards.html',
        controller:'PagesController',
        controllerAs:'pagesCtrl'       
      }) 
      .state('public.checkout', {
        url: '/public/checkout',
        templateUrl: 'src/public/cart/checkout.html',
        controller:'CartController',
        controllerAs:'cctrl'       
      })
      .state('public.cart', {
        url: '/public/cart',
        templateUrl: 'src/public/cart/cart.html',
        controller:'CartController',
        controllerAs:'cctrl'       
      }) 
      .state('public.refundpolicy', {
        url: '/public/refundpolicy',
        templateUrl: 'src/public/pages/refundpolicy.html',
        controller:'PagesController',
        controllerAs:'pagesCtrl'       
      }) 
      .state('public.clienthappiness', {
        url: '/public/clienthappiness',
        templateUrl: 'src/public/pages/clienthappiness.html',
        controller:'PagesController',
        controllerAs:'pagesCtrl'       
      }) 
      
      .state('public.privacypolicy', {
        url: '/public/privacypolicy',
        templateUrl: 'src/public/pages/privacypolicy.html',
        controller:'PagesController',
        controllerAs:'pagesCtrl'       
      }) 
      .state('public.termsandconditions', {
        url: '/public/termsandconditions',
        templateUrl: 'src/public/pages/termsandconditions.html',
        controller:'PagesController',
        controllerAs:'pagesCtrl'       
      }) 
      .state('public.beanaffiliate', {
        url: '/public/beanaffiliate',
        templateUrl: 'src/public/pages/beanaffiliate.html',
        controller:'PagesController',
        controllerAs:'pagesCtrl'       
      }) 
      .state('public.referandearn', {
        url: '/public/referandearn',
        templateUrl: 'src/public/pages/referandearn.html',
        controller:'PagesController',
        controllerAs:'pagesCtrl'       
      }) 
      .state('public.startupcoupons', {
        url: '/public/startupcoupons',
        templateUrl: 'src/public/pages/startupcoupons.html',
        controller:'PagesController',
        controllerAs:'pagesCtrl'       
      }) 

      .state('public.designservices', {
        url: '/public/designservices',
        templateUrl: 'src/public/pages/designservices.html',
        controller:'PagesController',
        controllerAs:'pagesCtrl'       
      }) 
      .state('public.premiumsample', {
        url: '/public/premiumsample',
        templateUrl: 'src/public/pages/premiumsample.html',
        controller:'PagesController',
        controllerAs:'pagesCtrl'       
      }) 
      .state('public.goodstuff', {
        url: '/public/goodstuff',
        templateUrl: 'src/public/pages/goodstuff.html',
        controller:'PagesController',
        controllerAs:'pagesCtrl'       
      }) 
      .state('public.mattfinish', {
        url: '/public/mattfinish',
        templateUrl: 'src/public/pages/mattfinish.html',
        controller:'PagesController',
        controllerAs:'pagesCtrl'       
      }) 
      .state('public.Softfuedefinsh', {
        url: '/public/Softfuedefinsh',
        templateUrl: 'src/public/pages/Softfuedefinsh.html',
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
       // $locationProvider.html5Mode(true).hashPrefix('!');
  }
  })();
  