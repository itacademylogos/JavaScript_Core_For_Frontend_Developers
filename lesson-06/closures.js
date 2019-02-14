function show(data){
    console.log(data);
}

function counter(){
    var count = 0;
    return {
        evaluete: function(){return count++;},
        reset: function() {return count = 0;}
    }
}

var obj_fn_1 = counter();
var obj_fn_2 = counter();

show(obj_fn_1.evaluete());
show(obj_fn_2.evaluete());

show(obj_fn_1.evaluete());
show(obj_fn_2.evaluete());

obj_fn_1.reset();

show(obj_fn_1.evaluete());
show(obj_fn_2.evaluete());