// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs

// Run orbit on load
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

// Pring "/"s
function write() {
    for (var i = 0; i<5000 ; i++){
    	document.write("/");
    }
}
function writeShort() {
    for (var i = 0; i<100 ; i++){
    	document.write("/");
    }
}

var secondScroll = false;

// Handle scrolling
window.onscroll = function () {
    var hHeight = getEmSize(top_mid)*30;
    var tophHeight = getEmSize(top_mid)*3;

    var top = window.pageXOffset ? window.pageXOffset : 
	document.documentElement.scrollTop ? 
	document.documentElement.scrollTop : document.body.scrollTop;
    // scrolled far down
    if(top > hHeight-tophHeight){
	// Header
	document.getElementById("bg_slideshow").style.height = tophHeight+"px";
        document.getElementById("top_mid").style.top = "0px";
	document.getElementById("header").style.position = "fixed";
	document.getElementById("header").style.height = tophHeight+"px";
	// Body
	document.getElementById("content_main").style.top = hHeight+"px";

	secondScroll = true;
	// Footer
	document.getElementById("footer").style.top = hHeight+"px";
    }
    // not scrolled that far down yet
    else {
	// Header
	document.getElementById("bg_slideshow").style.height = 
	    hHeight-top+"px";
        document.getElementById("top_mid").style.top = hHeight-tophHeight+"px";	
        document.getElementById("header").style.position = "relative";
	document.getElementById("header").style.top = "0px";
	// Body
	// Second scroll: something wacky about small screen size
	if (secondScroll==true && window.innerWidth<641) {
	    document.getElementById("content_main").style.top = hHeight-tophHeight+"px";
	}
	else {
	    document.getElementById("content_main").style.top = "0px";
	}
	//document.getElementById("content_main").style.top = "0px";
	
	// Footer
	//document.getElementById("footer").style.top = hHeight+"px";
    }
}

// The the size in pixels of an element?
function getEmSize(el) {
    return Number(getComputedStyle(el, '').fontSize.match(/(\d+(\.\d+)?)px$/)[1]);
}