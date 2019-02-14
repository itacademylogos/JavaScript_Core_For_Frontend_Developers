function sendDataByGetMethod(){
    var userData = {
        userName: document.getElementById("userNameGet").value,
        userAge: document.getElementById("userAgeGet").value
    };
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET','/userGet?userName='+userData.userName+
            "&userAge="+userData.userAge);
    
    xhr.setRequestHeader('Content-type','application/json');
    xhr.send();
}

function sendDataByPostMethod(){
    var userData = {
        userName: document.getElementById("userNamePost").value,
        userAge: document.getElementById("userAgePost").value
    };
    
    var xhr = new XMLHttpRequest();
    xhr.open('POST','/userPost');
    xhr.setRequestHeader('Content-type','application/json');
    xhr.send(JSON.stringify(userData));
}

