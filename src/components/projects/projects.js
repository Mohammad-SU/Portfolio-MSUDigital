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

var projectSlideAnimation_timeout = setTimeout(projectSlideAnimation, 3000)

$(".slide-button").on("click", function() {
    translateNum = parseInt($(this).text()) * -779 + 779 // Addition due to duplicate of first image
    $(".project-image-cont").css({transition: "transform 700ms", transform: "translate("+translateNum+"px)"})
    clearTimeout(projectSlideAnimation_timeout)
    setAnimation(projectSlideAnimation, 8000)
    translateNum -= 779
})
