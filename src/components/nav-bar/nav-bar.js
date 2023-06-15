const navItems = $('.nav-item');
  
function navActive(entries, observer) { // Change highlighted nav-item depending on page position
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            $(navItems).removeClass('nav-item--active')
            $(`#nav-item__${entry.target.id}`).addClass('nav-item--active')
        }
    })
}

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
}

let options_2 = { // For projects section as it is longer
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
}

let observerNav = new IntersectionObserver(navActive, options);
observerNav.observe($('#home')[0]);
observerNav.observe($('#about')[0]);
observerNav.observe($('#contact')[0]);

let observerNavProjects = new IntersectionObserver(navActive, options_2);
observerNavProjects.observe($('#projects')[0]);