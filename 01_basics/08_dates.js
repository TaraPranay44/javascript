// let myDate = new Date()      //Date object
// console.log(myDate);      //2024-04-10T12:49:03.155Z


// console.log(myDate.toString()); //Wed Apr 10 2024 12:49:32 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); //Wed Apr 10 2024
// console.log(myDate.toLocaleDateString()); //4/10/2024
// console.log(myDate.toLocaleString()); //4/10/2024, 12:52:23 PM
// console.log(myDate.toJSON()); //2024-04-10T12:52:23.019Z
// console.log(myDate.toISOString()); //2024-04-10T12:52:23.019Z
 
// console.log(typeof myDate);    //object 

// let myCreatedDate = new Date(2023,0,23);  //months start with 0 in js
// console.log(myCreatedDate.toDateString());  //Mon Jan 23 2023
// let myCreatedDate = new Date("2023-01-14");    //foriegn style
let myCreatedDate = new Date("01-14-2023");    //indian style
// console.log(myCreatedDate.toDateString()); 



let myTimeStamp = Date.now()

// console.log(myTimeStamp); //1712754519531    in milliseconds
// console.log(myCreatedDate.getTime());    //1673654400000   for comparing with above value

// console.log(Math.floor(Date.now()/1000)); //seocnds : 1712754601




