document.addEventListener("DOMContentLoaded", () => {
    // Navbar animation
    gsap.from(".navbar", {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power2.out"
    });

    // Animate each project card when scrolling into view
    gsap.from(".project", {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".project",
            start: "top 80%",
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