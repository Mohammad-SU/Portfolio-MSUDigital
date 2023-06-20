/* TO-DO
- Add favicon
- Add "view my work" or "scroll down", etc. on home section
- Add animations (Scrolling skills, typing/slide in animations for home sections/other text?)
- Make responsive and suitable for mobile
- Check if website looks good on other browsers (firefox, bing, opera, IE, etc.)
- Change demo links to google drive/dropbox, embed videos?
- Make scroll lock to section/change scroll speed?
- Netlify custom success page?
*/

tsParticles.load("particles-home", {
    fpsLimit: 65,
    particles: {
        number: {
            value: 100
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
            value: {min: 3, max: 5},
        },
        line_linked: {
            enable: true,
            opacity: 1,
            distance: 120,
            color: "#00ff00",
            width: 1,
            triangles: {
                opacity: 0.3,
                enable: true,
                color: "#00ff00",
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

