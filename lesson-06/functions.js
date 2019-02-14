function show(data){
    console.log(data);
}

show({to:'go'});

var calculator = {
    add: function(a, b){
        return a+b;
    },
    subtract: function(a, b){
        return a-b;
    },
    multiply: function(a, b){
        return a*b;
    },
    devide: function(a, b){
        return a/b;
    }
}

function generalCalculation(operation, value_1, value_2){
    return operation(value_1, value_2);
}

var result_1 = generalCalculation(calculator.add, 2,6);
show(result_1);

var result_2 = generalCalculation(calculator.subtract, 2,6);
show(result_2);

var result_3 = generalCalculation(calculator.multiply, 2,6);
show(result_3);

var result_4 = generalCalculation(calculator.devide, 2,6);
show(result_4);

var result_5 = generalCalculation(calculator.multiply,
                                  generalCalculation(calculator.add,2,2),
                                 generalCalculation(calculator.multiply,3,3));
show(result_5);