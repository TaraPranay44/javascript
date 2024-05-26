// {}  is called scope almost everywhere
// {} can be used in if else,functions,loops etc;

// let and const are block scoped, once declared inside {}, they cant be used outside the {}
// but var can be used outside


{
    let a = 3;
    const b = 4;
    var c = 5;
}


// console.log(a); //error (a not defined)
// console.log(b); //error (b is not defined)
// console.log(c);  // 5  (no error)

// whaterver outside {} is called block ScriptProcessorNode, and inside {} is called block scope

let a = 300;

{
    let a = 100;
    console.log("inner :",a);
}

console.log("outer : ",a); 

// inner : 100
// outer :  300

// when we use let which is block scope , the value will not be changed as we have seen above

// but when we use var

var b = 40;

{
    var b = 50;
}

console.log(b);  // 50 , value of b has been changed



// lets see child and parent scope

function parent(){
    const name = "abhijeet";

    function child(){
        const wife = "tari";
        console.log(name); // as its parents scope will be its global scope , it can access name
    }

    // console.log(wife);  // this gives error , itcant access wife outside its scope

    child();
}

parent();  // once parent is called , its child is also called , as child is inside parent


