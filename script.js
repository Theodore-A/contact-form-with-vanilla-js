const myForm = document.querySelector('.my-form');
const nameInput = document.querySelector('.name');
const companyInput = document.querySelector('.company');
const emailInput = document.querySelector('.email');
const numberInput = document.querySelector('.number');
const textareaInput = document.querySelector('#textarea');
const msg = document.querySelector('.msg');
const userList = document.querySelector('.user');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || companyInput.value === '' || 
        emailInput.value === '' || numberInput.value < -1 || 
        textareaInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields!';
        setTimeout( () => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.className = 'list';

        li.appendChild(document.createTextNode(`Name: ${nameInput.value}. 
        Company: ${companyInput.value}. Email: ${emailInput.value}.
        Phone Number: ${numberInput.value}. Message: ${textareaInput.value}`));

        userList.appendChild(li);

        // clear fields
        nameInput.value = '';
        companyInput.value = '';
        emailInput.value = '';
        numberInput.value = '';
        textareaInput.value = '';
    }
}