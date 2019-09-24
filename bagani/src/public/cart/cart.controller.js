(
function(){
  "use strict"
  angular.module('public')
  .controller('CartController',CartController);
  CartController.$inject = ['$rootScope','CartService','$state','$http'];
  function CartController($rootScope,CartService,$state,$http){
    var cc = this;
    cc.items = CartService.getItems();
    cc.shipping = {India:{min:2500,rate:250}};
    cc.gstRate ={rate:18.5};
    cc.customer = {billing:{},shipping:{}};
    cc.customer.billing = {first_name:'Rupinder',last_name:'Singh',email:'rupinder.singh#gmail.com',company:'Genie Robo',city:'Chandigarh',state:'Punjab',country:'India',street:'Industrial Area',zip:'164009',mobile:'9988776655'}
    cc.customer.shipping = angular.copy(cc.customer.billing);
    cc.paymentMethods = {Paypal:'Paypal Checkout',Razorpay:'Razorpay',BankTransfer:'Bank Transfer'};
    console.log(cc.items);
    cc.removeItem = function(index){
      CartService.removeItem(index);
      cc.items = CartService.getItems();
    }

    cc.goToCheckout = function(){
    $state.go('public.checkout');
    }
    cc.placeOrder = function(){
      var data = {items:[{id:122,name:'pearl Business Card',quantity:100,attributes:{paper:'Pearl 320gsm',size:'120x300',printing:'single side',treatments:{foiling:{front:'copper',back:'Gold'},embossed:{side:'single'}}}}],
      customer:{billing:cc.billing}
    
    };
   var postData = $.param(data);
    console.log(postData);
    $http.post("https://www.chhapai.com/wp-json/chhp/v1/createorder/",postData,{ headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
    .then(function(response){
      console.log(response)},function(error){console.log(error)});

    }

  }



})();