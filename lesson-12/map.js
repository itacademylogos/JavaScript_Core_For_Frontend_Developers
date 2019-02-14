
function show(data){
    console.log(data);
}

var map = new Map([
    ['apple',{name:'apple', weight:230}]
]);

var petro={name:'Petro'};

map.set(1, {name:'Number', weight: 1});
map.set(petro, {age:30});

var keySet = map.keys();
var values = map.values();
var entries = map.entries();

//1. keySet
for(var obj of keySet){
    show(obj);
}

show();

//2. values
for(var obj of values){
    show(obj);
}

//3. entries
for(var obj of entries){
    show(obj);
}

//4. get from map
show(map.get(petro));

//5.delete from map
map.delete(petro);
show();

for(var obj of map.entries()){
    show(obj);
}

//6. clear map
map.clear();

//7. get map size
show(map.size)

