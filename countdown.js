const iftarTimes = ['Apr 25, 2020 18:28:00', 'Apr 26, 2020 18:29:00', 'Apr 27, 2020 18:29:00', 'Apr 28, 2020 18:29:00', 'Apr 29, 2020 18:30:00', 'Apr 30, 2020 18:30:00', 'May 1, 2020 18:31:00', 'May 2, 2020 18:31:00', 'May 3, 2020 18:32:00', 'May 4, 2020 18:32:00', 'May 5, 2020 18:33:00', 'May 6, 2020 18:33:00', 'May 7, 2020 18:34:00', 'May 8, 2020 18:34:00', 'May 9, 2020 18:35:00', 'May 10, 2020 18:35:00', 'May 11, 2020 18:36:00', 'May 12, 2020 18:36:00', 'May 13, 2020 18:36:00', 'May 14, 2020 18:37:00', 'May 15, 2020 18:37:00', 'May 16, 2020 18:38:00', 'May 17, 2020 18:38:00', 'May 18, 2020 18:39:00', 'May 19, 2020 18:39:00', 'May 20, 2020 18:40:00', 'May 21, 2020 18:40:00', 'May 22, 2020 18:41:00', 'May 23, 2020 18:42:00', 'May 24, 2020 18:42:00'];

const suhoorTimes = ['Apr 25, 2020 04:05:00', 'Apr 26, 2020 04:04:00', 'Apr 27, 2020 04:03:00', 'Apr 28, 2020 04:02:00', 'Apr 29, 2020 04:01:00', 'Apr 30, 2020 04:00:00', 'May 1, 2020 03:59:00', 'May 2, 2020 03:58:00', 'May 3, 2020 03:57:00', 'May 4, 2020 03:55:00', 'May 5, 2020 03:54:00', 'May 6, 2020 03:53:00', 'May 7, 2020 03:52:00', 'May 8, 2020 03:51:00', 'May 9, 2020 03:50:00', 'May 10, 2020 03:50:00', 'May 11, 2020 03:49:00', 'May 12, 2020 03:49:00', 'May 13, 2020 03:48:00', 'May 14, 2020 03:48:00', 'May 15, 2020 03:47:00', 'May 16, 2020 03:47:00', 'May 17, 2020 03:46:00', 'May 18, 2020 03:46:00', 'May 19, 2020 03:45:00', 'May 20, 2020 03:44:00', 'May 21, 2020 03:44:00', 'May 22, 2020 03:43:00', 'May 23, 2020 03:43:00', 'May 24, 2020 03:42:00'];

let t = document.getElementById("timer_div");

let iftaarCounter = setInterval(function() {
	for (let i=0; i<iftarTimes.length;) {
		let now = new Date().getTime();
		let distance = Date.parse(iftarTimes[i]) - now;
		let days = Math.floor(distance / (1000 * 60 * 60 * 24));
		
		if (days >= 0) {
			let iftaarHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			let iftaarMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			let iftaarSeconds = Math.floor((distance % (1000 * 60)) / 1000);
			
			if (iftaarHours <= 5) {
				t.style.display = "block";
				document.getElementById("label").innerHTML = "Time left till iftaar:";
				document.getElementById("hours").innerHTML = iftaarHours+" H";
				document.getElementById("minutes").innerHTML = iftaarMinutes+" M";
				document.getElementById("seconds").innerHTML = iftaarSeconds+" S";
				
				if (days >= 0) {
					blink();
				}
			} else {
				t.style.display = "none";
			}
			
			if (distance <= 0) {
				clearInterval(iftaarCounter);
			}
			break;
		} else {
			i+=1;
		}
	}
}, 1000);

let suhoorCounter = setInterval(function() {
	for (let i=0; i<suhoorTimes.length;) {
		let now = new Date().getTime();
		let distance = Date.parse(suhoorTimes[i]) - now;
		let days = Math.floor(distance / (1000 * 60 * 60 * 24));
		
		if (days >= 0) {
			let suhoorHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			let suhoorMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			let suhoorSeconds = Math.floor((distance % (1000 * 60)) / 1000);
			
			if (suhoorHours <= 3) {
				t.style.display = "block";
				document.getElementById("label").innerHTML = "Time left for suhoor:";
				document.getElementById("hours").innerHTML = suhoorHours+" H";
				document.getElementById("minutes").innerHTML = suhoorMinutes+" M";
				document.getElementById("seconds").innerHTML = suhoorSeconds+" S";
				
				if (days >= 0) {
					blink();
				}
			}
			
			if (distance <= 0) {
				clearInterval(suhoorCounter);
			}
			break;
		} else {
			i+=1;
		}
	}
}, 1000);

function blink() {
	var a = document.getElementById("blink1");
	var b = document.getElementById("blink2");
	a.style.color = (a.style.color == "transparent" ? "#000000" : "transparent");
	b.style.color = (b.style.color == "transparent" ? "#000000" : "transparent");
}
