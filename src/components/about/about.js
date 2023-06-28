function aboutFadeIn() {
    if ($(window).scrollTop() >= $('#about').offset().top - 160 && $(window).scrollTop() < $('#projects').offset().top - 300) {
        $("#profile-text, #profile-icons-cont, .skill-item").addClass("about__fade-in")
    }
}
$(window).scroll(aboutFadeIn)
aboutFadeIn()
