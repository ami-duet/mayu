/*! project-name v0.0.1 | (c) 2021 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
// Append villages illustrations and descriptions
const villages = d3.select('.glide__slides')
  .selectAll('.glide__slide')
  .data(villagesData)
  .join('div')
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

// Initialize carousel
new Glide('.glide', {
  type: 'carousel',
  focusAt: 'center',
  perView: 3,
  startAt: 4
}).mount();