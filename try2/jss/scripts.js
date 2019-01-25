//'use strict';

let leftEye = document.getElementById('left-eye');
let rightEye = document.getElementById('right-eye');
window.addEventListener('mousemove', (event) => {
    let eyes = $('.eyes');
    let mouseX = (eyes.offset().left) + (eyes.width() / 2); 
    let mouseY = (eyes.offset().top) + (eyes.height() / 2);
    let radian = Math.atan2(event.pageX - mouseX, event.pageY - mouseY);
    let rotation = (radian * (180/ Math.PI) * -1) + 180;
    eyes.css({
        '-webkit-transform': 'rotate(' + rotation + 'deg)',
        '-moz-transform': 'rotate(' + rotation + 'deg)',
        '-ms-transform': 'rotate(' + rotation + 'deg)',
        'transform': 'rotate(' + rotation + 'deg)'
    });
});

function irritateEye(eyeball){
    eyeball.classList.add('irritateEye');
}

rightEye.addEventListener('click', () => {
    console.log('F%^&.... owwwww');
    setTimeout(irritateEye(rightEye), 1000);
});
leftEye.addEventListener('click', () => {
    console.log('Please stop doing that...');
    setTimeout(irritateEye(leftEye), 1000);
});

//Portfolio page scripts
// for the paragraphs explaining my portfolio
$("#gameboy-title").click(function(){
    $("#gameboy-para").toggle("slow");
});

$("#zombie-title").click(function(){
    $("#zombie-para").toggle("slow");
});

$("#pimple-title").click(function(){
    $("#pimple-para").toggle("slow");
});
