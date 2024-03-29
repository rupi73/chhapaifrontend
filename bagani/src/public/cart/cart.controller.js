(
function(){
  "use strict"
  angular.module('public')
  .controller('CartController',CartController);
  CartController.$inject = ['$rootScope','CartService','$state','$http','$window','$scope','ApiPathWP'];
  function CartController($rootScope,CartService,$state,$http,$window,$scope,ApiPathWP){
    var cc = this;
    cc.items = [];
    cc.shipping = {India:{min:1500,rate:250},Other:{min:10000,rate:2000}};
    cc.gstRate ={rate:12};
    cc.customer = {billing:{},shipping:{}};
    /*cc.customer.billing = {first_name:'Rupinder',last_name:'Singh',email:'rupinder.singh@gmail.com',company:'Genie Robo',city:'Chandigarh',state:'Punjab',country:'India',street:'Industrial Area',zip:'164009',mobile:'9988776655'}*/
    cc.customer.shipping = angular.copy(cc.customer.billing);
    cc.paymentMethods = {Paypal:'Paypal Checkout',Razorpay:'Razorpay',BankTransfer:'Bank Transfer'};
    cc.amountShipping = 0;
    cc.placeOrderFormSubmitted = false;
    cc.removeItem = function(index){
      CartService.removeItem(index);
      cc.getItems();
    }//function

    cc.goToCheckout = function(){
    $state.go('public.checkout');
    }//function

    cc.getItems = function(){
      cc.items = CartService.getItems();
      console.log(cc.items.length);
      if(!cc.items.length)
      $state.go('public.home');
      console.log(cc.items);
      var amount = 0;
      var amountTax = 0;
      for(var item of cc.items){
       amount += item.totalPrice; 
      }//for
      cc.amount = amount;
      amountTax = ((cc.gstRate.rate * amount) / 100).toFixed(2);
      cc.amountTax = amountTax;
      cc.amountTotal = (Number(amount) + Number(cc.amountTax)).toFixed(2);
      
    };//function
    cc.placeOrderFormSubmit = function(){
      if($scope.checkout.$invalid){
        angular.forEach($scope.checkout.$error, function (field) {
          angular.forEach(field, function(errorField){
              errorField.$setTouched();
          })
      });
        console.log(43);
      }
      
      cc.placeOrderFormSubmitted = true;
      return true;
    }
    cc.placeOrder = function(){
      var data = {items:cc.items,
      customer:{billing:cc.customer.billing,shipping:cc.customer.shipping},
      payment:{paymentBy:cc.paymentBy,amountTax:cc.amountTax,amount:cc.amount,amountTotal:cc.amountTotal,amountShipping:cc.amountShipping}

    
    };

    var postData = $.param(data);
    console.log(postData);
    $http.post(ApiPathWP + "createorder/",postData,{ headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
    .then(function(response){
      console.log(response.data.payurl);
      $window.location.href = response.data.payurl;
      //$window.open(response.data.payurl, "_blank")
    },function(error){console.log(error)});

    }//function

    cc.shipAddressProcess = function(){
      if(cc.shipAddress)
      cc.customer.shipping={};
      else
      cc.customer.shipping = angular.copy(cc.customer.billing);

      console.log(cc.customer.shipping);

    }//function

    cc.validateForm = function(){

    }

    cc.getItems();

  }//controller



})();