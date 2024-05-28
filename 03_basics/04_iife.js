//Immediately Invoked Function Expression (IIFE)

// ()() is the syntaax for IIFE  first () is for defining function and second () is for calling the function
(function tara(){
    console.log("tara is great");
})();

//even arrow functions can be written , but the previous function should be ended with semicolon
//otherwise this arrow function will give error

(() => {
    console.log("abhijeet is chutiya");
})();

//we can also pass parameters 
((name) => {
    console.log(`abhijeet is ${name}`);
})("randi");

