var $bigNav = $('#big-nav');
var $togBtn = $('.tog-btn');

$togBtn.on('click', function (e) {
  e.preventDefault();
  if ($bigNav.hasClass('open')) {
    $bigNav.removeClass('open');
    var html = jQuery('html');
    html.css('overflow', html.data('previous-overflow'));
    window.scrollTo(scrollPosition[0], scrollPosition[1])
  } else {
    $bigNav.addClass('open');
    var html = jQuery('html');
    html.data('previous-overflow', html.css('overflow'));
    html.css('overflow', 'hidden');
    window.scrollTo(scrollPosition[0], scrollPosition[1]);
  }
});
