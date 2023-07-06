var projectSlideAnimation_timeout
let translateNum = -779

function setAnimation(functionName, time) {
    projectSlideAnimation_timeout = setTimeout(functionName, time)
}

function projectSlideAnimation () {
    if (translateNum == -3895) {
        $(".project-image-cont").css({transition: "none", transform: "translate(0px)"})
        translateNum = -779
        setAnimation(projectSlideAnimation, 25)
    }
    else if (translateNum > -3895) {
        $(".project-image-cont").css({transition: "transform 700ms", transform: "translate("+translateNum+"px)"})
        translateNum -= 779
        setAnimation(projectSlideAnimation, 3000)
    }
}

$(".slide-button").on("click", function() {
    translateNum = parseInt($(this).text()) * -779 + 779 // Addition due to duplicate of first image
    $(".project-image-cont").css({transition: "transform 700ms", transform: "translate("+translateNum+"px)"})
    clearTimeout(projectSlideAnimation_timeout)
    setAnimation(projectSlideAnimation, 8000)
    translateNum -= 779
})

function projectsFadeIn() {
        if ($(window).scrollTop() >= $('#projects').offset().top - 300 && $(window).scrollTop() < $('#project-1').offset().top + 250 && !$("#project-1 .slider-cont").hasClass("projects__fade-in")) {
            $("#project-1 .slider-cont, #project-1 .project-info").addClass("projects__fade-in")
            setAnimation(projectSlideAnimation, 3000)
        } 
        if ($(window).scrollTop() >= $('#project-1').offset().top && $(window).scrollTop() < $('#project-2').offset().top + 150 && !$("#project-2 .project-info").hasClass("projects__fade-in")) {
            $("#project-2 .project-image, #project-2 .project-info").addClass("projects__fade-in")
        }        
        if ($(window).scrollTop() >= $('#project-2').offset().top && $(window).scrollTop() < $('#project-3').offset().top + 150 && !$("#project-3 .project-info").hasClass("projects__fade-in")) {
            $("#project-3 .project-image, #project-3 .project-info").addClass("projects__fade-in")
        }
        if ($(window).scrollTop() >= $('#project-3').offset().top && $(window).scrollTop() < $('#project-4').offset().top + 150 && !$("#project-4 .project-info").hasClass("projects__fade-in")) {
            $("#project-4 .project-image, #project-4 .project-info").addClass("projects__fade-in")
        }    
}
$(window).scroll(projectsFadeIn)
projectsFadeIn()

function windowResizeProjects() {
    if ($(window).width() <= 1332 && $(window).width() >= 1301) {
        $("#project-stack-connect").text(" >> JS/jQuery • HTML • CSS << ")
    }
    else {
        $("#project-stack-connect").text(" >> JavaScript/jQuery • HTML • CSS << ")
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
$(window).on("resize", windowResizeProjects)
windowResizeProjects()






