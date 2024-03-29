// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs

// Run orbit on load
/*
$(document).foundation('orbit', {
    animation: 'fade',
    timer_speed: 15000,
    animation_speed: 400,
    stack_on_small: false,
    navigation_arrows: false,
    slide_number: false,
    pause_on_hover: false,
    resume_on_mouseout: false,
    bullets: false,
    timer: true,
    variable_height: false,
  });
*/

// Random background picture
var images = ['1.jpg','2.jpg','3.jpg','5.jpg','6.jpg','8.jpg'];
$('.random-pic').css({'background':'url(http://www.philisaac.com/img/backgrounds/'+images[Math.floor(Math.random()*images.length)] + ')'});
$('.random-pic').css({'background-size':'cover'});
$('.random-pic').css({'background-attachment':'fixed'});

// Pring "/"s
function write() {
    for (var i = 0; i<5000 ; i++){
    	document.write("/");
    }
}
function writeShort() {
    for (var i = 0; i<1000 ; i++){
    	document.write("/");
    }
}

// Randomize background picture
/*window.onload = function() {
    setBG();
}
var intervalID = setInterval(
    function() {
    	    setBG();
    }, 15000);

function setBG() {
    var randNum = Math.floor((Math.random()*7)+1); // random int between 1 and 7    
    document.getElementsByClassName("orbit-item")[0].style.height = "30em";
    document.getElementsByClassName("orbit-item")[0].style.background-size=cover;
    document.getElementsByClassName("orbit-item")[0].style.background-attachment=fixed;
    document.getElementsByClassName("orbit-item")[0].style.background =
	'url(img/backgrounds/'+randNum.toString()+'.jpg) no-repeat center';
}*/

// The the size in pixels of an element?
function getEmSize(el) {
    return Number(getComputedStyle(el, '').fontSize.match(/(\d+(\.\d+)?)px$/)[1]);
}
