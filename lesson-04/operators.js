function show(data){
   console.log(data); 
}

//operands working

var a = 5;
show(a);
show(-a);

var b = '10';
var c = '20';
show(b+c);
show(+b + +c);


var d = +b;
var e = 10+(a+=d);//a = a+10 = 5+10 =>25
show(e);

show(10%3);

show('------increment --------');

var f = 1;
show(10* f++);
show(f);
show(10* f++);
show(f);
show(f);
show(++f);
show(f);
show('----------- --------');

var e = 10;
e+=2; // e = e+2 = 10 + 2 = 12;
show(e);
e*=2;
show(e);
e-=2;
show(e);
e%=3;
show(e);
e/=2;
show(e);
show(e);


//logical operators
show('---------logical operators -----------')
show(2>3);
show(3>=3);
show(2!=3);
show(3==3);
show('3' == 3);
show('3' === 3);

show(null == undefined);
show(null === undefined);
show('----------- --------');

//type of operator
show('---------typeOf operators -----------')
show(typeof null);
show(typeof undefined);
show(typeof 'text');
show(typeof 12);
show(typeof true);
show(typeof {});
show(typeof function(){}); 
show('----------- --------');


//ternary operator
//var g = (prompt('what is your age')<18)?'You are not able t drink alcohol': 'enjoy whiskey';
//show(g);
show('----------- --------');































