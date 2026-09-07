console.log(
	"Hi Geek, \nI love to be friends with like minded people. Message me, maybe we could help each other.\nCheers, Akshit Soneji\nmailto: sonejiakshit989@gmail.com"
);
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
		var ovrl = id("preloader"),
			prog = id("progress"),
			stat = id("progstat"),
			img = document.images,
			c = 0,
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

// No animation library below — scroll reveals, split-text headings,
// the scroll progress bar, timeline draw-in, stats, the project
// preview, the skills graph, filmstrip drag and magnetic links.

// Split headings/statements into words so they can wipe in individually.
document.querySelectorAll("[data-reveal-text]").forEach((el) => {
	const words = el.textContent.trim().split(/\s+/);
	el.textContent = "";
	words.forEach((word, i) => {
		const outer = document.createElement("span");
		outer.className = "word";
		const inner = document.createElement("span");
		inner.className = "word-inner";
		inner.textContent = word + " ";
		inner.style.transitionDelay = i * 40 + "ms";
		outer.appendChild(inner);
		el.appendChild(outer);
	});
});

// Generic scroll-reveal for anything tagged data-reveal / data-reveal-text.
const revealTargets = document.querySelectorAll("[data-reveal], [data-reveal-text]");
if ("IntersectionObserver" in window && revealTargets.length) {
	const revealObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible");
					revealObserver.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
	);
	revealTargets.forEach((el) => revealObserver.observe(el));
} else {
	revealTargets.forEach((el) => el.classList.add("is-visible"));
}

// Thin accent bar across the top that fills with scroll depth.
const scrollProgressEl = document.getElementById("scrollProgress");
function updateScrollProgress() {
	if (!scrollProgressEl) return;
	const docHeight = document.documentElement.scrollHeight - window.innerHeight;
	const pct = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
	scrollProgressEl.style.width = pct + "%";
}

// The Experience timeline's vertical line fills in as it scrolls through view.
const timelineTrack = document.getElementById("timelineTrack");
const timelineProgressEl = document.getElementById("timelineProgress");
function updateTimelineProgress() {
	if (!timelineTrack || !timelineProgressEl) return;
	const rect = timelineTrack.getBoundingClientRect();
	const vh = window.innerHeight;
	const total = rect.height + vh * 0.5;
	const covered = vh * 0.5 - rect.top;
	const pct = Math.max(0, Math.min(100, (covered / total) * 100));
	timelineProgressEl.style.height = pct + "%";
}

let scrollTicking = false;
function onScrollFrame() {
	if (scrollTicking) return;
	scrollTicking = true;
	window.requestAnimationFrame(() => {
		updateScrollProgress();
		updateTimelineProgress();
		scrollTicking = false;
	});
}
window.addEventListener("scroll", onScrollFrame, { passive: true });
window.addEventListener("resize", onScrollFrame);
onScrollFrame();

// Count-up numbers in the About stats strip.
const statEls = document.querySelectorAll(".stat-num[data-count]");
function animateCount(el) {
	const target = parseFloat(el.getAttribute("data-count"));
	const duration = 1200;
	const start = performance.now();
	function step(now) {
		const p = Math.min(1, (now - start) / duration);
		const eased = 1 - Math.pow(1 - p, 3);
		const val = target * eased;
		el.textContent = Number.isInteger(target) ? Math.round(val) : val.toFixed(1);
		if (p < 1) requestAnimationFrame(step);
	}
	requestAnimationFrame(step);
}
if (statEls.length && "IntersectionObserver" in window) {
	const statObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					animateCount(entry.target);
					statObserver.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.4 }
	);
	statEls.forEach((el) => statObserver.observe(el));
}

