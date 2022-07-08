const form = document.getElementById('form');
const rightSecond = document.querySelector('.rigth-second');
const firstname= document.querySelector('#first-name');
const lastname = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    // const iconDisplay = inputControl.querySelector('.icn');

    // inputControl.className = 'form control error'
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = "";
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();


    if(firstnameValue === ""){
        setError(firstname, "Firstname is required");
    } else {
        setSuccess(firstname);
    }

    if(lastnameValue === ""){
        setError(lastname, "Lastname is required");
    } else {
        setSuccess(lastname);
    }

    if(emailValue === ""){
        setError(email, "Email is required");
    } else if (!isValidEmail(emailValue)){
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === ""){
        setError(password, "Password is required");
    } else if (passwordValue.length < 8) {
        setError(password, "Password must be at least 8 characters.")
    } else {
        setSuccess(password);
    }
}