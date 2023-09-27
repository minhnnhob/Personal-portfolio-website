/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

      /*=============== MENU SHOW ===============*/
        /*Validate if constant exists*/
        if(navToggle){
            navToggle.addEventListener('click',()=>{
                navMenu.classList.add('show-menu')
            })
        }

      /*=============== MENU HIDDEN ===============*/
        /*Validate if constant exists*/
        if(navClose){
            navClose.addEventListener('click',()=>{
                navMenu.classList.remove('show-menu')
            })
        }


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = ()=>{
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

/*=============== SHADOW HEADER ===============*/
const shadowHeader = ()=>{
    const header = document.getElementById('header')

    if(this.scrollY >= 50) 
        header.classList.add('shadow-header'); 
    else header.classList.remove('shadow-header')
}
window.addEventListener('scroll',shadowHeader)
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form')
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e)=>{
    e.preventDefault()


    emailjs.sendForm('service_s6tibuh','template_k9pejgc','#contact-form ','n_gKW5Ja05mI-CTeZ')
    .then(()=>{
        //
        console.log('oke bro0')
        contactMessage.textContent = 'oke bro'
        console.log('oke bro1')

        //
        setTimeout(()=>{
            contactMessage.textContent = ''
        },5000)

        //
        contactForm.reset()

    },()=>{
        contactMessage.textContent = 'err bro '
    })
}

contactForm.addEventListener('submit', sendEmail)
/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
