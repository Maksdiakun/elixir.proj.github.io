 
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
        $('.languages ul').slideToggle(300);
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


$(document).ready(function(){
  $(".anchors > a").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top - 200;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1000);
  });
});

$(window).resize(function(){
  checkWidth();
});


if ($('.anchors').length > 0) {
  $(function () {
      $(document).scroll(function () {
          if ($(this).scrollTop() >= $('#basic').offset().top - 201) {
              $(".anchors a ").removeClass('activeclass');
              $(".anchors a:nth-child(1)").addClass('activeclass');
          }
          if ($(this).scrollTop() >= $('#premium').offset().top - 201) {
              $(".anchors a ").removeClass('activeclass');
              $(".anchors a:nth-child(2)").addClass('activeclass');
          }
          if ($(this).scrollTop() >= $('#microGran').offset().top - 201) {
              $(".anchors a ").removeClass('activeclass');
              $(".anchors a:nth-child(3)").addClass('activeclass');
          }
          if ($(this).scrollTop() >= $('#supreme').offset().top - 201) {
            $(".anchors a ").removeClass('activeclass');
            $(".anchors a:nth-child(4)").addClass('activeclass');
        }
        if ($(this).scrollTop() >= $('#superGarden').offset().top - 401) {
          $(".anchors a ").removeClass('activeclass');
          $(".anchors a:nth-child(5)").addClass('activeclass');
      }
      });
  });
}
if ($(window).width() < 1025 && $(window).height() > 1225){
  if ($('.anchors').length > 0) {
    $(function () {
        $(document).scroll(function () {
            if ($(this).scrollTop() >= $('#basic').offset().top - 201) {
                $(".anchors a ").removeClass('activeclass');
                $(".anchors a:nth-child(1)").addClass('activeclass');
            }
            if ($(this).scrollTop() >= $('#premium').offset().top - 201) {
                $(".anchors a ").removeClass('activeclass');
                $(".anchors a:nth-child(2)").addClass('activeclass');
            }
            if ($(this).scrollTop() >= $('#microGran').offset().top - 201) {
                $(".anchors a ").removeClass('activeclass');
                $(".anchors a:nth-child(3)").addClass('activeclass');
            }
            if ($(this).scrollTop() >= $('#supreme').offset().top - 300) {
              $(".anchors a ").removeClass('activeclass');
              $(".anchors a:nth-child(4)").addClass('activeclass');
          }
          if ($(this).scrollTop() >= $('#superGarden').offset().top - 500) {
            $(".anchors a ").removeClass('activeclass');
            $(".anchors a:nth-child(5)").addClass('activeclass');
        }
        });
    });
  }
}




 let  stick = function(link,range){
var a = document.querySelector(link), b = null, P = range;  // если ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента. Может быть отрицательным числом
window.addEventListener('scroll', Ascroll, false);
document.body.addEventListener('scroll', Ascroll, false);
function Ascroll() {
  if (b == null) {
    var Sa = getComputedStyle(a, ''), s = '';
    for (var i = 0; i < Sa.length; i++) {
      if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
        s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
      }
    }
    b = document.createElement('div');
    b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
    a.insertBefore(b, a.firstChild);
    var l = a.childNodes.length;
    for (var i = 1; i < l; i++) {
      b.appendChild(a.childNodes[1]);
    }
    a.style.height = b.getBoundingClientRect().height + 'px';
    a.style.padding = '0';
    a.style.border = '0';
  }
  var Ra = a.getBoundingClientRect(),
      R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('footer').getBoundingClientRect().top + 30);  // селектор блока, при достижении верхнего края которого нужно открепить прилипающий элемент;  Math.round() только для IE; если ноль заменить на число, то блок будет прилипать до того, как нижний край элемента дойдёт до футера
  if ((Ra.top - P) <= 0) {
    if ((Ra.top - P) <= R) {
      b.className = 'stop';
      b.style.top = - R +'px';
    } else {
      b.className = 'sticky';
      b.style.top = P + 'px';
    }
  } else {
    b.className = '';
    b.style.top = '';
  }
  window.addEventListener('resize', function() {
    a.children[0].style.width = getComputedStyle(a, '').width
  }, false);
}
};
$(document).ready(function(){
if($(window).width() > 991.9){
  stick('.prod_text', 130);
} 
if($(window).width() > 575.9){
  stick('.center_image', 170 );
  stick('.logo_center', 81 );
};
});





var zoom1 
var center
var mark
function changeMap(){
  let  regionStatus = $('#no')[0].checked;
  console.log(regionStatus)
  if(regionStatus){
    $('.contact_block:not(.main_office)').slideDown();

     zoom1 =  5;
     center = {lat: 50.448129, lng: 30.521447};
     mark =[{lat: 46.438209, lng: 30.758078} , {lat: 50.248129, lng: 30.12447},{lat: 50.328129, lng: 30.121447},{lat: 50.848129, lng: 30.521447}];
  }
  else{
    $('.contact_block:not(.main_office)').slideUp();
     zoom1 = 15
     center = {lat: 46.438209, lng: 30.758078};
     mark =  [center]
  }
  initMap(zoom1 ,center , mark)
}
$(document).ready(changeMap);
$('.switch').change(changeMap);
var map;
function initMap(zoom ,center , mark) {
  map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: zoom
  });
  mark.forEach(function(e){
    var marker = new google.maps.Marker({
      position: e  ,
      map: map,
      title: '',
       icon:{
         url: '../image/map_mark.svg',
         scaledSize:new google.maps.Size(35, 45),
       }
    });
  });

}


// $(window).resize(function(){
//   if($(window).width() > 575.9){
//     stick('.center_image', 170 );
//     stick('.logo_center', 81 );
//   };
// });
