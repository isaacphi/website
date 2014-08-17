$(window).load( function () {

    // Check platforms for getUserMedia
    navigator.getUserMedia = ( navigator.getUserMedia ||
			       navigator.webkitGetUserMedia ||
			       navigator.mozGetUserMedia ||
			       navigator.msGetUserMedia );

    var width = window.innerWidth;
    var height = window.innerHeight;
    var v = document.getElementById("test-vid");
    var c = document.getElementById("canv");
    var recent_length = 20;
    var recent = new Array(recent_length);
    var ctx = c.getContext('2d');
    // Picture size
    v.width = width;
    v.height = height;
    c.width = width;
    c.height = height;

    // Fullscreen
    function toggleFullScreen() {
	var doc = window.document;
	var docEl = doc.documentElement;

	var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
	var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

	if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
	    requestFullScreen.call(docEl);
	    width = window.innerWidth;
	    height = window.innerHeight;
	    v.width = width;
	    v.height = height;
	    c.width = width;
	    c.height = height;
	}
	else {
	    cancelFullScreen.call(doc);
	}
    }
    el = window.document;
    el.addEventListener('click', toggleFullScreen, false);
    
    // Pick last video stream (outward facing camera)
    if (typeof MediaStreamTrack.getSources == 'function') {
	console.log("browser supports picking camera");
	MediaStreamTrack.getSources( function(sourceInfos) {
	    var videoSource = null;

	    for (var i = 0; i != sourceInfos.length; ++i) {
		var sourceInfo = sourceInfos[i];
		if (sourceInfo.kind === 'video') {
		    console.log(sourceInfo.id, sourceInfo.label || 'camera');
		    videoSource = sourceInfo.id;
		}
	    }

	    var constraints = {
		video: {
		    optional: [{sourceId: videoSource}]
		}
	    };
	    // Set up video stream
	    if (navigator.getUserMedia) {
		console.log("getUserMedia supported");
		navigator.getUserMedia (

		    // constraints
		    constraints,

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
	});
    } else {
	console.log("browser does not support camera picking");
	var constraints = { video: true };
	// Set up video stream
	if (navigator.getUserMedia) {
	    console.log("getUserMedia supported");
	    navigator.getUserMedia (

		// constraints
		constraints,

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
    }

    // function to call at regular intervals to detect blinking
    function checkPic() {
	ctx.drawImage(v,0,0,640,480,0,0,width/2,height);
	ctx.drawImage(v,0,0,640,480,width/2,0,width/2,height);
	// Do stuff:
	img_data = ctx.getImageData(0,0,width,height);
	var gray_img = new jsfeat.matrix_t(width, height, jsfeat.U8_t | jsfeat.C1_t);
	jsfeat.imgproc.grayscale(img_data.data, gray_img.data);
	// Calculate average darkness of picture
	var sum = 0;
	for(var i = 0; i < gray_img.data.length; i++){
	    sum += gray_img.data[i]; //don't forget to add the base
	}
	var avg = Math.round(sum/gray_img.data.length);
	// Keep an array of recent darkness values
	recent.shift();
	recent.push(avg);
	// Display results and do stuff
	//console.log(recent);
	//$('#info').html("darkness: " + recent);
	setTimeout(checkPic, 0); // Allow other processes to occur
    }

    // Copy video stream to image on a regular interval
    v.addEventListener('play',
		       function() {
			   // wait 1s first to let video start
			   var i=window.setTimeout(checkPic, 1000);
		       },
		       false); 

});
