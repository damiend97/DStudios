$(document).ready(() => {
    $('.nav-toggler-container').click(() => {
        if($(window).width() < 550) {
            if ($('.navigation').hasClass('hidden')) {
                anime({
                    targets: '.navigation',
                    top: 0,
                    duration: 250,
                    easing: 'easeInSine'
                })
                anime({
                    targets: '.nav-toggler-container',
                    translateY: 80
                })
                anime({
                    targets: '#b1',
                    height: '40px',
                    borderRadius: '5px',
                    rotate: 45,
                    easing: 'easeOutSine',
                    duration: 250
                })
                anime({
                    targets: '#b2',
                    opacity: 0,
                    easing: 'easeOutSine',
                    duration: 250
                })
                anime({
                    targets: '#b3',
                    height: '40px',
                    borderRadius: '5px',
                    rotate: -45,
                    translateY: -35,
                    translateX: 35,
                    easing: 'easeOutSine',
                    duration: 250
                })
                $('.navigation').toggleClass('hidden');
                $('.nav-toggler-container').css('background','rgb(200, 200, 200)');
            } else {
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
            }
        } else {
            if ($('.navigation').hasClass('hidden')) {
                anime({
                    targets: '.navigation',
                    top: 0,
                    duration: 250,
                    easing: 'easeInSine'
                })
                anime({
                    targets: '.nav-toggler-container',
                    translateX: 80
                })
                anime({
                    targets: '#b1',
                    height: '40px',
                    borderRadius: '5px',
                    rotate: 45,
                    easing: 'easeOutSine',
                    duration: 250
                })
                anime({
                    targets: '#b2',
                    opacity: 0,
                    easing: 'easeOutSine',
                    duration: 250
                })
                anime({
                    targets: '#b3',
                    height: '40px',
                    borderRadius: '5px',
                    rotate: -45,
                    translateY: -35,
                    translateX: 35,
                    easing: 'easeOutSine',
                    duration: 250
                })
                $('.navigation').toggleClass('hidden');
                $('.nav-toggler-container').css('background','rgb(200, 200, 200)');
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
    })
})