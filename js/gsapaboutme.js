document.addEventListener("DOMContentLoaded", () => {
    // Navbar animation
    gsap.from(".navbar", {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power2.out"
    });

    // Animate each card in the "Hobbies and Interests" section
    gsap.from(".card", {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".card",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    // Animate each section title
    gsap.from("h2, h3, p", {
        duration: 1,
        x: -50,
        opacity: 0,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "h2, h3",
            start: "top 90%",
            toggleActions: "play none none none"
        }
    });

    // Footer animation
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
});
