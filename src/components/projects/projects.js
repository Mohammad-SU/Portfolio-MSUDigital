var projectSlideAnimation_timeout
let translateNum = rem(-48.6875)

function setAnimation(functionName, time) {
    projectSlideAnimation_timeout = setTimeout(functionName, time)
}

function projectSlideAnimation () {
    if (translateNum == rem(-243.4375)) { // if img 5 is reached (duplicate of first img)
        $(".project-image-cont").css({transition: "none", transform: "translate(0px)"})
        translateNum = rem(-48.6875)
        setAnimation(projectSlideAnimation, 25)
    }
    else if (translateNum > rem(-243.4375)) {
        $(".project-image-cont").css({transition: "transform 700ms", transform: "translate("+translateNum+"px)"})
        translateNum -= rem(48.6875)
        setAnimation(projectSlideAnimation, 3000)
    }
}

$(".slide-button").on("click", function() {
    translateNum = parseInt($(this).text()) * rem(-48.6875) + rem(48.6875) // Addition due to duplicate of first img
    $(".project-image-cont").css({transition: "transform 700ms", transform: "translate("+translateNum+"px)"})
    clearTimeout(projectSlideAnimation_timeout)
    setAnimation(projectSlideAnimation, 8000)
    translateNum -= rem(48.6875)
})

function projectsFadeIn() {
        if (viewportVis($("#project-1")) && !$("#project-1 .slider-cont").hasClass("projects__fade-in")) {
            $("#project-1 .slider-cont, #project-1 .project-info").addClass("projects__fade-in")
            setAnimation(projectSlideAnimation, 3000)
        } 
        if (viewportVis($("#project-2")) && !$("#project-2 .project-info").hasClass("projects__fade-in")) {
            $("#project-2 .project-image, #project-2 .project-info").addClass("projects__fade-in")
        }        
        if (viewportVis($("#project-3")) && !$("#project-3 .project-info").hasClass("projects__fade-in")) {
            $("#project-3 .project-image, #project-3 .project-info").addClass("projects__fade-in")
        }
        if (viewportVis($("#project-4")) && !$("#project-4 .project-info").hasClass("projects__fade-in")) {
            $("#project-4 .project-image, #project-4 .project-info").addClass("projects__fade-in")
        }    
}
$(window).scroll(projectsFadeIn)
projectsFadeIn()

function windowResizeProjects() {
    clearTimeout(projectSlideAnimation_timeout)
    translateNum = 0
    $(".project-image-cont").css({transition: "transform 700ms", transform: "translate("+translateNum+"px)"})
    if ($("#project-1 .slider-cont").hasClass("projects__fade-in")) {
        setAnimation(projectSlideAnimation, 3000)
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

    let projectRightImageAnchors = document.querySelectorAll(".project-right__image-anchor")
    let projectRightInfos = document.querySelectorAll(".project-right .project-info")

    if ($(window).width() <= 1300) {
        projectRightImageAnchors[0].after(projectRightInfos[0])
        projectRightImageAnchors[1].after(projectRightInfos[1])
    }
    if ($(window).width() > 1300) {
        projectRightImageAnchors[0].before(projectRightInfos[0])
        projectRightImageAnchors[1].before(projectRightInfos[1])
    }
}
windowResizeProjects()






