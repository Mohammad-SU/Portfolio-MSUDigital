var width = $(window).width()
$(window).on('resize', function() { // If window width is resized, run functions
    if ($(this).width() !== width) {
        width = $(this).width()
        windowResizeHome()
        windowResizeAbout()
        windowResizeNav()
        windowResizeProjects()
    }
})

function viewportVis (el) { // Check if element is visible in viewport based on threshold
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    let rect = el.getBoundingClientRect();

    return (
        rect.top + (rect.height/2) >= 0 && // from top
        rect.top + (rect.height/2) <= ($(window).height()) // from bottom
    )
}

let rem = function (count) {
    let unit = $('html').css('font-size')

    if (typeof count !== 'undefined') {
        return (parseFloat(unit) * count)
    }
    else {
        return parseFloat(unit)
    }
}

tsParticles.load("particles-main-content", {
    fullScreen: {
        enable: false
    },
    fpsLimit: 60,
    particles: {
        number: {
            value: 18
        },
        color: {
            value: "#00ff00",
        },
        shape: {
            type: "images",
            images: [
                {
                    src: "../../../src/assets/0.png"
                },
                {
                    src: "../../../src/assets/1.png"
                }
            ]
        },
        size: {
            value: {min: 3, max: 4},
        },
        move: {
            enable: true,
            speed: 0.2,
            straight: false
        }
    },
    interactivity: {
        detectsOn: "window"
    },
    detectRetina: true,
    
    responsive: [
        {
            maxWidth: 2600,
            options: {
                particles: {
                    number: 15,
                    size: {
                        value: {min: 7, max: 8.5}
                    }
                }
            }
        },
        {
            maxWidth: 2000,
            options: {
                particles: {
                    number: 18,
                    size: {
                        value: {min: 4.5, max: 5.5}
                    }
                }
            }
        }, 
        {
            maxWidth: 1600,
            options: {
                particles: {
                    number: 18,
                    size: {
                        value: {min: 4, max: 5}
                    }
                }
            }
        },
        {
            maxWidth: 650,
            options: {
                particles: {
                    number: 18,
                    size: {
                        value: {min: 3, max: 4}
                    }
                }
            }
        }
    ]
})

const particles_main_content = tsParticles.domItem(0)
$(window).scroll(function() {
    if ($(window).scrollTop() <= $('#nav-bar').height()) {
        particles_main_content.pause()
    }
    else {
        particles_main_content.play()
    }
})