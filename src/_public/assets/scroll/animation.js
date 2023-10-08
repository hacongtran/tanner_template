$(function () {
  /*animation*/
  $('.fadetxt').each(function(){
      $(this).children().addBack().contents().each(function() {
        if (this.nodeType == 3) {
          $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
        }
      });
      $(this).on('inview',function(){
        $(this).css({'opacity':1});
          for (var i = 0; i <= $(this).children('span').length; i++) {
          $(this).children('span').eq(i).delay(100*i).animate({'opacity':1},1500);
        }
      });
    });
    $('.cover').on('inview',function(){
      $(this).addClass('show');
    });
    $('.cover_gray').on('inview',function(){
      $(this).addClass('show');
    });
    $('.cover_fast').on('inview',function(){
      $(this).addClass('show');
    });
    $('.fade_list').on('inview',function(){
      $('.fade_list li').each(function(i){
        $(this).delay((200 * i) + 500).queue(function(){$(this).addClass('show')});
      });
    });
    $('.fade').on('inview',function(){
      $(this).delay(400).queue(function(){$(this).addClass('show')});
    });
    $('.c-show--up').on('inview',function(){
      $(this).delay(900).queue(function(){$(this).addClass('show')});
    });
    $('.fade-up').on('inview',function(){
      $(this).addClass('show');
    });
    $('.fade-up2').on('inview',function(){
      $(this).delay(300).queue(function(){$(this).addClass('show')});
    });
    $('.fade-up3').on('inview',function(){
      $(this).delay(500).queue(function(){$(this).addClass('show')});
    });
    $('.fade-up4').on('inview',function(){
      $(this).delay(700).queue(function(){$(this).addClass('show')});
    });
    $('.fade-up5').on('inview',function(){
      $(this).delay(900).queue(function(){$(this).addClass('show')});
    });
    $('.fade-up6').on('inview',function(){
      $(this).delay(1200).queue(function(){$(this).addClass('show')});
    });
  });
  