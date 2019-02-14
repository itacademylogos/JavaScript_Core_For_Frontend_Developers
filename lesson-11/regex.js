function show(data){
    console.log(data)
}

var regexPattern = new RegExp('Java','gi');
var text = 'What is java in the modern world? Java is one of the collest languages in the world, but nowadays JavaScript is the most popular language in the world';

var result = null;

while((result = regexPattern.exec(text)) != null ){
            show(result[0] + ' on the index = '+result.index);
}

show(regexPattern.test(text));