import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form')
const LOCALSTOR_KEY = 'feedback-form-state';
const { email, message } = form.elements;

let dataForm = JSON.parse(localStorage.getItem('LOCALSTOR_KEY')) || {};
if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
}

form.addEventListener('input', throttle(onFormInput), 500);
form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
    const { elements: { email, message } } = event.currentTarget;
    localStorage.setItem('LOCALSTOR_KEY', JSON.stringify({ email: email.value, message: message.value }));
}

function onFormSubmit(event) {
    event.preventDefault();

    const { elements: { email, message } } = event.currentTarget;
    console.log({ email: email.value, message: message.value });

    if (!email.value || !message.value) {
        return alert('Please fill in all fields!');
    }

    localStorage.removeItem('LOCALSTOR_KEY');
    event.currentTarget.reset();
}
