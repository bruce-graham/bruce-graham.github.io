var token = '11393795.163594c.5d07d150cce04632823d439e2bc26a5a',
    userid = 11393795,
    num_photos = 18;

$.ajax({
  url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', // or /users/self/media/recent for Sandbox
  dataType: 'jsonp',
  type: 'GET',
  data: {access_token: token, count: num_photos},
  success: function (data) {
    for(var x in data.data) {
      $('.margin').append('<div class="s-12 m-6 l-4"><div class="image-with-hover-overlay image-hover-zoom margin-bottom"><a target="_blank" href="' + data.data[x].link +'"><div class="image-hover-overlay background-primary"><div class="image-hover-overlay-content text-center padding-2x"><p>Quote: ' + data.data[x].caption.text + '</p></div></div><img src="' + data.data[x].images.standard_resolution.url + '" alt="" title="Photography" /></div></a></div>');
      // data.data[x].images.low_resolution.url - URL of image, 306х306
      // data.data[x].images.thumbnail.url - URL of image 150х150
      // data.data[x].images.standard_resolution.url - URL of image 612х612
      // data.data[x].link - Instagram post URL
    }
    $(".section.loading.background-white").removeClass('loading');
  },
  error: function(data){
    console.log(data);
  }
});

