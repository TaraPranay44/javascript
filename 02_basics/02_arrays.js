my_frnds = ["khushi","sanjay","sagar"];
my_enemies = ["sahilesh","sneha","ben stokes"];

// my_frnds.push(my_enemies); 
// console.log(my_frnds);     //[ 'khushi', 'sanjay', 'sagar', [ 'sahilesh', 'sneha', 'ben stokes' ] ]
// //array is accepting other array as an array type and treating another array as a new element
// console.log(my_frnds[3][2]);

// const all_chutiyas = my_frnds.concat(my_enemies);  //concat will be used with new array
// console.log(all_chutiyas); //[ 'khushi', 'sanjay', 'sagar', 'sahilesh', 'sneha', 'ben stokes' ]

//spread operator:
// const all_new_chutiyas = [...my_frnds,...my_enemies]; 
// console.log(all_new_chutiyas); //[ 'khushi', 'sanjay', 'sagar', 'sahilesh', 'sneha', 'ben stokes' ]

// const confusion_array = [1,2,3,[4,5],6,[7,[8,9]]];
// //its very diffivult to understand the above array
// //so we can flat it to single array by
// console.log(confusion_array.flat()); //[ 1, 2, 3, 4, 5, 6, 7, [ 8, 9 ] ]
// //we can give depth also, by which it identifies the depth upto flatting the array
// console.log(confusion_array.flat(Infinity));
// [
//     1, 2, 3, 4, 5,
//     6, 7, 8, 9
//   ]

//check if an element from website is array or not
// console.log(Array.isArray("Tara"));  //false
// //change it to array using array.from()
// console.log(Array.from("Tara"));  //[ 'T', 'a', 'r', 'a' ]
// console.log(Array.from({name: "Tara"}));  //[]
// //returns empty array , as we have to mention what it key and what it value


let score1 = 100
let score2 = 200
let score3= 300

console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]