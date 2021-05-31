/*! project-name v0.0.1 | (c) 2021 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: '.map-image',
  endTrigger: '.map-description-third',
  start: 'center center',
  end: () => {
    const height = window.innerHeight;
    const mapHeight = document.querySelector('.map-peru .map-image').offsetHeight;
    return `bottom ${mapHeight + (height - mapHeight) / 2}px`;
  },
  pin: true,
  pinSpacing: false
});

gsap.to('.piura-region', {
  scrollTrigger: {
    trigger: '.map-description-second',
    start: () => {
      const mapHeight = document.querySelector('.map-peru .map-image').offsetHeight;
      return `top ${2 * mapHeight / 5}px`;
    },
    toggleActions: 'play none none reverse'
  },
  fill: '#EA7753',
  duration: 0.3,
  ease: 'power3.easeOut'
});

const animateVillages = () => {
  const cdlIllustrations = document.querySelectorAll('.village-cerro_de_leones .sct-illustration');
  cdlIllustrations.forEach(illustration => {
    gsap.from(illustration, {
      scrollTrigger: {
        trigger: illustration,
        start: 'center center'
      },
      duration: 0.2,
      scale: 0.7,
      opacity: 0,
      ease: Power3.easeOut
    });
  });
};
          