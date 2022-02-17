$(function(){
    // menu
    $('#barcode a img').on('mouseover',function(){
        $(this).attr('src','../images/menu_over.png');
    }).on('mouseleave',function(){
        $(this).attr('src','../images/menu.png');
    })

    // my skills
    $('.list').on('mouseover',function(){
        $(this).addClass('on');
        $(this).find('.skillSub').fadeIn();
    }).on('mouseleave',function(){
        $(this).removeClass('on');
        $(this).find('.skillSub').fadeOut();
    })

    // strong
    $('.object').on('mouseover',function(){
        $(this).find('.blackBox').stop().fadeIn();
        $(this).find('.blackBox').stop().addClass('objectOn');
    }).on('mouseleave',function(){
        $(this).find('.blackBox').fadeOut();
        $(this).find('.blackBox').removeClass('objectOn');
    })

    //quick
    // 스크롤이 나타나기 
    $(window).scroll(function(){
        var sct = $(window).scrollTop();
        // var target = $('#portfolio').offset().top;
        if(sct>=100){
            $('.quickBox').fadeIn();
        }else{
            $('.quickBox').fadeOut();
        }
    })
    //top으로 가는 js
    $('.quick').click(function(){
        $('html,body').animate({scrollTop:'0'},700);
    })

})