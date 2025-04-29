const animation = ScrollReveal({
    distance: '50px',
    duration: 1500,
    delay: 400,
    reset: true,
})
animation.reveal('.hero-content, .services-content, .service-content, .about-section' ,{origin: 'bottom', delay: 200})

animation.reveal('.hero-image',{origin: 'right', delay: 200})
animation.reveal('.stats-section',{origin: 'left', delay: 300})