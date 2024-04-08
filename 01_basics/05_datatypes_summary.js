//primitive

// 7types : String,Number,Boolean,null,undefined,Symbol,BigINT
 
let stringName = "tara";
let Numbername = 123;
const boolName = false;

const val = null;
let myName; //undefined

let tara = Symbol("kancharlapalli");
let pranay = Symbol("kancharlapalli");

console.log(tara === pranay);    //false , because symbols are unique

let bigNumber = 7262926293649239362n;   //mentioning 'n' at last will make the number a BIGINT

//non-primitive

//array,objects,functions

const myArray = ["khush","tara","1"];
console.log(myArray);                 //array


let myobject = {
    define : false,
    love:  true,
}

let myFunction = function(){
    console.log("hello world");
}
 
myFunction(); //funtion call

console.log(typeof(myFunction));   //type = function
console.log(typeof(tara));   //type = symbol