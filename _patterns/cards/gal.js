var $imgBtn = $('.img-btn');
var $close = $('.close');
var $btnPrev = $('#btn-prev');
var $btnNext = $('#btn-next');

$imgBtn.on('click', function (e) {
  document.body.style.top = `-${window.scrollY}px`;
  var id = $(this).attr('href');
  e.preventDefault();
  $(id).css('display', 'block');
  $(id).css('opacity', '1');
  $('body').addClass('no-scroll')
});

$close.on('click', function (e) {
  var close = $(this).attr('href');
  e.preventDefault();
  $('.overlay').css('display', 'none');
  $('.overlay').css('opacity', '0');
  $('body').removeClass('no-scroll');
  const scrollY = document.body.style.top;
  document.body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
});

$(document).on('keydown', function(e) {
  if(e.key=='Escape') {
    $close.click()
  }
});
