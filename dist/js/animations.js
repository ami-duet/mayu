/*! project-name v0.0.1 | (c) 2021 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
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