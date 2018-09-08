$(document).ready(function () {
  $.ajax({
    url: 'https://api.instagram.com/v1/users/self/media/recent/?11393795.163594c.5d07d150cce04632823d439e2bc26a5a',
    dataType: 'jsonp',
    type: 'GET',
    data: {access_token: '11393795.163594c.5d07d150cce04632823d439e2bc26a5a', count: 18},
    success: function (data) {
      for (var x in data.data) {
        $('.margin').append('\
          <div class="s-12 m-6 l-4">\
            <div class="image-with-hover-overlay image-hover-zoom margin-bottom">\
              <a target="_blank" href="' + data.data[x].link +'">\
                <div class="image-hover-overlay background-primary">\
                  <div class="image-hover-overlay-content text-center padding-2x">\
                    <p>CLICK TO OPEN IN INSTAGRAM<br><br>QUOTE ASSOC. w/ PHOTO: - ' + data.data[x].caption.text + '</p>\
                  </div>\
                </div>\
                <img src="' + data.data[x].images.standard_resolution.url + '" alt="" title="Photography" />\
              </a>\
            </div>\
          </div>');
      }
      $(".section.loading.background-white").removeClass('loading');
    },
    error: function(err){
      throw err;
    }
  });
});