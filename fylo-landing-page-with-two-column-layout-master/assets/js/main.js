let tf1 =document.querySelector("#tf1");
let validate = document.querySelector('#validate');
let isdisplay = true;


let val;
tf1.onchange = ()=>{
    val = tf1.value;
    check();
}
tf1.onkeyup = ()=>{
    val = tf1.value;
    check();
}

function check(){
    if(val.includes('@gmail.com')||val.includes('@yahoo.com')||val.includes('@mail.com')){
        tf1.setAttribute('value',true);
        validate.style.display = 'none';
        
    }else if(val==''){
        tf1.setAttribute('value','');
        validate.style.display = 'none';
    }else{
        tf1.setAttribute('value',false);
        validate.style.display ="block";
    }
}


