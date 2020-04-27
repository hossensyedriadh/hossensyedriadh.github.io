const iftarTimes = ['Apr 25, 2020 18:28:00', 'Apr 26, 2020 18:29:00', 'Apr 27, 2020 18:29:00', 'Apr 28, 2020 18:29:00', 'Apr 29, 2020 18:30:00', 'Apr 30, 2020 18:30:00', 'May 1, 2020 18:31:00', 'May 2, 2020 18:31:00', 'May 3, 2020 18:32:00', 'May 4, 2020 18:32:00', 'May 5, 2020 18:33:00', 'May 6, 2020 18:33:00', 'May 7, 2020 18:34:00', 'May 8, 2020 18:34:00', 'May 9, 2020 18:35:00', 'May 10, 2020 18:35:00', 'May 11, 2020 18:36:00', 'May 12, 2020 18:36:00', 'May 13, 2020 18:36:00', 'May 14, 2020 18:37:00', 'May 15, 2020 18:37:00', 'May 16, 2020 18:38:00', 'May 17, 2020 18:38:00', 'May 18, 2020 18:39:00', 'May 19, 2020 18:39:00', 'May 20, 2020 18:40:00', 'May 21, 2020 18:40:00', 'May 22, 2020 18:41:00', 'May 23, 2020 18:42:00', 'May 24, 2020 18:42:00'];
		
		let t = document.getElementById("timer_div");

		let counter = setInterval(function() {
			for (let i=0; i<iftarTimes.length;) {
				let now = new Date().getTime();
				let distance = Date.parse(iftarTimes[i]) - now;
				let days = Math.floor(distance / (1000 * 60 * 60 * 24));
				
				if (days >= 0) {
					let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
					let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
					let seconds = Math.floor((distance % (1000 * 60)) / 1000);
					
					document.getElementById("label").innerHTML = "Time left till iftaar:";
					document.getElementById("hours").innerHTML = hours+" H";
					document.getElementById("minutes").innerHTML = minutes+" M";
					document.getElementById("seconds").innerHTML = seconds+" S";
					
					if (days >= 0) {
						blink();
					}
					
					if (hours <= 5) {
						t.style.display = "block";
					} else {
						t.style.display = "none";
					}
					
					if (distance <= 0) {
						clearInterval(counter);
						document.getElementById("hours").innerHTML = "00";
						document.getElementById("minutes").innerHTML = "00";
						document.getElementById("seconds").innerHTML = "00";
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