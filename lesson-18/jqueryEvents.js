function testClick() {
    $(function () {
        $('button').bind('click', function () {
            $(this).wrap('<div id="wrapper" style="background-color:red"></div>');
        })
    });
}

$(function(){
    $('button').first().click(function(){
        $(this).css('background-color','green');
    });
    
    $('button').last().click(function(){
        $('button').first().css('background-color','yellow')
    });
});