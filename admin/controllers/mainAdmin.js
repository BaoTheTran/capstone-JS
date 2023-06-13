var api = new Api();

fetchProductList()
//render product from server
function fetchProductList(){
    var promise = api.callApi("SaiGonPhone","GET",null);
    promise
    .then(function(res){
        renderProductList(res.data);
    })
    .catch(function(err){
        console.log(err);
    })
};

//delete
function btnDelete(id){
    api.callApi(`SaiGonPhone/${id}` ,"DELETE", null)
    .then(function (){
        fetchProductList();
      })
      .catch(function (err) {
        console.log(err);
      });
};

//add product
domId('btnAddPhone').addEventListener("click",function(){
    var phone = getItem(true);
    api.callApi("SaiGonPhone","POST",phone)
    .then(function(){
        fetchProductList();
    })
    .catch(function (err) {
        console.log(err);
    });
});

//edit
function btnEdit(id){
    api.callApi(`SaiGonPhone/${id}` ,"GET", null)
    .then(function(res){
        domId('id').value =res.data.id;
        domId('name').value =res.data.name;
        domId('price').value =res.data.price;
        domId('screen').value=res.data.screen;
        domId('backCam').value=res.data.backCamera;
        domId('frontCam').value=res.data.frontCamera;
        domId('img').value=res.data.img;
        domId('desc').value=res.data.desc;
        domId('type').value=res.data.type;
    })
    .catch(function (err) {
        console.log(err);
    });
};

//update
domId('btnUpdate').addEventListener("click",function(id){
    var phone = getItem(id);
    api.callApi(`SaiGonPhone/${phone.id}` ,"PUT", phone)
    .then(function () {
        fetchProductList();
      })
      .catch(function (err) {
        console.log(err);
      });
});

//searchPhoneName
domId('searchPhoneName').addEventListener('keyup',function(){
    var keywords = domId('searchPhoneName').value;
    api.callApi("SaiGonPhone","GET",null)
   .then(function (res) {
       var findArr = findPhoneName(keywords,res.data);
        renderProductList(findArr); 
      })
      .catch(function (err) {
        console.log(err)
      });
})