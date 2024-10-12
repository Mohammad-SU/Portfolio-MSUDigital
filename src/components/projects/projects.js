let limedriveSlider, notesSlider;

function initializeSlider(containerId) {
    const captions = [
        "File List - Clean UI",
        "File Viewer - Video and Controls",
        "File List - Detailed UI, Item Select, Drag & Drop, Upload Queue",
        "File Viewer - PDF and Shareable Link Generation",
        "Settings",
        "Login",
        "Responsive Design - Usable on Varied Screen Sizes"
    ];

    const container = $(`#${containerId}`);
    const sliderCaption = container.find('.slider-caption');
    const imageContainer = container.find('.project-image-cont');
    const buttons = container.find('.slide-button');
    const firstSlide = imageContainer.find('.project-image-slide').first();

    const slideSize = firstSlide.outerWidth();
    let timeouts = [];
    let translateNum = 0;
    let slideCount = buttons.length;
    let slideAutoDelay = 3000 // For when no slide button is clicked, or after a click after the manual delay is finished
    let slideManualDelay = 8000 // For when a slide button is clicked (so the slide stays longer so the user can study it better)

    function clearAllTimeouts() {
        timeouts.forEach(clearTimeout);
        timeouts = [];
    }

    function nextSlide() {
        translateNum -= slideSize; // Decrement so that it translates the images left (to move the slider 'right')
        imageContainer.css({transition: "transform 700ms", transform: `translate(${translateNum}px)`});
        updateCurrentSlideButton();
    }

    // For UX to show which button the current slide is for
    function updateCurrentSlideButton() {
        const currentSlideIndex = Math.abs(Math.round(translateNum / slideSize)) % slideCount;
        buttons.removeClass('matches-current-slide');
        buttons.eq(currentSlideIndex).addClass('matches-current-slide');

        // Update caption
        sliderCaption.text(captions[currentSlideIndex]);
    }

    function slideAnimation() {
        // After the last slide, a duplicate of the first slide exists to make it seem like the slider is endless.
        // After the duplicate is fully in view, then the slider position should reset to the first instantly without animation
        const duplicateSlideReached = translateNum === -slideSize * slideCount // For some reason it's not * slideCount + 1 but actually * slideCount, otherwise led to issues

        if (duplicateSlideReached) {
            translateNum = 0;
            imageContainer.css({transition: "none", transform: `translate(${translateNum})`});
            
            const bufferTimeout = setTimeout(() => nextSlide(), 25);
            timeouts.push(bufferTimeout);
        } else {
            nextSlide()
        }

        const animationTimeout = setTimeout(() => slideAnimation(), slideAutoDelay);
        timeouts.push(animationTimeout);
    }

    buttons.on("click", function() {
        const buttonIndex = parseInt($(this).text()) - 1; // -1 as index is +1 higher
        translateNum = -slideSize * buttonIndex;
        imageContainer.css({transition: "transform 700ms", transform: `translate(${translateNum}px)`});

        clearAllTimeouts();

        const manualTimeout = setTimeout(() => slideAnimation(), slideManualDelay);
        timeouts.push(manualTimeout);

        updateCurrentSlideButton();

    });

    return {
        start: () => {
            clearAllTimeouts();

            const animationTimeout = setTimeout(() => slideAnimation(), slideAutoDelay);
            timeouts.push(animationTimeout);

            updateCurrentSlideButton();
        },
        stop: () => {
            clearAllTimeouts();
        },
        reset: () => {
            clearAllTimeouts();
            
            translateNum = 0;
            imageContainer.css({transition: "transform 700ms", transform: "translate(0px)"});

            updateCurrentSlideButton();
        }
    };
}

function reinitializeSliders() {
    if (limedriveSlider) {
        limedriveSlider.stop();
        limedriveSlider = initializeSlider("limedrive-project");
        if ($("#limedrive-project .slider-cont").hasClass("projects__fade-in")) {
            // Reset the element even though the slider function is reinitialized
            limedriveSlider.reset();
            limedriveSlider.stop();
            limedriveSlider.start();
        }
    }
    
    if (notesSlider) {
        notesSlider.stop();
        notesSlider = initializeSlider("notes-project");
        if ($("#notes-project .slider-cont").hasClass("projects__fade-in")) {
            // Reset the element even though the slider function is reinitialized
            notesSlider.reset();
            notesSlider.stop();
            notesSlider.start();
        }
    }
}

function projectsFadeIn() {
        if (viewportVis($("#limedrive-project")) && !$("#limedrive-project .slider-cont").hasClass("projects__fade-in")) {
            $("#limedrive-project .slider-cont, #limedrive-project .project-info").addClass("projects__fade-in");
            limedriveSlider = initializeSlider("limedrive-project");
            limedriveSlider.start();
        } 

        if (viewportVis($("#notes-project")) && !$("#notes-project .slider-cont").hasClass("projects__fade-in")) {
            $("#notes-project .slider-cont, #notes-project .project-info").addClass("projects__fade-in");
            notesSlider = initializeSlider("notes-project");
            notesSlider.start();
        } 

        if (viewportVis($("#connect-project")) && !$("#connect-project .project-info").hasClass("projects__fade-in")) {
            $("#connect-project .project-image, #connect-project .project-info").addClass("projects__fade-in")
        }  

        if (viewportVis($("#calculator-project")) && !$("#calculator-project .project-info").hasClass("projects__fade-in")) {
            $("#calculator-project .project-image, #calculator-project .project-info").addClass("projects__fade-in")
        }
}

$(window).scroll(projectsFadeIn)
projectsFadeIn()

function windowResizeProjects() {
    reinitializeSliders();
    
    if ($("#limedrive-project .slider-cont").hasClass("projects__fade-in")) {
        limedriveSlider.start();
    }
    if ($("#notes-project .slider-cont").hasClass("projects__fade-in")) {
        notesSlider.start();
    }

    if ($(window).width() <= 1332 && $(window).width() >= 1301) {
        $("#project-stack-connect").text("JS/jQuery • HTML • CSS")
    }
    else {
        $("#project-stack-connect").text("JavaScript/jQuery • HTML • CSS")
    }

    if ($(window).width() <= 1380 && $(window).width() >= 1301) {
        $(".project-live-app").text("APP")
        $(".project-live-game").text("GAME")
    }
    else {
        $(".project-live-app").text("LIVE APP")
        $(".project-live-game").text("LIVE GAME")
    }

    let connectProjectRightAnchor = document.querySelector("#connect-project .project-right__image-anchor")
    let connectProjectRightInfo = document.querySelector("#connect-project .project-info")

    let limedriveProjectRightSlider = document.querySelector("#limedrive-project .slider-cont")
    let limedriveProjectRightInfo = document.querySelector("#limedrive-project .project-info")

    if ($(window).width() <= 1300) {
        connectProjectRightAnchor.after(connectProjectRightInfo)
        limedriveProjectRightSlider.after(limedriveProjectRightInfo)
    }
    if ($(window).width() > 1300) {
        connectProjectRightAnchor.before(connectProjectRightInfo)
        limedriveProjectRightSlider.before(limedriveProjectRightInfo)
    }
}
windowResizeProjects() // Called on resize in global.js






