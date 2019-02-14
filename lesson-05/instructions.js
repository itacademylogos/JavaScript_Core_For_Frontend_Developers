function show(data){
    console.log(data);
}

//1. break
for(var i =0; i<10; i++){
    if(i === 7){ break;}
    show(i);
}

//2. continue
for( i =0; i<10; i++){
    if(i === 7){ continue;}
    show(i);
}

//3. return;
function customShow(data, i){
    if(i===5)return;
    show(data);
}

for( i =0; i<10; i++){
    customShow(i,i);
}


