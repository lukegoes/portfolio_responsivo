/*=============== MOSTRAR MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MOSTRAR MENU =====*/
/* VALIDA SE O CONTEUDO EXISTIR */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== OCULTAR MENU =====*/
/* VALIDA SE O CONTEUDO EXISTIR */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== FECHAR MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // Fecha o menu quando escolhem alguma opções do mesmo
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* =============== CHANGE BACKGROUND HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header')
    // Quando o scroll for maior que 50px mostra o header
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form')

const sendEmail = (e) => {
  e.preventDefault();

  const button = document.getElementById('contact-button');
  const buttonText = document.getElementById('button-text');

  // Salvar texto original (caso queira restaurar depois)
  const originalText = buttonText.textContent;

  // Mostrar carregando com spinner
  buttonText.textContent = 'Enviando...';
  const loader = document.createElement('span');
  loader.classList.add('loader');
  button.appendChild(loader);

  // eslint-disable-next-line no-undef
  emailjs.sendForm('service_ygatsli', 'template_2967zvr', '#contact-form', '9gJJssq10F4uRIsKq')
    .then(() => {
      buttonText.textContent = 'Enviado ✅';
      loader.remove();
      contactForm.reset();

      setTimeout(() => {
        buttonText.textContent = originalText;
      }, 4000);
    }, () => {
      buttonText.textContent = 'Erro ❌';
      loader.remove();

      setTimeout(() => {
        buttonText.textContent = originalText;
      }, 4000);
    });
};


contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    // Quando o scroll for maior que 350px mostra o botão
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') 
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 60,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== DARK LIGHT THEME ===============*/ 

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*=============== SCROLL REVEAL ANIMATION ===============*/

// eslint-disable-next-line no-undef
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__perfil, .about__image, .about__shadow, .contact__mail`, {origin : "right"})
sr.reveal(`.home__name`, `.home__info`,
            `.about__container .section__title-1, .about__info,
            .contact__social, .contact__data`,{origin : "left"})
sr.reveal(`.services__card, .projects__card`,{interval: 100})            