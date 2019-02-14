function show(data){
    console.log(data);
}


function Person(age, oname){
    this.age = age;
    var name = oname;
    
    this.setName = function(cname){
        name = cname;
    }
    
    this.getName = function(){
        return name;
    }
}

Person.prototype.getData  = function(){
    show( 'Person( name = '+this.getName()+' , age = '+this.age+' )');
}

function Student(yearOfStuding, univercityName){
    this.yearOfStuding = yearOfStuding;
    this.univercityName = univercityName;
}

Student.prototype = new Person();

Student.prototype.getData  = function(){
    show( 'Student( name = '+this.getName()+', age = '+this.age
        +', yearOfStuding = '+this.yearOfStuding +', univercityName = '+ this.univercityName+' )');
}

var student = new Student(3,"Harvard");
student.setName("Edvard");
student.age = 22;
//student.getData();

var person = new Person(55, "John");
//person.getData();

var arrayOfPersons = [person, student];

arrayOfPersons.forEach(function(person){
    person.getData();
});
