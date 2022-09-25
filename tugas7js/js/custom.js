$(document).ready(function () {
  $(".ayam").css("background-color", "blue");
  $(".ayam").click(function () {
    $(".ayam").css({
      background: "url(img/anakayam.jpg)",
    });
    $("<audio></audio>")
      .attr({
        src: "Audio/anakayam.mp3",
        volume: 0.4,
        autoplay: "autoplay",
      })
      .appendTo("body");
  });
  $(".angsa").css("background-color", "blue");
  $(".angsa").click(function () {
    $(".angsa").css({
      background: "url(img/angsa.jpg) no-repeat center",
    });
    $("<audio></audio>")
      .attr({
        src: "Audio/angsa.mp3",
        volume: 0.5,
        autoplay: "autoplay",
      })
      .appendTo("body");
  });
  $(".kalkun").css("background-color", "blue");
  $(".kalkun").click(function () {
    alert("");
    $(".kalkun").css({
      background: "url(img/kalkun.jpg) no-repeat center",
    });
    $("<audio></audio>")
      .attr({
        src: "Audio/kalkun.mp3",
        volume: 0.4,
        autoplay: "autoplay",
      })
      .appendTo("body");
  });
  $(".merak").css("background-color", "blue");
  $(".merak").click(function () {
    $(".merak").css({
      background: "url(img/Merak.jpg) no-repeat center",
    });
    $("<audio></audio>")
      .attr({
        src: "Audio/merak.mp3",
        volume: 0.4,
        autoplay: "autoplay",
      })
      .appendTo("body");
  });
  $(".sapi").css("background-color", "aqua");
  $(".sapi").click(function () {
    $(".sapi").css({
      background: "url(img/sapi.jpg) no-repeat center",
    });
    $("<audio></audio>")
      .attr({
        src: "Audio/sapi.mp3",
        volume: 0.4,
        autoplay: "autoplay",
      })
      .appendTo("body");
  });
  $(".kambing").css("background-color", "aqua");
  $(".kambing").click(function () {
    $(".kambing").css({
      background: "url(img/kambing.jpg) no-repeat center",
    });
    $("<audio></audio>")
      .attr({
        src: "Audio/kambing.mp3",
        volume: 0.4,
        autoplay: "autoplay",
      })
      .appendTo("body");
  });
  $(".itik").css("background-color", "aqua");
  $(".itik").click(function () {
    $(".itik").css({
      background: "url(img/itik.jpg) no-repeat center",
    });
    $("<audio></audio>")
      .attr({
        src: "Audio/bebek.mp3",
        volume: 0.4,
        autoplay: "autoplay",
      })
      .appendTo("body");
  });
  $(".kerbau").css("background-color", "aqua");
  $(".kerbau").click(function () {
    alert("");
    $(".kerbau").css({
      background: "url(img/kerbau.jpg) no-repeat center",
    });
    $("<audio></audio>")
      .attr({
        src: "Audio/kerbau.mp3",
        volume: 0.4,
        autoplay: "autoplay",
      })
      .appendTo("body");
  });
  $(".harimau").css("background-color", "red");
  $(".harimau").click(function () {
    $(".harimau").css({
      background: "url(img/Harimau.jpg) no-repeat center",
    });
    $("<audio></audio>")
      .attr({
        src: "Audio/macan.mp3",
        volume: 0.4,
        autoplay: "autoplay",
      })
      .appendTo("body");
  });
});
