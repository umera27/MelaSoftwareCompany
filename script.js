const menu_toggle=document.querySelector('.menu-toggle');
const text = "Welcome to ,Mela Software Company";
const typedTextElement = document.getElementById("typed-text");
const submit=document.getElementById('submit');

let index = 0;

function type() {
    if (index < text.length) {
        typedTextElement.textContent += text.charAt(index);
        index++;        
        setTimeout(type, 100);
      }      
       
}


document.addEventListener("DOMContentLoaded",()=>{
  type();
})

 menu_toggle.addEventListener('click',function () {
    document.querySelector('.active').classList.toggle('c-header');      
     })
  
//User data Validation
submit.addEventListener('click',validate);

function validate(){
const name=document.getElementById('name').value;
let feedback=document.getElementById('text').value;

 if (name==='') {
    alert('please Fill Your Name');
 }else if (feedback===''){
     alert('please Write your feedback');
 } else{
     alert(`${name},Thanks for Your feedback😊`);
 }
} 
