var api = new Api();
var cart = [];

//render
function fetchProductList(){
    var promise = api.callApi("SaiGonPhone","GET",null);
    promise
    .then(function(res){
        renderProductList(res.data);
    })
    .catch(function(err){
        console.log(err);
    });
};

fetchProductList();

//filter brand
domId('selectList').onchange = function filterProduct(){
    var select = domId('selectList').value;
    var promise = api.callApi("SaiGonPhone","GET",null)
    promise.then(function(res){
        const filterProduct = res.data.filter((product)=> product.type ==select);
        if(select== 'all'){
            renderProductList(res.data);
        }else if(
        renderProductList(filterProduct));
    })
    .catch(function(err){
        console.log(err);
    });
};

//add to cart
domId('btnAddToCart').addEventListener("click",function(){
    var phone = api.callApi(`SaiGonPhone${product.id}`,"GET",product);
    var {id, name, price, screen, backCamera, frontCamera, img, desc, type} = phone;
    var product = new Product(id, name, price, screen, backCamera, frontCamera, img, desc, type);
    var item = new CartItem(1,product);

});