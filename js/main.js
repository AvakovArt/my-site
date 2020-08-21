$(document).ready(function () {
  const tab = $(".tab");

  tab.on("click", function () {
    tab.removeClass("active");
    $(this).toggleClass("active");
    let activeTabContent = $(this).attr("data-target");
    $(".content__tabs").removeClass("visible");
    $(activeTabContent).toggleClass("visible");
  });
  const tablet = $(".tablet");
  tablet.on("click", function () {
    tablet.removeClass("active");
    $(this).toggleClass("active");
    let activeTabContent = $(this).attr("data-target");
    $(".sidebar__tabs").removeClass("visible");
    $(activeTabContent).toggleClass("visible");
  });
  // $(".form").each(function () {
  //   $(this).validate({
  //     errorClass: "invalid",
  //     messages: {
  //       email: {
  //         required: "Please enter your email",
  //         email: "Your email address format of name@domain.com",
  //       },
  //     },
  //   });
  // });
  // var menuButton = $(".menu-button");
  // menuButton.on("click", function () {
  //   $(".navbar-menu__item").toggleClass("navbar-menu__item--mobile");
  //   $(".navbar-menu").toggleClass("navbar-menu--visible");
  //   $("body").toggleClass("lock");
  // });
});
