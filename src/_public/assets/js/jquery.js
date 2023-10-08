$( document ).ready(function() {
      $(".c-slider1").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 7000,
          arrows: true,
          dots: false,
          speed: 600,
          fade: true,
          infinite: true,
          cssEase: 'cubic-bezier(0.23, 1, 0.32, 1)',
          prevArrow: '.c-hslider__prev',
          nextArrow: '.c-hslider__next', 
          asNavFor: '.c-slider1__numbers'
      });
      $(".c-slider1__numbers").slick({
          slidesToShow: 3,
          autoplay: true,
          autoplaySpeed: 7000,
          arrows: true,
          infinite: true,
          vertical: true,
          dots: true,
          speed: 600,
          infinite: true,
          cssEase: 'cubic-bezier(0.23, 1, 0.32, 1)',
          prevArrow: '.c-hslider__prev',
          nextArrow: '.c-hslider__next',
          asNavFor: '.c-slider1'
      });

      $('.slick-dots li button').each(function(index){
        var prefix = (index + 1 < 10) ? '0' : '';
        $(this).text(prefix + (index + 1));
      });

 

});