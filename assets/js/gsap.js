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


// roadmap 

var roadmap_tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#h_scroll_container",
        start: "top top",
        end: "+=3000",
        scrub: 2,
        pin: true,
    }
});

roadmap_tl.to('#h_scroll_container', {
    xPercent: -525,
    ease: "none"
});
