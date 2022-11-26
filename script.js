function func(){
    var a = document.getElementById("checkbox").checked;
    if(a==false){
        document.getElementById("clickerror").innerHTML = "*Please click check box."
    }else{
        document.getElementById('link1').click();
    }
    
}

function func1(){
    document.getElementById("link2").click();
}

