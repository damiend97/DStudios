$(document).ready(() => {
    const actualHeight = window.innerHeight;
    const elementHeight = document.getElementById('control-height').clientHeight;
    const barHeight = elementHeight - actualHeight;

    checkForMobile = (mobileMedia, y) => {
        if (mobileMedia.matches) {
            $([document.documentElement, document.body]).animate({
                scrollTop: y
            }, 0);
        }
    }

    var mobileMedia = window.matchMedia("(max-width: 450px)");
    checkForMobile(mobileMedia, barHeight);
    mobileMedia.addListener(checkForMobile);
    

    anime({
        targets: '.bounce-text',
        keyframes: [
            {translateY: -15},
            {translateY: 0}
        ],
        delay: anime.stagger(50),
        loop: true,
        easing: 'easeInQuint',
        duration: 350
    });

    anime({
        targets: '.get-started',
        keyframes: [
            {fontSize: '.70em'},
            {fontSize: '.75em'}
        ],
        loop: true,
        easing: 'easeInSine'
    })

    $('.get-started').click(() => {
        anime({
            targets: '.launch-middle',
            top: -1000,
            duration: 1000,
            easing: 'easeInSine'
        })
        anime({
            targets: '.launch-bottom',
            top: 1000,
            duration: 1000,
            easing: 'easeInSine'
        })

        setTimeout(() => {
            anime({
                targets: '#ls1',
                translateX: -2000,
                duration: 1000,
                easing: 'easeInSine'
            })
            anime({
                targets: '#ls2',
                translateX: 2000,
                duration: 1000,
                easing: 'easeInSine'
            })

            setTimeout(() => {
                $('.launch-container').remove();
                $('.pages').css('z-index', '0');
                $('.nav-toggler-container').fadeToggle(1000);
                $('.nav-toggler-container').css('display','flex');
                $('html, body').css('overflow', 'initial');
                $('html, body').css('overflow-x', 'hidden');

                anime({
                    targets: '.nav-toggler-container',
                    rotate: 360,
                    duration: 1000,
                    easing: 'easeOutBack',
                    endDelay: 500
                })
                anime({
                    targets: '.bar',
                    keyframes: [
                        { background: 'rgb( 30, 30, 30 )' },
                        { background: 'rgb( 150, 150, 150 )' },
                        { background: 'rgb( 30, 30, 30 )'}
                    ],
                    loop: 3,
                    duration: 1000,
                    delay: anime.stagger(200)
                })
            }, 1000)
        }, 1000)
    })
})