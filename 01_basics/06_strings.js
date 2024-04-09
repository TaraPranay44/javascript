const name = "Tara"
const bestieName = "Khushi"


//string interpolation
console.log(`I am ${name} i want to know what's ${bestieName} is doing`); //I am Tara i want to know what's Khushi is doing

console.log(bestieName[0]);
console.log(bestieName.length);
console.log(bestieName.toUpperCase());
console.log(bestieName.charAt(5));
console.log(bestieName.indexOf('i'));


const newstr = bestieName.substring(0,3);
console.log(newstr);                            //Khu
const newstr2 = bestieName.slice(0,3);
console.log(newstr2);
const newstr3 = bestieName.slice(-6,3);
console.log(newstr3);                            //Khu

const fullName = "      Tara Pranay Kancharlapalli     ";
console.log(fullName.trim());                            //Tara Pranay Kancharlapalli
console.log(fullName);

const url = "https://www.youtube.com/watch?v=sscX432bMZo&t=6918s"

console.log(url.replace('?v=sscX432bMZo&t=6918s','-js_tut'));
console.log(url.includes('utube'));        //true

console.log(fullName.trim().split(' '));                        //[ 'Tara', 'Pranay', 'Kancharlapalli' ]