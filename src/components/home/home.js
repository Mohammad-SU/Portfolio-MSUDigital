/* TO-DO
- Add jQuery img
- Make project images clickable
- Finish submit button and error
- Add mail background image to contact section
- Netlify custom success page
- Finish footer
- Add favicon
- Add "view my work" or "scroll down", etc. on home section
- Add green hue and blur filter to navbar?
- Add patterns on sides of section headings (Scale >> Text << Animation with letters of heading slowly changing to a special character/number e.g "A" changing to 4, "o" changing to "0", etc. glow effect )
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

$(window).scroll(function() {
    if ($(window).scrollTop() > $('#home-cont').height()) {
        $('#home-cont').hide();
    }
    else {
        $('#home-cont').show();
    }
});

particlesJS('particles-home',
    {
        "particles": {
            "number": {
                "value": 100,
                "density": {
                    "enable": true,
                    "value_area": 400
                }
            },
            "color": {
                "value": "#00ff00"
            },
            "shape": {
                "type": "image",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "assets/0.png",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#00ff00",
                "opacity": 0.795588814493895,
                "width": 1.1
            },
            "move": {
                "enable": true,
                "speed": 20,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 300,
                    "line_linked": {
                        "opacity": 0.7917592405574626
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 0.7937600738682846,
                    "speed": 3
                },
                "repulse": {
                    "distance": 150,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    }
)