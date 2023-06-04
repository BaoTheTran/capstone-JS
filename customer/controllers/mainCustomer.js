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
