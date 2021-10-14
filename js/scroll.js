$(document).ready(function() {
    function getScrollbarWidth() {
        return window.innerWidth - document.documentElement.clientWidth;
    }
      
    $('.link').click((e) => {
        e.preventDefault();
    });

    closeNav = () => {
        if($(window).width() < 550) {
            anime({
                targets: '.navigation',
                top: '-100vh',
                duration: 250,
                easing: 'easeInSine'
            })
            anime({
                targets: '.nav-toggler-container',
                translateY: 0
            })
            anime({
                targets: '#b1',
                height: '10px',
                borderRadius: '50%',
                rotate: 0,
                easing: 'easeOutSine',
                duration: 250
            })
            anime({
                targets: '#b2',
                opacity: 1,
                easing: 'easeOutSine',
                duration: 250
            })
            anime({
                targets: '#b3',
                height: '10px',
                borderRadius: '50%',
                rotate: 0,
                translateY: 0,
                translateX: 0,
                easing: 'easeOutSine',
                duration: 250
            })
            $('.navigation').toggleClass('hidden');
            $('.nav-toggler-container').css('background','rgb(220, 220, 220)');
        } else {
            anime({
                targets: '.navigation',
                top: '-100vh',
                duration: 250,
                easing: 'easeInSine'
            })
            anime({
                targets: '.nav-toggler-container',
                translateX: 0
            })
            anime({
                targets: '#b1',
                height: '10px',
                borderRadius: '50%',
                rotate: 0,
                easing: 'easeOutSine',
                duration: 250
            })
            anime({
                targets: '#b2',
                opacity: 1,
                easing: 'easeOutSine',
                duration: 250
            })
            anime({
                targets: '#b3',
                height: '10px',
                borderRadius: '50%',
                rotate: 0,
                translateY: 0,
                translateX: 0,
                easing: 'easeOutSine',
                duration: 250
            })
            $('.navigation').toggleClass('hidden');
            $('.nav-toggler-container').css('background','rgb(220, 220, 220)');
        }
    }

    // Link
    $('.link').click(() => {
        closeNav();
    })

    // Who link
    $('#p1-link').click(() => {
        // Scroll page back to top
        $('html, body').stop().animate({
            scrollTop: 0
        },0)
        // Slide to page
        anime({
            targets: '.pages',
            translateX: 0,
            duration: 500,
            easing: 'easeOutBack'
        });
        $("#placeholder").removeClass();
        $("#placeholder").addClass("1");
    });

    // What link
    $('#p2-link').click(() => {
        // Scroll page back to top
        $('html, body').stop().animate({
            scrollTop: 0
        },0)
        // Slide to page
        anime({
            targets: '.pages',
            translateX: ((-$(window).width()) - getScrollbarWidth()),
            duration: 500,
            easing: 'easeOutBack'
        });
        $("#placeholder").removeClass();
        $("#placeholder").addClass("2");
    });
    
    // When link
    $('#p3-link').click(() => {
        // Scroll page back to top
        $('html, body').stop().animate({
            scrollTop: 0
        },0)
        // Slide to page
        anime({
            targets: '.pages',
            translateX: ((-$(window).width()) - getScrollbarWidth())*2,
            duration: 500,
            easing: 'easeOutBack'
        });
        $("#placeholder").removeClass();
        $("#placeholder").addClass("3");
    });

    // How link
    $('#p4-link').click(() => {
        // Scroll page back to top
        $('html, body').stop().animate({
            scrollTop: 0
        },0)
        // Slide to page
        anime({
            targets: '.pages',
            translateX: ((-$(window).width()) - getScrollbarWidth())*3,
            duration: 500,
            easing: 'easeOutBack'
        });
        $("#placeholder").removeClass();
        $("#placeholder").addClass("4");
    });
});