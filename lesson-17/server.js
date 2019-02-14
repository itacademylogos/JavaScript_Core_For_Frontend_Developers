var express = require("express");
var bodyParser = require("body-parser");

var server = express();
var jsonParser = bodyParser.json();

server.use(express.static(__dirname));
server.use(jsonParser);


server.get("/", function (request, response) {
    console.log('lesson-16 server is started !');
    response.send("<h1>Welcome to lesson-16 regarding AJAX</h1>");
});

server.get('/userGet', function (request, response) {
    console.log(request.query);

    var obj = request.query;
    obj.userName = 'Petro -> Get';
    obj.userAge = 100;

    response.send('You have successfully used Get method :' + JSON.stringify(request.query));
});

server.post('/userPost', function (request, response) {
    console.log(request.body);

    var obj = request.query;
    obj.userName = 'Andrew ->Post';
    obj.userAge = 200;
    response.send('You have successfully used Post method :' + JSON.stringify(obj));


    //    //to simulate error on server
    //  response.status(500);
    //  response.render('error', { error: 'Big error' })
});

server.listen(3001);