$(document).ready(function () {


    $('button#getMethod').click(function () {
        $.get('/userGet?userName=Vitalii & userAge= 25', function (data) {
            $('#someServerData').html(data);
            console.log('Data is loaded by Get');
        });
    });
    
    $('button#postMethod').click(function () {
        $.post('/userPost', {
            userName: 'Petro',
            userAge: 33
        }, function (data) {
            $('#someServerData').html(data);
            console.log('Data is loaded by Post');
        });

    });
});