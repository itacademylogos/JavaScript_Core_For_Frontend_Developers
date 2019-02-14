function Machine(){
    var self = this;
    self.isEnabled = false;
}


Machine.prototype.setIsEnabled = function(data){
    self.isEnabled = data;
}
    
Machine.prototype.getIsEnabled = function(){
    return self.isEnabled;
}



function CoffeMachine(power){
    var self = this;
    self.power = power;
}

CoffeMachine.prototype = Object.create(Machine.prototype);
CoffeMachine.prototype.construtor = CoffeMachine;

CoffeMachine.prototype.setPower = function(data){
    self.power = data;
}
    
CoffeMachine.prototype.getPower = function(){
    return self.power;
}

function show(data){
    console.log(data);
}


var myCoffeeMachine = new CoffeMachine(2000);
myCoffeeMachine.setIsEnabled(true);
myCoffeeMachine.setPower(3000);
show(myCoffeeMachine.getIsEnabled());
show(myCoffeeMachine.getPower());