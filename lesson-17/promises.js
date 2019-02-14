function successPromise() {
    //create object Promise
    var promise = new Promise(function (resolve, reject) {

        //simulation of server call with 3 seconds delay 
        setTimeout(resolve('Promise from Example#1 is succesful'), 3000);
    });


    promise.then(
        function (result) {
            alert('Fulfilled & resolved promise: ' + result);
        },
        function (error) {
            alert('Rejected promise: ' + error);
        }
    );
}


function failedPromise() {
    var failedPromise = new Promise(function (resolve, reject) {
        //simulation of failed server call
        setTimeout(reject(new Error('Time is out, server call is very long!')));
    });


    failedPromise.then(
        function (result) {
            alert('Fulfilled & resolved promise: ' + result);
        },
        function (error) {
            alert('Rejected promise: ' + error);
        });

}


successPromise();
failedPromise();