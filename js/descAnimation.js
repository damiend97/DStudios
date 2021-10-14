$(document).ready(() => {
    $('#g2').click(() => {
        if($('#g2').hasClass('closed')) {
            $("#g2").html('<div class="text-wrapper">Hello my name is Jeremiah!<i class="fas fa-arrow-circle-left absolute-bl"></i></div>');
            $("#g2").toggleClass('closed');
        } else {
            $("#g2").html('<div class="text-wrapper"><span class="name">Jeremiah</span>&nbsp;<span class="position">CEO</span><i class="fas fa-arrow-circle-right absolute-br"></i></div>');
            $("#g2").toggleClass('closed');
        }
        anime({
            targets: '#g2',
            background: 'white'
        })
    })
    $('#g4').click(() => {
        if($('#g4').hasClass('closed')) {
            $("#g4").html('<div class="text-wrapper">Hello my name is Thomas!<i class="fas fa-arrow-circle-left absolute-bl"></i></div>');
            $("#g4").toggleClass('closed');
        } else {
            $("#g4").html('<div class="text-wrapper"><span class="name">Thomas</span>&nbsp;<span class="position">Human Resources</span><i class="fas fa-arrow-circle-right absolute-br"></i></div>');
            $("#g4").toggleClass('closed');
        }
    })
    $('#g5').click(() => {
        if($('#g5').hasClass('closed')) {
            $("#g5").html('<div class="text-wrapper">Hello my name is Alexis!<i class="fas fa-arrow-circle-left absolute-bl"></i></div>');
            $("#g5").toggleClass('closed');
        } else {
            $("#g5").html('<div class="text-wrapper"><span class="name">Alexis</span>&nbsp;<span class="position">Head of Hospitality</span><i class="fas fa-arrow-circle-right absolute-br"></i></div>');
            $("#g5").toggleClass('closed');
        }
    })
    $('#g7').click(() => {
        if($('#g7').hasClass('closed')) {
            $("#g7").html('<div class="text-wrapper">Hello my name is Ricky!<i class="fas fa-arrow-circle-left absolute-bl"></i></div>');
            $("#g7").toggleClass('closed');
        } else {
            $("#g7").html('<div class="text-wrapper"><span class="name">Ricky</span>&nbsp;<span class="position">Head of Accounting</span><i class="fas fa-arrow-circle-right absolute-br"></i></div>');
            $("#g7").toggleClass('closed');
        }
    })
    $('#g10').click(() => {
        if($('#g10').hasClass('closed')) {
            $("#g10").html('<div class="text-wrapper">Hello my name is Tabby!<i class="fas fa-arrow-circle-left absolute-bl"></i></div>');
            $("#g10").toggleClass('closed');
        } else {
            $("#g10").html('<div class="text-wrapper"><span class="name">Tabby</span>&nbsp;<span class="position">Front Desk</span><i class="fas fa-arrow-circle-right absolute-br"></i></div>');
            $("#g10").toggleClass('closed');
        }
    })
    $('#g12').click(() => {
        if($('#g12').hasClass('closed')) {
            $("#g12").html('<div class="text-wrapper">Hello my name is Sierra!<i class="fas fa-arrow-circle-left absolute-bl"></i></div>');
            $("#g12").toggleClass('closed');
        } else {
            $("#g12").html('<div class="text-wrapper"><span class="name">Sierra</span>&nbsp;<span class="position">Head of Marketing</span><i class="fas fa-arrow-circle-right absolute-br"></i></div>');
            $("#g12").toggleClass('closed');
        }
    })
})