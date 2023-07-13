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
    retina_detect: false,
})
  
const particles_main_content = tsParticles.domItem(0)
console.log(tsParticles.domItem(0))

$(window).scroll(function() {
    if ($(window).scrollTop() <= $('#nav-bar').height()) {
        particles_main_content.pause()
    }
    else {
        particles_main_content.play()
    }
})