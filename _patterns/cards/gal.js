var $imgBtn = $('.img-btn')

$imgBtn.on('click', function(e) {
  e.preventDefault();
  $('.gallery-item').css('display', 'none');
  $(this).css('display', 'block');
  if ($imgBtn.hasClass('overlay')) {
    $imgBtn.addClass('gallery-item');
    $imgBtn.removeClass('overlay');
    $('.gal-cont').addClass('embed');
    $('.gal-cont').addClass('embed-1by1');
    $('.gal-img').addClass('embed-item');
    $('.gallery-item').css('display', 'block');
    e.preventDefault();
  } else {
    $imgBtn.removeClass('gallery-item');
    $imgBtn.addClass('overlay');
    $('.gal-cont').removeClass('embed');
    $('.gal-cont').removeClass('embed-1by1');
    $('.gal-img').removeClass('embed-item');
  }
});
