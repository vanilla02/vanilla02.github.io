(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);


// Smooth Scrolling for Navigation Links
$(document).ready(function () {
  $("a[href^='#']").on("click", function (event) {
      event.preventDefault();
      $("html, body").animate({
          scrollTop: $($.attr(this, "href")).offset().top - 70
      }, 800);
  });
});

// Typing Effect for Animated Text
var typedText = ["Web Developer", "Graphic Designer", "Creative Thinker"];
var count = 0;
var textIndex = 0;
var currentText = "";
var letter = "";

function typeEffect() {
  if (count === typedText.length) {
      count = 0;
  }
  currentText = typedText[count];
  letter = currentText.slice(0, ++textIndex);
  document.querySelector(".animated-item").textContent = letter;
  
  if (letter.length === currentText.length) {
      count++;
      textIndex = 0;
      setTimeout(typeEffect, 1500);
  } else {
      setTimeout(typeEffect, 100);
  }
}
document.addEventListener("DOMContentLoaded", typeEffect);

// Parallax Scrolling Effect
$(window).scroll(function () {
  var scrollPos = $(this).scrollTop();
  $(".full-screen").css("background-position", "center " + (scrollPos * 0.5) + "px");
});

// Hover Effect for Buttons
$(".custom-btn").hover(
  function () {
      $(this).css("transform", "scale(1.05)");
  },
  function () {
      $(this).css("transform", "scale(1)");
  }
);

// Dark Mode Toggle Animation
$(".color-mode").click(function () {
  $("body").toggleClass("dark-mode");
  $(".color-mode-icon").toggleClass("active");
});

