function introAnimation() {
	$(".main-navigation__item").removeClass("active"),
		$("#intro").addClass("active"),
		$("#main_bg").addClass("show_bg"),
		$("#title__bg").addClass("loaded"),
		$("#bold_title_1").addClass("visible"),
		$("#wrapper_1").addClass("loaded"),
		$("#bold_title_2").addClass("visible"),
		$("#wrapper_2").addClass("loaded"),
		$(".rotate_circle_container")
			.removeClass("hidden")
			.addClass("animated zoomIn"),
		$("#horn").removeClass("hidden").addClass("animated zoomIn"),
		setTimeout(function () {
			$(".horn_wrapper").addClass("animated pulse infinite");
		}, 1e3),
		setTimeout(function () {
			(introAnimated = !0),
				(scrollingInProgress = !1),
				restartWorks(),
				restartAbout(),
				$("body").removeClass("loader"),
				$("#preload").css("visibility", "hidden"),
				(programmic = !1);
		}, 2500);
}
function worksAnimation() {
	restartAbout(),
		$(".main-navigation__item").removeClass("active"),
		$("#works").addClass("active"),
		$("#titles").addClass("black"),
		$("#line").addClass("loaded"),
		$("#top_section").addClass("loaded"),
		$("#bottom_section").addClass("loaded"),
		$("#works_container").addClass("loaded"),
		$("#projects__list").addClass("loaded"),
		setTimeout(function () {
			(worksAnimated = !0),
				(scrollingInProgress = !1),
				restartIntro(),
				$("body").removeClass("loader"),
				$("#main_bg").removeClass("show_bg"),
				$("#projects__list").removeClass("blocked"),
				$("#preload").css("visibility", "hidden"),
				$("#works_container").addClass("done"),
				(programmic = !1);
		}, 2500);
}
function aboutAnimation() {
	$("#main_bg").removeClass("show_bg"),
		$("#bold_title_3").addClass("visible"),
		$("#wrapper_3").addClass("loaded"),
		$("#bold_title_4").addClass("visible"),
		$("#wrapper_4").addClass("loaded"),
		$("#about-starter").addClass("loaded"),
		setTimeout(function () {
			$("#about-starter").addClass("finished");
		}, 2e3),
		$("#section_4").addClass("loaded"),
		$("body").removeClass("loader"),
		(programmic = !1),
		(scrollingInProgress = !1),
		restartWorks();
}
function contactAnimation() {
	$("#main_bg").removeClass("show_bg"),
		$("#bold_title_3").addClass("visible"),
		$("#wrapper_3").addClass("loaded"),
		$("#wrapper_4").addClass("loaded"),
		$("#about-starter").addClass("loaded"),
		$("#bold_title_4").addClass("visible"),
		$("#about-starter").addClass("finished"),
		$("#section_4").addClass("loaded"),
		$("body").removeClass("loader"),
		$("#trigger_14").addClass("loaded"),
		$(".small_margin").addClass("loaded"),
		$(".big_margin").addClass("loaded"),
		$(".quate").addClass("loaded"),
		$(".few_brands").addClass("loaded"),
		$(".brand__list").addClass("loaded"),
		$(".bold__text").addClass("loaded"),
		$(".exp__title").addClass("loaded"),
		$(".exp__text").addClass("loaded"),
		(programmic = !1),
		(scrollingInProgress = !1);
}
function bottomAnimation() {
	$("#bold_title_5").addClass("visible"),
		$("#wrapper_5").addClass("loaded"),
		$("#bold_title_6").addClass("visible"),
		$("#wrapper_6").addClass("loaded"),
		$(".scrollDown").hide(),
		$("#last__title-trigger").addClass("loaded");
}
function restartIntro() {
	(animated = 0),
		(introAnimated = !1),
		$("#main_bg").removeClass("show_bg"),
		$("#title__bg").removeClass("loaded"),
		$("#bold_title_1").removeClass("visible"),
		$("#wrapper_1").removeClass("loaded"),
		$("#bold_title_2").removeClass("visible"),
		$("#wrapper_2").removeClass("loaded"),
		$(".rotate_circle_container")
			.addClass("hidden")
			.removeClass("animated zoomIn delay-2s"),
		$("#horn").addClass("hidden").removeClass("animated zoomIn delay-2s");
}
function restartWorks() {
	(worksAnimatedCount = 0),
		(worksAnimated = !1),
		$("#titles").removeClass("black"),
		$("#line").removeClass("loaded"),
		$("#top_section").removeClass("loaded"),
		$("#bottom_section").removeClass("loaded"),
		$("#works_container").removeClass("loaded"),
		$("#works_container").removeClass("done"),
		$("#projects__list").removeClass("loaded");
}
function restartAbout() {
	$("#bold_title_3").removeClass("visible"),
		$("#wrapper_3").removeClass("loaded"),
		$("#bold_title_4").removeClass("visible"),
		$("#wrapper_4").removeClass("loaded"),
		$("#about-starter").removeClass("loaded"),
		$("#about-starter").removeClass("finished"),
		$("#section_4").removeClass("loaded"),
		$(".description").removeClass("loaded"),
		$(".few_brands").removeClass("loaded"),
		$(".quate").removeClass("loaded"),
		$(".small_margin").removeClass("loaded"),
		$(".brand__list").removeClass("loaded"),
		$(".small_margin .bold__text").removeClass("loaded"),
		$(".exp__title").removeClass("loaded"),
		$(".exp__text").removeClass("loaded"),
		$(".big_margin").removeClass("loaded"),
		$("#trigger_14 .bold__text").removeClass("loaded"),
		$("#trigger_14").removeClass("loaded"),
		$("#last__title-trigger").removeClass("loaded"),
		$("#bold_title_5").removeClass("visible"),
		$("#wrapper_5").removeClass("loaded"),
		$("#bold_title_6").removeClass("visible"),
		$("#wrapper_6").removeClass("loaded"),
		$("#about-starter").removeClass("finished"),
		$(".big_margin").removeClass("finished"),
		$(".quate").removeClass("finished"),
		$(".small_margin").removeClass("finished");
}
function scrollingMain() {
	var e = $(window).scrollTop();
	switch (((direction = e > position ? !0 : !1), (position = e), !0)) {
		case 560 >= e:
			animateCircle(e),
				$("#titles").removeAttr("class"),
				$("#fixed_titles").removeAttr("class"),
				$("#home").removeClass("cursor__item"),
				$("#main_bg").removeClass("show_bg"),
				$("body").removeClass("loader"),
				$(".header").css("z-index", "99999"),
				$(".section-title").removeAttr("style");
			break;
		case e >= 560 && 800 > e:
			restartIntro(),
				animateText(e),
				$("#circle").removeAttr("class"),
				$("#circle").addClass("state_14"),
				$("#titles").removeAttr("class"),
				$("#fixed_titles").removeAttr("class"),
				$("#home").removeClass("cursor__item"),
				$("#main_bg").removeClass("show_bg"),
				$("body").removeClass("loader"),
				$(".header").css("z-index", "99999");
			break;
		case e >= 880 && e <= $("#section_2").offset().top:
			if (
				($("#titles").addClass("loaded"),
				$("#fixed_titles").addClass("loaded"),
				$("#home").addClass("cursor__item"),
				$(".header").css("z-index", "9999"),
				$(window).width() <= 1024 || animated > 0 || scrollingInProgress)
			)
				return !1;
			direction &&
				!introAnimated &&
				(animated++,
				(scrollingInProgress = !0),
				$("body").addClass("loader"),
				$("html, body").animate(
					{
						scrollTop: $("#section_2").offset().top,
					},
					{
						duration: 1e3,
						complete: function () {
							introAnimation();
						},
					}
				));
			break;
		case e > $("#section_2").offset().top && e < $("#section_3").offset().top:
			if (
				$(window).width() <= 1024 ||
				worksAnimatedCount > 0 ||
				scrollingInProgress
			)
				return !1;
			if (direction && !worksAnimated)
				return (
					(scrollingInProgress = !0),
					worksAnimated++,
					$("body").addClass("loader"),
					$("html, body").animate(
						{
							scrollTop: $("#section_3").offset().top,
						},
						{
							duration: 1e3,
							complete: function () {
								worksAnimation();
							},
						}
					),
					!1
				);
			direction ||
				((scrollingInProgress = !0),
				animated++,
				$("body").addClass("loader"),
				$("html, body").animate(
					{
						scrollTop: $("#section_2").offset().top,
					},
					{
						duration: 1e3,
						complete: function () {
							introAnimation();
						},
					}
				));
			break;
		case e >= $("#section_3").offset().top &&
			e < $("#section_3").offset().top + $(window).height():
			if (scrollingInProgress || $(window).width() <= 1024) return !1;
			direction &&
				((scrollingInProgress = !0),
				$("body").addClass("loader"),
				$("html, body").animate(
					{
						scrollTop: $("#section_4").offset().top,
					},
					{
						duration: 1e3,
						complete: function () {
							(scrollingInProgress = !1), aboutAnimation();
						},
					}
				)),
				direction ||
					((scrollingInProgress = !0),
					$("#section_4").removeClass("loaded"),
					worksAnimated++,
					$("body").addClass("loader"),
					$("html, body").animate(
						{
							scrollTop: $("#section_3").offset().top,
						},
						{
							duration: 1e3,
							complete: function () {
								worksAnimation();
							},
						}
					));
	}
	e > $("#section_2").offset().top && $(window).width() <= 1024
		? $(".mobile__scroll_button").addClass("hidden")
		: $(".mobile__scroll_button").removeClass("hidden"),
		$("#section_2").isInViewport() &&
			($(".main-navigation__item").removeClass("active"),
			$("#intro").addClass("active")),
		$("#section_3").isInViewport() &&
			($(".main-navigation__item").removeClass("active"),
			$("#works").addClass("active")),
		$(window).scrollTop() >= $("#mobile").offset().top &&
		$("#mobile").isInViewport() &&
		$(window).width() <= 1024
			? ($(".gamburger").removeClass("black"), $("#titles").addClass("black"))
			: ($("#titles").removeClass("black"), $(".gamburger").addClass("black")),
		$("#section_4").isInViewport() &&
			($(".main-navigation__item").removeClass("active"),
			$("#about").addClass("active")),
		(($(".few_brands").isInViewport() &&
			$("#about-starter").hasClass("finished")) ||
			($(".few_brands").isInViewport() && $(window).width() <= 1024)) &&
			($(".few_brands").addClass("loaded"),
			$("#section_4").addClass("loaded"),
			$(".brand__list").addClass("loaded")),
		$(".quate").isInViewport() &&
			($(".quate").addClass("loaded"),
			setTimeout(function () {
				$(".quate").addClass("finished");
			}, 500)),
		$(".small_margin").isInViewport() &&
			$(".big_margin").hasClass("finished") &&
			($(".small_margin").addClass("loaded"),
			$(".small_margin .bold__text").addClass("loaded"),
			setTimeout(function () {
				$(".small_margin").addClass("finished");
			}, 500)),
		$("#trigger_13").isInViewport() &&
			$(".quate").hasClass("finished") &&
			($(".exp__title").addClass("loaded"),
			$(".exp__text").addClass("loaded"),
			$(".big_margin").addClass("loaded"),
			setTimeout(function () {
				$(".big_margin").addClass("finished");
			}, 500)),
		(($("#trigger_14").isInViewport() && $(".quate").hasClass("finished")) ||
			programmic) &&
			($("#trigger_14 .bold__text").addClass("loaded"),
			$("#trigger_14").addClass("loaded")),
		$("#last__title").isInViewport() &&
			($("#trigger_14 .bold__text").addClass("loaded"),
			$(".main-navigation__item").removeClass("active"),
			$("#contacts").addClass("active")),
		$("#last__title-trigger").isInViewport() &&
			!scrollingInProgress &&
			(console.log("last__title-triggered"),
			console.log(scrollingInProgress),
			$("#last__title-trigger").addClass("loaded")),
		$("#last__title #bold_title_6").isInViewport() && !scrollingInProgress
			? (console.log("hey ho"),
			  console.log(scrollingInProgress),
			  $("#bold_title_5").addClass("visible"),
			  $("#wrapper_5").addClass("loaded"),
			  $("#bold_title_6").addClass("visible"),
			  $("#wrapper_6").addClass("loaded"),
			  $(".scrollDown").hide())
			: $(".scrollDown").show();
}
function moveto(e) {
	0 > e ? $("html, body").animate({}, 500) : $("html, body").animate({}, 500);
}
function animateText(e) {
	switch (!0) {
		case 560 > e:
			$(".section-title").css({
				fontSize: "7.2em",
			});
			break;
		case e >= 560 && 600 > e:
			$(".section-title").css({
				fontSize: "6.8em",
			});
			break;
		case e >= 600 && 640 > e:
			$(".section-title").css({
				fontSize: "6.3em",
			});
			break;
		case e >= 640 && 680 > e:
			$(".section-title").css({
				fontSize: "5.65em",
			});
			break;
		case e >= 680 && 720 > e:
			$(".section-title").css({
				fontSize: "5.2em",
			});
			break;
		case e >= 720 && 760 > e:
			$(".section-title").css({
				fontSize: "4.7em",
			});
			break;
		case e >= 760 && 800 > e:
			$(".section-title").css({
				fontSize: "4.3em",
			});
			break;
		case e >= 800 && 840 > e:
			$(".section-title").css({
				fontSize: "3.8em",
			});
			break;
		case e >= 840:
			$(".section-title").css({
				fontSize: "3.45em",
			});
			break;
		default:
			$(".section-title").css({
				fontSize: "3em",
			});
	}
}
function animateCircle(e) {
	switch (!0) {
		case 40 > e:
			$("#circle").removeAttr("class"), $("#circle").addClass("state_1");
			break;
		case e >= 40 && 80 > e:
			$("#circle").removeAttr("class"), $("#circle").addClass("state_2");
			break;
		case e >= 80 && 120 > e:
			$("#circle").removeAttr("class"), $("#circle").addClass("state_3");
			break;
		case e >= 120 && 160 > e:
			$("#circle").removeAttr("class"), $("#circle").addClass("state_4");
			break;
		case e >= 160 && 200 > e:
			$("#circle").removeAttr("class"), $("#circle").addClass("state_5");
			break;
		case e >= 200 && 240 > e:
			$("#circle").removeAttr("class"), $("#circle").addClass("state_6");
			break;
		case e >= 240 && 280 > e:
			$("#circle").removeAttr("class"), $("#circle").addClass("state_7");
			break;
		case e >= 280 && 320 > e:
			$("#circle").removeAttr("class"), $("#circle").addClass("state_8");
			break;
		case e >= 320 && 360 > e:
			$("#circle").removeAttr("class"), $("#circle").addClass("state_9");
			break;
		case e >= 360 && 400 > e:
			$("#circle").removeAttr("class"), $("#circle").addClass("state_10");
			break;
		case e >= 400 && 440 > e:
			$("#circle").removeAttr("class"), $("#circle").addClass("state_11");
			break;
		case e >= 440 && 480 > e:
			$("#circle").removeAttr("class"), $("#circle").addClass("state_12");
			break;
		case e >= 480 && 520 > e:
			$("#circle").removeAttr("class"), $("#circle").addClass("state_13");
			break;
		case e >= 520:
			$("#circle").removeAttr("class"), $("#circle").addClass("state_14");
			break;
		default:
			$("#circle").removeAttr("class");
	}
}
function hideTitle(e) {
	switch (!0) {
		case e >= 880 && 920 > e:
			$("#titles").removeAttr("class"), $("#titles").addClass("state_1");
			break;
		case e >= 920 && 960 > e:
			$("#titles").removeAttr("class"), $("#titles").addClass("state_2");
			break;
		case e >= 960 && 1e3 > e:
			$("#titles").removeAttr("class"),
				$("#titles").addClass("state_3"),
				$("#fixed_titles").removeAttr("class");
			break;
		case e >= 1e3 && 1040 > e:
			$("#titles").removeAttr("class"),
				$("#titles").addClass("state_4"),
				$("#fixed_titles").removeAttr("class"),
				$("#fixed_titles").addClass("state_4");
			break;
		case e >= 1040 && 1080 > e:
			$("#titles").removeAttr("class"),
				$("#titles").addClass("state_5"),
				$("#fixed_titles").removeAttr("class"),
				$("#fixed_titles").addClass("state_5");
			break;
		case e >= 1080:
			$("#titles").removeAttr("class"),
				$("#titles").addClass("state_6"),
				$("#fixed_titles").removeAttr("class"),
				$("#fixed_titles").addClass("state_6");
			break;
		default:
			$("#titles").removeAttr("class"), $("#fixed_titles").removeAttr("class");
	}
}
function letsGo() {
	var e = $(window).width(),
		s = $(window).height(),
		a =
			'<canvas id="canvas" height="' +
			s +
			'" width="' +
			e +
			'">Get a better browser!</canvas>';
	$("#raphael").addClass("clicked"),
		$("#raphael").empty(),
		$("#raphael").append(a);
	var e = $("#canvas").width(),
		s = $("#canvas").height(),
		a = (ctx = !1),
		o = 0.025,
		t = 1e3 * o,
		i = !1,
		l = {
			position: {
				x: e / 2,
				y: s,
			},
			velocity: {
				x: 1,
				y: 30,
			},
			mass: 0.1,
			radius: 13,
			restitution: -0.7,
		},
		r = [],
		d = 0.47,
		n = 1.22,
		c = (Math.PI * l.radius * l.radius) / 1e4,
		m = 9.81,
		_ = {
			x: 0,
			y: s,
			isDown: !1,
		},
		v = function () {
			(a = document.getElementById("canvas")),
				(ctx = a.getContext("2d")),
				ctx.setTransform(1, 0, 0, 1, 0, 0),
				ctx.clearRect(0, 0, a.width, a.height);
			var o = [
				{
					position: {
						x: 100,
						y: s - 150,
					},
					velocity: {
						x: 20,
						y: 70,
					},
					mass: 0.1,
					radius: 23,
					restitution: -0.7,
					url: "icon_1",
				},
				{
					position: {
						x: 100,
						y: s - 150,
					},
					velocity: {
						x: 15,
						y: 50,
					},
					mass: 0.1,
					radius: 23,
					restitution: -0.7,
					url: "icon_2",
				},
				{
					position: {
						x: 100,
						y: s - 150,
					},
					velocity: {
						x: 30,
						y: 100,
					},
					mass: 0.1,
					radius: 23,
					restitution: -0.7,
					url: "icon_3",
				},
				{
					position: {
						x: 100,
						y: s - 150,
					},
					velocity: {
						x: 40,
						y: 85,
					},
					mass: 0.1,
					radius: 23,
					restitution: -0.7,
					url: "icon_4",
				},
				{
					position: {
						x: 100,
						y: s - 150,
					},
					velocity: {
						x: 15,
						y: 57,
					},
					mass: 0.1,
					radius: 23,
					restitution: -0.7,
					url: "icon_5",
				},
				{
					position: {
						x: 100,
						y: s - 150,
					},
					velocity: {
						x: 36,
						y: 55,
					},
					mass: 0.1,
					radius: 23,
					restitution: -0.7,
					url: "icon_6",
				},
				{
					position: {
						x: 100,
						y: s - 150,
					},
					velocity: {
						x: 15,
						y: 60,
					},
					mass: 0.1,
					radius: 23,
					restitution: -0.7,
					url: "icon_1",
				},
				{
					position: {
						x: 100,
						y: s - 150,
					},
					velocity: {
						x: 25,
						y: 30,
					},
					mass: 0.1,
					radius: 23,
					restitution: -0.7,
					url: "icon_2",
				},
				{
					position: {
						x: 100,
						y: s - 150,
					},
					velocity: {
						x: 3,
						y: 85,
					},
					mass: 0.1,
					radius: 23,
					restitution: -0.7,
					url: "icon_3",
				},
				{
					position: {
						x: 100,
						y: s - 150,
					},
					velocity: {
						x: 14,
						y: 65,
					},
					mass: 0.1,
					radius: 23,
					restitution: -0.7,
					url: "icon_4",
				},
				{
					position: {
						x: 100,
						y: s - 150,
					},
					velocity: {
						x: 25,
						y: 27,
					},
					mass: 0.1,
					radius: 23,
					restitution: -0.7,
					url: "icon_5",
				},
				{
					position: {
						x: 100,
						y: s - 150,
					},
					velocity: {
						x: 16,
						y: 53,
					},
					mass: 0.1,
					radius: 23,
					restitution: -0.7,
					url: "icon_6",
				},
				{
					position: {
						x: 100,
						y: s - 150,
					},
					velocity: {
						x: 23,
						y: 48,
					},
					mass: 0.1,
					radius: 23,
					restitution: -0.7,
					url: "icon_1",
				},
				{
					position: {
						x: 100,
						y: s - 150,
					},
					velocity: {
						x: 28,
						y: 52,
					},
					mass: 0.1,
					radius: 23,
					restitution: -0.7,
					url: "icon_2",
				},
				{
					position: {
						x: 100,
						y: s - 150,
					},
					velocity: {
						x: 34,
						y: 68,
					},
					mass: 0.1,
					radius: 23,
					restitution: -0.7,
					url: "icon_3",
				},
				{
					position: {
						x: 100,
						y: s - 150,
					},
					velocity: {
						x: 4,
						y: 54,
					},
					mass: 0.1,
					radius: 23,
					restitution: -0.7,
					url: "icon_4",
				},
				{
					position: {
						x: 100,
						y: s - 150,
					},
					velocity: {
						x: 5,
						y: 45,
					},
					mass: 0.1,
					radius: 23,
					restitution: -0.7,
					url: "icon_5",
				},
				{
					position: {
						x: 100,
						y: s - 150,
					},
					velocity: {
						x: 6,
						y: 63,
					},
					mass: 0.1,
					radius: 23,
					restitution: -0.7,
					url: "icon_6",
				},
			];
			(ctx.fillStyle = "red"),
				(ctx.strokeStyle = "#000000"),
				(i = setInterval(function () {
					ctx.clearRect(0, 0, e, s), (r = []);
					for (var a = 0; a < o.length; a++) {
						if (newAnimation) {
							console.log("hello"),
								(o = []),
								clearInterval(i),
								(newAnimation = !1),
								letsGo();
							break;
						}
						C(o[a]);
					}
				}, t));
		},
		C =
			(Math.PI / 180,
			function (a) {
				if (!_.isDown) {
					var t =
							(-0.5 * d * c * n * a.velocity.x * a.velocity.x * a.velocity.x) /
							Math.abs(a.velocity.x),
						i =
							(-0.5 * d * c * n * a.velocity.y * a.velocity.y * a.velocity.y) /
							Math.abs(a.velocity.y);
					(t = isNaN(t) ? 0 : t), (i = isNaN(i) ? 0 : i);
					var l = t / a.mass,
						r = m + i / a.mass;
					(a.velocity.x += l * o),
						(a.velocity.y += r * o),
						(a.position.x += a.velocity.x * o * 100),
						(a.position.y += a.velocity.y * o * 100);
				}
				a.position.y > s - a.radius &&
					((a.velocity.y *= a.restitution), (a.position.y = s - a.radius)),
					a.position.x > e - a.radius &&
						((a.velocity.x *= a.restitution), (a.position.x = e - a.radius)),
					a.position.x < a.radius &&
						((a.velocity.x *= a.restitution), (a.position.x = a.radius)),
					console.log("ball.url " + a.url + "ball.position.x " + a.position.x),
					ctx.drawImage(
						document.getElementById(a.url),
						a.position.x,
						a.position.y - a.radius,
						46,
						46
					);
			});
	v();
}
$.fn.isInViewport = function () {
	var e = $(this).offset().top,
		s = e + $(this).outerHeight(),
		a = $(window).scrollTop(),
		o = a + $(window).height();
	return s > a && o > e;
};
var scrolledToWorks = 0,
	scrolledToIntro = 0,
	programmic = !1,
	position = $(window).scrollTop(),
	direction,
	introAnimated = !1,
	animated = 0,
	worksAnimated = !1,
	worksAnimatedCount = 0,
	scrollingInProgress = !1,
	newAnimation = !1;
