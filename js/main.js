$(function () {
  $(".btn:first-child").addClass("btn-on");
  $(".btn:first-child").addClass("btn-none");
  $(".btn:first-child").click(function () {
    $(this).siblings().removeClass("btn-on");
    $(this).addClass("btn-none");
    $(".btn:nth-child(2)").removeClass("btn-none");
    $(this).addClass("btn-on");
  });
  $(".btn:nth-child(2)").click(function () {
    $(this).siblings().removeClass("btn-on");
    $(".btn").addClass("btn-none");
    $(this).addClass("btn-on");
  });
  $(".btn:nth-child(3)").click(function () {
    $(this).siblings().removeClass("btn-on");
    $(".btn:first-child").removeClass("btn-none");
    $(this).addClass("btn-on");
  });
});
