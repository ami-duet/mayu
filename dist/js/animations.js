/*! project-name v0.0.1 | (c) 2021 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
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