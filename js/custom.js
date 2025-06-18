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

// Fade In/Out Effect for Exploring Words
document.addEventListener("DOMContentLoaded", function() {
  const words = ["SEO", "Digital Marketing", "Virtual Assistance"];
  const el = document.querySelector(".animated-word");
  let index = 0;

  function showWord() {
    el.style.opacity = 0;

    setTimeout(() => {
      el.textContent = words[index];
      el.style.opacity = 1;
    }, 500);

    index = (index + 1) % words.length;
  }

  showWord();
  setInterval(showWord, 2500);
});

const projects = [
  {
    title: "WordPress (Personal School Project)",
    description: "A personal school project to practice web design. Built and designed pages, posted blogs, and managed SEO settings to learn the basics of content publishing and search engine visibility.",
    image: "images/project/WORDPRESS.png",
    rating: 4
  },
  {
    title: "WordPress (Group Client Project)",
    description: "A group school project for a simulated client. Responsible for posting blogs, managing SEO using Yoast SEO, and designing pages with Elementor to deliver a clean and functional website.",
    image: "images/project/WORDPRESS 2.png",
    rating: 4
  },
  {
    title: "HTML, CSS, & JavaScript Practice",
    description: "Practiced coding fundamentals by building simple web layouts. Focused on using <aside> elements, designing card components, adding links, and implementing basic HTML, CSS, and JS skills.",
    image: "images/project/HTMLCSSJS.png",
    rating: 3
  },
  {
    title: "Canva Website (First Design)",
    description: "Designed a mock website in Canva based on a personal creative idea. Done spontaneously to visualize and experiment with layout, colors, and structure without coding.",
    image: "images/project/CANVA WEBSITE.png",
    rating: 4
  },
  {
    title: "Canva Website (Second Design)",
    description: "A second self-initiated website design using Canva. Explored simple layouts and components to strengthen understanding of design basics and user-friendly page structures.",
    image: "images/project/CANVA DESIGN WEBSITE.png",
    rating: 4
  }
];

let currentIndex = 0;

function showProject(index) {
  const project = projects[index];
  $("#project-title").fadeOut(300, function() {
    $(this).text(project.title).fadeIn(300);
  });

  $("#project-description").fadeOut(300, function() {
    $(this).text(project.description).fadeIn(300);
  });

  $("#project-image").fadeOut(300, function() {
    $(this).attr("src", project.image).fadeIn(300);
  });

 // Generate stars
let stars = "";
for (let i = 0; i < 5; i++) {
  stars += i < project.rating ? "★" : "☆";
}
$("#project-stars").fadeOut(300, function() {
  $(this).html(stars).fadeIn(300);
});
}

$("#next-project").click(function() {
  currentIndex = (currentIndex + 1) % projects.length;
  showProject(currentIndex);
});

// Initialize first project
$(document).ready(function() {
  showProject(currentIndex);
});

// Open modal when image clicked
$("#project-image").click(function() {
  $("#modalImage").attr("src", $(this).attr("src"));
  $("#imageModal").fadeIn();
});

// Close modal when 'x' clicked
$(".close").click(function() {
  $("#imageModal").fadeOut();
});

// Also close when clicking outside image
$("#imageModal").click(function(e) {
  if (e.target.id === "imageModal") {
    $(this).fadeOut();
  }
});

// Use Intersection Observer for scroll-based animation
document.addEventListener("DOMContentLoaded", function () {
  const projectCard = document.querySelector(".project-card");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        projectCard.classList.add("show");
        // Stop observing once shown
        observer.unobserve(projectCard);
      }
    });
  }, {
    threshold: 0.2 // 20% visible triggers animation
  });

  observer.observe(projectCard);
});

document.addEventListener("DOMContentLoaded", function () {
  // Existing project card observer
  const projectCard = document.querySelector(".project-card");
  const observerProject = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        projectCard.classList.add("show");
        observerProject.unobserve(projectCard);
      }
    });
  }, { threshold: 0.2 });
  observerProject.observe(projectCard);

  // Observe ALL resume fade-slide elements
  const fadeSlides = document.querySelectorAll("#resume .fade-slide");
  const observerResume = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observerResume.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  fadeSlides.forEach(el => observerResume.observe(el));
});

// Initialize Swiper Card Stack with NO looping
var cardSwiper = new Swiper(".myCardStack", {
  effect: "cards",
  grabCursor: true,
  loop: false,  // disables endless loop
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const scriptURL = 'https://script.google.com/macros/s/...';

const form = document.getElementById('contactForm');
const thankYou = document.getElementById('thankYouPopup');

form.addEventListener('submit', e => {
  e.preventDefault();

  const button = form.querySelector('button[type="submit"]');
  button.disabled = true;
  button.innerText = "Sending...";

  const formData = new FormData(form);

  fetch(scriptURL, {
    method: "POST",
    body: formData
  })
    .then(response => response.json())
    .then(result => {
      console.log("Server responded:", result);
      form.reset();
      thankYou.style.display = 'block';
      button.disabled = false;
      button.innerText = "Send";
    })
    .catch(error => {
      console.error('Error!', error);
      alert('Oops! Something went wrong. Please try again later.');
      button.disabled = false;
      button.innerText = "Send";
    });
});
