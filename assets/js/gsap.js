gsap.registerPlugin(ScrollTrigger);

var main_tl = gsap.timeline();

// navbar 
main_tl.from(".navbar-brand", {
    opacity: 0,
    x: -100,
    duration: 0.5
});

main_tl.from(".navbar_ctas", {
    opacity: 0,
    x: 100,
    duration: 0.5
});

main_tl.from(".navbar-nav .nav-item", {
    opacity: 0,
    y: -40,
    stagger: 0.15,
    duration: 0.6
});


// hero 
main_tl.from("header .headingTxt", {
    opacity: 0,
    x: -100,
    duration: 0.5,
    ease: "back.out(1.7)",
});

main_tl.from("header .paraTxt", {
    opacity: 0,
    x: -80,
    duration: 0.75,
    ease: "back.out(1.7)",
}, 2.4);

main_tl.from("header .btn_cont", {
    opacity: 0,
    y: 80,
    stagger: 0.2,
    duration: 0.5,
});

main_tl.from("header .headerImageCont", {
    opacity: 0,
    x: 100,
    duration: 0.75,
    ease: "back.out(2.5)",
}, 2.9);

// about 
var about_tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#about",
        start: "top 20%",
    }
});

about_tl.from("#about .sectionTxt", {
    opacity: 0,
    y: -40,
    duration: 0.4,
    ease: "back.out(1.7)",    
})

about_tl.from("#about .headingTxt", {
    opacity: 0,
    x: -100,
    duration: 0.5,
    ease: "back.out(1.7)",    
})

about_tl.from("#about .aboutCard_1", {
    opacity: 0,
    y: 100,
    duration: 0.5,
    ease: "back.out(1.7)",    
})

about_tl.from("#about .aboutCard_2", {
    opacity: 0,
    y: 50,
    duration: 0.5,
    ease: "back.out(0.75)",    
})

about_tl.from("#about .aboutCard_3", {
    opacity: 0,
    y: 50,
    duration: 0.5,
    ease: "back.out(0.75)",    
})

about_tl.from("#about .aboutCard_4", {
    opacity: 0,
    y: 50,
    duration: 0.5,
    ease: "back.out(0.75)",    
})

// bot 
var bot_ti = gsap.timeline({
    scrollTrigger: {
        trigger: "#bot",
        start: "top 20%",
    }
});

bot_ti.from("#bot .sectionTxt", {
    opacity: 0,
    y: -40,
    duration: 0.4,
    ease: "back.out(1.7)",    
})

bot_ti.from("#bot .headingTxt", {
    opacity: 0,
    x: -100,
    duration: 0.5,
    ease: "back.out(1.7)",    
})

bot_ti.from("#bot .paraTxt", {
    opacity: 0,
    x: -50,
    duration: 0.4,
})

bot_ti.from("#bot .botImgCont", {
    opacity: 0,
    y: 100,
    duration: 0.5,
})

bot_ti.from("#bot .paraTxt2", {
    opacity: 0,
    x: -50,
    duration: 0.4,
})

bot_ti.from("#bot .cta_link", {
    opacity: 0,
    y: 50,
    duration: 0.4,
})

// steps 
var steps_tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#steps",
        start: "top 20%",
    }
});

steps_tl.from("#steps .sectionTxt", {
    opacity: 0,
    y: -40,
    duration: 0.4,
    ease: "back.out(1.7)",    
})

steps_tl.from("#steps .headingTxt", {
    opacity: 0,
    x: -100,
    duration: 0.5,
    ease: "back.out(1.7)",    
})

steps_tl.from("#steps .paraTxt", {
    opacity: 0,
    x: -50,
    duration: 0.4,
})

steps_tl.from("#steps .stepsCardCont .stepsCard", {
    opacity: 0,
    y: 50,
    stagger: 0.25,
    duration: 0.75,
})


// roadmap 
var roadmap_tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#roadmap",
        start: "top 20%",
    }
});

roadmap_tl.from("#roadmap .sectionTxt", {
    opacity: 0,
    y: -40,
    duration: 0.4,
    ease: "back.out(1.7)",    
})

roadmap_tl.from("#roadmap .headingTxt", {
    opacity: 0,
    x: -100,
    duration: 0.5,
    ease: "back.out(1.7)",    
})

roadmap_tl.from("#roadmap #h_scroll_container", {
    opacity: 0,
    y: 80,
    duration: 0.5,
})

var roadmap_tl_scroll = gsap.timeline({
    scrollTrigger: {
        trigger: "#h_scroll_container",
        start: "top top",
        end: "+=3000",
        scrub: 2,
        pin: true,
    }
});

roadmap_tl_scroll.to('#h_scroll_container', {
    xPercent: -525,
    ease: "none"
});

// company 
var company_tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#company",
        start: "top 20%",
    }
});

company_tl.from("#company .sectionTxt", {
    opacity: 0,
    y: -40,
    duration: 0.4,
    ease: "back.out(1.7)",    
})

company_tl.from("#company .headingTxt", {
    opacity: 0,
    x: -100,
    duration: 0.5,
    ease: "back.out(1.7)",    
})

company_tl.from("#company .companyCardCont .companyCard", {
    opacity: 0,
    y: 50,
    stagger: 0.25,
    duration: 0.75,
})

// contact 
var contact_tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#contact",
        start: "top 20%",
    }
});

contact_tl.from("#contact .sectionTxt", {
    opacity: 0,
    y: -40,
    duration: 0.4,
    ease: "back.out(1.7)",    
})

contact_tl.from("#contact .headingTxt", {
    opacity: 0,
    x: -100,
    duration: 0.5,
    ease: "back.out(1.7)",    
})

contact_tl.from("#contact .cta_cont", {
    opacity: 0,
    y: 50,
    stagger: 0.25,
    duration: 0.75,
})

contact_tl.from("#contact .contactForm .contactFormItem", {
    opacity: 0,
    y: 50,
    stagger: 0.25,
    duration: 0.75,
}, 0.75)

// footer 
var footer_tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#footer",
        start: "top 50%",
    }
});

footer_tl.from("#footer .sectionTxt", {
    opacity: 0,
    y: -40,
    duration: 0.4,
    ease: "back.out(1.7)",    
})

footer_tl.from("#footer .headingTxt", {
    opacity: 0,
    x: -100,
    duration: 0.5,
    ease: "back.out(1.7)",    
})

footer_tl.from("#footer .paraTxt", {
    opacity: 0,
    x: -50,
    duration: 0.4,
})

footer_tl.from("#footer .sectionTitle", {
    opacity: 0,
    y: 40,
    duration: 0.3,
})

footer_tl.from("#footer .footerLinksCont .footerLinks", {
    opacity: 0,
    x: 40,
    stagger: 0.25,
    duration: 0.6,
})

footer_tl.from("#footer .sectionTitle2", {
    opacity: 0,
    y: 40,
    duration: 0.3,
})

footer_tl.from("#footer .footerLinksCont2 .footerLinks", {
    opacity: 0,
    x: 40,
    stagger: 0.25,
    duration: 0.6,
})

footer_tl.from("#footer .copyrightTxt", {
    opacity: 0,
    y: 40,
    duration: 0.3,
})

footer_tl.from("#footer .companyTxt", {
    opacity: 0,
    y: 40,
    duration: 0.3,
})

