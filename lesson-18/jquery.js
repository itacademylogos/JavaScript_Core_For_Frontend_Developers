function rewriteDom() {
    $(document).ready(function () {
        document.write('Hello on lesson-18 jquery ');
    });
}

//click event
$(document).ready(function () {
    $('#myCustomDiv').click(function () {
        alert('You have clicked on custom element')
    });
});

//element inserting
setTimeout(function () {
    $('#langs').append('<li>C++</li>');
}, 2000);

//element inserting
setTimeout(function () {
    var listItem = document.createElement('li');
    listItem.innerHTML = 'JavaScript';
    $('#langs').append(listItem);
}, 3000);

//element inserting
setTimeout(function () {
    var listItem = $('<li>Visual Basic</li>');
    $('#langs').append(listItem);
}, 3500);


//element inserting
setTimeout(function () {
    var listItem = $('<li>Scala</li>');
    $('#langs').prepend(listItem);
}, 4000);

//element inserting
setTimeout(function () {
    $('<p> is one of the most popular languages</p>').appendTo('#java');
}, 4000);

//element inserting
setTimeout(function () {
    $('#langs').wrap('<div id="wrapper" style="color:red"></div>');
}, 2500);



////element inserting
//setTimeout(function () {
//    $('li:even').remove();
//}, 9000);
var item = $('li:first');
setTimeout(function () {
    item.detach();
}, 5000);

setTimeout(function () {
    $('#langs').append(item);
}, 9000);



setTimeout(function () {
    $('#langs').empty();
}, 11000);

