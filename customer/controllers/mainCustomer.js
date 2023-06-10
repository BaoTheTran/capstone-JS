var api = new Api();
var cart = [];
getLocalStorage();
fetchProductList();

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

domId('selectList').onchange = function filterProduct(){
    const select = domId('selectList').value;
    const promise = api.callApi("SaiGonPhone","GET",null);
    promise.then(function(res){      
        if(select == 'all'){
            renderProductList(res.data);
        }else{
            const filterProduct = res.data.filter((product)=>product.type ==select);
            renderProductList(filterProduct);
        }
    })
    .catch(function(err){
        console.log(err);
    });
}

//add to cart
function btnAddToCart(idProduct){
    const phone = api.callApi(`SaiGonPhone/${idProduct}`,"GET",null);

    phone.then(function(res){
        const product = new Product(res.data.id, res.data.name, res.data.price, res.data.screen, res.data.backCamera, res.data.frontCamera, res.data.img, res.data.desc, res.data.type);
        const item = new CartItem(1,product);
        const newItem = findItembyId(cart, item.product.id);
        
        if(newItem){
            newItem.quantity++;
        }else if(!newItem){
            cart.push(item);
        }
        renderCart(cart);
        localStorage.setItem('CART', JSON.stringify(cart));
        console.log(cart);
       
    })
    .catch(function(err){
        console.log(err);
    });
};

//plus
function btnAdd(id){
    let newItem = findItembyId(cart, id);
    if(newItem){
        newItem.quantity++;
        renderCart(cart);
        localStorage.setItem('CART', JSON.stringify(cart));
    }
}

//minus
function btnMinus(id){
    let newItem = findItembyId(cart, id);
    if(newItem){
        newItem.quantity--;
    };
    cart =cart.filter((item)=>item.quantity !== 0);
    renderCart(cart);
    localStorage.setItem('CART', JSON.stringify(cart));
}

//remove
function btnRemove(id){
    cart = cart.filter((item) =>item.product.id !== id);
    renderCart(cart);
    localStorage.setItem('CART',JSON.stringify(cart));
}

//empty cart
function emptyCart(){
    cart.splice(0,cart.length);
    renderCart(cart);
    localStorage.setItem('CART',JSON.stringify(cart));
}

//paynow
function payNow(){
    if(cart.length == 0){
        alert("PLEASE ADD MORE PRODUCTS TO YOUR CART!")
    }else{
        alert("YOUR PAYMENT IS SUCCESSFULL <3 !!!");
        emptyCart();
    }
}

//getLocalStorage
function getLocalStorage(){
    if(localStorage.getItem('CART')){
        var dataString = localStorage.getItem('CART');
        cart = JSON.parse(dataString);
        renderCart(cart);
    }
}
