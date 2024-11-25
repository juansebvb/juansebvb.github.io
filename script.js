const menuToggle = document.getElementById('menu-toggle');
const menu2Toggle = document.getElementById('menu2-toggle');
const menu = document.getElementById('menu');
const menu2 = document.getElementById('menu2');
const body = document.body;

// Mostrar el menú al hacer hover sobre el ícono
menuToggle.addEventListener('mouseenter', function() {
    menu.classList.add('open');
    body.classList.add('menu-open');
});

menu2Toggle.addEventListener('mouseenter', function() {
    menu2.classList.add('open');
    body.classList.add('menu2-open');
});


// Ocultar el menú al salir del área del menú o del ícono
menuToggle.addEventListener('mouseleave', function(event) {
    if (!menu.contains(event.relatedTarget)) {
        menu.classList.remove('open');
        body.classList.remove('menu-open');
    }
});

menu2Toggle.addEventListener('mouseleave', function(event) {
    if (!menu2.contains(event.relatedTarget)) {
        menu2.classList.remove('open');
        body.classList.remove('menu2-open');
    }
});

menu.addEventListener('mouseleave', function() {
    menu.classList.remove('open');
    body.classList.remove('menu-open');
});

menu2.addEventListener('mouseleave', function() {
    menu2.classList.remove('open');
    body.classList.remove('menu2-open');
});
document.addEventListener('DOMContentLoaded', () => {
    const jobList = document.getElementById('job-list');
    const filter = document.getElementById('filter');
  
    // Fetch vacancies from JSON
    fetch('vacantes.json')
      .then(response => response.json())
      .then(data => {
        renderJobs(data);
  
        // Filter jobs based on selection
        filter.addEventListener('change', () => {
          const filtered = filter.value === 'all' 
            ? data 
            : data.filter(job => job.type === filter.value);
          renderJobs(filtered);
        });
      });
  
    // Render jobs
    function renderJobs(jobs) {
      jobList.innerHTML = '';
      jobs.forEach(job => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${job.title}</strong> at ${job.company} (${job.type})<br>${job.description}`;
        jobList.appendChild(li);
      });
    }
  });
  