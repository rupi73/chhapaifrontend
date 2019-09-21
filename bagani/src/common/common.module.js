(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath','')
.constant('ApiPathWP','https://chhapai.com/wp-json/chhp/v1/')
.config(config)
.run(['$state',function($state) {
  window.myAppErrorLog = [];
  $state.defaultErrorHandler(function(error) {
    // This is a naive example of how to silence the default error handler.
    console.log(error);
  });
}]);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
