//initialize DOM class and ID
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll('nav a[href^="#"]')
const menu = document.querySelectorAll('.navbar-menu')
const burger = document.querySelectorAll('.navbar-burger')
const close = document.querySelectorAll('.navbar-close')      
const backdrop = document.querySelectorAll('.navbar-backdrop')
const mobileMenuLink = document.querySelectorAll('#mobile-menu a[href^="#"]')


document.addEventListener('DOMContentLoaded', () => {
    //Add smooth scrolling to all links
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    if(burger.length && menu.length ){
        handleMobileMenuToggle(burger, menu)
    }if(close.length && backdrop.length && menu.length){
        handleMobileMenuClose(close,menu, backdrop)
    }
    if(mobileMenuLink.length && navLinks.length && menu.length){
        handleMobileMenuLinks(mobileMenuLink, navLinks, menu)   
    }
   
})

function setActiveLink(sections, navLinks){
    let index = sections.length
    
    while(--index && window.scrollY + 50 < sections[index].offsetTop){}
    navLinks.forEach((link) => link.classList.remove('active'));
    if(navLinks[index]){
        navLinks[index].classList.toggle('active');
    }
}

function handleScroll(){
    setActiveLink(sections, navLinks)
}

function handleMobileMenuToggle(burger, menu){
    burger.forEach(b => {
        b.addEventListener("click", ()=>{
            menu.forEach(m => m.classList.toggle('hidden'))
        })
    })
}

function handleMobileMenuClose(close,menu, backdrop){
    close.forEach(c=>{
        c.addEventListener('click', ()=>{
            menu.forEach(m => m.classList.toggle('hidden'))
        })
    })
    backdrop.forEach(b => {
        b.addEventListener('click', ()=>{
            menu.forEach(m => m.classList.toggle('hidden'))
        })
    })
}
function handleMobileMenuLinks(mobileMenuLink, navLinks, menu){
    mobileMenuLink.forEach(anchor => {
        anchor.addEventListener('click', function(e){
            navLinks.forEach((link)=> link.classList.remove('active'));
            const targetLink = document.querySelector(`nav a[href="${this.getAttribute('href')}"]`);
            if (targetLink) {
                targetLink.classList.add('active');
            }
            menu.forEach(m => m.classList.toggle('hidden'));
        });
    });
}
console.log('Burger:', burger.length);
console.log('Menu:', menu.length);
console.log('Close:', close.length);
console.log('Backdrop:', backdrop.length);