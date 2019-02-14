function show(data){
    console.log(data)
}

function rangeData(min, max){
    var nextValue = min;
    
    return {
        next: function(){
            if(nextValue > max){
                 throw StopIteration;
            }
            
            return nextValue++;
        }  
    };
}

var range = rangeData(10,25);

      while(true){
          try{
            show(range.next())  
          }catch(e){
               break;
         }        
      }