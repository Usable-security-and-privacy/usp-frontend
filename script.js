function func(){
    var a = document.getElementById("checkbox").checked;
    if(a==false){
        document.getElementById("clickerror").innerHTML = "*Please click check box."
    }else{
        document.getElementById('link').click();
    }
    
}

