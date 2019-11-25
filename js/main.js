$(function() {
  /*nav toogle*/
  var nav = $("#nav_menu");
  var navToggle = $("#navToggle");

  /*navToggle*/
  navToggle.on("click", function(event) {
    event.preventDefault();
    nav.toggleClass("click");
  });
  /*clas active for nav menu*/
  $(".nav_item a").on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass("active");
    $(".nav_link a").toggleClass("active");
  });
  /*back to top*/
  $(function() {
    $("#back_top").hide();
    $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
        $(back_top).fadeIn();
      } else {
        $(back_top).fadeOut();
      }
    });
    $("#back_top").click(function() {
      $("body, html").animate(
        {
          scrollTop: 0
        },
        800
      );
      return false;
    });
  });
  /*smoth scroll to section*/
  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();
    var blockId = $(this).data("scroll");
    var blockOffset = $(blockId).offset().top;
    nav.removeClass("click");
    $("html, body").animate(
      {
        scrollTop: blockOffset - 70
      },
      800
    );
  });
  /*fixed header*/
  var introH = $("#intro").innerHeight(),
    header = $(".header_content"),
    scrollOffset = $(window).scrollTop();
  checkScroll(scrollOffset);
  /*fixed header*/
  $(window).on("scroll", function() {
    scrollOffset = $(this).scrollTop();
    /*console.log(scrollOffset);*/
    checkScroll(scrollOffset);
  });
  function checkScroll(scrollOffset) {
    scrollOffset = $(this).scrollTop();
    /*console.log(scrollOffset);*/
    if (scrollOffset >= introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }
  /*clas show for burger button*/
  $("#navToggle").on("click", function(event) {
    event.preventDefault();
    $(".burger_icon").toggleClass("show");
  });
  /*reviews slider https://kenwheeler.github.io/slick/*/
  var slider = $("#developersSlider");
  slider.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    arrows: false,
    dots: true
  });
});
