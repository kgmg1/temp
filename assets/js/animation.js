gsap.registerPlugin(ScrollTrigger);
const sections = gsap.utils.toArray(".animate-section");

sections.forEach((section, i) => {
  gsap.from(section, {
    y: 140,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      markers: false
    }
  })
});
