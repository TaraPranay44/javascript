// for loops

// for(let i = 0;i < 10;i++){
//     console.log(i);
// }

// while loops

// let abhijeet  = 0;
// while(abhijeet < 10){
//     console.log(abhijeet*10);
//     abhijeet++;
// }

// for of loop
const array = ["a","b","c","d"];

for(const alpha of array){
    console.log(alpha);
}

// Maps

const map = new Map();
map.set('tara',"pranay");
map.set('abhijeet',"anand");
map.set('sanjay',"goud");
map.set('bharath',"chandra");

console.log(map);
/*
Map(4) {
  'tara' => 'pranay',
  'abhijeet' => 'anand',
  'sanjay' => 'goud',
  'bharath' => 'chandra'
}
*/

for(const key of map){
    console.log(key);
}

/*
[ 'tara', 'pranay' ]
[ 'abhijeet', 'anand' ]
[ 'sanjay', 'goud' ]
[ 'bharath', 'chandra' ]
*/

for(const [key,value] of map){
    console.log(key, ":",value);
}

/*
tara : pranay
abhijeet : anand
sanjay : goud
bharath : chandra
*/


// objects are  not iterable like MediaCapabilities, objects have another method to iterate 

const myObj = {
    tara : 5,
    "abhijeet" : 'anand',
    0 : true
}

console.log(myObj);

// looping for object:

// we use for in loop

// for in loop:

for(const element in myObj){
    console.log(`key is ${element} and its value is ${myObj[element]}`);
}

/*
key is 0 and its value is true
key is tara and its value is 5
key is abhijeet and its value is anand
*/


//for each loop

// mainly used to apply a functionality to all elements in a storage

const friends = ["lodu","gandu","bosda"];

friends.forEach(function (val){                //no need to have a function name in foreach
    console.log(val + " abijeet");
})
/*
lodu abijeet
gandu abijeet
bosda abijeet
*/

// using arrow functiom

friends.forEach((val) => {                //no need to have a function name in foreach
    console.log(val + " abijeet");
})

/*
lodu abijeet
gandu abijeet
bosda abijeet
*/

//we can also pass a function to foreach as a parameter

function addTara(val){
    console.log("tara " + val );
}

friends.forEach(addTara);
/*
tara lodu
tara gandu
tara bosda
*/

// accesing objects in array
//it is very important as accessing database objects follows this method only
const girls = [
    {
        name : "khushi",
        tag :  "bestfrnd"
    },
    {
        name : "lally",
        tag :  "bestfrnd"
    },
    {
        name : "anushka",
        tag :  "frnd"
    }
];

girls.forEach((item) => {
    console.log(item.name + " is my " +item.tag);
});

/*
khushi is my bestfrnd
lally is my bestfrnd
anushka is my frnd
*/