// Skills graph: each technology plotted as its own point in a uniform
// grid within its quadrant, all wired back to the center hub, with a
// corner legend per category.
const skillGraphEl = document.getElementById("skillGraph");
if (skillGraphEl) {
	const categories = [
		{
			label: "Security & Crypto",
			corner: "tl",
			box: { x0: 10, x1: 34, y0: 10, y1: 34 },
			items: ["FIPS 140-2/3", "OpenSSL", "TLS 1.2/1.3", "X.509 PKI", "AES / RSA / ECC", "Post-Quantum Crypto"],
		},
		{
			label: "Programming",
			corner: "tr",
			box: { x0: 66, x1: 90, y0: 10, y1: 34 },
			items: ["C++", "Python", "TypeScript", "JavaScript"],
		},
		{
			label: "Tools & Platforms",
			corner: "bl",
			box: { x0: 10, x1: 34, y0: 66, y1: 90 },
			items: ["Wireshark", "GDB", "AWS", "GCP", "Docker", "Redis", "Git"],
		},
		{
			label: "Web Frameworks",
			corner: "br",
			box: { x0: 66, x1: 90, y0: 66, y1: 90 },
			items: ["React", "Redux", "Next.js", "Node.js", "GraphQL", "NestJS", "MongoDB", "Postgres", "MySQL"],
		},
	];

	// Deterministic pseudo-random (stable across reloads) for a light,
	// controlled jitter — enough to break the grid's rigidity without
	// looking chaotic or letting labels collide.
	function seededRand(seed) {
		const x = Math.sin(seed * 12.9898) * 43758.5453;
		return x - Math.floor(x);
	}

	function gridPoint(i, n, box, seed) {
		const cols = Math.max(1, Math.ceil(Math.sqrt(n)));
		const rows = Math.max(1, Math.ceil(n / cols));
		const col = i % cols;
		const row = Math.floor(i / cols);
		const xT = cols > 1 ? col / (cols - 1) : 0.5;
		const yT = rows > 1 ? row / (rows - 1) : 0.5;
		const cellW = (box.x1 - box.x0) / cols;
		const cellH = (box.y1 - box.y0) / rows;
		const jitterX = (seededRand(seed) - 0.5) * cellW * 0.55;
		const jitterY = (seededRand(seed + 7.31) - 0.5) * cellH * 0.55;
		return {
			x: box.x0 + xT * (box.x1 - box.x0) + jitterX,
			y: box.y0 + yT * (box.y1 - box.y0) + jitterY,
		};
	}

	const svgNS = "http://www.w3.org/2000/svg";
	const linesSvg = document.createElementNS(svgNS, "svg");
	linesSvg.setAttribute("class", "skill-graph-lines");
	linesSvg.setAttribute("viewBox", "0 0 100 100");
	linesSvg.setAttribute("preserveAspectRatio", "none");
	linesSvg.setAttribute("aria-hidden", "true");

	// X/Y axis lines through the hub, drawn first so everything else sits
	// on top of them like points plotted on a coordinate graph.
	const axisX = document.createElementNS(svgNS, "line");
	axisX.setAttribute("class", "skill-axis");
	axisX.setAttribute("x1", "0");
	axisX.setAttribute("y1", "50");
	axisX.setAttribute("x2", "100");
	axisX.setAttribute("y2", "50");
	linesSvg.appendChild(axisX);

	const axisY = document.createElementNS(svgNS, "line");
	axisY.setAttribute("class", "skill-axis");
	axisY.setAttribute("x1", "50");
	axisY.setAttribute("y1", "0");
	axisY.setAttribute("x2", "50");
	axisY.setAttribute("y2", "100");
	linesSvg.appendChild(axisY);

	const hub = document.createElement("div");
	hub.className = "skill-hub";
	hub.innerHTML = "<span>Tools</span>";

	const frag = document.createDocumentFragment();
	frag.appendChild(linesSvg);
	frag.appendChild(hub);

	let globalIndex = 0;
	categories.forEach((cat) => {
		const legend = document.createElement("div");
		legend.className = `skill-legend skill-legend--${cat.corner}`;
		legend.textContent = cat.label;
		frag.appendChild(legend);

		const n = cat.items.length;
		const positions = cat.items.map((name, i) => gridPoint(i, n, cat.box, globalIndex + i + 1));

		// A thin chain between neighboring points in the same category gives
		// the diagram real graph texture instead of a bare hub-and-spoke.
		for (let i = 1; i < positions.length; i++) {
			const a = positions[i - 1];
			const b = positions[i];
			const link = document.createElementNS(svgNS, "line");
			link.setAttribute("class", "skill-link");
			link.setAttribute("x1", a.x.toFixed(2));
			link.setAttribute("y1", a.y.toFixed(2));
			link.setAttribute("x2", b.x.toFixed(2));
			link.setAttribute("y2", b.y.toFixed(2));
			link.style.transitionDelay = (globalIndex + i) * 18 + "ms";
			linesSvg.appendChild(link);
		}

		cat.items.forEach((name, i) => {
			const { x, y } = positions[i];

			const line = document.createElementNS(svgNS, "line");
			line.setAttribute("x1", "50");
			line.setAttribute("y1", "50");
			line.setAttribute("x2", x.toFixed(2));
			line.setAttribute("y2", y.toFixed(2));
			line.style.transitionDelay = globalIndex * 22 + "ms";
			linesSvg.appendChild(line);

			const point = document.createElement("div");
			point.className = `skill-point skill-point--${cat.corner}`;
			point.style.left = x + "%";
			point.style.top = y + "%";
			point.style.setProperty("--d", globalIndex * 22 + "ms");
			point.innerHTML = `<span class="skill-point-dot"></span><span class="skill-point-label">${name}</span>`;
			frag.appendChild(point);

			globalIndex++;
		});
	});

	skillGraphEl.appendChild(frag);
}

