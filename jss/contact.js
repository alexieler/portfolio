const form = document.querySelector('form');
const emailInput = document.getElementById("email");
const mainHeader = document.querySelector('h1');
const mainPara = document.getElementById('welcome-para');
const contactBtn = document.getElementById("contact-btn");
const backBtn = document.getElementById("back-btn");
const introPage = document.getElementById("intro");
const submitBtn = document.getElementById("submit-btn");
const nameInput = document.getElementById('name');
const textareaInput = document.querySelector('textarea');
const error = document.getElementById("error");

/*My eye function is inspired by Jeremy @J-Roel's pen,
aswell as William Imhoe's tutorial on Scotch*/
function isValidEmail(email) {
    return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
    // regex from https:emailregex.com/
}

function showOrHideTip(show, element) {
    if (show) {
    element.style.display = "inherit";
    } else {
    element.style.display = "none";
    }
}

function createListener(validator) {
    return e => {
    const text = e.target.value;
    const valid = validator(text);
    const showTip = text !== "" && !valid;
    const tooltip = e.target.nextElementSibling;
    showOrHideTip(showTip, tooltip);
    };
}
function addContact(){
    form.style.display = "block";
}

function removeIntroPara(){
    introPage.style.display = "none";
    addContact();
}

function removeModal() {
    introPage.style.display = "block";
    form.style.display = "none";
}

function jsValidation () {
    const emailResults = emailInput.value;
    const emailTest = isValidEmail(emailResults);
    if((nameInput === "") || (textareaInput.value === "") || (emailInput.value === "")|| (emailTest === false)){
        error.style.display = "block";
    } else {
        error.style.display = "none";
    }
}

// function successMessage() {
//     form.style.display = "none";
//     introPage.style.display = "block";
//     mainHeader.innerHTML = "Thank you so much! I'll";
//     mainPara.innerHTML = "So sorry for the inconvenience. I'll try to get back to you as soon as possible.";
// }

window.onload = removeModal;
const validEmail = emailInput.addEventListener("click", createListener(isValidEmail));
contactBtn.addEventListener("click",removeIntroPara);
backBtn.addEventListener("click", removeModal);
submitBtn.addEventListener("click", jsValidation);

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener("submit", function(event){
    const emailResults = emailInput.value;
    const emailTest = isValidEmail(emailResults);
    if((nameInput.value === "") || (textareaInput.value === "") || (emailInput.value === "")|| (emailTest === false)){
        event.preventDefault();
        error.style.display = "block";
        } else {
            error.style.display = "none";
            removeModal();
            mainPara.innerHTML = "";
            mainHeader.innerHTML = "Sending...";
    }
});