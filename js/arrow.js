$(document).ready(() => {
    var elTop = $('.page-body').offset().top;
    
    anime({
        targets: '.arrow-down',
        keyframes: [
            { translateY: 10 },
            { translateY: 0 }
        ],
        loop: true,
        duration: 1000,
        easing: 'easeInSine'
    })

    $('.arrow-down').on('click', function(event) {
        var target = $('.page-body');
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop(true, false).animate({
                scrollTop: elTop
            }, 1000);
        }
    });
})