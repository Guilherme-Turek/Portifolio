const linkAbout     = document.querySelector('#about');
const linkKnowledge = document.querySelector('#knowledge');
const linkObjective = document.querySelector('#objective');

const about     = document.querySelector('.about');
const knowledge = document.querySelector('.knowledge');
const objective = document.querySelector('.objective');

linkAbout.addEventListener('click', () => {
    about.classList.replace('d-none', 'd-flex')
    knowledge.classList.replace('d-flex' , 'd-none')
    objective.classList.replace('d-flex' , 'd-none')
});

linkKnowledge.addEventListener('click', () => {
    about.classList.replace('d-flex' , 'd-none')
    knowledge.classList.replace('d-none', 'd-flex')
    objective.classList.replace('d-flex' , 'd-none')
});

linkObjective.addEventListener('click', () => {
    about.classList.replace('d-flex' , 'd-none')
    knowledge.classList.replace('d-flex' , 'd-none')
    objective.classList.replace('d-none', 'd-flex')
});
