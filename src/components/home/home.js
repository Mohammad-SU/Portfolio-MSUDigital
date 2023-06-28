/*
- favicon SVG?
- Make responsive and suitable for mobile
- Check if website looks good on other browsers (firefox, bing, opera, IE, etc.)
- Change demo links to google drive/dropbox, embed videos?
- Make scroll lock to section/change scroll speed (for about)?
- Netlify custom success page?
*/

function homeFadeIn() {
    if ($(window).scrollTop() < 500) {
        $("#particles-home, #home-heading__line-1, #home-heading__line-2, #home-cta").addClass("home__fade-in")
    }
}
$(window).scroll(homeFadeIn)
homeFadeIn()

$("#home-cta, #nav-item__about").on("click", function() {
    aboutScrollAnimation = setTimeout(function() {
        var scrollPosition = $("#about").offset().top + 146
        window.scrollTo({top: scrollPosition, behavior: 'smooth'})
    }, 900)

    clearAboutScrollAnimation = setTimeout(function() { // If the scroll animation has been interrupted and is outside of the given range, timeout will be cleared
        if ($(window).scrollTop() > $('#about').offset().top + 20 || $(window).scrollTop() < $('#about').offset().top - 20) {
            clearTimeout(aboutTimeout)
        }
    }, 850)
})

tsParticles.load("particles-home", {
    fpsLimit: 65,
    particles: {
        number: {
            value: 105
        },
        color: {
            value: "#00ff00"
        },
        size: {
            value: 0
        },
        line_linked: {
            enable: true,
            opacity: 1,
            distance: 125,
            color: "#00ff00",
            width: 1,
            triangles: {
                opacity: 0.3,
                enable: true,
                color: "#00ff00"
            }
        },
        move: {
            enable: true,
            speed: 4,
            random: false,
            straight: false
        }
    },
    interactivity: {
        detect_on: "window",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: false
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 200,
            },
        }
    },
    retina_detect: true,
});

const particles_home = tsParticles.domItem(0)

$(window).scroll(function() {
    if ($(window).scrollTop() > $('#home-cont').height()) {
        particles_home.pause()
    }
    else {
        particles_home.play()
    }
})

