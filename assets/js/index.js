document.addEventListener("DOMContentLoaded", () => {
	function animateSgv(id, delay, delayIncrement) {
		const logo = document.getElementById(id);
		const logoPaths = document.querySelectorAll(`#${id} path`);
		for (let i = 0; i < logoPaths.length; i++) {
			logoPaths[i].style.strokeDasharray = logoPaths[i].getTotalLength();
			logoPaths[i].style.strokeDashoffset = logoPaths[i].getTotalLength();
			logoPaths[i].style.animation = `line-anim 2s ease forwards ${delay}s`;
			delay += delayIncrement;
		}
		logo.style.animation = `fill 1s ease forwards ${delay}s`;
	}
	document.querySelector(".nav__content").style.visibility = "hidden";
	animateSgv("logo", 0, 1);
});
let body;
let menu;
let menuItems;

body = document.querySelector("body");
menu = document.querySelector(".menu-icon");
menuItems = document.querySelector(".nav__content");

menu.addEventListener("click", () => toggleClass(body, "nav-active"));

const toggleClass = (element, stringClass) => {
	if (element.classList.contains(stringClass)) {
		element.classList.remove(stringClass);
		menuItems.style.visibility = "hidden";
	} else {
		element.classList.add(stringClass);
		menuItems.style.visibility = "visible";
	}
};

// var body = document.body;
// body.className = "red";
// var slider = new Swiper(".swiper-container", {
// 	pagination: ".swiper-pagination",
// 	direction: "horizontal",
// 	slidesPerView: 1,
// 	paginationClickable: true,
// 	spaceBetween: 30,
// 	mousewheelControl: true,
// 	onSlideChangeStart: function (swiper) {
// 		var currentSlide = swiper.slides[swiper.activeIndex];
// 		body.className = currentSlide.getAttribute("data-bg");
// 		console.log(currentSlide.getAttribute("data-bg"));
// 	},
// });

// var offset = $(window).scrollTop() - actualBlock.offset().top,
// 	windowHeight = $(window).height();

// if (offset >= -windowHeight && offset <= 0) {
// 	// section entering the viewport
// 	translateY = (-offset * 100) / windowHeight;
// 	scale = 1;
// 	opacity = 1;
// } else if (offset > 0 && offset <= windowHeight) {
// 	//section leaving the viewport
// 	scale = 1 - (offset * 0.3) / windowHeight;
// 	opacity = 1 - offset / windowHeight;
// 	translateY = 0;
// 	boxShadowBlur = 40 * (offset / windowHeight);
// }
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
