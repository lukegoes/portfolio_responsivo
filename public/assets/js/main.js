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


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/