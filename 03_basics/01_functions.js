function addTwoNumber(number1,number2){
    return number1 + number2;
}

const r1 = addTwoNumber(1,2);
const r2 = addTwoNumber(1,"2");
const r3 = addTwoNumber(1,null);

// console.log(r1); //3
// console.log(r2);  //12
// console.log(r3);   //1

function loginUserName(userName){
    return `${userName} just logged in`;
}

console.log(loginUserName("tara"));   //accepts only sring,other data types will give error, if any argument doesnt pass, then undefined will be printed

function calculateMyAge(age){
    return age;
}

console.log(calculateMyAge(12,31,52));  // prints only 12

function calculateMyAge2(...age){        // ... is called spread operator in some scenarios and 
                                            //    called rest operator in some scnenarios
                                            //    in this case , ... is called rest operator
    return age;
}

console.log(calculateMyAge2(12,31,52));  // [ 12, 31, 52 ]

function calculateMyAge3(a,b,...age){ 
    return age;
}

console.log(calculateMyAge3(12,31,52,344)); //[ 52, 344 ], a takes 12, b takes 31, else wil be covered by rest operator


const user = {
    userName : "Tara",
    price : 300
}

function catchB(myObject){
    console.log(`Username is ${myObject.userName} and his price is ${myObject.price}`);
}

catchB(user);  //Username is Tara and his price is 300

//we can also define object while calling the function itslef

catchB({
    userName : "abhijeet",
    price : 2
})              //Username is abhijeet and his price is 2
