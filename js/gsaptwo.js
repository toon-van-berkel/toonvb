gsap.from(".navbar", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power2.out"
});

gsap.from('#profilePic', {
    duration: 1.5,
    opacity: 0,
    scale: 0.8,
    ease: 'elastic.out(1, 0.3)'
});

gsap.from('#aboutSection h2, #aboutSection h3, #aboutSection h5, #aboutSection p, #aboutSection ul', {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.3
});

gsap.from('#skillSet1 li, #skillSet2 li', {
    duration: 1,
    x: -100,
    opacity: 0,
    stagger: 0.1,
    delay: 0.5
});

gsap.from('#softwareSkills li', {
    duration: 1,
    x: 100,
    opacity: 0,
    stagger: 0.1,
    delay: 0.5
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