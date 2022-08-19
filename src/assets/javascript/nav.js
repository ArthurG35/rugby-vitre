$(window).on("load resize ", function () {
  var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
  $('.tbl-header').css({'padding-right': scrollWidth});
}).resize();

if (!window._rsz) {
  window._rsz = function () {
    var i = iFrameResize({
      checkOrigin: false,
      interval: 100
    });
  };
  if (document.readyState != "loading") {
    _rsz()
  } else {
    document.addEventListener("DOMContentLoaded", _rsz)
  }
}

window.addEventListener("scroll", function () {
  var header = document.querySelector("nav");
  header.classList.toggle("Scrolled", window.scrollY > 0);
})



/*if(document.URL == (window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + "/")){
  var element = document.getElementById("id-header");
  element.classList.add("mystyle");
}*/

