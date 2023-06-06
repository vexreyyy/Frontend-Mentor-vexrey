


const   
    email = document.querySelector('.email'),
    button = document.querySelector('button'),
    alert = document.querySelector('.alert'),
    reg = /^[a-z\d]+@[a-z\d]+\.[a-z]+$/;


button.addEventListener('click', () => {
    if(reg.test(email.value)) {
        alert.textContent = 'OK!';
    } else {
        alert.style.color = 'red';
        alert.textContent = 'Please provide a valid email';
        email.style.border = '2px solid red';
    }
})