//Comment  commit#5


//Comment  commit#4
//Comment  commit#3
//Comment  commit#2
//Comment  commit#1
function showData(data, isDisplayed) {
    if (isDisplayed) {
        console.log(data);
    }
}

var objectToTest = {
    name: 'John',
    age: 22
};
//1. keys
var keysObject = _.keys(objectToTest);
showData(keysObject, false);

//2. values
var valuesObject = _.values(objectToTest);
showData(valuesObject, false);

//3.mapObject
var mapObject = _.mapObject(objectToTest, function (value, key) {
    return value + 1;
});
showData(mapObject, false);

//4.pairs
var pairsValues = _.pairs(objectToTest);
showData(pairsValues, false);

//5.invert
var invertedObject = _.invert(objectToTest);
showData(invertedObject, false);

//6. create
function Person(name) {
    this.name = name;
}

var createObj = _.create(Person.prototype, {
    name: 'Oleh',
    age: 20
});
showData(createObj, false);

//7. functions
showData(_.functions(_), false);

//8. extend
var extendedObject = _.extend({
    name: 'Joye'
}, {
    age: 35
});
showData(extendedObject, false);

//9. pick
var pickedObject = _.pick(objectToTest, 'name');
showData(pickedObject, false);

//10. omit
var omitedObject = _.omit(objectToTest, 'name');
showData(omitedObject, false);

//11. defaults
var defaultsObject = _.defaults({
    isPerson: true
}, objectToTest);
showData(defaultsObject, false);

//12. has
var hasKeys = _.has(objectToTest, 'name');
showData(hasKeys, false);

//13. isEqual   
var isEqualObject = _.isEqual(objectToTest, {});
showData(isEqualObject, false);

//14. isMatch
var isMatch = _.isMatch(objectToTest, {
    age: 22
});

showData(isMatch, false);

//15. isEmpty
var isEmptyObj = _.isEmpty({});
showData(isEmptyObj, false);

//16. isElement
var isDomElement = _.isElement(document.createElement('div'));
showData(isDomElement, false);

//17.isArray
var isArray = _.isArray([]);
showData(isArray, false);

//18. isObject
showData(_.isObject({}), false);

//19. isFunction
showData(_.isFunction(_.isArray), false);

//20. isFunite
showData(_.isFinite(Infinity), false);

//21. isBoolean
showData(_.isBoolean(2 > 3), false);

//22. isDate
showData(_.isDate(new Date()), false);

//23. isNaN
showData(_.isNaN(NaN), false);

//24. isNull
showData(_.isNull(null), false);

//25. isUndefined
showData(_.isUndefined(undefined), false);