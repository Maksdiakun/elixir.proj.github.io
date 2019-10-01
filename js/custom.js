 
 function checkWidth(){
  var left_mar = ($(window).width() - $('.container').width()) / 2;
  $('.reasons').css('padding-left', left_mar);
  // var left_centr = - (($(window).width() / 2 ) - $('.center_content').width()) / 2;
  // $('.center_content').css('left', left_centr);
 }
$(document).ready(function(){
  checkWidth();

    $('.slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 767.9,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 575.9,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      });

      $('.languages span').click(function(){
        $('.languages ul').toggleClass('show_lang');
      });
      // menu
      $('.menu_btn').click(function(){
        $('.menu').addClass('mobile_menu');
      });
      $('.close_icon').click(function(){
        $('.menu').removeClass('mobile_menu');
      });

      
      $('.search_block').click(function(){
        $('header form').addClass('active_search');
      });

      
      $(document).click(function() {
        $('header form').removeClass('active_search');
    });

    $(".search_block").click(function(e) {
      e.stopPropagation(); // This is the preferred method.
      return true;        // This should not be used unless you do not want
                           // any click events registering inside the div
  });

});

$(document).ready(function(){
  $(".arrow_down").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1000);
  });
});

$(window).resize(function(){
  checkWidth();
});


