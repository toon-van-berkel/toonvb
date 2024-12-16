gsap.from("nav", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power2.out"
});

gsap.from("h1, h2, h3, h4, h5, p, a, span, button, li", {
    duration: 1.2,
    x: -30,
    opacity: 0,
    ease: "power2.out"
});

gsap.from("img, .image-gallery", {
    duration: 1.5,
    opacity: 0,
    scale: 0.95,
    ease: "power2.out"
});

gsap.from("footer", {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "footer",
        start: "top 90%"
    }
});
