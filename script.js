
const item1 = document.querySelector('#item1');
const item2 = document.querySelector('#item2');
const item3 = document.querySelector('#item3');
const item4 = document.querySelector('#item4');
const item5 = document.querySelector('#item5');
const item6 = document.querySelector('#item6');
const accordion = document.querySelectorAll(".accordion");
const toggle = document.querySelector('.toggle');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const landingPage = document.querySelector('.landing-page');
const body = document.querySelector('body');
const hamburgerLinks = document.querySelectorAll('.hamburger-navlink');

//mouseover
item1.addEventListener('mouseover', () => {
    item1.firstElementChild.setAttribute('src', 'images/handcuff2.png');
});
item2.addEventListener('mouseover', () => {
    item2.firstElementChild.setAttribute('src', 'images/finance2.png');
});
item3.addEventListener('mouseover', () => {
    item3.firstElementChild.setAttribute('src', 'images/home2.png');
});
item4.addEventListener('mouseover', () => {
    item4.firstElementChild.setAttribute('src', 'images/laptop2.png');
});
item5.addEventListener('mouseover', () => {
    item5.firstElementChild.setAttribute('src', 'images/briefcase2.png');
});
item6.addEventListener('mouseover', () => {
    item6.firstElementChild.setAttribute('src', 'images/family2.png');
});


//mouseout
item1.addEventListener('mouseout', () => {
    item1.firstElementChild.setAttribute('src', 'images/handcuff1.png');
});
item2.addEventListener('mouseout', () => {
    item2.firstElementChild.setAttribute('src', 'images/finance1.png');
});
item3.addEventListener('mouseout', () => {
    item3.firstElementChild.setAttribute('src', 'images/home1.png');
});
item4.addEventListener('mouseout', () => {
    item4.firstElementChild.setAttribute('src', 'images/laptop1.png');
});
item5.addEventListener('mouseout', () => {
    item5.firstElementChild.setAttribute('src', 'images/briefcase1.png');
});
item6.addEventListener('mouseout', () => {
    item6.firstElementChild.setAttribute('src', 'images/family1.png');
});

//accordion
accordion.forEach(acc => {
    acc.addEventListener('click', () => {
        acc.classList.toggle("accordion-active");
        let panel = acc.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          } 
    });
});

const t = TweenLite.from('.hamburger-nav-link', {opacity: 0, stagger: .1, duration: .4, delay: .3, x: 50}).reversed(true);

//hamburger menu
toggle.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('hamburger-menu-active');
    landingPage.classList.toggle('landing-page-active');
    body.classList.toggle('body-scroll');
    t.reversed(!t.reversed());
    toggle.classList.toggle('change');
});

//gsap 

gsap.from(".text", {opacity: 0, x: -100, duration: 1, delay: 0.5});
gsap.from(".nav-link", {stagger: .1, duration: .4, opacity: 0, delay: 1.8});
gsap.from(".above-nav", {y: -100, duration: 1, delay: 1});


