(
  function(){
"use strict"
angular.module('public')
.controller('HomeController',HomeController);
HomeController.$inject = ['homeContent'];
function HomeController(homeContent){
var ctrl = this;
console.log(homeContent);
}
})();