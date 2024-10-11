const submitButton = $("#contact-form__submit")
const errorText = $("#error-text")

let formState = ""

submitButton.on("pointerenter", function() {
    const re = /^\S+@\S+\.\S+$/

    switch (true) {
        case $("#contact-form__name").val() == "" || $("#contact-form__email").val() == "" || $("#contact-form__subject").val() == "" || $("#contact-form__message").val() == "":
            formState = "unfinished"
            break;
        case re.test($("#contact-form__email").val()) == false && $("#contact-form__name").val() != "" && $("#contact-form__email").val() != "" && $("#contact-form__subject").val() != "" && $("#contact-form__message").val() != "":
            formState = "invalid email"
            break;
        default:
            formState = ""
    }

    switch (true) {
        case formState == "unfinished":
            submitButton.prop('disabled', true);
            errorText.text("Please fill out all fields.")
            break;
        case formState == "invalid email":
            submitButton.prop('disabled', true);
            errorText.text("Please enter a valid email.")
            break;
        default:
            submitButton.prop('disabled', false);
            errorText.text("")
    }
})

function contactFadeIn() {
    if (viewportVis($("#contact")) && !$("#contact-text").hasClass("contact__fade-in")) {
        $("#contact-text, #contact-form__name, #contact-form__subject, #contact-form__email, #contact-form__message, #contact-form__captcha, #contact-form__submit").addClass("contact__fade-in")
    }
}
$(window).scroll(contactFadeIn)
contactFadeIn()