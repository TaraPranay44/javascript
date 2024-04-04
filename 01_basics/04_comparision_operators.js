console.log(2>1);
console.log(2>=1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2!=1); 

//the results of the above operations are known

console.log("2">1); //true , here js converts it to number while comparing
console.log("02" > 1); //true

// we know that null's number value after converting is zero
// but 

console.log(null>0);   //false , here null didnt convert
console.log(null == 0); //false , here null didnt convert
console.log(null>=0); // true, while using >= null converted

// so here we can see how js's working is different4

