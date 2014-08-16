// Check platforms for getUserMedia
navigator.getUserMedia = ( navigator.getUserMedia ||
			   navigator.webkitGetUserMedia ||
			   navigator.mozGetUserMedia ||
			   navigator.msGetUserMedia );

var width = 400;
var height = 300;
var constraints = { manditory: { maxWidth:width, maxHeight:height } };
// Set up video stream
if (navigator.getUserMedia) {
    console.log("getUserMedia supported");
    navigator.getUserMedia (

	// constraints
	{ video: true },

	// successCallback: tie inward facing camera to video stream
	function(localMediaStream) {
            var video = document.querySelector('video');
            video.src = window.URL.createObjectURL(localMediaStream);
	},

	// errorCallback
	function(err) {
            console.log("The following error occured: " + err);
	}
    );
} else {
    console.log("getUserMedia not supported");
}

var v=document.getElementById("test-vid");
var c=document.getElementById("test-canvas");
ctx=c.getContext('2d');
// Picture size
v.width = width;
v.height = height;
c.width = width;
c.height = height;


// function to call at regular intervals to detect blinking
function checkPic() {
    ctx.drawImage(v,0,0,640,480,0,0,width,height);
    setTimeout(checkPic, 33); //about 33 fps
}

// Copy video stream to image on a regular interval
v.addEventListener('play',
		   function() {
		       var i=window.setTimeout(checkPic, 1000);
		   },
		   false); 
