const menuToggle = () => {
    document.getElementById('nav-menu').classList.toggle('show');
    console.log(document.getElementById('nav-menu').classList)
}

const smallImg = document.getElementsByClassName('small-img');

[...smallImg].forEach(img => {
    img.addEventListener('click', () => {
        document.getElementById('product-img').src = img.src;
    })
});



const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const indicator = document.getElementById('indicator');


const toggleForm = (formPosition, indicatorPosition) => {
    loginForm.style.transform = `translateX(${formPosition}px)`;
    registerForm.style.transform = `translateX(${formPosition}px)`;
    indicator.style.transform = `translateX(${indicatorPosition}px)`;
}
