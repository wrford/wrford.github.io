/*global _*/
(function () {
    var products;
    
    $.ajax('data/product.json')
        .done(function (result, status, request) {
            products = result;
            console.log(products);
            init();
        })
        .fail(function (request, status, error) {
            console.log(status + ': ' + error);
        });
        
        
    function filterProducts (searchTerm) {
        var filtered = _.filter(products, function (p){
            return searchObject(searchTerm, p);
            
        });
        createProductList(filtered);
    }
        
    function searchObject (searchTerm, obj){
        return _.reduce(obj, function (memo, val) {
                if (memo === true) return true;
            
                if (Array.isArray(val) || typeof val === 'object')
                     return searchObject(searchTerm, val);
                if (typeof val !== 'string') return memo;
                
                return (val.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
            }, false);
    }    
    
    

   
function createProductList (products){
   
    
    var $products = $('#products');
    $products.empty();
    var $lis = _.map(products, function(p){
        var $li = $('<li>').addClass('products');
        $li.data("product", p);
        var $phonedescription = $('<p>').addClass('title').text(p.desc);
        var $phonePrice = $('<p>').text('$' + p.price);
        if (p.stock < 10){
            var $stock = $('<h3>').text('Hurry-Only ' + p.stock + ' left!');
        } if (p.stock >= 10 && p.stock <30){
            $stock = $('<h4>').text(p.stock + ' in stock.');
        }
        //var $color = $('<p>').addClass('color').text(p.color);
        //var $colorSwatch = $('<div>').addClass('colorswatch');
        // var $availableColors = _.map(p.availableColors, function(s, i) {
        //     var $cli = $('<li>').text(p.availableColors[i]);
        //     return $cli;
        // });
        
        // var $specs = _.map(p.specs, function(s, i){
        //     var $sli =$('<li>').text(p.specs[i]);
        //     return $sli;
        // });

        var $phonePic = $('<img>').addClass('phone-pic').attr('src', 'img/product/thumbs/' + p.image);
        
        $li.append([$phonePic, $phonedescription, $phonePrice, $stock]);
        // $phonedescription.onclick="document.getElementById('product-details').style.display=''";
        // $phonePrice.onclick="document.getElementById('product-details').style.display=''";
        //$stock.onclick="document.getElementById('product-details').style.display=''";
        // $phonePic.onclick="document.getElementById('product-details').style.display=''";
        // $li.append($availableColors);
        // $li.append($specs);
        return $li;
    });
    $products.append($lis);
    
}





 function init() {
        
        createProductList(products);
        
        $('#search').on('keyup', function (e) {
            var term = $(e.target).val();
            filterProducts(term);
        });
        
        $('.close', '#product-details').on('click', function(e) {
            $('#product-details').fadeOut(400);
        });
        
        $('li', '#products').on('click', function(e) {
            var $li = $(e.currentTarget);
            var $popup = $('#product-details');
            $popup.fadeIn(400);
            
            var productData = $li.data("product");
            
            $('.image-container > img', $popup).attr("src", "img/product/" + productData.image);
            
            var $specs = _.map(productData.specs, function(s, i){
                var $sli =$('<li>').text(productData.specs[i]);
                return $sli;
                });
            $('.specs').append($specs);
            $('.desc').text(productData.desc);
            
        });
        
    }


   
})();
