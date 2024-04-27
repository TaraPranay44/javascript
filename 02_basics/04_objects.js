const khushi = {}

// console.log(khushi);       //{}

khushi.friend = "tara";
khushi.single = true;
khushi.age = 21;

// console.log(khushi);       //{ friend: 'tara', single: true, age: 21 }

//nested objects:

const tara = {
    friend: "khushi",
    family : {
        count : 4,
        mother : {
            name : "durga",
            age : 43
        },
        father : {
            name: "ramana",
            age : 47
        }
    }
}

// console.log(tara.family.mother.age);     //43


const obj1  = {
    1 : "a",
    2 : "b"
}

const obj2 = {
    3 : "c",
    4 : "d"
}

// const obj3 = {obj1,obj2};

// console.log(obj3);               //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj3 = Object.assign({},obj1,obj2);  // all objects goes to first empty object
// const obj3 = Object.assign(obj1,obj2);  // all objects goes to first obj1 object
// console.log(obj3);                 //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj3 = {...obj1,...obj2};
// console.log(obj3);           //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
 
// const lodu = {
//     {
//         islodu : false
//     },
//     {
//         islodu : true
//     },
//     {
//         islodu : false
//     },
//     {
//         islodu : true
//     }
// }



// console.log(Object.keys(tara));      //[ 'friend', 'family' ]   // returns in array type
// console.log(Object.values(tara));  
/*
[
  'khushi',
  {
    count: 4,
    mother: { name: 'durga', age: 43 },
    father: { name: 'ramana', age: 47 }
  }
]
*/

// console.log(Object.entries(tara));
/*
[
  [ 'friend', 'khushi' ],
  [ 'family', { count: 4, mother: [Object], father: [Object] } ]
]
*/

// console.log(tara.hasOwnProperty('friend')); //true


//destructuring:

const mazaa = {
    reason : "sex",
    time : "2hrs",
    person : "confidential"
}

// console.log(mazaa.person);  //confidential

const{person} = mazaa;

// console.log(person); //confidential
const{person : girl} = mazaa;
// console.log(girl);   //confidential

