function show(data){
    console.log(data);
}

var array  = [];

//1. push()
array.push(1);
array.push(2);
array.push(3);


show(array);

//2. concat();
var array2 = new Array(4,5,6);
var array3 = array.concat(array2);
show(array3);


//3. join();
show(array3.join('*'));

//4. pop();
array3.pop();
show(array3);

//5. shift();
array3.shift();
show(array3);

//6. unshift();
array3.unshift(100);
show(array3);

//7. sort();
var array4 = [5,2,3,7,5,8,1];
array4.sort();
show(array4);

var array5 = ['fgf', 'ae', 'urtw', 'zs', 'st'];
array5.sort();
show(array5);

//8. reverse();
array2.reverse();
show(array2);

//9. slice();
var array6 = [1,2,3,4,5,6];
show(array6.slice(2));
show(array6.slice(2,4));
show(array6);

//10 splice()
array6.splice(2,0,999,888);
show(array6);

array6.splice(2,3);
show(array6);

array6.splice(2,0, 'sometext');
show(array6)

//11. delete

delete array6[0];
show(array6);

array6 =  array6.slice(2);
show(array6);





