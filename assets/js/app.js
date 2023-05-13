// MENU SHOW Y HIDDEN

const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")


// MenU SHOW
// validate if constant exists

if(navToggle){
    navToggle.addEventListener('click' , () => {
        navMenu.classList.add("show-menu")
    })
}

// menu Hide

if(navClose) {
    navClose.addEventListener('click' , () => {
        navMenu.classList.remove("show-menu");
    })
}

// Remove mobile menu

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //when clicked on each nav__link we remove the showmenu class
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click' , linkAction));

// SKILLS Script

const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className
    console.log(itemClass)

    for(i= 0 ; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }

    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})