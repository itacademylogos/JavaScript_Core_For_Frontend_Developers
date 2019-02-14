$(function () {
    $('button#show').click(function () {
        $('ul').show();
    });

    $('button#hide').click(function () {
        $('ul').hide();
    });

    $('button#toggle').click(function () {
        $('ul').toggle();
    });

    $('button#slideUp').click(function () {
        $('ul').slideUp();
    });

    $('button#slideDown').click(function () {
        $('ul').slideDown();
    });

    $('button#slideToggle').click(function () {
        $('ul').slideToggle(3000);
    });

    $('button#fadeIn').click(function () {
        $('#monkey').fadeIn('slow', function () {
            alert('Monkey is show');
        });
    });

    $('button#fadeOut').click(function () {
        $('#monkey').fadeOut(2000, function () {
            alert('Monkey is hidden');
        });
    });
    
      $('button#fadeTo').click(function () {
        $('#monkey').fadeTo(2000, 0.5);
    });

});