// Cursor-following preview image for the Projects list (pointer devices only).
const projectList = document.getElementById("projectList");
const projectFloat = document.getElementById("projectFloat");
const projectFloatImg = document.getElementById("projectFloatImg");
if (
	projectList &&
	projectFloat &&
	projectFloatImg &&
	window.matchMedia("(pointer: fine)").matches
) {
	let currentImg = "";
	projectList.addEventListener("mousemove", (e) => {
		const row = e.target.closest(".project-row");
		if (row) {
			const img = row.getAttribute("data-img");
			if (img && img !== currentImg) {
				projectFloatImg.src = img;
				currentImg = img;
			}
			projectFloat.classList.add("is-visible");
			projectFloat.style.left = e.clientX + "px";
			projectFloat.style.top = e.clientY + "px";
		} else {
			projectFloat.classList.remove("is-visible");
		}
	});
	projectList.addEventListener("mouseleave", () => {
		projectFloat.classList.remove("is-visible");
	});
}

// Filmstrip: click-and-drag to scroll, mouse only — touch/trackpad already
// scroll it natively via overflow-x, and hijacking those pointer types is
// exactly what made vertical page scrolling hard over the strip before.
const filmstripTrack = document.getElementById("filmstripTrack");
if (filmstripTrack) {
	let isDragging = false;
	let dragMoved = false;
	let dragStartX = 0;
	let scrollStart = 0;
	let dragFrame = null;
	let pendingLeft = null;

	function applyDragScroll() {
		if (pendingLeft !== null) {
			filmstripTrack.scrollLeft = pendingLeft;
			pendingLeft = null;
		}
		dragFrame = null;
	}

	filmstripTrack.addEventListener("pointerdown", (e) => {
		if (e.pointerType !== "mouse") return;
		isDragging = true;
		dragMoved = false;
		dragStartX = e.clientX;
		scrollStart = filmstripTrack.scrollLeft;
		filmstripTrack.setPointerCapture(e.pointerId);
		// Scroll-snap fighting the live drag position is what made this feel
		// laggy — switch it off for the duration of the gesture.
		filmstripTrack.classList.add("is-dragging");
		e.preventDefault(); // stop native image-drag / text-selection ghosting
	});
	filmstripTrack.addEventListener("pointermove", (e) => {
		if (!isDragging || e.pointerType !== "mouse") return;
		const delta = e.clientX - dragStartX;
		if (Math.abs(delta) > 3) dragMoved = true;
		pendingLeft = scrollStart - delta;
		if (dragFrame === null) dragFrame = requestAnimationFrame(applyDragScroll);
	});
	["pointerup", "pointerleave", "pointercancel"].forEach((evt) => {
		filmstripTrack.addEventListener(evt, (e) => {
			if (e.pointerType && e.pointerType !== "mouse") return;
			isDragging = false;
			filmstripTrack.classList.remove("is-dragging");
			if (dragFrame !== null) {
				cancelAnimationFrame(dragFrame);
				applyDragScroll();
			}
		});
	});
	// Swallow the click that follows a real drag so it doesn't feel like
	// the frame itself was "selected."
	filmstripTrack.addEventListener(
		"click",
		(e) => {
			if (dragMoved) {
				e.preventDefault();
				e.stopPropagation();
			}
		},
		true
	);
}

// Prev/next buttons scroll by roughly one frame width, smoothly.
const filmstripPrev = document.getElementById("filmstripPrev");
const filmstripNext = document.getElementById("filmstripNext");
function scrollFilmstrip(direction) {
	if (!filmstripTrack) return;
	const frame = filmstripTrack.querySelector(".frame");
	const gap = parseFloat(getComputedStyle(filmstripTrack).columnGap || getComputedStyle(filmstripTrack).gap) || 24;
	const step = frame ? frame.getBoundingClientRect().width + gap : 320;
	filmstripTrack.scrollBy({ left: direction * step, behavior: "smooth" });
}
filmstripPrev?.addEventListener("click", () => scrollFilmstrip(-1));
filmstripNext?.addEventListener("click", () => scrollFilmstrip(1));

// Magnetic pull on the contact links (pointer devices only).
if (window.matchMedia("(pointer: fine)").matches) {
	document.querySelectorAll(".magnetic").forEach((mag) => {
		const inner = mag.querySelector(".magnetic-inner");
		if (!inner) return;
		mag.addEventListener("mousemove", (e) => {
			const rect = mag.getBoundingClientRect();
			const x = e.clientX - rect.left - rect.width / 2;
			const y = e.clientY - rect.top - rect.height / 2;
			inner.style.transform = `translate(${x * 0.12}px, ${y * 0.4}px)`;
		});
		mag.addEventListener("mouseleave", () => {
			inner.style.transform = "translate(0,0)";
		});
	});
}
