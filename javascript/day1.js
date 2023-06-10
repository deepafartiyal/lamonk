
const sign_button=document.querySelector('#SignUp-icon');
console.log(sign_button);
//1st function type
// function abc(){
const form=document.querySelector('.wrapper');
// }
//2nd function type
const close_btn=document.querySelector('.close-wrapper')
// const abc=()=>{
//     console.log("hi");
// }
sign_button.addEventListener('click',()=>{
    console.log('clicked');
    form.style.display="block";
});
close_btn.addEventListener('click',()=>{
    form.style.display="none";
});
const namePattern=/^[a-zA-Z\s]{2,24}$/;
const phonePattern=/^\+91-[0-9]{10}$/;
const emailPattern=/^[a-z0-9\.]+@[a-z]+\.[a-z]{3,8}$/i;