$(window).on("scroll", function (e) {
	scrollingMain(e);
}),
	$(".projects__list_name").hover(
		function () {
			if ($("#works_container").hasClass("done")) {
				$("#projects__list").addClass("white__lines"),
					$(this).find(".project_link").addClass("show");
				var e = $(this).data("video");
				$("#" + e).addClass("play"),
					$("#works_container").addClass("video_played");
			}
		},
		function () {
			$(".video_wrapper").removeClass("play"),
				$("#works_container").removeClass("video_played"),
				$("#projects__list").removeClass("white__lines"),
				$(".project_link").removeClass("show");
		}
	),
	$(document).ready(function () {
		function e(e) {
			e
				? ($(".mobile__menu").addClass("open"),
				  $(".mobile__menu .main-navigation__item").addClass("open"),
				  $(".mobile__menu .mobile__social_item").addClass("open"))
				: ($(".mobile__menu .main-navigation__item").addClass("close"),
				  $(".mobile__menu .mobile__social_item").addClass("close"),
				  setTimeout(function () {
						$(".mobile__menu").removeClass("open"),
							$(".mobile__menu .main-navigation__item")
								.removeClass("open")
								.removeClass("close"),
							$(".mobile__menu .mobile__social_item")
								.removeClass("open")
								.removeClass("close");
				  }, 2e3));
		}
		var s = new Promise(function (e) {
			setTimeout(function () {
				0 !== $("html, body").scrollTop()
					? (window.scrollTo(0, 0),
					  $("*").removeClass("visible"),
					  $("*").removeClass("loaded"),
					  $("#preload").addClass("hidden"),
					  $(".main-navigation__item").removeClass("active"),
					  $("#intro").addClass("active"),
					  e())
					: ($("#preload").addClass("hidden"), e());
			}, 1e3);
		});
		s.then(function () {
			$("#main").addClass("loaded"),
				$("body").removeClass("loader"),
				$("#preload").css("visibility", "hidden");
		}),
			$(".main-navigation__item").on("click", function (s) {
				s.preventDefault(),
					(scrollingInProgress = !0),
					console.log("scrollingInProgress"),
					console.log(scrollingInProgress);
				var a = $(s.target).attr("id");
				$(".main-navigation__item").removeClass("active"),
					$("#main").removeClass("loaded"),
					$("body").addClass("loader"),
					setTimeout(function () {
						$("#preload").removeAttr("style"),
							$("#preload").removeClass("hidden"),
							$("#main_bg").removeClass("show_bg");
					}, 500),
					setTimeout(function () {
						$("#section_4").removeClass("loaded"),
							e(!1),
							$("html, body").animate(
								{
									scrollTop: $("#" + $(s.target).data("anchor")).offset().top,
								},
								1,
								function () {
									$(window).scrollTop() > 800
										? (animateCircle($(window).scrollTop()),
										  animateText($(window).scrollTop()),
										  $("#titles").removeAttr("class"),
										  $("#fixed_titles").removeAttr("class"),
										  $("#main_bg").removeClass("show_bg"),
										  $(".header").css("z-index", "99999"),
										  $("#circle").removeAttr("class"),
										  $("#circle").addClass("state_14"),
										  $("#titles").addClass("loaded"),
										  $("#fixed_titles").addClass("loaded"),
										  $("#home").addClass("cursor__item"),
										  restartIntro())
										: "contacts" !== a && restartAbout(),
										scrollingMain(),
										setTimeout(function () {
											return (
												e(!1),
												$("#preload").addClass("hidden"),
												$("#" + a).addClass("active"),
												$("#main").addClass("loaded"),
												$("#preload").css("visibility", "hidden"),
												(programmic = !1),
												$(window).width() <= 1024
													? !1
													: void setTimeout(function () {
															switch (a) {
																case "works":
																	worksAnimation();
																	break;
																case "about":
																	aboutAnimation();
																	break;
																case "contacts":
																	contactAnimation(), bottomAnimation();
																	break;
																default:
																	return (
																		(scrollingInProgress = !1),
																		$("body").removeClass("loader"),
																		!1
																	);
															}
													  }, 3e3)
											);
										}, 1e3);
								}
							);
					}, 1500);
			}),
			$(".scrollDown").on("click", function () {
				$("html, body").animate(
					{
						scrollTop: $(window).scrollTop() + 300,
					},
					300
				);
			}),
			$(".gamburger").on("click", function () {
				e(!0);
			}),
			$(".close__menu").on("click", function () {
				e(!1);
			}),
			$("body").on("click", function (e) {
				$(e.target).hasClass("reload") && $("#intro").trigger("click");
			}),
			$(".popup_item").on("click", function (e) {
				e.preventDefault(),
					$("#video-popup").css({
						display: "flex",
					}),
					$("body").addClass("loader"),
					$("body").addClass("video-loader"),
					$("body").addClass("cross"),
					$("#video-popup .modal_video").trigger("play");
			}),
			$(".popup_window").on("click", function () {
				$("#video-popup .modal_video").trigger("pause"),
					$("#video-popup").hide(),
					$("body").removeClass("loader"),
					$("body").removeClass("video-loader"),
					$("body").removeClass("cross");
			}),
			$(document).mousemove(function (e) {
				$(e.target).hasClass("cursor__item")
					? $("#cursors").addClass("big")
					: $("#cursors").removeClass("big"),
					$(e.target).hasClass("cross")
						? $("#cursors").addClass("cross")
						: $("#cursors").removeClass("cross"),
					$(".cursor").css({
						position: "fixed",
						left: e.clientX - 5,
						top: e.clientY - 5,
					});
			}),
			$("#cursors").appendTo("body"),
			$(".horn_wrapper").on("click", function () {
				$("#raphael").hasClass("clicked")
					? ((newAnimation = !0),
					  (smiles = []),
					  (canvas = document.getElementById("canvas")),
					  (ctx = canvas.getContext("2d")),
					  ctx.setTransform(1, 0, 0, 1, 0, 0),
					  ctx.clearRect(0, 0, canvas.width, canvas.height),
					  $("#raphael").empty())
					: letsGo();
			});
	});
