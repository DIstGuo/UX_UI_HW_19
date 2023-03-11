console.log("Your index.js file is loaded correctly!");

$(".begin").on("click", function () {
  if ($(window).scrollTop() !== $("#about").offset().top) {
    $("html, body").animate({ scrollTop: $("#about").offset().top }, 1000);
  }
});

// Scroll to about me section

$(".scroll-to-about").on("click", function () {
  if ($(window).scrollTop() !== $("#about").offset().top) {
    $("html, body").animate({ scrollTop: $("#about").offset().top }, 1000);
  }
});

// Scroll to my skills section

$(".scroll-to-skills").on("click", function () {
  if ($(window).scrollTop() !== $("#skills").offset().top) {
    $("html, body").animate({ scrollTop: $("#skills").offset().top }, 1000);
  }
});

// Scroll to my work section

$(".scroll-to-projects").on("click", function () {
  if ($(window).scrollTop() !== $("#projects").offset().top) {
    $("html, body").animate({ scrollTop: $("#projects").offset().top }, 1000);
  }
});

// Scroll to contact section

$(".scroll-to-contact").on("click", function () {
  if ($(window).scrollTop() !== $("#contact").offset().top) {
    $("html, body").animate({ scrollTop: $("#contact").offset().top }, 1000);
  }
});

// Make sure the side nav is always visible when scrolling to the "contact" section

$(window).scroll(function () {
  if (
    $(window).scrollTop() + $(window).height() - $("#contact").height() >=
    $("#contact").offset().top
  ) {
    $(".side-nav a").css("color", "black");
  } else {
    $(".side-nav a").css("color", "white");
  }
});

// Change menu slideover display to "flex" using animation when the hamburger icon is clicked

$(".hamburger").on("click", function () {
  $(".scrim").css("display", "block");
  $(".menu-slideover").css("display", "flex");
  $(".menu-slideover").animate({ right: "0" }, 500);
});

// Close menu slideover when the "X" icon is clicked

$(".close").on("click", function () {
  $(".scrim").css("display", "none");
  $(".menu-slideover").animate({ right: "-400" }, 500, function () {
    $(".menu-slideover").css("display", "none");
  });
});
