let cb1 = document.getElementById('tf1');
let validate = document.querySelector('.validate');
let value;
cb1.onchange = ()=>{
    value = cb1.value;  
    isfalse();
};
cb1.onkeyup = ()=>{
    value = cb1.value;
    isfalse();

};

function isfalse(){
    if(value.includes('@gmail.com') || value.includes('@yahoo.com')){
        cb1.setAttribute('value' , true);
        validate.style.display = 'none';
    }else if(value == ""){
        validate.style.display = 'none';
        cb1.setAttribute('value','');
    }else{
        cb1.setAttribute('value' , false);
        validate.style.display = 'block';
    }
}