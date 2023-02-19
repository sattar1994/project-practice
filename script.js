const menuBar = document.getElementById('menu-bar');
const opacityBar = document.getElementById('opacity-bar');
const firstBar = document.getElementById('first-bar');
const lastBar = document.getElementById('last-bar');
const list = document.getElementById('list');
menuBar.addEventListener('click', () => {
    opacityBar.classList.toggle('opa');
    firstBar.classList.toggle('first-barr');
    lastBar.classList.toggle('last-barr');
    list.classList.toggle('active');
    
});

const textArea = document.getElementById('text-area');
const btn = document.getElementById('btn');
const stori = document.getElementById('stori');
btn.addEventListener('click', () => {
    const paragraph = document.createElement('p');
    paragraph.classList.add('spann');
    paragraph.textContent = textArea.value;
    stori.appendChild(paragraph);
    textArea.value = '';
});


const btnForm = document.getElementById('btn-form');
const loginForm = document.getElementById('login-form');
btnForm.addEventListener('click', () => {
    loginForm.classList.toggle('activee');
});


const btnSubmit = document.getElementById('btn-submit');
const nameSubmit = document.getElementById('name');
const passwordSubmit = document.getElementById('pass');
const numberSubmit = document.getElementById('num');
const emailForm = document.getElementById('email');

btn.addEventListener('click', () => {
    nameSubmit.value = '';
    passwordSubmit.value = '';
    numberSubmit.value = '';
    emailForm.value = '';
});