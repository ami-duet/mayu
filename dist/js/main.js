/*! project-name v0.0.1 | (c) 2021 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
// Append villages illustrations and descriptions
const villages = d3.select('.villages')
  .append('div')
    .attr('class', 'container')
  .selectAll('.village')
  .data(villagesData)
  .join('div')
    .attr('class', d => `village village-${d.village_id}`)
  .append('div')
    .attr('class', 'village-container');
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