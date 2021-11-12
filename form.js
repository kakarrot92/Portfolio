const form = document.getElementById('contact-form');
const emailForm = document.getElementById('email');
const validateMessage = document.getElementById('validateMessage');
const userName = document.getElementById('full-name');
const text = document.getElementById('text');

form.addEventListener('submit', (e) => {
  // const userEmail = email.value.trim();

  if (emailForm.value !== emailForm.value.toLowerCase()) {
    e.preventDefault();
    validateMessage.textContent = 'Email is not valid';
  } else {
    validateMessage.textContent = '';
  }
});

const dataStorage = {
  name: '',
  email: '',
  text: '',
};

function saveData() {
  dataStorage.email = emailForm.value;
  dataStorage.name = userName.value;
  dataStorage.text = text.value;
  localStorage.setItem('dataStorage', JSON.stringify(dataStorage));
}

userName.addEventListener('input', () => {
  saveData();
});

emailForm.addEventListener('input', () => {
  saveData();
});

text.addEventListener('input', () => {
  saveData();
});

function storeData() {
  const dataStored = JSON.parse(localStorage.getItem('dataStorage'));
  userName.value = dataStored.name;
  emailForm.value = dataStored.email;
  text.value = dataStored.text;
}
storeData();
