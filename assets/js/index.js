document.addEventListener(
	"DOMContentLoaded",
	() => {
		function animateSgv(id, delay, delayIncrement) {
			const logo = document.getElementById(id);
			const logoPaths = document.querySelectorAll(`#${id} path`);
			delay = delay;
			for (let i = 0; i < logoPaths.length; i++) {
				// console.log(logoPaths[i].getTotalLength());
				logoPaths[i].style.strokeDasharray = logoPaths[i].getTotalLength();
				logoPaths[i].style.strokeDashoffset = logoPaths[i].getTotalLength();
				logoPaths[i].style.animation = `line-anim 2s ease forwards ${delay}s`;
				delay += delayIncrement;
				// console.log(delay);
			}
			logo.style.animation = `fill 1s ease forwards ${delay}s`;
		}
		animateSgv("logo", 0, 1);
	},
	false
);

// $(window).scroll(function () {
// 	var scroll = $(window).scrollTop();
// 	$(".zoom img").css({
// 		transform:
// 			"translate3d(-50%, -" +
// 			scroll / 100 +
// 			"%, 0) scale(" +
// 			(100 + scroll / 5) / 100 +
// 			")",
// 	});
// });
