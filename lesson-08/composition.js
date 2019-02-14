function show(data){
    console.log(data);
}



function Person( amountOfMoney){
    var wallet = new Wallet(amountOfMoney);
    
    this.buy = function(price){
        wallet.withdraw(price);
    }
    
    this.countMoney = function(){
        show(wallet.showAmount());
    }
}

function Wallet(amount){
    this.amount = amount;
    
    this.withdraw = function(money){
        this.amount -= money;
    }
    
    this.showAmount = function(){
        return this.amount;
    }
}

var person = new Person(2000);
person.buy(120);
person.countMoney();

person.buy(149);
person.countMoney();

person.buy(1000);
person.countMoney();

