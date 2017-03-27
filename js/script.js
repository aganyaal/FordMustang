$("document").ready(function () {
  $("div#video").delay(8000).fadeOut(1000);
  $("h1.texta").fadeIn(1000).delay(1000).fadeOut(1000);
  $("h1.textb").delay(2000).fadeIn(1000).fadeOut(1000);
  $("h1.textc").delay(4000).fadeIn(1000).fadeOut(1000);
  $("h1.textd").delay(6000).fadeIn(1000).fadeOut(2000);
  $("div#number2").delay(8000).fadeIn(2000);

  // centre the div on the screen
  $(function () {
    $(window).on('resize', function resize() {
      $(window).off('resize', resize);
      setTimeout(function () {
        var content = $('#content');
        var top = (window.innerHeight - content.height()) / 2;
        content.css('top', Math.max(0, top) + 'px');
        $(window).on('resize', resize);
      }, 50);
    }).resize();
  });
  // .

});
