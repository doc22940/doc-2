$(document).ready(function() {
    $('.js-timeline').Timeline();
    $('.timeline-1').Timeline({
        autoplay: false,
        mode: 'horizontal',
        itemClass: 'box-item',
      });
});