const questions = document.querySelectorAll('.faq__question-btn');
const circlePlus = document.querySelector('.circle-plus');
const circleMinus = document.querySelector('.circle-minus');
const header = document.querySelector('.header');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu__nav-link');
const toggleMenu = document.querySelector('.main-nav__toggle');
const closeMenu = document.querySelector('.mobile-menu__close');
const copyrightYear = document.getElementById('copyright-year');
const body = document.querySelector('body');

// faq accordion

questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        
        if(answer.classList.contains('toggle-answer')) {
            answer.classList.remove('toggle-answer');
            answer.style.maxHeight = '0px';
            question.classList.remove('active');
        } else {
            answer.classList.add('toggle-answer');
            answer.style.maxHeight = `${answer.scrollHeight}px`;
            question.classList.add('active');
        }
    });
});

// scroll nav animation

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 1) {
      console.log('dawdadawada')
      header.classList.add('active');
      toggleMenu.classList.add('active');

    } else {
      console.log('aaaaaa')
      header.classList.remove('active');
      toggleMenu.classList.remove('active');
    }
  });

// toggle menu

toggleMenu.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    body.classList.add('no-scroll');
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    body.classList.remove('no-scroll');
});

// close menu mobile nav link click
mobileMenuLinks.forEach(mobileMenuLink => {
    mobileMenuLink.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        body.classList.remove('no-scroll');
    })
})

// copyright date 

const d = new Date();
let year = d.getFullYear();

copyrightYear.innerText = year;
