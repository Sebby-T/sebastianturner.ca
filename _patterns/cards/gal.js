var $imgBtn = $('.img-btn');
var $close = $('.close');
var $btnPrev = $('.btn-prev');
var $btnNext = $('.btn-next');

$('.controls').css('display', 'block');

$imgBtn.on('click', function (e) {
  document.body.style.top = `-${window.scrollY}px`;
  $('.no-focus').attr('tabindex', function(index, attr) {
    return index = '-1';
  });
  var id = $(this).attr('href');
  e.preventDefault();
  $(id).css('display', 'block');
  $(id).css('opacity', '1');
  $(id).attr('data-open', true);
  $('body').addClass('no-scroll')
});

var closePanel = function (e) {
  var close = $(this).attr('href');
  $('.no-focus').attr('tabindex', function(index, attr) {
    return index = 0;
  });
  e.preventDefault();
  $('.overlay').css('display', 'none');
  $('.overlay').css('opacity', '0');
  $('.overlay').attr('data-open', false);
  $('body').removeClass('no-scroll');
  const scrollY = document.body.style.top;
  document.body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

$close.on('click', closePanel);

$(document).on('keydown', function(e) {
  if (e.key=='Escape') {
    closePanel(e);
  }
});

$btnPrev.on('click', function(e){
  var prev = $(this).parents('.gallery-item').prev();
  $(this).parents('.gallery-item').find('.close').click();
  if (!prev.length) {
    prev = $(this).parents('.gallery-item').siblings().last();
  }
  prev.find('.img-btn').click();
});

$btnNext.on('click', function(e){
  var next = $(this).parents('.gallery-item').next();
  $(this).parents('.gallery-item').find('.close').click();
  if (!next.length) {
    next = $(this).parents('.gallery-item').siblings().first();
  }
  next.find('.img-btn').click();
});

$(document).on('keydown', function(e) {
  if (e.key=='ArrowLeft') {
    var $panel = $('.overlay[data-open="true"]');
    $panel.find('.btn-prev').click();
  }
  if (e.key=='ArrowRight') {
    var $panel = $('.overlay[data-open="true"]');
    $panel.find('.btn-next').click();
  }
});
