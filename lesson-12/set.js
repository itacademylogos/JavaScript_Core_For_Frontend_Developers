var petro = {name:'Petro'};
var vasyl = {name:'Vasyl'};
var oksana = {name:'Oksana'};

var set = new Set();

//1.add to collection
set.add(petro);
set.add(petro);
set.add(oksana);
set.add(oksana);
set.add(vasyl);
set.add(vasyl);

function show(data){
    console.log(data);
}

//2. iterate over collection
set.forEach(obj=>show(obj));
show();

//3. delete object from collection
set.delete(vasyl);
set.forEach(obj=>show(obj));
show();

//4. is object in collection
show(set.has(petro));

//5. check collection size
show(set.size);

var setKeys = set.keys();

for (var person of setKeys){
    show(person);
}

var setValues = set.values();

for (var person of setValues){
    show(person);
}

var entries = set.entries();

for (var person of entries){
    show(person);
}
 
set.clear()

show(set.size);




