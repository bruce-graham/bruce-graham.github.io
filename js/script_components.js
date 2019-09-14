var dateObject = new Date();
var year = dateObject.getYear() + 1900;

$(document).ready(function() {
  $('.position-absolute').html('\
    <nav class="background-transparent background-transparent-hightlight full-width sticky">\
      <div class="s-12 l-2">\
        <a href="index.html" class="logo">\
          <img class="logo-white" src="img/LogoWhite.png" alt="">\
          <img class="logo-dark" src="img/LogoDark.png" alt="">\
        </a>\
      </div>\
      <div class="top-nav s-12 l-10">\
        <p class="nav-text"></p>\
        <ul class="right chevron">\
          <li><a href="about.html">About</a></li>\
          <li><a href="portfolio.html">Portfolio</a></li>\
          <li><a href="resume.html">Resume</a></li>\
          <li><a href="gallery.html">Gallery</a></li>\
          <li><a href="contact.html">Contact</a></li>\
        </ul>\
      </div>\
    </nav>\
  ');

  $('.footer-dynamic').html('\
    <section class="padding background-dark full-width">\
      <div class="s-12 l-6">\
        <p class="text-size-12">Copyright © ' + year + ', Bruce Graham</p>\
      </div>\
      <div class="s-12 l-6"></div>\
    </section>\
  ');
});
