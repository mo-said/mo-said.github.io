// //Strict Mode
// //first intro description height
$(document).ready(function(){
// 	var vt_windoww_width = jQuery(window).width();
// 	if(vt_windoww_width > 991){
// 	var vtautoheight = jQuery(".vt_description").height();
// 		jQuery(".profile-intro .col-md-7").css("height", 1);
// 		jQuery(".timeline:first-child .content-wrap:first-child").css("height", vtautoheight+20);
// 		}
// 	});
//
// 	jQuery(window).resize(function(){
// 	var vt_windoww_width = jQuery(window).width();
// 	if(vt_windoww_width > 991){
// 	var vtautoheight = jQuery(".vt_description").height();
// 		jQuery(".profile-intro .col-md-7").css("height", 1);
// 		jQuery(".timeline:first-child .content-wrap:first-child").css("height", vtautoheight+20);
// 		}
// 		else{
// 		jQuery(".profile-intro .col-md-7").css("height", '');
// 		jQuery(".timeline:first-child .content-wrap:first-child").css("height", '');
// 		}
// 	});
//
// (function($) {
//   "use strict";
//
// //Run on Document Ready
// $(document).ready(function(){
// //Add home class
// var aaa = document.querySelector('.timeline:first-child').id;
// $(".introclass").attr("id",aaa);
//
// $(".timeline-bg")[0]
//   //Smooth scrool
//   $("html").niceScroll({styler:"fb",cursorcolor:"#000"});
//   $(".side-menu").niceScroll({styler:"fb",cursorcolor:"#000"});
//
//   //Side menu - Open
//   // You can also make this on mouseenter by replacing the click event by mouseenter
//   $('.side-menu-open').click(function(){
//     $('.side-menu').animate({'left': '0px'}, 600, 'easeOutCubic');
//   });
//
//   //Side menu - Close
//   $('#side-menu-close').click(function(){
//     var sideWidth = $('.side-menu').outerWidth();
//     var sideWidthClose = '-' + sideWidth + 'px';
//     $('.side-menu').animate({'left': sideWidthClose}, 600, 'easeOutCubic');
//
//   });
//   //Side menu - Close
//   var vt_windoww_width = $(window).width();
//   if(vt_windoww_width < 500){
//   $('.menu-item a').click(function(){
//     var sideWidth = $('.side-menu').outerWidth();
//     var sideWidthClose = '-' + sideWidth + 'px';
//     $('.side-menu').animate({'left': sideWidthClose}, 600, 'easeOutCubic');
//   });
//   }
//   //Smooth Scroll on anchor links
//   $('a[href*=#]:not([href=#])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html,body').animate({
//           scrollTop: target.offset().top
//         }, 700, 'easeInOutExpo');
//         return false;
//       }
//     }
//   });
//
//
//
//   //Bxslider -see options at http://bxslider.com/
//   $('.portfolio-itens').bxSlider({
//       slideWidth: 200,
//       minSlides: 1,
//       maxSlides: 4,
//       moveSlides: 3,
//       slideMargin: 5,
//       auto: false,
//       mode: 'horizontal',
//       useCSS: false,
//       // speed: 900,
//       infiniteLoop: false,
//       hideControlOnEnd: true,
//       // easing: 'easeOutElastic',
//       pager: false,
//       prevText: '<i class="fa fa-chevron-left"></i>',
//       nextText: '<i class="fa fa-chevron-right"></i>'
//   });
//
//
//   //Nivo Lightbox
//   $('a.nivobox').nivoLightbox({ effect: 'fade' });
//
//   //Portfolio Animations
//   $('.portfolio-item').hover(function(){
//     $(this).find('.hover-bg-wrapper').fadeIn(200);
//     $(this).find('.hover').show();
//     $(this).find('p').addClass('animated').addClass('fadeInUp');
//   }, function(){
//     $(this).find('.hover-bg-wrapper').fadeOut(200);
//     $(this).find('.hover').fadeOut(200);
//     $(this).find('p').removeClass('fadeInUp');
//   });
//
//   //Contact Form Validator and Ajax Sender
// // 	var $contactForm = $('#contact-form');
// // $contactForm.submit(function(e) {
// // 	e.preventDefault();
// // 	$.ajax({
// // 		url: '//formspree.io/mohamed.said.ib93@gmail.com',
// // 		method: 'POST',
// // 		data: $(this).serialize(),
// // 		dataType: 'json',
// // 		beforeSend: function() {
// // 			$contactForm.append('<div class="col-sm-6 sent_message alert alert--loading">Sending message…</div>');
// // 		},
// // 		success: function(data) {
// // 			$contactForm.find('.alert--loading').hide();
// // 			$contactForm.append('<div class="col-sm-6 sent_message alert alert--success">Message sent!</div>');
// // 		},
// // 		error: function(err) {
// // 			$contactForm.find('.alert--loading').hide();
// // 			$contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
// // 		}
// // 	});
// // });
// // $("form").on("submit", function(e) {
// // 	 e.preventDefault();
// // 	 var form = $(this);
// // 	 var button = form.children("button[type='submit']");
// // 	 var msg = form.serialize();
// // 	 var submitButton = form.children("button[type='submit']").html();
// // 	 if (submitButton == undefined) {
// // 			 var idForm = form.attr("id");
// // 			 var button = $("#" + idForm + " button");
// // 			 var submitButton = $("#" + idForm + " button").html();
// // 	 }
// // 	 $.ajax({
// // 			 type: 'POST',
// // 			 url: "//formspree.io/mohamed.said.ib93@gmail.com",
// // 			 data: msg,
// // 			 success: function(data) {
// // 					 if (data != "") {
// // 							 $("input, textarea").val("");
// // 							 button.html(data).addClass("");
// // 							 setTimeout(function() {
// // 									 button.html(submitButton).removeClass("");
// // 							 }, 5000);
// // 							 $('.sent_message').fadeIn();
// // 							 $('.sent_message').fadeOut(5000);
// // 					 }
// // 			 },
// // 			 error: function(xhr, str) {
// // 					 alert('Error: ' + xhr.responseCode);
// // 			 }
// // 	 });
// // });
//
//
//   //Modal for Contact Form
//   $('.modal-wrap').click(function(){
//     $('.modal-wrap').fadeOut(300);
//   });
//
//   //Background Height fix for vertical progress
//   $( ".full-height" ).each(function() {
//     var $stretch = $(this);
//     $stretch.css({ height: $stretch.closest('.line').find('.content-wrap').height() });
//   });
//
//   //Top button hover
//   var aa = $(".btn-hide-text1").width();
// 	$(".btn-top-resume .btn-hide-text").css("width", "0");
// 	$(".btn-top-resume").mouseenter(function(){
// 		$(".btn-top-resume .btn-hide-text").css("width", $(".btn-hide-text-r").width()+5);
// 	}).mouseleave(function(){
// 		$(".btn-top-resume .btn-hide-text").css("width", "0");
// 	});
//
// 	$(".btn-top-message .btn-hide-text").css("width", "0");
// 	$(".btn-top-message").mouseenter(function(){
// 		$(".btn-top-message .btn-hide-text").css("width", $(".btn-hide-text-c").width()+5);
// 	}).mouseleave(function(){
// 		$(".btn-top-message .btn-hide-text").css("width", "0");
// 	});
//
// 	$(".btn-top-blog .btn-hide-text").css("width", "0");
// 	$(".btn-top-blog").mouseenter(function(){
// 		$(".btn-top-blog .btn-hide-text").css("width", $(".btn-hide-text-b").width()+5);
// 	}).mouseleave(function(){
// 		$(".btn-top-blog .btn-hide-text").css("width", "0");
// 	});
//
// });
//
// //Run on Window Load
$(window).load(function(){
  //Page loader
  $('#page-loader').fadeOut(3000, function(){});


});
//
// $(document).ready(function() {
//
//   $("#owl-demo").owlCarousel({
//
//       navigation : true, // Show next and prev buttons
//       slideSpeed : 300,
//       paginationSpeed : 400,
//       autoPlay: true,
//       navigationText : ["<",">"],
//       rewindNav : true,
//       singleItem: true
//
//       // "singleItem:true" is a shortcut for:
//       // items : 1,
//       // itemsDesktop : false,
//       // itemsDesktopSmall : false,
//       // itemsTablet: false,
//       // itemsMobile : false
//
//   });
//
// });
//
});
