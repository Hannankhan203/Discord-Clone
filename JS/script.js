// Animate navbar elements
gsap.from(".logo-img", {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: "bounce.out",
});

gsap.from(".nav-links li", {
  duration: 1,
  y: -50,
  opacity: 0,
  stagger: 0.2,
  ease: "power2.out",
});

gsap.from(".open-disc-btn", {
  duration: 1,
  scale: 0,
  opacity: 0,
  ease: "back.out(1.7)",
});

// Animate hero section
gsap.from(".hero h1", {
  duration: 1,
  x: -200,
  opacity: 0,
  delay: 1.2,
  ease: "power4.out",
});

gsap.from(".hero p", {
  duration: 1,
  x: 200,
  opacity: 0,
  delay: 1.4,
  ease: "power4.out",
});

gsap.from(".btns button", {
  duration: 1,
  scale: 0,
  opacity: 0,
  ease: "back.out(1.7)",
});

// Animate each section when scrolled into view
const sections = document.querySelectorAll("section");
sections.forEach((section, index) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 100%",
    },
    opacity: 0,
    y: 50,
    duration: 0.5,
    delay: index * 0.2,
  });
});

gsap.from(".sub-sec", {
    scrollTrigger: {
      trigger: ".sub-sec",
      start: "top 60%",
    },
  duration: 1,
  y: -50,
  opacity: 0,
  stagger: 0.2,
  ease: "power2.out",
});

gsap.from(".logo-img-2", {
    scrollTrigger: {
      trigger: ".logo-img-2",
      start: "top 100%",
    },
  duration: 1,
  y: -50,
  opacity: 0,
  ease: "bounce.out",
});

gsap.from(".open-disc-btn-2", {
    scrollTrigger: {
      trigger: ".open-disc-btn-2",
      start: "top 100%",
    },
  duration: 1,
  y: -50,
  opacity: 0,
  ease: "back.out(1.7)",
});