'use strict'

var range = {
    from: 10,
    to: 25
}

range[Symbol.iterator] = function(){
    
    var current = this.from;
    var last = this.to;
    
    return {
        next: function(){
            if(current <= last){
                return { done: false, value: current++};
            }else {
                return {
                    done: true
                }
            }
        }
    }
    
};

for (var number of range){
    console.log(number);
}