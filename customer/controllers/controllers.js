//domid
const domId = (id)=>document.getElementById(id);

//render list
const renderProductList = (productArr)=>{
    console.log("productArr", productArr);
    let content ="";
    productArr.forEach(product =>{
        content += ` 
        <div class="col-lg-3 col-md-6">
            <div class="card text-black h-100">
                <div class="content-overlay"></div>
                <img src=${product.img} class="card-img" alt="Phone Image" />
                <div class="content-details fadeIn-top">
                    <h3 class ='pb-5'>Specifications</h3>
                    <div class="d-flex justify-content-start py-1">
                        <span class='text-light'><b>Screen:</b></span>
                        <span class='text-light'>&nbsp ${product.screen}</span>
                    </div>
                    <div class="d-flex justify-content-start py-1">
                        <span class='text-light'><b>Back Camera:</b> ${product.backCamera}</span>
                    </div>
                    <div class="d-flex justify-content-start py-1">
                        <span class='text-light'><b>Front Camera:</b> ${product.frontCamera}</span>
                    </div>
                    <p class = 'pt-5'><u>click here for more details</u></p>
                </div>

      <div class="card-body">
        <div class="text-center">
          <h5 class="card-title pt-3">${product.name}</h5>
          <span class="text-muted mb-2">$${product.price}</span>
          <span class="text-danger"><s>$${Number(product.price) + 300}</s></span>
        </div>
        <div class="mt-3 brand-box text-center">
          <span>${product.type}</span>
        </div>
        <div class="d-flex justify-content-start pt-3">
          <span><b>Description:</b> ${product.desc}</span>
        </div>
        <div class="d-flex justify-content-between pt-3">
          <div class="text-warning">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
          </div>
          <span class = 'text-success'><b>In Stock</b></span>
        </div>
        <button type="button" class="btn btn-block w-50" onclick ="btnAddToCart('${product.id
      }')">Add to cart</button>
      </div>
    </div>
  </div>`;
    });
    domId('phoneList').innerHTML = content;
};

//xét id sản phẩm trong giỏ hàng
function findItembyId(cartArr, id) {
  let item ="";
  cartArr.forEach((object)=>{
    if(object.product.id == id){
      item = object;
      return;
    }
  });
  return item;
}

//total 
function calSubTotal(cartArr){
  let total = 0;
  cartArr.forEach((item)=>{
    total += item.quantity * item.product.price;
  });
  return total;
}

//render cart
const renderCart = (cartArr)=>{
  let content ="";
  cartArr.forEach((item)=>{
    content += `
    <div class="product">
    <div class="product__1">
      <div class="product__thumbnail">
        <img src=${item.product.img} 
          alt="Italian Trulli">
      </div>
      <div class="product__details">
        <div style="margin-bottom: 8px;"><b>${item.product.name}</b></div>
        <div style="font-size: 90%;">Screen: <span class="tertiary">${item.product.screen
        }</span></div>
        <div style="font-size: 90%;">Back Camera: <span class="tertiary">${item.product.backCamera
        }</span></div>
        <div style="font-size: 90%;">Front Camera: <span class="tertiary">${item.product.frontCamera
        }</span></div>
        <div style="margin-top: 8px;"><a href="#!" onclick ="btnRemove('${item.product.id
        }')">Remove</a></div>
      </div>
    </div>
    <div class="product__2">
      <div class="qty">
        <span><b>Quantity:</b> </span> &nbsp &nbsp
        <span class="minus bg-dark" onclick ="btnMinus('${item.product.id}')">-</span>
        <span class="quantityResult mx-2">${item.quantity}</span>
        <span class="plus bg-dark" onclick ="btnAdd('${item.product.id}')">+</span>
      </div>
      <div class="product__price"><b>$${item.quantity * item.product.price}</b></div>
    </div>
  </div>`;
  });
  
  //render price
  const subTotal =calSubTotal(cartArr);
  domId('subTotal').innerHTML="$" + subTotal;
  domId('shipping').innerHTML="Free Ship";
  domId('tax').innerHTML="$" +subTotal *.1;
  domId('priceTotal').innerHTML= "$" +Math.floor(subTotal*1.1);

  //render icon count
  let countCart = 0;
  cartArr.forEach((item)=>{
    countCart += item.quantity;
  });
  domId('cartCount').innerHTML = countCart;

  domId('cartList').innerHTML = content;
};

