const patterns={
    name: /^[a-zA-Z\s]{2,24}$/,
    email:/^[a-z0-9\.]+@[a-z]+\.[a-z]{3,8}$/i,
    contact:/^[0-9]{10}$/
};
const validationForm=(name,field)=>{
    console.log(field,name,field.value);
    if(field.value){
        if(patterns[name].test(field.value)){
            console.log(patterns[name].test(field.value));
            field.classList.add("success");
            field.classList.remove("failure");
        }
        else{
            field.classList.add("failure");
            field.classList.remove("success");
        }
    }
    else{
        field.classList.remove("failure");
        field.classList.remove("success");

    }
}
const inputs= document.querySelectorAll('.wrapper input[type="text"]')
for(let i=0;i<inputs.length;i++){
    console.log(inputs[i]);
    inputs[i].addEventListener('keyup',(e)=>{
        validationForm(e.target.name,e.target);
    })
}
function createcaptcha(){
    let chars = " asdfgtyhujkilmn8765433$%&*"
    for (let i = 0; i < 5; i++){
        let num = Math.round(Math.random() * chars.length - 1);
        generatedCaptcha += chars[num];  
    }
    console.log(generatedCaptcha);
    document.querySelector("captcha-text").innertext = generatedCaptcha
}
document
.querySelector(".captcha-reload-icon")
.addEventListener("click", createcaptcha);
createcaptcha();