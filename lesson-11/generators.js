
function show(data){
    console.log(data);
}

function* range(min, max){
    for(var i = min; i<=max; i++){
        yield i;
    }
}

var arrayOfData = [...range(5,47)];

show(arrayOfData);

