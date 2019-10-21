$(window).scroll(parallax);

function parallax(e) {

  var wScroll = $(this).scrollTop();

  var introImage = ($('.intro__image').offset().top)*0.4;
  var introText = ($('.intro__text').offset().top)*0.5;
  var bulletHead = ($('.bullets__header').offset().top)*0.6;
  var bulletItems = ($('.bullets__item').offset().top)*0.65;
  var bulletButton = ($('.bullets__button').offset().top)*0.7;
  var quoteText = ($('.quote__text').offset().top)*0.7;
  var quoteImage = ($('.quote__image').offset().top)*0.8;
  var ctaText = ($('.cta__text').offset().top)*0.78;
  

  if(wScroll >  introImage) {
    $('.intro__image').addClass('showing');
  }
  if(wScroll >  introText) {
    $('.intro__text').addClass('showing');
  }
  if(wScroll >  bulletHead) {
    $('.bullets__header').addClass('showing');
  }
  if(wScroll >  bulletItems) {
    $('.bullets__item').addClass('showing');
  }
  if(wScroll >  bulletButton) {
    $('.bullets__button').addClass('showing');
  }
  if(wScroll >  quoteText) {
    $('.quote__text').addClass('showing');
  }
  if(wScroll >  quoteImage) {
    $('.quote__image').addClass('showing');
  }
  if(wScroll >  ctaText) {
    $('.cta__text').addClass('showing');
  }

}
$(document).ready(function(){
  $('select').on('change',function() {
    var x = this.selectedIndex;
    if( x != 0) {
      $(this).css("color", "#333333");
    }
  });
  $('.logo').addClass('showing');
  $('.hero__text').addClass('showing');

  $('.form-mobile .button').click(function() {
    $('.hero__form').addClass('open');
  });
  $("div[data-link='#form']").click(function(){
    $('.hero__form').addClass('open');
  });
	$('.form__close .close').click(function(e){
		e.stopPropagation();
		$('.hero__form').removeClass('open');
	});
});

function isMobile() {
return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (!isMobile()) {
  $("div[data-link]").click(function(){
    var scroller = $(this).attr("data-link");
    console.log('"'+scroller+'"');
    $('html, body').animate({
      'scrollTop':   $(scroller).offset().top
    }, 1000);
  });
  $("a[data-link]").click(function(){
    var scroller = $(this).attr("data-link");
    console.log('"'+scroller+'"');
    $('html, body').animate({
      'scrollTop':   $(scroller).offset().top
    }, 1000);
  });
  
};