var $imgBtn = $('.img-btn');
var $close = $('.close');

$imgBtn.on('click', function (e) {
  var id = $(this).attr('href');
  e.preventDefault();
  $(id).css('display', 'block');
  $(id).css('opacity', '1');
  $('.img-expand').css('display', 'block');
  $('.img-expand').css('opacity', '1');
  $close.css('display', 'block');
  $('body').addClass('no-scroll')
});

$close.on('click', function (e) {
  var close = $(this).attr('href');
  e.preventDefault();
  $('.overlay').css('display', 'none');
  $('.overlay').css('opacity', '0');
  $('.img-expand').css('display', 'none');
  $('.img-expand').css('opacity', '0');
  $close.css('display', 'none');
  $('body').removeClass('no-scroll')
});

$(document).on('keydown', function(e) {
  if(e.key=='Escape'){
    $close.click()
  }
});
