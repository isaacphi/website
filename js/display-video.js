navigator.getUserMedia = ( navigator.getUserMedia ||
			   navigator.webkitGetUserMedia ||
			   navigator.mozGetUserMedia ||
			   navigator.msGetUserMedia);

if (navigator.getUserMedia) {
    console.log("getUserMedia supported");
    navigator.getUserMedia (

	// constraints
	{ video: true },

	// successCallback
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

function write() {
    document.getElementById('example').innerHTML = "yes";
}
