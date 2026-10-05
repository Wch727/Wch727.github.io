'use strict';
document.getElementById('year').textContent = new Date().getFullYear();
const filters = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('[data-category]');
filters.forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  let visible = 0;
  filters.forEach(item => {
    const selected = item === button;
    item.classList.toggle('is-selected', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
  projects.forEach(project => {
    project.hidden = category !== 'all' && project.dataset.category !== category;
    if (!project.hidden) visible++;
  });
  document.getElementById('project-status').textContent = `显示 ${visible} 个项目`;
}));
