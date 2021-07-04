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
const slider = document.querySelector(".projects-page");
let mouseDown = false;
let startX, scrollLeft;

let startDragging = function (e) {
	mouseDown = true;
	startX = e.pageX - slider.offsetLeft;
	scrollLeft = slider.scrollLeft;
};
let stopDragging = function (event) {
	mouseDown = false;
};

slider.addEventListener("mousemove", (e) => {
	e.preventDefault();
	if (!mouseDown) {
		return;
	}
	const x = e.pageX - slider.offsetLeft;
	const scroll = x - startX;
	slider.scrollLeft = scrollLeft - scroll;
});

// Add the event listeners
slider.addEventListener("mousedown", startDragging, false);
slider.addEventListener("mouseup", stopDragging, false);
slider.addEventListener("mouseleave", stopDragging, false);
