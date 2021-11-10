function showMessage(input, message, type) {
    const msg = input.parentNode.querySelector("small");
    msg.innerText = message;
    input.className = type ? "success" : "error";
    return type;
}

function showError(input, message) {
    return showMessage(input, message, false);
}

function showSuccess(input) {
    return showMessage(input, '', true);
}

function hasValue(input, message) {
    if (input.value.trim() === "") {
        return showError(input, message);
    }
    return showSuccess(input);
}

function validateEmail(input, emailRequired, emailInvalid) {
    if (!hasValue(input, emailRequired)) {
        return false;
    }

    let email = input.value.trim();
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(email)) {
        return showError(input, emailInvalid);
    }

    return true;
}

const form = document.getElementById("signup");

const nameRequired = "Please add your name";
const emailRequired = "Please enter your email address";
const emailInvalid = "Please enter correct email format";

form.addEventListener("submit", function (event) {
    event.preventDefault(); // reload stop

    let nameValid = hasValue(form.elements["name"], nameRequired); // boolean
    let emailValid = validateEmail(form.elements["email"], emailRequired, emailInvalid); // bloolean

    if (nameValid && emailValid) {
        console.log("Everything is valid dude");
    }
})
