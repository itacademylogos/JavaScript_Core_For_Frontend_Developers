function show(data){
    console.log(data)
}

//1. create Strings
var string1 = 'Hello world';
var string2 = new String('Hello world wide');

show(string1);
show(string2.toString());


//2. String patterns
function showGreetByPattern(nameOfPerson){
    var string3 = `Hello Mr. ${nameOfPerson}`;
    show(string3)
}

showGreetByPattern('Petro');

//3. String Api

show(string2.charAt(0));
show(string2.charCodeAt(0));
show(string2.concat(' From USA'));
show(string2.includes('world'));
show(string2.indexOf('o'));
show(string2.lastIndexOf('o'));
show(string2.startsWith('Hell'));
show(string2.endsWith('wide'));
show(string2.repeat(3));
show(string2.replace('Hello', 'Bye'));
show(string2.slice(3,8));
show(string2.split(' '));
show(string2.substr(2));
show(string2.substring(3,8));
show(string2.toLowerCase());
show(string2.toUpperCase());
string2 = '           '.concat(string2);
show(string2);
show(string2.trim());



