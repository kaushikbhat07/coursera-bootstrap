// Document ready function

$(function () {
    // Invoking tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Carousel interval 2s
    $('#mycarousel').carousel({
        interval: 1000
    });

    // Carousel pause/resume
    $('#carouselButton').click(function () {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        } else  {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
});