// Check home.js for #nav-item__about delay

const navItems = $('.nav-item')
  
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

let observerNav = new IntersectionObserver(navActive, options)
observerNav.observe($('#home')[0])
observerNav.observe($('#contact')[0])

function windowResizeNav() {
    let observerNavAbout
    let observerNavProjects

    if ($(window).width() <= 1300) {
        observerNavAbout = new IntersectionObserver(navActive, {
            rootMargin: '0px',
            threshold: 0.2,
        })
        observerNavAbout.observe($('#about')[0])

        observerNavProjects = new IntersectionObserver(navActive, {
            rootMargin: '0px',
            threshold: 0.12,
        })
        observerNavProjects.observe($('#projects')[0])
    }
    if ($(window).width() > 1300) {
        observerNavAbout = new IntersectionObserver(navActive, options)
        observerNavAbout.observe($('#about')[0])

        observerNavProjects = new IntersectionObserver(navActive, {
            rootMargin: '0px',
            threshold: 0.2,
        })
        observerNavProjects.observe($('#projects')[0])
    }
}
$(window).on("resize", windowResizeNav)
windowResizeNav()