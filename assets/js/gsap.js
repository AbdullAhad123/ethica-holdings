gsap.registerPlugin(ScrollTrigger);

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
