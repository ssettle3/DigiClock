// This proved to be very difficult for me....

var digClock = document.getElementById("clock")

var time = function() {

	var today = new Date();

	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();

	if(h < 10){
		h = "0" + h;
	} else{
		h = h;
	}

	if(m < 10){
		m = "0" + m;
	} else{
		m = m;
	}

	if(s < 10){
		s = "0" + s;
	} else {
		s = s;
	}


	clock.innerText = "#" + h + m + s;

	var bgColor = "#" + h + m + s;
	document.body.style.background = bgColor;

}

window.setInterval(time, 1000);
