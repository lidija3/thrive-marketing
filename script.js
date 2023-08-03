const month = document.querySelector('.month');
const year = document.querySelector('.year');
const priceMonth = document.querySelectorAll('.price-month');
const priceYear = document.querySelectorAll('.price-year');

const btnLanding = document.querySelector('.btnLanding');
const btnSignUp = document.querySelector('.btnSignUp');

let counterContainer = document.querySelector('.counter-container');
let num = document.querySelectorAll('.num');
let start = false;

const hamburger = document.querySelector('.hamburger');
const mobileNavMenu = document.querySelector('.mobile-nav-menu');
const mobileNavLink = document.querySelectorAll('.mobile-nav-link');
const main = document.querySelector('main');

month.addEventListener('click', () => {
    year.classList.remove('active');
    month.classList.add('active');

    priceYear.forEach(item => item.classList.remove('active'));
    priceMonth.forEach(item => item.classList.remove('not-active'));
})

year.addEventListener('click', () => {
    year.classList.add('active');
    month.classList.remove('active');

    priceYear.forEach(item => item.classList.add('active'));
    priceMonth.forEach(item => item.classList.add('not-active'));
})

btnLanding.addEventListener('click', () => {
    window.location = "#features";
})

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            if(!start) {
                num.forEach((number) => startCounter(number));
            }
    
            start = true;
        }
    })
})


function startCounter(el) {
    let max = el.dataset.max;
    let count = setInterval(() => {
        el.textContent++;
        if(el.textContent == max) {
            clearInterval(count);
        }
    }, 2000 / num);
} 

observer.observe(counterContainer);


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNavMenu.classList.toggle('active');
    main.classList.toggle('inactive');
})

mobileNavLink.forEach(item => item.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileNavMenu.classList.remove('active');
    main.classList.remove('inactive');
}))
