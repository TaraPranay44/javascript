const num = 4376;

console.log(num);

const balance = new Number(4397);
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(1));      // to fix the precision    4397.0
console.log(balance.toFixed(2));
console.log(balance.toFixed(3));        //4397.000

const num2 = 123.8934;
console.log(num2.toPrecision(4));        //123.9
console.log(num2.toPrecision(5));        //123.89
console.log(num2.toPrecision(3));         //124
console.log(num2.toPrecision(2));       //1.2e+2
console.log(num2.toPrecision(1));        //1e+2


const hundreds = 100000000;
console.log(hundreds.toLocaleString());     //100,000,000

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Math.PI);
console.log(Math.abs(-44));       //44
console.log(Math.abs(44));            //44
console.log(Math.round(3.78));       //4
console.log(Math.round(3.23));            //3
console.log(Math.ceil(4.3));         //5
console.log(Math.floor(4.3));             //4
console.log(Math.sqrt(196));
console.log(Math.sqrt(1000));
console.log(Math.pow(10,2));

const arr = [200,3,41,0,1,77];
console.log(Math.min(...arr));
console.log(Math.max(...arr));
console.log(Math.max(99,77,88,11,44));


console.log(Math.random()); // random values btw 0 and 1
console.log(Math.random()*10); // btw 0,9 
console.log((Math.random()*10 )+ 1); // btw 1 and 10
console.log(Math.floor(Math.random()*10 )+ 1); // btw 1 and 10 without decimal points

const min = 50, max = 100;

console.log(Math.floor(Math.random() * (max-min+1)) + min); //btw min and max without decimal points
