// Document ready function

$(function () {
    // Invoking tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Carousel interval 2s
    $('#mycarousel').carousel({
        Interval: 1000
    });

    // Carousel pause
    $('#carousel-pause').click(function () {
        $('#mycarousel').carousel('pause');
    });

    // Carousel resume
    $('#carousel-play').click(function () {
        $('#mycarousel').carousel('cycle');
    });
});