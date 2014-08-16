$(window).load( function () {

    // Check platforms for getUserMedia
    navigator.getUserMedia = ( navigator.getUserMedia ||
			       navigator.webkitGetUserMedia ||
			       navigator.mozGetUserMedia ||
			       navigator.msGetUserMedia );

    var width = 640;
    var height = 480;
    var v=document.getElementById("test-vid");
    var c=document.getElementById("test-canvas");
    ctx=c.getContext('2d');
    // Picture size
    v.width = width;
    v.height = height;
    c.width = width;
    c.height = height;

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

    // function to call at regular intervals to detect blinking
    function checkPic() {
	ctx.drawImage(v,0,0,width,height,0,0,width,height);
	// Do stuff:
	img_data = ctx.getImageData(0,0,width,height);
	var gray_img = new jsfeat.matrix_t(width, height, jsfeat.U8_t | jsfeat.C1_t);
	jsfeat.imgproc.grayscale(img_data.data, gray_img.data);
	// Calculate average darkness of picture
	var sum = 0;
	for(var i = 0; i < gray_img.data.length; i++){
	    sum += gray_img.data[i]; //don't forget to add the base
	}
	var avg = sum/gray_img.data.length;
	console.log("average darkness" + avg);
	$('#info').html("darkness: " + avg);
	setTimeout(checkPic, 33); // Allow other processes to occur
    }

    // Copy video stream to image on a regular interval
    v.addEventListener('play',
		       function() {
			   // wait 1s first to let video start
			   var i=window.setTimeout(checkPic, 1000);
		       },
		       false); 

});
