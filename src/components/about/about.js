function aboutFadeIn() {
    if ($(window).scrollTop() >= $('#about').offset().top - 160 && $(window).scrollTop() < $('#projects').offset().top - 300) {
        $("#profile-text, #profile-icons-cont, .skill-item").addClass("about__fade-in")
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
$(window).on("resize", windowResizeAbout)
windowResizeAbout()