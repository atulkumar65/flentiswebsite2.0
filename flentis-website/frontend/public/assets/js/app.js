var GPTHEME = GPTHEME || {};

(function ($) {

	/*!----------------------------------------------
		# This beautiful code written with heart
		# by Mominul Islam <hello@mominul.me>
		# In Dhaka, BD at the GpTheme workstation.
		---------------------------------------------*/

	// USE STRICT
	"use strict";

	window.Gp = {
		init: function () {
			// Header
			this.header = $('.site-header');
			this.body = $('body');

			this.headerFixed = {
				initialOffset: parseInt(this.header.attr('data-fixed-initial-offset')) || 100,

				enabled: $('[data-header-fixed]').length,
				value: false,

				mobileEnabled: $('[data-mobile-header-fixed]').length,
				mobileValue: false
			};

			// Menus
			this.megaMenu = this.header.find('#mega-menu-wrap');
			this.mobileMenu = $('[data-mobile-menu-resolution]').data('mobile-menu-resolution');

			this.resize();
		},

		resize: function () {
			this.isDesktop = $(window).width() >= 991;
			this.isMobile = $(window).width() <= 991;
			this.isPad = $(window).width() <= 1024;
			this.isMobileMenu = $(window).width() <= Gp.mobileMenu;
		}
	};

	GPTHEME.initialize = {

		init: function () {
			GPTHEME.initialize.general();
			GPTHEME.initialize.swiperSlider();
			GPTHEME.initialize.sectionBackground();
			GPTHEME.initialize.portfolio();
			GPTHEME.initialize.sectionSwitch();
			GPTHEME.initialize.countUp();
			GPTHEME.initialize.countDown();
			GPTHEME.initialize.tab();
			GPTHEME.initialize.googleMap();
			GPTHEME.initialize.footer();
			GPTHEME.initialize.contactFrom();
		},

		/*========================================================*/
		/*=           Collection of snippet and tweaks           =*/
		/*========================================================*/

		general: function () {

			/* Magnefic Popup */
			$('.popup-video').each(function () {
				$('.popup-video').magnificPopup({
					type: 'iframe'
				});
			});


			$('.jarallax').jarallax({
				speed: 0.2
			});


			 $(window).scroll(function (event) {
				var scrollPos = $(this).scrollTop();

				$('.call-to-action-creative').each(function () {
					var $el = $('.call-to-action-creative');
					var elPosRelToWindow = $el.offset().top - $(window).scrollTop();
					var inView = ((elPosRelToWindow > 0) && (elPosRelToWindow < $(window).height() - 500));

					$('#debug').html('elPosRelToWindow = ' + elPosRelToWindow + '<br>inView = ' + inView);

					$el.toggleClass('highlighter', inView);
					$('body').toggleClass('highlighter-hidden', inView);
				});

			});
			

			$('.popup-image').magnificPopup({
				type: 'image',
				midClick: true,
			});

			 
			 // Wow Js Init
            var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: false,
                live: true,
                scrollContainer: null
            });
            wow.init();
            
        	/* Right click , ctrl+u and ctrl+shift+i disabled */
		    /* $('body').on('contextmenu', function (e) {
		    	e.preventDefault();
		    	e.stopPropagation();
		    	return false;
		    }); */

		    
		},

		 
 
		/*=====================================*/
		/*=           Swiper Slider           =*/
		/*=====================================*/

		swiperSlider: function () {
			$('.swiper-container').each(function () {
				var id = $(this).attr('id');
				var perpage = $(this).data('perpage') || 1;
				var loop = $(this).data('loop') || true;
				var speed = $(this).data('speed') || 700;
				var autoplay = $(this).data('autoplay') || 5000;
				var space = $(this).data('space') || 0;
				var effect = $(this).data('effect');
				var direction = $(this).data('direction') || 'horizontal';
				var breakpoints = $(this).data('breakpoints');

				var swiper = new Swiper('#' + id, {
					slidesPerView: perpage,
					spaceBetween: space,
					effect: effect,
					direction: direction,
					loop: loop,
					speed: speed,
					watchSlidesVisibility: true,
					slideVisibleClass: 'astriol-active-slide',
					breakpoints: breakpoints,
					autoplay: {
						delay: autoplay,
					},
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					},
					navigation: {
						nextEl: '.gp-nav-next, .slider-next',
						prevEl: '.gp-nav-prev, .slider-prev',
					},

					thumbs: {
						swiper: galleryThumbs
					}
				});
			});

			/* Tab Slider */
			var exportFeatures = $(".previewSlider");

			if (exportFeatures) {
				var
					sliderFeature = $(".swiper-wrapper", exportFeatures),
					childSlide = sliderFeature.children(),
					i,
					pictos = [],
					titles = [];

				childSlide.each(function () {
					var $this = $(this);
					var picto = $this.data('image'),
						title = $this.data('title');
					pictos.push(picto);
					titles.push(title);
				});


				var swiperExport = new Swiper(".previewSlider", {
					effect: "fade",
					autoplay: {
						delay: 5000,
					},
					fadeEffect: {
						crossFade: true
					},
					pagination: {
						el: ".astriol-pagination",
						clickable: !0,
						renderBullet: function (e, t) {
							return '<span class="' + t + '"><i class="' + pictos[e] + '"></i><span>' + titles[e] + "</span></span>"
						}
					}
				});

				swiperExport.on("slideChange", function () {
					var e = this.activeIndex;
					document.getElementById("slider-tab").classList = "dashboard-preview active-tab-" + e
				})
			}


			var galleryThumbs = new Swiper('.thumb-slider', {
				slidesPerView: 4,
				loop: true,
				effect: 'coverflow',
				centeredSlides: true,
				// slideToClickedSlide: true,
				coverflowEffect: {
					rotate: 0,
					stretch: -25,
					slideShadows: false,
					depth: 200
				},
				freeMode: false,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
			});

			var galleryTop = new Swiper('.gallery-slider', {
				// spaceBetween: 10,
				// effect: 'fade',
				loop: true,
				centeredSlides: true,
				// fadeEffect: {
				// 	crossFade: true
				// },
				thumbs: {
					swiper: galleryThumbs
				}
			});

			$('.testimonial-top').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				fade: true,
				asNavFor: '.testimonial-bottom'
			});
			$('.testimonial-bottom').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				asNavFor: '.testimonial-top',
				arrows: false,
				dots: false,
				centerMode: true,
				focusOnSelect: true,
				responsive: [{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}]
			});
		},
  
		/*==============================*/
		/*=           Countup          =*/
		/*==============================*/
		countUp: function () {
			var options = {
				useEasing: true,
				useGrouping: true,
				separator: ',',
				decimal: '.',
				prefix: '',
				suffix: ''
			};

			var counteEl = $('[data-counter]');

			if (counteEl) {
				counteEl.each(function () {
					var val = $(this).data('counter');

					var countup = new CountUp(this, 0, val, 0, 2.5, options);
					$(this).appear(function () {
						countup.start();
					}, {
						accX: 0,
						accY: 0
					})
				});
			}
		},

		/*=================================*/
		/*=           Count Down          =*/
		/*=================================*/

		countDown: function () {
			$('.countdown').each(function (index, value) {
				var count_year = $(this).attr("data-count-year");
				var count_month = $(this).attr("data-count-month");
				var count_day = $(this).attr("data-count-day");
				var count_date = count_year + '/' + count_month + '/' + count_day;
				$(this).countdown(count_date, function (event) {
					$(this).html(
						event.strftime('<span class="CountdownContent">%D<span class="CountdownLabel">Days</span></span><span class="CountdownSeparator"></span><span class="CountdownContent">%H <span class="CountdownLabel">HR</span></span><span class="CountdownSeparator"></span><span class="CountdownContent">%M <span class="CountdownLabel">MIN</span></span><span class="CountdownSeparator"></span><span class="CountdownContent">%S <span class="CountdownLabel">SC</span></span>')
					);
				});
			});
		},

		


		 
		/*=================================*/
		/*=           Contact Form          =*/
		/*=================================*/

		contactFrom: function () {

			$('[data-gp-form]').each(function () {
				var $this = $(this);
				$('.form-result', $this).css('display', 'none');

				$this.submit(function () {

					$('button[type="submit"]', $this).addClass('clicked');

					// Create a object and assign all fields name and value.
					var values = {};

					$('[name]', $this).each(function () {
						var $this = $(this),
							$name = $this.attr('name'),
							$value = $this.val();
						values[$name] = $value;
					});

					// Make Request
					$.ajax({
						url: $this.attr('action'),
						type: 'POST',
						data: values,
						success: function success(data) {

							if (data.error == true) {
								$('.form-result', $this).addClass('alert-warning').removeClass('alert-success alert-danger').css('display', 'block');
							} else {
								$('.form-result', $this).addClass('alert-success').removeClass('alert-warning alert-danger').css('display', 'block');
							}
							$('.form-result > .content', $this).html(data.message);
							$('button[type="submit"]', $this).removeClass('clicked');
						},
						error: function error() {
							$('.form-result', $this).addClass('alert-danger').removeClass('alert-warning alert-success').css('display', 'block');
							$('.form-result > .content', $this).html('Sorry, an error occurred.');
							$('button[type="submit"]', $this).removeClass('clicked');
						}
					});
					return false;
				});

			});
		}

	};

	GPTHEME.documentOnReady = {
		init: function () {
			GPTHEME.initialize.init();

			$('#animated-wave-one').wavify({
				height: 20,
				bones: 4,
				amplitude: 70,
				color: "rgba(218, 222, 255, 0.2)",
				speed: .15
			});

			$('#animated-wave-two').wavify({
				height: 30,
				bones: 4,
				amplitude: 100,
				color: 'rgba(218, 222, 255, 0.2)',
				speed: .2
			});
			$('#animated-wave-three').wavify({
				height: 30,
				bones: 4,
				amplitude: 100,
				color: 'rgba(255, 255, 255, 0.039)',
				speed: .15
			});
			$('#animated-wave-four').wavify({
				height: 30,
				bones: 4,
				amplitude: 100,
				color: 'rgba(255, 255, 255, 0.039)',
				speed: .2
			});

		},
	};

	 
	Gp.init();

	// Initialize Functions
	$(document).ready(GPTHEME.documentOnReady.init);
	$(window).on('load', GPTHEME.documentOnLoad.init);
	$(window).on('resize', GPTHEME.documentOnResize.init);
	$(window).on('scroll', GPTHEME.documentOnScroll.init);

})(jQuery);