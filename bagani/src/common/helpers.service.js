(
function(){
angular.module('common')
.service('helperService',helperService);
helperService.$inject = [];

function helperService(){
  var service = this;
  service.mergeArray = function(array1,array2){
    var result_array = [];
    var arr = array1.concat(array2);
    

    return result_array;
  };
service.uniqueArray = function(arr){
  var result_array = [];
  var len = arr.length;
  var assoc = {};

  while(len--) {
      var item = arr[len];

      if(!assoc[item]) 
      { 
          result_array.unshift(item);
          assoc[item] = true;
      }
  }
  return result_array;
};

}

})();