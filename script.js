let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = scrollreveal ({
    distance: '65px', 
    duration: 2600,
    delay: 450,
    reset: true
});
sr.Reveal('.hero-text',{delay:200,origin:'top'});
sr.Reveal('.hero-img',{delay:450,origin:'top'});
sr.Reveal('.icons',{delay:500,origin:'left'});
sr.Reveal('.scroll-down',{delay:500,origin:'right'});