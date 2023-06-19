function captchaCallback() {
    const submitButton = document.getElementById("contact-form__submit");
    submitButton.removeAttribute("disabled");
}

window.captchaCallback = captchaCallback; // Define recaptchaCallback in the global scope.