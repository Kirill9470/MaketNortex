$('.single-slide').slick({
  dots: true,
  arrows: false,
  autoplay:true,
  infinite: true,
  speed: 1000,
  fade: true,
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

$(document).ready(function() {
  $('.burger').click(function() { // нажимаем на класс .burger 
    $('.burger').removeClass('active');// удаляем у класса .burger класс active
    if ($(this).next('.over').css("display") == "none") { // если следующий класс после .burger имеет display = none
      $('.over').hide('slow');// cкрываем .over
      $(this).next('.over').toggle('normal');
      $('.burger').removeClass('active');// удаляем класс
      $(this).toggleClass('active');//добавляем класс .active
    } else $('.over').hide('normal');
    return false;
  });
});
window.onload = function() {
  Particles.init({
    selector: '.background',
	color: '#ffffff',
	sizeVariations:1,
	connectParticles:true,
	maxParticles:25
  });
};


