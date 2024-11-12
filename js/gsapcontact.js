document.addEventListener("DOMContentLoaded", () => {
    // Navbar animation: fades in from the top
    gsap.from(".navbar", {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power2.out"
    });

    // Background overlay fade-in
    gsap.from(".bg-dark", {
        duration: 1,
        opacity: 0,
        delay: 0.2,
        ease: "power2.out"
    });

    // Contact form animation: fades in from the right
    gsap.from(".contact-form", {
        duration: 1,
        x: 50,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".contact-form",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    // Footer animation: fades in from the bottom
    gsap.from("footer", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "footer",
            start: "top 95%",
            toggleActions: "play none none none"
        }
    });
});
