function Validation(){

    this.kiemTraRong = function(value, errorID, mess){
        if(value === ""){
            domId(errorID).style.display = "inline";
            domId(errorID).innerHTML = mess;
            return false;
        }
        domId(errorID).style.display = "none";
        return true;
    }

    this.kiemTraChuoiKiTu = function(value, errorID,mess){
        var letter =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
      if(value.match(letter)){
        domId(errorID).style.display = "none";
            return true;
      }
      domId(errorID).style.display = "inline";
      domId(errorID).innerHTML = mess;
        return false;
    };

    this.kiemTraSo = function(value, errorID,mess,min, max){
        if(min<= value && value <= max){
            domId(errorID).style.display = "none";
            return true;
        }
        domId(errorID).style.display = "inline";
        domId(errorID).innerHTML = mess;
            return false;
    };

    this.kiemTraBrand = function(idSelect, errorID, mess){
        if(domId(idSelect).selectedIndex !==0){
            domId(errorID).style.display = "none";
            return true;
        }
        domId(errorID).style.display = "inline";
        domId(errorID).innerHTML = mess;
            return false;
    };
}