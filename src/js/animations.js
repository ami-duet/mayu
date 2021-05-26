gsap.registerPlugin(ScrollTrigger);

const handleAnimations = () => {
  ScrollTrigger.create({
    trigger: '.start-trigger',
    pin: '.map-image',
    start: "top top",
    // endTrigger: "#otherID",
    // end: "bottom 50%+=100px",
  });
};