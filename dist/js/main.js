/*! project-name v0.0.1 | (c) 2021 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
const firstVillage = 'cerro_de_leones';

// Append villages illustrations and descriptions
const villages = d3.select('.glide__slides')
  .selectAll('.glide__slide')
  .data(villagesData)
  .join('li')
    .attr('class', 'glide__slide')
  .append('div')
    .attr('class', d => `village village-${d.village_id}`);
villages
  .append('h2')
    .text(d => d.village_name);
const sections = villages
  .append('div')
    .attr('class', 'sections');
const section = sections
  .selectAll('.section')
  .data(d => d.sections)
  .join('div')
    .attr('class', d => `section section-${d.sct_id}`);
section
  .append('div')
    .attr('class', 'sct-illustration')
  .html(d => d.illustration);
section
  .append('div')
    .attr('class', 'sct-description')
  .html(d => d.description);

// Initialize the carousel
new Glide('.glide', {
  type: 'carousel',
  focusAt: 'center',
  perView: 1,
  startAt: villagesData.findIndex(village => village.village_id === firstVillage)
}).mount();

// Once the carousel is in view, show arrows
const isElementInViewport = (el) => {
  // From https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport/7557433#7557433
  const rect = el.getBoundingClientRect();
  return (
      rect.top <= 500 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const arrowsToggle = document.querySelector('.arrows-toggle');
const carouselArrows = document.querySelector('.glide__arrows');
window.addEventListener('scroll', () => {
  if (arrowsToggle.getBoundingClientRect().top <= 300) {
    if (carouselArrows.classList.contains('hidden')) {
      carouselArrows.classList.remove('hidden');
    }

    if (!carouselArrows.classList.contains('enter')) {
      // show arrows
      carouselArrows.classList.remove('exit');
      carouselArrows.classList.add('enter');
    }
  } else if (arrowsToggle.getBoundingClientRect().top > 300 && !carouselArrows.classList.contains('exit')) {
    // hide arrows
    carouselArrows.classList.remove('enter');
    carouselArrows.classList.add('exit');
  }
});