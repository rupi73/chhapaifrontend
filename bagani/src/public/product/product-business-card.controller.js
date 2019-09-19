(
  function(){
"use strict"
angular.module('public')
.controller('ProductBusinessCardController',ProductBusinessCardController);
ProductBusinessCardController.$inject=['productData','ProductBusinessCardService'];
function ProductBusinessCardController(productData,ProductBusinessCardService){
  var $ctrl = this;
  console.log('called');
  console.log(productData);
  $ctrl.firstAccordionControl = {
    onExpand: function (expandedPaneIndex) {
        console.log('expanded:', expandedPaneIndex);
    },
    onCollapse: function (collapsedPaneIndex) {
        console.log('collapsed:', collapsedPaneIndex);
    }
};
$ctrl.getProductSettings = function(settings){
    return 'abc';
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
    content: productData.paper.opts
}, {
    header: 'Quantity',
    content: productData.quantity.opts
}, {
    header: 'Size',
    content: productData.size.opts
},{
    header:'Printing',
    content: productData.printing.opts
}

];
$ctrl.treatments = [{
    header: 'Foiling',
    both:true,
    content:ProductBusinessCardService.bcardsjson.treatments.foiling.opts.colors
}, {
    header: 'Electroplating',
    content: ProductBusinessCardService.bcardsjson.treatments.electroplating.opts.colors,
    both:true
}, {
    header: 'Letterpress',
    content: ProductBusinessCardService.bcardsjson.treatments.letterpress.opts.colors,
    both:true
},{
    header:'RaiseSpotGloss',
    content: ProductBusinessCardService.bcardsjson.treatments.raisespotgloss.opts,
    single: true
},
{
    header:'Embossing',
    content: ProductBusinessCardService.bcardsjson.treatments.embossing.opts,
    single: true
},
{
    header:'RoundCorners',
    content: ProductBusinessCardService.bcardsjson.treatments.roundcorners.opts,
    single: true
},
{
    header:'EdgePaint',
    content: ProductBusinessCardService.bcardsjson.treatments.edgepaint.opts,
    single: true
},
{
    header:'LaserEngrave',
    content: ProductBusinessCardService.bcardsjson.treatments.laserengrave.opts,
    single: true 
},
{
    header:'LaserCut',
    content: ProductBusinessCardService.bcardsjson.treatments.lasercut.opts,
    single: true 
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