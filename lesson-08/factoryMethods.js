function show(data){
    console.log(data);
}


function User(){
    this.getData = function(){
        show(this.name+', '+this.age);
    }
}

User.createWithoutParameters = function(){
    var user = new User();
    user.name = 'DEFAULT';
    return user;
}

User.createWithParams = function(fname, fage){
    var user = new User();
    user.name = fname;
    user.age = fage;
    return user;
}

var user1 = User.createWithoutParameters();

var user2 = User.createWithParams("Kira", 44);

user1.getData();
user2.getData();