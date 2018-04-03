$('.single-slide').slick({
  dots: true,
  arrows: false,
  autoplay:false,
  infinite: true,
  speed: 200,
  fade: false,
  customPaging : function(slider, i) {
    var thumb = $(slider.$slides[i]).data();
    return '<a>'+ ('0'+(i+1))+'</a>';
            },
});

$(window).scroll(function(){
    if ($(window).scrollTop() > 100) {
        $('.headmenu').addClass('scroll');
    }
    else {
        $('.headmenu').removeClass('scroll')
    }
});

