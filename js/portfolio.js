$(function(){
    $('#barcode a img').on('mouseover',function(){
        $(this).attr('src','../images/menu_over.png');
    }).on('mouseleave',function(){
        $(this).attr('src','../images/menu.png');
    })

    $('#kaz_logo').addClass('on');
    $('.kazInfo').stop().fadeIn();
    $('.kazImg').stop().fadeIn();
    $('.kazBtn1').stop().fadeIn();
    $('.kazBtn2').stop().fadeIn();
    
    $('#kaz_logo').on('click',function(){
        // logo
        $('.logo').removeClass('on');
        $(this).addClass('on');
        // info
        $('.pageInfo').stop().fadeOut();
        $('.kazInfo').stop().fadeIn();
        //img
        $('.webImg').stop().fadeOut();
        $('.kazImg').stop().fadeIn();
        //button
        $('.btn1').stop().fadeOut();
        $('.kazBtn1').stop().fadeIn();
        $('.btn2').stop().fadeOut();
        $('.kazBtn2').stop().fadeIn();
    })
    $('#yangwoo_logo').on('click',function(){
        // logo
        $('.logo').removeClass('on');
        $(this).addClass('on');
        // info
        $('.pageInfo').stop().fadeOut();
        $('.yangwooInfo').stop().fadeIn();
        //img
        $('.webImg').stop().fadeOut();
        $('.yangwooImg').stop().fadeIn();
        //button
        $('.btn1').stop().fadeOut();
        // $('.yangwooBtn1').stop().fadeIn();
        $('.btn2').stop().fadeOut();
        $('.yangwooBtn2').stop().fadeIn();
    })
    $('#bongousse_logo').on('click',function(){
        // logo
        $('.logo').removeClass('on');
        $(this).addClass('on');
        // info
        $('.pageInfo').stop().fadeOut();
        $('.bongousseInfo').stop().fadeIn();
        //img
        $('.webImg').stop().fadeOut();
        $('.bongousseImg').stop().fadeIn();
        //button
        $('.btn1').stop().fadeOut();
        // $('.bongousseBtn1').stop().fadeIn();
        $('.btn2').stop().fadeOut();
        $('.bongousseBtn2').stop().fadeIn();
    })
    $('#lookduck_logo').on('click',function(){
        // logo
        $('.logo').removeClass('on');
        $(this).addClass('on');
        // info
        $('.pageInfo').stop().fadeOut();
        $('.lookduckInfo').stop().fadeIn();
        //img
        $('.webImg').stop().fadeOut();
        $('.lookduckImg').stop().fadeIn();
        //button
        $('.btn1').stop().fadeOut();
        // $('.lookduckBtn1').stop().fadeIn();
        $('.btn2').stop().fadeOut();
        $('.lookduckBtn2').stop().fadeIn();
    })
})