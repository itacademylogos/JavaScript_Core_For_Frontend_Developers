function setCookie(name, value, options) {
    options = options || {};

    var expires = options.expires;

    if (typeof expires == 'number' && expires) {
        var date = new Date();
        date.setTime(date.getTime() + expires * 1000);
        expires = options.expires = date;
    }

    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString;
    }

    value = encodeURIComponent(value);

    var cookieString = name + '=' + value;

    for (var propertyName in options) {
        cookieString += '; ' + propertyName;
        var propertyValue = options[propertyName];

        if (propertyValue !== true) {
            cookieString += '=' + propertyValue;
        }
    }

    document.cookie = cookieString;
}


function getCookieByName(name) {
    var regexString = '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)";
    var matchers = document.cookie.match(new RegExp(regexString));

    return matchers ? decodeURIComponent(matchers[1]) : undefined;
}


function deleteCookieByName(name) {
    setCookie(name, '', {
        expires: new Date()
    });
}