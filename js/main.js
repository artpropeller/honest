$(function () {
    $('.slider').jCarouselLite({
        vertical:true,
        visible:4,
        btnNext:'.next',
        btnPrev:'.prev',
        mouseWheel:true


    });

    $('.gallery').jCarouselLite({
        btnNext:'.next_but',
        btnPrev:'.prev_but',
        auto:1000,
        visible:Math.ceil(($('.gallery').width() - 54) / 95)



    });

    $('.consultation').click(function () {
        $(this).parent('#container').find('.consult_window').fadeIn(500);

    });

    $('.svernut').click(function () {
        $('.consult_window').fadeOut(100);
    });

    $('.close').click(function () {
        $('.consult_window').fadeOut(100);
    });

//    grayscale.prepare( $('.slider img') );
    grayscale($('.slider img'));

    $('.slider img').hover(function () {
        grayscale.reset($(this));
    }, function () {
        grayscale($(this));
    });


    resizeBlock();
    $(window).resize(function () {
        resizeBlock();
    });


});

function resizeBlock() {

    var max = 0;
    $('.left_part .inner, .right_part .inner').each(function () {
        if ($(this).height() > max) {
            max = $(this).height();
            console.log(max);
        }
    });
    $('.left_part .inner, .right_part .inner').each(function () {
        if ($(this).height() < max) {
            var r = max - $(this).height();
            $(this).css('height', max + 'px');
        }
        console.log(max);
    });

}