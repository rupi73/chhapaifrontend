(
  function(){
"use strict"
angular.module('public')
.controller('ProductBusinessCardController',ProductBusinessCardController);
ProductBusinessCardController.$inject=['productData','ProductBusinessCardService','Cart'];
function ProductBusinessCardController(productData,ProductBusinessCardService,Cart){
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
    header:'roundcorners',
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
$ctrl.updatePrice = function(){
    var price = 0;
    console.log($ctrl.selected);
    var quantity = $ctrl.selected.quantity;
    var paperPrices = ProductBusinessCardService.bcardsjson.paper;
    var treatmentPrices = ProductBusinessCardService.bcardsjson.treatments;
    var accessPrices = ProductBusinessCardService.bcardsjson.accessories;
    var designPrices = ProductBusinessCardService.bcardsjson.designs;
    for(var i in $ctrl.selected){
          switch(i){
            case 'paper':
            var paper = $ctrl.selected[i];
            price += parseInt(paperPrices[paper].quantity[quantity]);
            break;
            case 'treatments':
                var treatments = $ctrl.selected.treatments;
                console.log(treatments);
                    for(var treat in treatments ){  
                        if (typeof treatments[treat] !== 'undefined' && Object.keys(treatments[treat]).length != 0 && treatments[treat].constructor === Object){
                            var side;
                            var color;
                            if(typeof treatments[treat]['front']!=='undefined'){
                            color = treatments[treat]['front'];
                            side = "Single Side";
                            }
                            else if(typeof treatments[treat]['back']!=='undefined'){
                            color = treatments[treat]['back'];
                            side = "Single Side";
                            }
                            if(typeof treatments[treat]['front']!=='undefined' && typeof treatments[treat]['back']!=='undefined')
                            side = "Both Sides";
                            if(typeof color !=='undefined' && typeof side !=='undefined')
                            price += parseInt(treatmentPrices[treat][side][color][quantity]);
                        }
                        else if(typeof treatments[treat] !== 'undefined'){
                                                     var value = treatments[treat];
                            console.log(treat);
                            price += parseInt(treatmentPrices[treat][value][quantity]);
                           
                        }
                        
                    }
            
            break;
            case 'accessories':
            var access = $ctrl.selected[i];
            console.log(access);
            if(typeof access !== 'undefined')
            price += parseInt(accessPrices[access]);
            break;
            case 'design':
            var design = $ctrl.selected[i];
            price += parseInt(designPrices[design]);
            
            break;


        }
    }
     
    $ctrl.totalPrice = price;
};
$ctrl.addCart = function(){
Cart.addItem();
};
$ctrl.updatePrice();
}
})();