$(document).ready(() => {
    let viewHeight = $(window).height();
    $('.navigation').css('width', viewHeight);

    $(window).resize(() => {
        let viewHeight = $(window).height();
        $('.navigation').css('width', viewHeight);
    })
})