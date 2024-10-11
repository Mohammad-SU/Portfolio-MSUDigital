function initializeSlider(containerId) {
    const container = $(`#${containerId}`);
    const imageContainer = container.find('.project-image-cont');
    const buttons = container.find('.slide-button');
    const slideSize = rem(48.6875);
    let translateNum = 0;
    let slideCount = buttons.length;
    let animationTimeout;
    let slideAutoDelay = 3000 // For when no slide button is clicked, or after a click after the manual delay is finished
    let slideManualDelay = 8000 // For when a slide button is clicked (so the slide stays longer so the user can study it better)

    function nextSlide() {
        imageContainer.css({transition: "transform 700ms", transform: `translate(${translateNum}px)`});
        translateNum -= slideSize; // Decrement so that it translates the images left (to move the slider 'right')
    }

    function slideAnimation() {
        // After the last slide, a duplicate of the first slide exists to make it seem like the slider is endless.
        // After the duplicate is fully in view, then the slider position should reset to the first instantly without animation
        const duplicateSlideReached = translateNum === -slideSize * (slideCount + 1)

        if (duplicateSlideReached) {
            imageContainer.css({transition: "none", transform: "translate(0px)"});
            translateNum = 0;

            // Buffer
            setTimeout(() => {
                nextSlide()
            }, 25);
        } 
        else {
            nextSlide()
        }
        animationTimeout = setTimeout(() => slideAnimation(), slideAutoDelay);
    }

    buttons.on("click", function() {
        const buttonIndex = parseInt($(this).text()) - 1; // -1 as index is +1 higher
        translateNum = -slideSize * buttonIndex;
        imageContainer.css({transition: "transform 700ms", transform: `translate(${translateNum}px)`});
        clearTimeout(animationTimeout);
        animationTimeout = setTimeout(() => slideAnimation(), slideManualDelay);
    });

    return {
        start: () => {
            animationTimeout = setTimeout(() => slideAnimation(), slideAutoDelay);
        },
        stop: () => {
            clearTimeout(animationTimeout);
        },
        reset: () => {
            clearTimeout(animationTimeout);
            translateNum = 0;
            imageContainer.css({transition: "transform 700ms", transform: "translate(0px)"});
        }
    };
}

let limedriveSlider, notesSlider;

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
    if (limedriveSlider) limedriveSlider.reset();
    if (notesSlider) notesSlider.reset();
    
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
windowResizeProjects()






