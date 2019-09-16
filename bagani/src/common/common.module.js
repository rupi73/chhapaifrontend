(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath','')
.constant('ApiPathWP','https://chhapai.com/wp-json/chhp/v1/')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
