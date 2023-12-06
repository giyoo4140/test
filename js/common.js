$(document).ready(function(){


    //popup
    $('.popup_close').click(function(){
        $('.popup').slideUp();
    });

    //depth2
    $('.depth2,.depth2_bg').hide();
    $('.gnb > li').mouseenter(function(){
        $(this).find('.depth2').stop().fadeIn();
        $('.depth2_bg').stop().fadeIn();
    });

    $('.gnb > li').mouseleave(function(){
        $(this).find('.depth2').stop().fadeOut();
        $('.depth2_bg').stop().fadeOut();
    });

    //mgnb
    $('.mdepth2').hide();
    $('.mgnb > li').click(function(){
        $(this).find('.mdepth2').stop().slideDown();
        $(this).siblings().find('.mdepth2').stop().slideUp();
        return false;   //a 태그 링크 안되게 처리
    });

    

    //mobile menu
    $('.mgnb_wrap').hide();

    $('.btn_ham').click(function(){
    $('.mgnb_wrap').stop().fadeIn();
    });

    $('.mgnb_close').click(function(){
        $('.mgnb_wrap').stop().fadeOut();
    });

    //sitemap 
    $('.sitemap').hide();

    $('.btn_sitemap').click(function(){
       $('.sitemap').fadeIn();
    });

    $('.sitemap_close').click(function(){
        $('.sitemap').fadeOut();
     });


     //lang
     $('.lang ul').hide();
     $('.lang').click(function(){
        $('.lang ul').slideToggle();
     });








}); //종료 태그