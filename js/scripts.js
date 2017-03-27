

function openNav() {
  $("div#menu").hide();
  $("div#secondClass").hide();
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  $("div#secondClass").show();
  $("div#menu").show();
}

function escape() {
  $("div#firstClass").hide();
  $("div#secondClass").show();
  $("div#menu").show();
}

$(document).ready(function () {
  $("div#menu").hide().delay(20000).fadeIn(2000);
  $("div#secondClass").hide().delay(20000).fadeIn(2000);
  $("div#one").fadeIn(2000).fadeOut(3000);
  $("div#two").delay(5000).fadeIn(2000).fadeOut(3000);
  $("div#three").delay(10000).fadeIn(2000).fadeOut(3000);
  $("div#four").delay(15000).fadeIn(2000).fadeOut(3000);
  $("div#firstClass").delay(18000).fadeOut(1500);
  window.sr = ScrollReveal().reveal('.container1, .container2, .container3, .container4, .container5, .container6');
  $('#myTurntable').turntable();
  

});
