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

showData(arrayOfData, false);


//1. first
var firstValue = _.first(arrayOfData);
showData(firstValue, false);

//2. last
var lastValue = _.last(arrayOfData, 2);
showData(lastValue, false);

//3 initial
var initialValue = _.initial(arrayOfData, 6);
showData(initialValue, false);

//4. rest
var restValue = _.rest(arrayOfData, 8);
showData(restValue, false);

//5. compact
var arrayWithFalsyValues = [1, false, 5, null, 887, 0, undefined, 23, NaN];
var compactValue = _.compact(arrayWithFalsyValues);
showData(compactValue, false);

//6. flatten
var beforeFlattenArray = [1, [[[[2], 3], 4], 5], [6, [7]]];
var afterValue = _.flatten(beforeFlattenArray);
showData(afterValue, false);

//7. without
var withoutArray = _.without(arrayOfData, 2,5,7);
showData(withoutArray, false);

//8.union
var unionArray = _.union([10,20,30], [11,21,31], [91,92,93]);
showData(unionArray, false);

//9. intersection
var intersectionValues = _.intersection([1,2,3,4],[3,4,5],[4,5,6]);
showData(intersectionValues, false);


//10. difference
var differenceValues = _.difference([1, 2, 3, 4], [3, 4, 5]);
showData(differenceValues, false);

//11. uniq
var uniqValues = _.uniq([1, 1, 2, 2, 2, 3, 4, 3, 3, 3]);
showData(uniqValues, false);

//12. zip
var zipValues = _.zip(['anna', 'ihor', 'petro'],[30,40,50],[true, false, true]);
showData(zipValues, false);

//13. unzip
var unzipValues = _.unzip([["anna", 30, true], ["ihor", 40, false], ["petro", 50, true]]);
showData(unzipValues, false);

//14. object
var objectValues = _.object(['age', 'name'], [20, 'Petro']);
showData(objectValues, false);

//15. indexOf
var indexOfValues = _.indexOf([1, 25, 3, 4, 25], 25);
showData(indexOfValues, false);

//16. lastIndexOf
var lastIndexOfValues = _.lastIndexOf([1, 25, 3, 4, 25], 25);
showData(lastIndexOfValues, false);

//17. sortedIndex
var sortedIndexValues = _.sortedIndex([10,20,30,40,50], 25);
showData(sortedIndexValues, false);

//18. findIndex
var findIndexValues = _.findIndex(arrayOfData, function(value){
    return value % 2 == 0;
});
showData(findIndexValues, false);

//19. findLastIndex
var findLastIndexValues = _.findLastIndex(arrayOfData, function (value) {
    return value % 2 == 0;
});
showData(findLastIndexValues, false);


//20.range
var rangedValues = _.range(0, 50, 2);
showData(rangedValues, true);



















































