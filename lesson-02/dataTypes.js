function show(data){
   console.log(data); 
}

//1.work with Math class

show(Math.pow(2,10));
show(Math.round(1.7));
show(Math.ceil(1.7));
show(Math.floor(1.7));
show(Math.abs(-10));
show(Math.max(10,30,20,50));
show(Math.min(-30,-20,-10));
show(Math.random()*100);

//2.work with Date class

var now = new Date();
show(now);
show(now.getDate());
show(now.getFullYear());
show(now.getHours());
show(now.getMilliseconds());
show(now.getMinutes());
show(now.getMonth());
show(now.getSeconds());
show(now.getTime());
show(now.getTimezoneOffset());
show(now.getYear());

//3.STRINGS

var str = 'Hello'+' world';
show(str.charAt(0));
show(str.charCodeAt(0));
show(str.concat('--2'));
show(str.endsWith('ld'));
show(str.length);
show(str.indexOf('l'));
show(str.lastIndexOf('l'));
show(str.replace('l','-->'));
show(str.split('l'));
show(str.toUpperCase());

//4. Wrappers

var primString = 'customText';
//primString.customValue = 200; //cannot do it as it is primitive data
show(primString);

var wrapperString = new String(primString);
wrapperString.customValue = 200;
show(wrapperString);


var wrapperNumber = new Number(100);
show(wrapperNumber.toExponential());

//5. if-else

var personAge = 16;

if(personAge>18){
   show('You can drink alcohol')
}else{
    show('You cannot drink alcohol');
}

if(personAge<18){
    show('Cannot drink alcohol');
}else if(personAge>=18 && personAge<21){
    show('You can drink only beer')
}else{
    show('You can drink any alcohol');
}

switch(personAge){
    case 17: case 16: case 15: case 14:{
        show('Cannot drink alcohol');
        break;
    }
    case 18: case 19: case 20: {
        show('You can drink only beer');
        break;
    }
    default:{
         show('You can drink any alcohol');
    }
}






