(
  function(){
"use strict"
angular.module('public')
.controller('ProductBusinessCardController',ProductBusinessCardController);
ProductBusinessCardController.$inject=['productData','ProductBusinessCardService','CartService','$location','$scope'];
function ProductBusinessCardController(productData,ProductBusinessCardService,CartService,$location,$scope){
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
$ctrl.faq = productData.faq;
$ctrl.reviews = "";
$ctrl.howToOrder = ProductBusinessCardService.bcardsjson.howToOrder;
$ctrl.paymentOptions = ProductBusinessCardService.bcardsjson.paymentOptions;
$ctrl.selected={id:productData.id,name:productData.name,paper:productData.paper.labelSelected,quantity:ProductBusinessCardService.bcardsjson.quantity.labelSelected,printing:ProductBusinessCardService.bcardsjson.printing.labelSelected,size:ProductBusinessCardService.bcardsjson.size.labelSelected,design:ProductBusinessCardService.bcardsjson.designs.labelSelected}
$ctrl.percardprice={quantity:{100:200,250:500}};

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
var treatments = [{
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

$ctrl.treatments = [];
$ctrl.updateTreatments = function(){
var paper = $ctrl.selected.paper; 
var paperTreatments = productData.paper[paper].treatments;
$ctrl.treatments = [];
var selectedTreatments = angular.copy($ctrl.selected.treatments);
console.log(selectedTreatments);
$ctrl.selected.treatments ={};
for(var k of paperTreatments){
var obj = {
    header : k,
    content : typeof ProductBusinessCardService.bcardsjson.treatments[k].opts.colors === 'undefined'?ProductBusinessCardService.bcardsjson.treatments[k].opts:ProductBusinessCardService.bcardsjson.treatments[k].opts.colors,
    single : typeof ProductBusinessCardService.bcardsjson.treatments[k].opts.colors === 'undefined'?true:false    
}
$ctrl.treatments.push(obj);
if(typeof selectedTreatments !== 'undefined' && typeof selectedTreatments[k] !== 'undefined')
$ctrl.selected.treatments[k] = selectedTreatments[k];
}
}
$ctrl.selected.labels={paper:{},accessories:{},treatments:{},design:{}};

$ctrl.updatePrice = function(head){
    head = head || 'head';
    
    console.log($ctrl.selected);
    $ctrl.selected.labels={paper:{},accessories:{},design:{}};
    var selectedQuantity = $ctrl.selected.quantity;
    var paperPrices = ProductBusinessCardService.bcardsjson.paper;
    var treatmentPrices = ProductBusinessCardService.bcardsjson.treatments;
    var accessPrices = ProductBusinessCardService.bcardsjson.accessories;
    var designPrices = ProductBusinessCardService.bcardsjson.designs;
    for(var h in productData.quantity.opts){
        var quantity = h;
        var price = 0;
    for(var i in $ctrl.selected){
          switch(i){
            case 'paper':
            var paper = $ctrl.selected[i];
            if(head == 'paper' && quantity==selectedQuantity)
            $ctrl.updateTreatments();
            if(quantity==selectedQuantity){
            $ctrl.selected.labels.paper.price = parseInt(paperPrices[paper].quantity[quantity]);
            }
            price += parseInt(paperPrices[paper].quantity[quantity]);
            break;
            case 'treatments':
                var treatments = $ctrl.selected.treatments;
                console.log(treatments);
                    for(var treat in treatments ){  
                        if (typeof treatments[treat] !== 'undefined' && Object.keys(treatments[treat]).length != 0 && treatments[treat].constructor === Object){
                            var side;
                            var color;
                            var label="";
                            if(typeof treatments[treat]['front']!=='undefined'){
                            color = treatments[treat]['front'];
                            side = "Single Side";
                            label=label + "Front:-" +color;
                            }
                            else if(typeof $ctrl.selected.treatments[treat] && typeof $ctrl.selected.treatments[treat].front!=='undefined'){
                            delete $ctrl.selected.treatments[treat].front; 
                            }
                            if(typeof treatments[treat]['back']!=='undefined'){
                            color = typeof color==='undefined'?treatments[treat]['back']:color;
                            side = "Single Side";
                            label=label + "Back:-" +treatments[treat]['back'];
                            }
                            else if(typeof $ctrl.selected.treatments[treat] && typeof $ctrl.selected.treatments[treat].back !=='undefined'){
                                delete $ctrl.selected.treatments[treat].back; 
                                }
                            if(typeof treatments[treat]['front']!=='undefined' && typeof treatments[treat]['back']!=='undefined')
                            side = "Both Sides";
                            if(typeof color !=='undefined' && typeof side !=='undefined'){
                            price += parseInt(treatmentPrices[treat][side][color][quantity]);
                            if(quantity==selectedQuantity){
                            $ctrl.selected.labels[treat]={label:label,price:parseInt(treatmentPrices[treat][side][color][quantity])}
                            }//if selected quantity
                            }//color and side
                            else{
                                delete $ctrl.selected.treatments[treat];  
                            }
                        }
                        else if(typeof treatments[treat] !== 'undefined'){
                                                     var value = treatments[treat];

                            console.log("selected treatment is" +treat);
                            if(quantity==selectedQuantity){
                            $ctrl.selected.labels[treat]={label:value,price:parseInt(treatmentPrices[treat][value][quantity])}
                            }//if      
                            price += parseInt(treatmentPrices[treat][value][quantity]);
                           
                        }
                        else if(typeof treatments[treat] === 'undefined'){
                            delete $ctrl.selected.treatments[treat];
                               
                        }
                        
                    }
            
            break;
            case 'accessories':
            var access = $ctrl.selected[i];
            console.log(access);
            if(typeof access !== 'undefined'){
                if(quantity==selectedQuantity){
                $ctrl.selected.labels.accessories.label = accessPrices.opts[access];
                $ctrl.selected.labels.accessories.price = parseInt(accessPrices[access]);
                }//if
            price += parseInt(accessPrices[access]);
            }
            else if($ctrl.selected.accessories){
               delete $ctrl.selected.accessories;
            }
            break;
            case 'design':
            var design = $ctrl.selected[i];
            if(quantity==selectedQuantity){
            $ctrl.selected.labels.design.label = designPrices.opts[design];
            $ctrl.selected.labels.design.price = parseInt(designPrices[design]);
            }
            price += parseInt(designPrices[design]);
            
            break;


        }
    }//loop selected
    if(quantity==selectedQuantity){
    $ctrl.selected.totalPrice = price;
    }
    $ctrl.percardprice.quantity[quantity] = (price/quantity).toFixed(2);
}//loop quantity 
    


}//function

$ctrl.addCart = function(){
 CartService.addItem($ctrl.selected);
 $location.url('public/cart');
};
$scope.$on('pq-accordion:onReady', function () {
    var firstPane = $ctrl.pandq[1];
    $scope.accordionPaperAndQuantity.toggle(firstPane.header);
  });

$ctrl.updatePrice('paper');
}
})();