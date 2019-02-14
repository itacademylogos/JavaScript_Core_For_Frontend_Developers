function Machine(){
    var self = this;
    var isEnabled = false;
    
    self.setIsEnabled = function(data){
        isEnabled = data;
    }
    
    self.getIsEnabled = function(){
        return isEnabled;
    }

}



function CoffeMachine(power){
    Machine.call(this);
    var self = this;
    var power = power;
    self.setPower = function(data){
        power = data;
    }
    
    self.getPower = function(){
        return power;
    }
}

function show(data){
    console.log(data);
}

var myCoffeeMachine = new CoffeMachine(2000);
show(myCoffeeMachine.getIsEnabled());
show(myCoffeeMachine.getPower());
myCoffeeMachine.setIsEnabled(true);
myCoffeeMachine.setPower(3000);
show(myCoffeeMachine.getIsEnabled());
show(myCoffeeMachine.getPower());


