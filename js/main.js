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
        auto: 1000,
        visible: Math.ceil(($('.gallery').width()-54)/95)



    });


});