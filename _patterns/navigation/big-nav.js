var $bigNav = $('#big-nav');
var $togBtn = $('.tog-btn');

$togBtn.on('click', function (e) {
  e.preventDefault();
  if ($bigNav.hasClass('open')) {
    $bigNav.removeClass('open');
    $('body').removeClass('no-scroll');
    const scrollY = document.body.style.top;
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  } else {
    document.body.style.top = `-${window.scrollY}px`;
    $bigNav.addClass('open');
    $('body').addClass('no-scroll')
  }
});
