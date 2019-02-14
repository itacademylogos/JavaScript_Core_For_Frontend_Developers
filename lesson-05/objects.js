function show(data){
    console.log(data);
}


var student = {
    firstName:'Petro',
    lastName:'Tesla',
    age:22,
    startDate: new Date(),
    'nick name': 'autoFun'
}

show(student)

show(student['nick name'])
show(student.firstName)

//1. delete property
function deleteProperty(property, obj){
    delete obj[property];
    show(obj);
}

deleteProperty('lastName', student);

//2. check property
function checkProperty(property, obj){
    show('Does property - '+property+' exist in student: '+(property in obj));
}

checkProperty('ages',student);
show(student.hasOwnProperty('nick name'));

//3. show values in student
for(var key in student){
    show(student[key]);
}

//show keys in studnet
for( key in student){
    show(key);
}

//4. check class of object
function checkClass(obj){
    debugger;
    show(Object.prototype.toString.call(obj).slice(8,-1));
}



checkClass(student);
checkClass('test');
checkClass(2);
checkClass(new Date());

//5. Serealization
var serealizedStudent = JSON.stringify(student);
show(serealizedStudent);
var deserealizedStudent = JSON.parse(serealizedStudent);
show(deserealizedStudent);

























