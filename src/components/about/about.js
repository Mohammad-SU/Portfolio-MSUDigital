function aboutFadeIn() {
    if (viewportVis($("#about-content")) && ($(window).width() > 1300 || $(window).width() < 545)) {
        $("#profile-text, #profile-icons-cont, .skill-item").addClass("about__fade-in")
    }
    else if ($(window).width() <= 1300 && $(window).width() >= 545) {
        if (viewportVis($("#profile-cont"))) {
            $("#profile-text, #profile-icons-cont").addClass("about__fade-in")
        }
        if (viewportVis($("#skill-cont-1"))) {
            $(".skill-item").addClass("about__fade-in")
        }
    }
}
$(window).scroll(aboutFadeIn)
aboutFadeIn()

function windowResizeAbout() {
    let profileCont = document.querySelector("#profile-cont")
    let skillCont_1 = document.querySelector("#skill-cont-1")

    if ($(window).width() <= 1300 && !$('#skill-cont-1').parent().hasClass("skill-cont-wrapper")) {
        profileCont.after(skillCont_1)
        $('.skill-cont').wrapAll('<div class="skill-cont-wrapper">')
    }
    if ($(window).width() > 1300 && $('#skill-cont-1').parent().hasClass("skill-cont-wrapper")) {
        $('#skill-cont-1').unwrap()
        profileCont.before(skillCont_1)
        $(".skill-cont-wrapper").remove()
    }
}
windowResizeAbout()