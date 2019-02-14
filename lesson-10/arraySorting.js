function show(data){
    console.log(data);
}


var array = [];

array.push({
    name:'Ivan',
    age:22
});

array.push({
    name:'John',
    age:13
});

array.push({
    name:'Zorro',
    age:3
});

array.push({
    name:'Alla',
    age:65
});

function sortByName(obj1, obj2){
    var obj1Name = obj1.name.toLowerCase();
    var obj2Name = obj2.name.toLowerCase();
    
    if(obj1Name>obj2Name){
        return 1;
    }else if(obj1Name<obj2Name){
        return -1;
    }
    return 0;
}

function sortByAge(obj1, obj2){
    return obj1.age - obj2.age;
}


array.forEach(show);
show('\n');

//sorting objects by field age
array.sort(sortByAge);
array.forEach(show);
show('\n');

//sorting objects by field name
array.sort(sortByName);
array.forEach(show);
show('\n');

