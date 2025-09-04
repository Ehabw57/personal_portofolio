import { skillCategories, projects, tags } from './data.js';

function createSkillList(items){
  return items.map(skillName=>`<li>${skillName}</li>`).join('');
}

function createProjectTags(projectTags){
  return projectTags.map(tagName=>{
    const tag = tags.find(t => t.name === tagName);
    if(tag){
      return `<li style="background: ${tag.background}; color: ${tag.color}; border: none;">${tagName}</li>`;
    }
    return `<li>${tagName}</li>`;
  }).join('');
}

function renderSkills(){
  const container = document.getElementById('skillsContainer');
  if(!container) return;
  const sections = [
    { key:'frontend', title:'Frontend' },
    { key:'backend', title:'Backend' },
    { key:'database', title:'Database' },
    { key:'tools', title:'Tools' },
  ];
  container.innerHTML = sections.map(({key,title})=>`
    <article class="skill-card">
    <h3>${title}</h3>
    <ul class="pill-list">${createSkillList(skillCategories[key] || [])}</ul>
    </article>
    `).join('');
}

function renderProjects(){
  const grid = document.getElementById('projects');
  if(!grid) return;
  grid.innerHTML = projects.map(p => `
    <article class="card">
    <div style="background-image: url('${p.image}');" class="card-media"></div>
    <div class="card-body">
    <h3>${p.title}</h3>
    <p>${p.description}</p>
    <ul class="tag-list">${createProjectTags(p.tags || [])}</ul>
    </div>
    <div class="card-actions">
    ${p.live ? `<a class="button small primary" href="${p.live}" target="_blank"><i class="fa-solid fa-up-right-from-square"></i>Live</a>` : ''}
    ${p.github ? `<a class="button small" href="${p.github}" target="_blank"><i class="fab fa-github"></i> GitHub</a>` : ''}
    ${p.demo ? `<a class="button small" href="${p.demo}" target="_blank"><i class="fa-solid fa-circle-play"></i>Demo</a>` : ''}
    </div>
    </article>
    `).join('');
}

renderSkills();
renderProjects();


