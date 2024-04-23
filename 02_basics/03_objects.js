// Two types of creating objects : singleton, object literals

//singleton
// Object.create();

//object literals

const mySym = Symbol("key1");

const tara = {
    name : "khushi",
    fullname : "Khushi Doshi",
    [mySym] : "mykey1",         // usage of symbol  should be in []
    age : 21,
    location : "Ratlam",
    email : "Khushidoshi08@gmail.com",
    isInLove : true,
    available : ["bestfriend","friend","study partner"]
}

// console.log(tara.email);
// //accessing in different way
// console.log(tara["email"]); 
// console.log(tara["fullname"]); 
// console.log(tara[mySym]);  //

tara.email = "tarapranay9.7@gmail.com";

// console.log(tara.email);

// Object.freeze(tara);  //freezed the objects from anyone changing it

tara.email = "tarapranay134@gmail.com";
// console.log(tara.email);

tara.greetings = function(){
    console.log("hi tara, where is khushi");
}
tara.greetings2 = function(){
    console.log(`${tara.name} is in ${tara.location}`);
}

console.log(tara.greetings());
console.log(tara.greetings2());