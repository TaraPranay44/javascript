const randi = {
    name : "abhijeet",
    price : 420,
    frequency : 100,
    chudai : function(){
        console.log(`you can buy ${this.name} at ${this.price}rs` );
    }
}

// this key word refers to current context

randi.chudai(); //you can buy abhijeet at 420rs

randi.price = 500;
randi.name = "tara";

randi.chudai(); //you can buy tara at 500rs

//arrow fjunction
const fuck = (a,b,c) =>{ 
        return a+b+c;           //explicit return
}

console.log(fuck("a","aaa","aaaaa"));  //aaaaaaaaa

// implicit return:        no return keywrd needed and no need to use {}

const fuck2 = (a,b,c) => a+b+c;
console.log(fuck("a","aaa","aaaaa"));  //aaaaaaaaa





