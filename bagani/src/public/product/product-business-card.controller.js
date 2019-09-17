(
  function(){
"use strict"
angular.module('public')
.controller('ProductBusinessCardController1',ProductBusinessCardController);
ProductBusinessCardController1.$inject=['$stateParams','bproducts','bcardsjson'];
function ProductBusinessCardController($stateParams,bproducts,bcardsjson){
  var $ctrl = this;
  console.log('called');
  console.log(bproducts);
  console.log(bcardsjson);
  console.log($stateParams);
  var productId = bproducts.productNameId[$stateParams.productname];
  $ctrl.product = bproducts[productId];
  $ctrl.firstAccordionControl = {
    onExpand: function (expandedPaneIndex) {
        console.log('expanded:', expandedPaneIndex);
    },
    onCollapse: function (collapsedPaneIndex) {
        console.log('collapsed:', collapsedPaneIndex);
    }
};
$ctrl.getProductSettings = function(settings){
    var obj = {};
    console.log($ctrl.product);
if(typeof $ctrl.product[settings] !== 'undefined'){
    
    for(var i of $ctrl.product[settings] ){
        if(typeof bcardsjson[settings].opts[i] !== 'undefined')
        obj[i]=bcardsjson[settings].opts[i];
    }
}
return obj;
};
$ctrl.pandq = [{
    header: 'Paper',
    content: $ctrl.getProductSettings('papers')
}, {
    header: 'Quantity',
    content: bcardsjson.quantity.opts
}, {
    header: 'Size',
    content: bproducts[productId].paper
},{
    header:'Printing',
    content: bproducts[productId].paper
}

];
$ctrl.treatments = [{
    header: 'Foiling',
    content: 'Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.'
}, {
    header: 'Electroplating',
    content: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.'
}, {
    header: 'Letterpress',
    content: 'Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non.'
},{
    header:'RaiseSpotGloss',
    content: 'Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non.'
},
{
    header:'Embossing',
    content: 'Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non.'
},
{
    header:'RoundCorners',
    content: 'Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non.'
},
{
    header:'EdgePainting',
    content: 'Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non.'  
},
{
    header:'LaserEngrave',
    content: 'Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non.'  
}


];

$ctrl.addons = [{
    header: 'Accessories',
    content: 'Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.'
}, {
    header: 'Design',
    content: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.'
}


];




}
})();