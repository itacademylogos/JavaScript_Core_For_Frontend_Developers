var arrayOfData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var arrayOfObjects = [
    {
        name: 'Andrew',
        age: 20
    },
    {
        name: 'Bob',
        age: 34
    },
    {
        name: 'Cizar',
        age: 16
    },
    {
        name: 'Daniel',
        age: 16
    },
    {
        name: 'Daniel',
        age: 45
    },
];


function showData(data, isDisplayed) {
    if (isDisplayed) {
        console.log(data);
    }

}

//1. each
_.each(arrayOfData, function (data) {
    showData(data, false);
});

//2. map
var mappedArray = _.map(arrayOfData, function (value) {
    return value * 10;
});
showData(mappedArray, false);

//3. find
var findArray = _.find(arrayOfData, function (value) {
    return value % 2 == 0;
});
showData(findArray, false);

//4. filter
var filterArray = _.filter(arrayOfData, function (value) {
    return value % 2 == 0;
});
showData(filterArray, false);

//5.where
var whereArray = _.where(arrayOfObjects, {
    name: 'Daniel'
});

showData(whereArray, false);


//6. findWhere
var whereFindArray = _.findWhere(arrayOfObjects, {
    name: 'Daniel'
});
showData(whereFindArray, false);

//7.reject
var rejectedArray = _.reject(arrayOfData, function (value) {
    return value % 2 == 0;
});
showData(rejectedArray, false);

//8.every
var everyValue = _.every(arrayOfData, function(value){
    return value % 1 == 0;
});
showData(everyValue, false);


//9. some
var someValue = _.some(arrayOfData, function(value){
    return value % 2 == 0;
});
showData(everyValue, false);

//10. pluck
var pluckArray = _.pluck(arrayOfObjects, 'name');
showData(pluckArray, false);

//11. max
var maxValue = _.max(arrayOfObjects, function(value){
    return value.age;
});
showData(maxValue, false);

//12. min
var minValue = _.min(arrayOfObjects, function(value){
    return value.age;
});
showData(minValue, false);

//13. sortBy
var sortByArray = _.sortBy(arrayOfObjects, 'age');
showData(sortByArray, false);

//14. groupBy
var groupedByArray = _.groupBy(arrayOfObjects, function(value){
    return value.name;
});
showData(groupedByArray, false);

//15. indexBy
var indexByArray = _.indexBy(arrayOfObjects, 'age');
showData(indexByArray, false);

//15. countBy
var countByArray = _.countBy(arrayOfData, function(value){
    return value % 2 == 0 ? 'even' : 'odd'; 
});
showData(countByArray, false);


//16. shuffle
var shuffledArray = _.shuffle(arrayOfData);
showData(shuffledArray, false);

//17. sample
var sampleArray = _.sample(arrayOfData, 4);
showData(sampleArray, false);

//18. partition
var partitionArray = _.partition(arrayOfData, function (value) {
    return value % 2 == 0;
});
showData(partitionArray, false);



















