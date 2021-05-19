const firstVillageId = 'cerro_de_leones';
const firstVillageIndex = villagesData.findIndex(village => village.village_id === firstVillageId);

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
const carousel = new Glide('.glide', {
  type: 'carousel',
  focusAt: 'center',
  perView: 1,
  startAt: firstVillageIndex
}).mount();

// Swap carousel button's text for the villages names
const updateCarouselButtons = (index) => {
  const prevVillage = villagesData[index - 1] ? villagesData[index - 1] : villagesData[villagesData.length - 1];
  d3.select('.glide__arrow--left .btn-label')
    .text(prevVillage.village_name);

  const nextVillage = villagesData[index + 1] ? villagesData[index + 1] : villagesData[0];
  d3.select('.glide__arrow--right .btn-label')
    .text(nextVillage.village_name);
};

updateCarouselButtons(firstVillageIndex);
carousel.on('run', () => {
  updateCarouselButtons(carousel.index);
});

// Once the carousel is in view, show arrows
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