$(document).ready(function () {
    var contentPlacement = $('.top').position().top + $('.top').height();
    $('.hero').css('margin-top', contentPlacement);
});
