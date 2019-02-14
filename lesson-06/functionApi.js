function show(data){
 console.log(data);   
}

//.length
show((function(a){}).length);
show((function(a, b, c){}).length);

//apply() call()

var person = {
    getFullName: function(){
        return this.firstName + ' '+this.lastName;
    }
}

var person1 = {
    firstName:'Petro',
    lastName: 'Ternas'
}

show(person.getFullName.apply(person1));
show(person.getFullName.call(person1));

//toString()
show(function (test){return test;});