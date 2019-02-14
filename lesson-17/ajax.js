function sendDataByGetMethod() {
    var userName = document.getElementById("userNameGet").value;
    var userAge = document.getElementById("userAgeGet").value;


    var url = '/userGet?userName=' + userName + '&userAge=' + userAge;

    promiseGetServerCall(url)
        .then(function (response) {
            console.log(response);
            return response;
        }, function (error) {
            alert(error);
        })
        .then(function (response) {
            alert(response);
        }, function (error) {
            alert(error);
        });
}

function promiseGetServerCall(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onload = function () {
            if (this.status == 200) {
                resolve(this.response);
            } else {
                var error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };

        xhr.onerror = function () {
            reject(new Error('Network Error'));
        };

        xhr.send();
    });
}


function sendDataByPostMethod() {
    promisePostServerCall().then(
        function (response) {
            debugger;
            alert(response);
        },
        function (error) {
            alert(error);
        })
}

function promisePostServerCall() {
    return new Promise(function (resolve, reject) {
        var userData = {
            userName: document.getElementById("userNamePost").value,
            userAge: document.getElementById("userAgePost").value
        };

        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/userPost');
        xhr.setRequestHeader('Content-type', 'application/json');

        xhr.onload = function () {
            if (this.status == 200) {
                resolve(this.response);
            } else {
                var error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };

        xhr.onerror = function () {
            reject(new Error('Network Error'));
        };

        xhr.send(JSON.stringify(userData));
    });
}