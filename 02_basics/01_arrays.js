const myArray = [0,1,2,3,4,5];
console.log(myArray); //[ 0, 1, 2, 3, 4, 5 ]

console.log(myArray[3]); //3

const myArray2 = new Array(1,2,3,4);
myArray.push(6); //0,1,2,3,4,5,6
myArray.pop(); //removes last element
myArray.unshift(8);//adds 8 in 0th index in array
myArray.shift();//removes that 8 from array
console.log(myArray.includes(9)); //false
// console.log(myArray.indexOf(4)); 
const newArr = myArray.join()

const newArray = myArray.slice(1,3);
console.log(newArray); //[ 1, 2 ]

const newArray2 = myArray.splice(1,3);
console.log(newArray2);     //[ 1, 2, 3 ]
console.log(myArray);         //[ 0, 4, 5 ] //spilce removed the elements mentioned



