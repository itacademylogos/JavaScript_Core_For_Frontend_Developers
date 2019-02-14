function show(data){
    console.log(data);
}
show('----------- Loops--------');

var k = 0;
while(k<6){
    show(k);
    k++;
}

show('-------------------------');
 
var l = 0;
do{
     l++;
    show(l);
}while(l<5)

show('-------------------------');

for(var i = 0; i<10; i++){
 show(i);   
}
    