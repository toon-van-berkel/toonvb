gsap.from(".navbar", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power2.out"
});

gsap.from("footer", {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "footer",
        start: "top 90%",
        toggleActions: "play none none none"
    }
});

gsap.from("#profileImage", {
    duration: 1.5,
    scale: 0.5,
    opacity: 0,
    ease: "elastic.out(1.5, 1)"
});

gsap.from("#card1, #card2, #card3, #card4, #card5", {
    duration: 1,
    x: -200,
    opacity: 0,
    stagger: 0.2
});