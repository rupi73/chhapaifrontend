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
$ctrl.description = productData.description;
$ctrl.additionalInfo = productData.additionalInfo;
$ctrl.faq = productData.additionalInfo;
$ctrl.reviews = productData.additionalInfo;
$ctrl.howToOrder = ProductBusinessCardService.bcardsjson.howToOrder;
$ctrl.paymentOptions = ProductBusinessCardService.bcardsjson.paymentOptions;
$ctrl.selected={"paper":productData.paper.labelSelected,"quantity":ProductBusinessCardService.bcardsjson.quantity.labelSelected,"printing":ProductBusinessCardService.bcardsjson.printing.labelSelected,"size":ProductBusinessCardService.bcardsjson.size.labelSelected}
$ctrl.pandq = [{
    header: 'paper',
    content: productData.paper.opts
}, {
    header: 'quantity',
    content: productData.quantity.opts
}, {
    header: 'size',
    content: productData.size.opts
},{
    header:'printing',
    content: productData.printing.opts
}

];
$ctrl.treatments = [{
    header: 'foiling',
    both:true,
    content:ProductBusinessCardService.bcardsjson.treatments.foiling.opts.colors
}, {
    header: 'electroplating',
    content: ProductBusinessCardService.bcardsjson.treatments.electroplating.opts.colors,
    both:true
}, {
    header: 'letterpress',
    content: ProductBusinessCardService.bcardsjson.treatments.letterpress.opts.colors,
    both:true
},{
    header:'raisespotgloss',
    content: ProductBusinessCardService.bcardsjson.treatments.raisespotgloss.opts,
    single: true
},
{
    header:'embossing',
    content: ProductBusinessCardService.bcardsjson.treatments.embossing.opts,
    single: true
},
{
    header:'roundCorners',
    content: ProductBusinessCardService.bcardsjson.treatments.roundcorners.opts,
    single: true
},
{
    header:'edgepaint',
    content: ProductBusinessCardService.bcardsjson.treatments.edgepaint.opts,
    single: true
},
{
    header:'laserengrave',
    content: ProductBusinessCardService.bcardsjson.treatments.laserengrave.opts,
    single: true 
},
{
    header:'lasercut',
    content: ProductBusinessCardService.bcardsjson.treatments.lasercut.opts,
    single: true 
}


];

$ctrl.addons = [{
    header: 'accessories',
    content: ProductBusinessCardService.bcardsjson.accessories.opts,
    single: true 
}, {
    header: 'design',
    content: ProductBusinessCardService.bcardsjson.designs.opts,
    single: true
}


];




}
})();