let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
}

let options2 = { // For projects section as it is longer
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
}

const navItems = $('.nav-item');
  
function navActive(entries, observer) { // Change highlighted nav-item depending on page position
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            $(navItems).removeClass('nav-item--active')
            document.querySelector(`#nav-item__${entry.target.id}`).classList.add('nav-item--active')
        }
    })
}

let observerNav = new IntersectionObserver(navActive, options);
observerNav.observe($('#home')[0]);
observerNav.observe($('#about')[0]);
observerNav.observe($('#contact')[0]);

let observerNavProjects = new IntersectionObserver(navActive, options2);
observerNavProjects.observe($('#projects')[0]);