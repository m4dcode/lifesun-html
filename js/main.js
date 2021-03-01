/**
* isMobile
*/
function isMobile() {
  var IS_IPAD = navigator.userAgent.match(/iPad/i) != null,
    IS_IPHONE = !IS_IPAD && ((navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null)),
    IS_IOS = IS_IPAD || IS_IPHONE,
    IS_ANDROID = !IS_IOS && navigator.userAgent.match(/android/i) != null,
    IS_MOBILE = IS_IOS || IS_ANDROID;
  return navigator.userAgent.match(/(iPhone|iPod|iPad|Android|webOS|BlackBerry|IEMobile|Opera Mini)/i);
}

/**
* Rellax
*/
var rellax = null;
var rellaxHorizontal = null;
function parallax(className) {
  if(document.getElementsByClassName(className).length <= 0)
    return;
  
  windowWidth = window.innerWidth;
  if( !rellax && !isMobile() )
    rellax = new Rellax('.'+className);
  if( rellax && (isMobile() || windowWidth < 992) )
    rellax.destroy();
  if( rellax && !isMobile() && windowWidth >= 992 )
    rellax.refresh();
}
function parallaxHorizontal(className) {
  if(document.getElementsByClassName(className).length <= 0)
    return;
  
  windowWidth = window.innerWidth;
  if( !rellaxHorizontal && !isMobile() )
  rellaxHorizontal = new Rellax('.'+className,{
    vertical: false,
    horizontal: true
  });
  if( rellaxHorizontal && (isMobile() || windowWidth < 992) )
  rellaxHorizontal.destroy();
  if( rellaxHorizontal && !isMobile() && windowWidth >= 992 )
  rellaxHorizontal.refresh();
}

$(document).ready(function(){
  rellax = new Rellax('.rellax');
})

/**
 * Header: Scroll
 */
$(window).on('scroll', function(){
  if( window.pageYOffset > 50 ){
    $('#nav-1').addClass('navbar-scroll')
  }
  else {
    $('#nav-1').removeClass('navbar-scroll')
  }
})



/**
 * ScrollTo
 */
$('.scrollto').click(function(){
  var scrollto = $(this).attr('href'); console.log('href', scrollto, $(this));
  $('html, body').animate({
    scrollTop: parseInt($(scrollto).offset().top) - 70
  }, 1000);
  return false;
});



/**
 * Swiper
 */
var swipers = [];
$('.swiper-container').each(function(index){
  if( $(this).hasClass('swiper-one') ){
    $(this).attr('data-index', index);
    $(this).parent().find('.swiper-button-next').addClass('swiper-button-next-' + index);
    $(this).parent().find('.swiper-button-prev').addClass('swiper-button-prev-' + index);

    var swiper = new Swiper(this, {
      initialSlide: 0,
      slidesPerView: 'auto',
      loop: true,
      speed: 1500,
      spaceBetween: 0,
      navigation: {
        nextEl: '.swiper-button-next-' + index,
        prevEl: '.swiper-button-prev-' + index,
      }
    });
  }
  if( $(this).hasClass('swiper-one') ){
    $(this).attr('data-index', index);
    $(this).parent().find('.swiper-button-next').addClass('swiper-button-next-' + index);
    $(this).parent().find('.swiper-button-prev').addClass('swiper-button-prev-' + index);

    var swiper = new Swiper(this, {
      initialSlide: 0,
      slidesPerView: 'auto',
      loop: true,
      speed: 1500,
      spaceBetween: 0,
      navigation: {
        nextEl: '.swiper-button-next-' + index,
        prevEl: '.swiper-button-prev-' + index,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        }
      }
    });
  }
  if( $(this).hasClass('swiper-shoppings') ){
    $(this).attr('data-index', index);
    $(this).parent().find('.swiper-button-next').addClass('swiper-button-next-' + index);
    $(this).parent().find('.swiper-button-prev').addClass('swiper-button-prev-' + index);

    var swiper = new Swiper(this, {
      initialSlide: 0,
      slidesPerView: 'auto',
      loop: true,
      speed: 1500,
      spaceBetween: 0,
      navigation: {
        nextEl: '.swiper-button-next-' + index,
        prevEl: '.swiper-button-prev-' + index,
      },
    });
  }
  swipers[index] = swiper;
})

$(window).on('resize', function(){
  for( let i in swipers ){
    swipers[i].update()
  }
})