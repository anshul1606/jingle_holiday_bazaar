indow.addEventListener("load", () => {
    const overlay = document.querySelector(".transition-overlay");

    // Animate page reveal
    gsap.to(overlay, {
        duration: 1,
        scaleY: 0,
        transformOrigin: "top",
        ease: "power4.inOut",
    });

    // Fade in content
    gsap.from("#main-content", {
        opacity: 0,
        y: 50,
        duration: 1.2,
        delay: 0.5,
        ease: "power3.out",
    });
});

// Smooth scrolling effect
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(".content").forEach((section) => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power2.out",
    });
});