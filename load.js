// Header and picture and scrolling
window.onscroll = function () {
    var top = window.pageXOffset ? window.pageXOffset : 
	document.documentElement.scrollTop ? 
	document.documentElement.scrollTop : document.body.scrollTop;
    if(top > window.innerHeight/2-125){
	document.getElementById("nav").style.position = "fixed";
	document.getElementById("nav").style.left = 
	    Math.floor(window.innerWidth/2)-259+"px";
	document.getElementById("nav").style.top = "125px";
	
	document.getElementById("bigHead").style.position = "fixed";
	document.getElementById("bigHead").style.left = "0px";
	document.getElementById("bigHead").style.top = 
	    -Math.floor(window.innerHeight/2)+127+"px";

	document.getElementById("content").style.top = 
	    Math.floor(window.innerHeight/2)+50+"px";
    }
    else {
        document.getElementById("nav").style.position = "relative";
	document.getElementById("nav").style.left = "0px";
	document.getElementById("nav").style.top = "0px";

        document.getElementById("bigHead").style.position = "relative";
	document.getElementById("bigHead").style.left = "0px";
	document.getElementById("bigHead").style.top = "0px";

	document.getElementById("content").style.top = "0px";
    }
}

// Handle window resizing
window.onresize = function() {
    var top = window.pageXOffset ? window.pageXOffset : 
	document.documentElement.scrollTop ? 
	document.documentElement.scrollTop : document.body.scrollTop;
    if(top > window.innerHeight/2-125){
	document.getElementById("nav").style.position = "fixed";
	document.getElementById("nav").style.left = 
	    Math.floor(window.innerWidth/2)-259+"px";
	document.getElementById("nav").style.top = "126px";
	
	document.getElementById("bigHead").style.position = "fixed";
	document.getElementById("bigHead").style.left = "0px";
	document.getElementById("bigHead").style.top = 
	    -Math.floor(window.innerHeight/2)+125+"px";

	document.getElementById("content").style.top = 
	    Math.floor(window.innerHeight/2)+50+"px";
    }
}

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
