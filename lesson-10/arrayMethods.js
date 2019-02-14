function show(data){
    console.log(data);
}

var array = [7,4,2,11,3];

//1. foreach()

//array.forEach(show);
var sumOfArray = 0;
array.forEach(function(value){
    sumOfArray+=value;
});
//show(sumOfArray);

function multiplyEachArrayElement(value, index, array){
    array[index]=value*10;
}

array.forEach(multiplyEachArrayElement);
//array.forEach(show);

//2.map()
array.map(function(value){
    show(value);
});

show(array.map(function(value){
    return value+2;
}));


array.map(multiplyEachArrayElement);
array.forEach(show);

array = [7,4,2,11,2,3];
3//filter()
var evenNumber = array.filter(function(value){
    return value % 2 === 0;
});

evenNumber.forEach(show);

//4.some() every()
function isEven(value){
    return value % 2 ===0;
}

var every = array.every(isEven);
var some = array.some(isEven);

show('every = '+every);
show('some = '+some);

//5.reduce()
var sumOfArrayValues = array.reduce(function(a,b){
    return a+b;
},100);
show('array Sum = '+sumOfArrayValues);


//6. indexOf() lastIndexOf()

show('2  index is = '+ array.indexOf(2));
show('2 last indexOf is = '+array.lastIndexOf(2));



