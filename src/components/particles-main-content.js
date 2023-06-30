tsParticles.load("particles-main-content", {
    fullScreen: {
        enable: false
    },
    fpsLimit: 65,
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
    retina_detect: true,
});
  

const particles_main_content = tsParticles.domItem(1)

$(window).scroll(function() {
    if ($(window).scrollTop() <= $('#nav-bar').height()) {
        particles_main_content.pause()
    }
    else {
        particles_main_content.play()
    }
})