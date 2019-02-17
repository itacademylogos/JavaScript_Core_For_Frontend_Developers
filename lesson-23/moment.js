function getTodaysDate() {
    var todaysDate = moment().toString();
    document.getElementById('todaysDate').innerHTML = todaysDate;
}
getTodaysDate();

//get Today date
function getNow() {
    var now = moment();
    document.getElementById('nowDate').innerHTML = now;
}

getNow();

function parseStringDate(stringValue) {
    var day = moment(stringValue);

    if (day.isValid()) {
        document.getElementById('parsedDay').innerHTML = day;
    }
}
parseStringDate('1990-11-29 22:12:10.034');


function parseStringDateWithDiffFormats(stringValue) {
    var day = moment(stringValue, ['MM-DD-YYYY', 'DD-MM', 'DD-MM-YYYY']);

    if (day.isValid()) {
        document.getElementById('parsedDayWithDiffFormat').innerHTML = day;
    }
}

parseStringDateWithDiffFormats('02-03-2018');


function parseArray(date) {
    var day = moment(date);

    if (day.isValid()) {
        document.getElementById('parsedDayWithArray').innerHTML = day;
    }
}
parseArray([1999, 11, 09, 10, 23, 39]);


function parseObject(date) {
    var day = moment(date);

    if (day.isValid()) {
        document.getElementById('parsedObject').innerHTML = day;
    }
}

parseObject({
    year: 2011,
    month: 9,
    day: 12,
    hour: 16,
    minute: 23,
    second: 1
});


function formatDate() {
    var day = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');

    if (day) {
        document.getElementById('formattedDate').innerHTML = day;
    }
}

formatDate()


function getSet() {
    var day = moment();

    var year = day.get('year');
    var month = day.get('month');
    var date = day.get('date');
    var hour = day.get('hour');
    var minute = day.get('minute');
    var second = day.get('second');
    var millisecond = day.get('millisecond');


    console.log(year + ', ' + month + ', ' + date + ', ' + hour + ', ' + minute + ', ' + second + ', ' + millisecond)

    day.set('year', 2205);
    var year = day.get('year');
    console.log(year + ', ' + month + ', ' + date + ', ' + hour + ', ' + minute + ', ' + second + ', ' + millisecond)

}
getSet()