(function($){
  "use strict";

  // Slide Carousel
  $(document).ready(function() {
    $(".owl-carousel").each(function(index, el) {
      var config = $(this).data();
      config.navText = ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'];
      config.smartSpeed="800";
      
      if($(this).hasClass('owl-style2')){
        config.animateOut="fadeOut";
        config.animateIn="fadeIn";    
      }
      if($(this).hasClass('dotsData')){
        config.dotsData="true";
      }
      $(this).owlCarousel(config);
    });
  });

  // ===== Scroll to Top ==== 
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 200) {
      $('#return-to-top').addClass('td-scroll-up-visible');
    } else {
      $('#return-to-top').removeClass('td-scroll-up-visible');
    }
  });
  $('#return-to-top').click(function() {
    $('body,html').animate({
      scrollTop : 0
    }, 'slow');
  });

  /*  [ Sticky Menu ] */
  $('.fixed').sticky({ topSpacing: 0 });

  /*  [ Main Menu ]
  - - - - - - - - - - - - - - - - - - - - */
  $('.nav-toogle i').on( 'click', function() {
    $(this).toggleClass('has-open');
    $(this).parent().parent().toggleClass('has-open');
    $('body').toggleClass('menu-open');
  });

  /** Menu, Menu Mega Responsive **/
  $(document).ready(function(){
    $('.nav_menu li.parent').append('<span class="plus"></span>');
    $('.nav_menu li.parent .plus').click(function(){
      $(this).toggleClass('open').siblings('.nav_menu').slideToggle();
    });
  });

})(jQuery); // End of use strict