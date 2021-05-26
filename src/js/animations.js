gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: '.map-image',
  endTrigger: '.map-description-third',
  start: 'center center',
  end: () => {
    const height = window.innerHeight;
    const mapHeight = document.querySelector('.map-peru .map-image').offsetHeight;
    return `bottom ${mapHeight + (height -mapHeight) / 2}px`;
  },
  pin: true,
  pinSpacing: false
});