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



    

}