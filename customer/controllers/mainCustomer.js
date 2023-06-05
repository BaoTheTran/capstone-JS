var api = new Api();


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

domId('selectList').onchange = function filterProduct(){
    var select = domId('selectList').value;
    var promise = api.callApi("SaiGonPhone","GET",null)
    promise.then(function(res){
        const filterProduct = res.data.filter((product)=> product.type ==select);
        renderProductList(filterProduct);
    })
    .catch(function(err){
        console.log(err);
    });
}