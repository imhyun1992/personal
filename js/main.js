$(function(){
    $('#barcode a img').on('mouseover',function(){
        $(this).attr('src','images/menu_over.png');
    }).on('mouseleave',function(){
        $(this).attr('src','images/menu.png');
    })
})