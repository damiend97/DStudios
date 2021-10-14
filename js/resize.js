$(document).ready(() => {
    function getScrollbarWidth() {
        return window.innerWidth - document.documentElement.clientWidth;
    }

    $(window).resize(() => {
        let classList = document.getElementById('placeholder').className.split(/\s+/);
        for (let i = 0; i < classList.length; i++ ) {
            if (classList[i] === "1") {
                anime({
                    targets: '.pages',
                    translateX: 0,
                    duration: 0,
                    easing: 'easeOutSine'
                });
            } else if (classList[i] === "2") {
                anime({
                    targets: '.pages',
                    translateX: ((-$(window).width()) - getScrollbarWidth()),
                    duration: 0,
                    easing: 'easeOutSine'
                });
            } else if (classList[i] === "3") {
                anime({
                    targets: '.pages',
                    translateX: ((-$(window).width()) - getScrollbarWidth())*2,
                    duration: 0,
                    easing: 'easeOutSine'
                });
            } else {
                anime({
                    targets: '.pages',
                    translateX: ((-$(window).width()) - getScrollbarWidth())*3,
                    duration: 0,
                    easing: 'easeOutSine'
                });
            }
        }

        if ($(window).width() >= 550) {
            if (!$('.navigation').hasClass('hidden')) {
                anime({
                    targets: '.nav-toggler-container',
                    translateY: 0,
                    translateX: 80
                })
            }
        } else {
            if (!$('.navigation').hasClass('hidden')) {
                anime({
                    targets: '.nav-toggler-container',
                    translateX: 0,
                    translateY: 80
                })
            }
        }
    })
})