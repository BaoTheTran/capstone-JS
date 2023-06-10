//domid
const domId = (id)=>document.getElementById(id);

//render list
const  renderProductList = (productArr)=>{
    console.log("productArr", productArr);
    let content = "";
    productArr.forEach((product) =>{
        content += ` <tr>
        <td>${product.id}</td>
        <td><strong>${product.name}</strong></td>
        <td>$${product.price}</td>
        <td style="text-align: center"><img src=${product.img} alt="phone-img" width="150" height="150"></td>
        <td><b>${product.desc}</b> 
        <p>Screen :  ${product.screen}</p>
        <p>Back Camera : ${product.backCamera} </p>
        <p>Front Camera : ${product.frontCamera}</p>
        </td>
        <td class = ''style="text-align: center"><button class="btn my-3 me-1" data-bs-toggle="modal"
        data-bs-target="#exampleModal" onclick ="btnEdit('${product.id}')"  id='btnEdit'>
        Edit<i class="fa fa-pencil-square ms-2"></i>
        </button><button class="btn " onclick ="btnDelete('${product.id}')" id='btnDelete'>
        Delete <i class="fa fa-trash ms-2"></i>
        </button></td>
        </tr>`;
    });
    domId('tablePhone').innerHTML = content;
};

//get item 
function getItem(id){
    var name = domId('name').value;
    var price = domId('price').value;
    var screen = domId('screen').value;
    var backCam = domId('backCam').value; 
    var frontCam = domId('frontCam').value;
    var img = domId('img').value;
    var desc = domId('desc').value;
    var type = domId('type').value;

    const phone = new Phone(id,name,price,screen,backCam,frontCam,img,desc,type);
    return phone;
};

function findPhoneName(keywords,productArr){
    var findArr = [];
    for(var i = 0; i < productArr.length; i++){
        var phone = productArr[i];
        var keywordsLower = keywords.toLowerCase();
        var namePhoneLower = phone.name.toLowerCase();
        if(namePhoneLower.indexOf(keywordsLower) !== -1){
            findArr.push(phone);
        }
    }
    return findArr;
}
