const form = document.getElementById('contact-form');
const email = document.getElementById('email');
const validateMessage = document.getElementById('validateMessage');
 


form.addEventListener('submit', (e) => {
 
    // const userEmail = email.value.trim();  
     
   if (email.value !== email.value.toLowerCase()){
    e.preventDefault();
      validateMessage.textContent = 'Email is not valid';
    }
    else {
      validateMessage.textContent = '';
    }
  })






