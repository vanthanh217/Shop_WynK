//sticky
{
  $(document).ready(() => {
    $(window).scroll(() => {
      if ($(this).scrollTop()) {
        $(".header").addClass("sticky");
      } else {
        $(".header").removeClass("sticky");
      }
    });
  });
}

//Dark mode
{
  $(document).ready(() => {
    $(".bx-moon").click(() => {
      $("body").toggleClass("dark-mode");

      if ($("body").hasClass("dark-mode")) {
        $(".header-right .switch-dark-light .bx")
          .removeClass("bx-moon")
          .addClass("bx-sun");
      } else {
        $(".header-right .switch-dark-light .bx")
          .removeClass("bx-sun")
          .addClass("bx-moon");
      }
    });
  });
}
