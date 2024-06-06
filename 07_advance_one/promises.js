const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async is completed");
        resolve();
        reject();
    },1000)

});

promiseOne.then(function(){
    console.log(("promise consumed"));
})


const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve([1,2,3,4,5]);
    },3000)
})

promiseTwo.then(function(numbers){
    console.log(numbers);
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        // let error = true;
        let error = false;
        if(!error){
            resolve([1,2,3,4,5]);
        }else{
            reject('error agya, sambhalena')
        }
    },5000)
})

promiseThree.
then((user)=>{
    console.log(user);
    return user[4];
})
.then((userValue)=>{
    console.log(userValue);
    return userValue+5;
})
.then((five)=>{
    console.log(five);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>{
    console.log("promise ya toh nibaya ya toh chod diya");
})

const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        // let error = false;
        if(!error){
            resolve([1,2,3,4,5]);
        }else{
            reject('error agya, sambhalena')
        }
    },7000)
})

async function consumePromiseFour(){
    try {
        const responsae = await promisefour;
        console.log(responsae);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFour();