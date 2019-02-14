function show(data){
    console.log(data);
}

function CoffeMachine(power){
    var self = this;
    var WATER_AMOUNT = 100;
    var power = power;
    
    self.getWaterAmount = function(){
        return WATER_AMOUNT;
    }
    
    self.getPower = function(){
        return power;
    }
    
    self.setWaterAmount = function(data){
        WATER_AMOUNT = data;
    }
    
    self.setPower = function(data){
        power = data;
    }
    
    function getBoildTime(){
        return 3000;
    }
    
    function afterFinish(){
        show('Coffe is ready');
    }
    
    self.runMachine = function(){
        setTimeout(afterFinish, getBoildTime());
    }
}


var myCoffeMAchine = new CoffeMachine(1000);
show(myCoffeMAchine.getPower());  
show(myCoffeMAchine.getWaterAmount());

myCoffeMAchine.setPower(2000);
myCoffeMAchine.setWaterAmount(3000);

show(myCoffeMAchine.getPower());  
show(myCoffeMAchine.getWaterAmount());

myCoffeMAchine.runMachine();