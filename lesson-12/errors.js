function show(data){
    console.log(data);
}

function errorFn(){
  setTimeout(function(){
       throw Error('this is very harmful error');
  }, 1000);  
}

try{
    show('Try block 1');
    errorFn();
    show('Try block 2'); 
}catch(err){
    show('Catch block');
}finally{
    show('Finally block');
}