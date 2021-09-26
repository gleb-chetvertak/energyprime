$(document).ready(function($) {

	// Header
	$(window).on("scroll", function(){
		var w_top = $(window).scrollTop();

		if(w_top > 300){
			$(".header_container")
				.css("padding-top", "10px")
				.css("padding-bottom", "10px");
		} else{
			$(".header_container")
				.css("padding-top", "20px")
				.css("padding-bottom", "20px");
		}
	});

	// Violet background on the 1st section

	var first_height = $(".first_container").css("height");
	$(".first_violetBg").css("height", first_height);

	$(window).resize(function() {
		var first_height = $(".first_container").css("height");
		$(".first_violetBg").css("height", first_height);
	});

	// Slow scroll

	$('.header_menuItem').click(function(){
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html').animate( { scrollTop: destination }, 2000 );
		return false;
	});

	// Counters

	$(window).on("scroll", function(){
		var w_top = $(window).scrollTop();
		var e_top = $(".about").offset().top;

		if((w_top + 500) >= e_top){
			$(".about_counterItemAmount").spincrement({
				duration: 2000,
				easing: "linear",
				leeway: 0
			});
		};
	});

	// Servic on click

	$("#sect_6_item-1").click(function() {
		$("#sect_6_item-1 > .sect_6_itemDesc").toggleClass("sect_6_itemDesc-visible");
	});
	$("#sect_6_item-2").click(function() {
		$("#sect_6_item-2 > .sect_6_itemDesc").toggleClass("sect_6_itemDesc-visible");
	});
	$("#sect_6_item-3").click(function() {
		$("#sect_6_item-3 > .sect_6_itemDesc").toggleClass("sect_6_itemDesc-visible");
	});
	$("#sect_6_item-4").click(function() {
		$("#sect_6_item-4 > .sect_6_itemDesc").toggleClass("sect_6_itemDesc-visible");
	});
	$("#sect_6_item-5").click(function() {
		$("#sect_6_item-5 > .sect_6_itemDesc").toggleClass("sect_6_itemDesc-visible");
	});
	$("#sect_6_item-6").click(function() {
		$("#sect_6_item-6 > .sect_6_itemDesc").toggleClass("sect_6_itemDesc-visible");
	});

	// Feedback carousel

	$(".feedbackCarousel").owlCarousel({
		items: 1,
		margin: 200,
		stagePadding: 100,
		loop: true,
		nav: true,
		navText: ["<i class=\"fas fa-chevron-left fa-3x\"></i>", "<i class=\"fas fa-chevron-right fa-3x\"></i>"],
		dots: false,
		autoplay: true,
		autoplayTimeout: 10000,
		responsive: {
			0 : {

			},
			320 : {

			},
			375 : {

			},
			450 : {

			},
			576 : {

			},
			768 : {

			},
			992 : {

			},
			1200 : {

			}
		}
	});

	// Callback popup

	$('#headerCallBackBtn, #footerCallBackBtn').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		// delegate: 'a',
		// removalDelay: 500, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function() {
			if($(window).width() < 700) {
				this.st.focus = false;
			} else {
				this.st.focus = '#name';
			};
			// this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		midClick: true

	});

	// Order popup

	$('#orderBtn').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		// delegate: 'a',
		// removalDelay: 500, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function() {
			if($(window).width() < 700) {
				this.st.focus = false;
			} else {
				this.st.focus = '#name';
			};
			// this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		midClick: true

	});


	//E-mail Ajax Send
	$("#callBackForm").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
			$.magnificPopup.close();
			$('.answer').fadeIn().delay(2000).fadeOut();
		});
		return false;
	});

	// Masked input for phone numbers

	$("[name=\"phone\"]").mask("+38 (999) 999-99-99")

	// Chart

});