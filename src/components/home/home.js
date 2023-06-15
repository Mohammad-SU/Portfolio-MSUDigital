/* TO-DO
- Finish contact error
- Add mail background image to contact section?
- Netlify custom success page
- Add favicon
- Add "view my work" or "scroll down", etc. on home section
- Add hover animations on buttons/anchors with glow effect
- Add animations (Scrolling skills, moving dash for profile, typing/slide in animations for home sections/other text?)
- Add interactive background (triangular moving waves top and bottom connected with binary digits, faint binary background with interactivity or binary digits that float and bounce as particles and connect with lines with the cursor) for home section
- Add non-interactive background for other sections (floating and moving binary)
- Make scroll lock to section/change scroll speed
- Make responsive and suitable for mobile
- Check if website looks good on other browsers (firefox, bing, opera, IE, etc.)
- Make page colour changeable? (Sass variable - change lime to $primary-color, manually add colour filters for images, add this feature on the top of page at home section which appears slowly with animation, when user scrolls, it will look like it connects with the navbar)
- Change dash styles to be longer?
- Change demo links to google drive/dropbox, embed videos?
- "Show more" button after adding another project
- SQL, PHP project (full-stack project?)
*/

tsParticles.load("particles-home", {
    fpsLimit: 65,
    particles: {
        number: {
            value: 120
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
            value: {min: 3, max: 6},
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

