$(function() {
  /*nav toogle*/
  var nav = $("#nav_menu");
  var navToggle = $("#navToggle");

  /*navToggle*/
  navToggle.on("click", function(event) {
    event.preventDefault();
    nav.toggleClass("click");
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
        scrollTop: blockOffset - 80
      },
      800
    );
  });
});
