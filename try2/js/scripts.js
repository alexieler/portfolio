// 'use strict';
// const form = document.querySelector('form');
// const emailInput = document.getElementById("email");
// const mainHeader = document.querySelector('h1');
// const mainPara = document.getElementById('welcome-para');
// const contactBtn = document.getElementById("contact-btn");
// const backBtn = document.getElementById("back-btn");
// const introPage = document.getElementById("intro-container");
// const submitBtn = document.getElementById("submit-btn");
// const nameInput = document.getElementById('name');
// const textareaInput = document.querySelector('textarea');
// const error = document.getElementById("error");

// window.addEventListener('mousemove', (event) => {
//     let eyes = $('.eyes');
//     let mouseX = (eyes.offset().left) + (eyes.width() / 2); 
//     let mouseY = (eyes.offset().top) + (eyes.height() / 2);
//     let radian = Math.atan2(event.pageX - mouseX, event.pageY - mouseY);
//     let rotation = (radian * (180/ Math.PI) * -1) + 180;
//     eyes.css({
//         '-webkit-transform': 'rotate(' + rotation + 'deg)',
//         '-moz-transform': 'rotate(' + rotation + 'deg)',
//         '-ms-transform': 'rotate(' + rotation + 'deg)',
//         'transform': 'rotate(' + rotation + 'deg)'
//     });
// });
/*My eye function is inspired by Jeremy @J-Roel's pen,
aswell as William Imhoe's tutorial on Scotch*/
// function isValidEmail(email) {
//     return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
    // regex from https:emailregex.com/
// }

// function showOrHideTip(show, element) {
//     if (show) {
//     element.style.display = "inherit";
//     } else {
//     element.style.display = "none";
//     }
// }

// function createListener(validator) {
//     return e => {
//     const text = e.target.value;
//     const valid = validator(text);
//     const showTip = text !== "" && !valid;
//     const tooltip = e.target.nextElementSibling;
//     showOrHideTip(showTip, tooltip);
//     };
// }
// function addContact(){
//     form.style.display = "block";
// }

// function removeIntroPara(){
//     introPage.style.display = "none";
//     addContact();
// }

// function removeModal() {
//     introPage.style.display = "block";
//     form.style.display = "none";
// }

// function jsValidation () {
//     const emailResults = emailInput.value;
//     const emailTest = isValidEmail(emailResults);
//     if((nameInput === "") || (textareaInput.value === "") || (emailInput.value === "")|| (emailTest === false)){
//         error.style.display = "block";
//     } else {
//         error.style.display = "none";
//     }
// }

// function successMessage() {
//     form.style.display = "none";
//     introPage.style.display = "block";
//     mainHeader.innerHTML = "Oops! There seems to be a problem with the server. Try sending your email directly to me at alexie.leroux613@gmail.com";
//     mainPara.innerHTML = "So sorry for the inconvenience. I'll try to get back to you as soon as possible.";
// }

//window.onload = removeModal;
// const validEmail = emailInput.addEventListener("click", createListener(isValidEmail));
// contactBtn.addEventListener("click",removeIntroPara);
// backBtn.addEventListener("click", removeModal);
// submitBtn.addEventListener("click", jsValidation);

// $('#contact-form').submit(function(event){
//     event.preventDefault();
//     const emailResults = emailInput.value;
//     const emailTest = isValidEmail(emailResults);
//     if((nameInput === "") || (textareaInput.value === "") || (emailInput.value === "")|| (emailTest === false)){
//         error.style.display = "block";
//         } else {
//         error.style.display = "none";



        // successMessage();
        // unbinds preventDefault();
        // code taken from Grant Thomas on StackOverFlow


//         $(this).unbind("submit").submit();
//         }
// });








// $('#contact-form').submit(function(event)
//     {
//         event.preventDefault();
//         const emailResults = emailInput.value;
//         const emailTest = isValidEmail(emailResults);
//         const name = nameInput.value;
//         const email = emailInput.value;
//         const message = textareaInput.value;
//         //const dataString = 'name1=' + name + '&email1=' + email + '&message1=' + message;
//             if((name === "") || (message.value === "") || (email.value === "")|| (emailTest === false)){
//                 error.style.display = "block";
//             } else {
//                 //console.log(dataString);
//                 error.style.display = "none";
//                 successMessage();
//     }
// });