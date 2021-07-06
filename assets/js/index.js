document.onreadystatechange = function () {
	if (document.readyState !== "complete") {
		document.querySelector("body").style.visibility = "hidden";
		document.querySelector("#preloader").style.visibility = "visible";
	} else {
		document.querySelector("#preloader").style.display = "none";
		document.querySelector("body").style.visibility = "visible";
		animateSgv("logo", 0, 1);
	}
};
(function () {
	function id(v) {
		return document.getElementById(v);
	}
	function loadbar() {
		var ovrl = id("overlay"),
			prog = id("progress"),
			stat = id("progstat"),
			img = document.images,
			c = 0;
		tot = img.length;

		function imgLoaded() {
			c += 1;
			var perc = (((100 / tot) * c) << 0) + "%";
			prog.style.width = perc;
			stat.innerHTML = "Loading " + perc;
			if (c === tot) return doneLoading();
		}
		function doneLoading() {
			ovrl.style.opacity = 0;
			setTimeout(function () {
				ovrl.style.display = "none";
			}, 1200);
		}
		for (var i = 0; i < tot; i++) {
			var tImg = new Image();
			tImg.onload = imgLoaded;
			tImg.onerror = imgLoaded;
			tImg.src = img[i].src;
		}
	}
	document.addEventListener("DOMContentLoaded", loadbar, false);
})();
// document.addEventListener("DOMContentLoaded", () => {
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
	document.querySelector(".nav__content").style.visibility = "hidden";
}
// }
// );

const toggleClass = (element, stringClass) => {
	if (element.classList.contains(stringClass)) {
		element.classList.remove(stringClass);
		menuItems.style.visibility = "hidden";
	} else {
		element.classList.add(stringClass);
		menuItems.style.visibility = "visible";
	}
};
let body;
let menu;
let menuItems;
let navListItems;
body = document.querySelector("body");
menu = document.querySelector(".menu-icon");
menuItems = document.querySelector(".nav__content");
menu.addEventListener("click", () => toggleClass(body, "nav-active"));
navListItems = document.querySelectorAll(".nav__list-item");

[...navListItems].map((item, idx) => {
	item.addEventListener("click", () => {
		document.getElementById(item.innerHTML).scrollIntoView();
		toggleClass(body, "nav-active");
	});
});
var ctpro = document.getElementById("chart-programming");
var ctweb = document.getElementById("chart-web");
var cttools = document.getElementById("chart-tools");

var dataProgramming = {
	datasets: [
		{
			label: "Languages", // for legend
			data: [75, 85, 65, 80],
			backgroundColor: ["#306998", "#F0DB4F", "#a6b1b7", "#F16529"],
		},
	],
	labels: ["Python", "JavaScript", "C++", "HTML/CSS"],
};
var dataWeb = {
	datasets: [
		{
			label: "Web", // for legend
			data: [90, 80, 85, 60],
			backgroundColor: ["#61DBFB", "#3c873a", "#F29111", "#e535ab"],
		},
	],
	labels: ["ReactJS/Redux", "NodeJS", "MySQL/MongoDB/PostgreSQL", "GraphQL"],
};
var dataTools = {
	datasets: [
		{
			label: "Tools", // for legend
			data: [75, 85, 65, 70],
			backgroundColor: ["#F34F29", "#0db7ed", "#00B9AD", "#E47911"],
		},
	],
	labels: ["GIT", "Docker", "Elastic Search", "AWS"],
};

new Chart(ctpro, {
	type: "polarArea",
	data: dataProgramming,
	options: {
		legend: {
			display: true,
			labels: {
				fontColor: "white",
			},
		},
	},
});

new Chart(ctweb, {
	type: "polarArea",
	data: dataWeb,
	options: {
		legend: {
			labels: {
				fontColor: "white",
			},
		},
	},
});

new Chart(cttools, {
	type: "polarArea",
	data: dataTools,
	options: {
		legend: {
			labels: {
				fontColor: "white",
			},
		},
	},
});
