// This proved to be very difficult for me....

var digClock = document.getElementById("clock")

var time = function() {

	var today = new Date();

	var h = today.getHours().toString();
	var m = today.getMinutes().toString();
	var s = today.getSeconds().toString();
	var amPM = "";

	if(h.length < 2){
		h = "0" + h;
	} else{
		h = h;
	}

	if(m.length < 2){
		m = "0" + m;
	} else{
		m = m;
	}

	if(s.length < 2){
		s = "0" + s;
	} else {
		s = s;
	}

	if(h < 12){
		amPM = "AM";
	} else{
		amPM = "PM";
	}

	if(h > 12){
		h = h - 12;
	} else {
		h = h;
	}


	clock.innerText = h + ":" + m + ":" + s + " " + amPM;


}

window.setInterval(time, 1000);
