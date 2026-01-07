const openbtn = document.querySelector('#open');
const closebtn = document.querySelector('#close');
const modelcontainer = document.querySelector('#model_container');

 openbtn.addEventListener('click', () => {
    modelcontainer.classList.add('so');
 }); 

 closebtn.addEventListener('click', () => {
    modelcontainer.classList.remove('so');
 });


 function showAlert(){
   alert("this is alert message!");
 }

const form = document.getElementById('contact');
const msg1 = document.getElementById('msg1');
const msg2 = document.getElementById('msg2');
const msg3 = document.getElementById('msg3');



form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fsname = document.getElementById('fsname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
   


msg1.style.color = "red";
msg2.style.color = "red";
msg3.style.color = "red";


 if(fsname.length < 5){
        msg1.innerText = "enter a valid names.";

        return;
    }

    if(isNaN(phone) || phone.length !== 10) {
                msg2.innerText = "Please enter a valid phone no..";
        return;
    }
    
    
    if(!email.includes("@") || !email.includes(".")){
                msg3.innerText = "Please enter a valid mail.";
        return;
    }
    

    msg.style.color = "green";
    msg.innerText = "form submited successfully";
    form.reset();

});