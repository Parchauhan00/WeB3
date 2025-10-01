  const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function() {
        console.log('Async task is complet')
        resolve();
    }, 1000)
    
  })

  promiseOne.then(function(){
    console.log('Promise consumde');
  })

  new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2')
        resolve();
    },1000)
  }).then(function(){
    console.log("Async 2 resolved")
  })

  const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve({username:"chai",email:"chai@example.com"})
    },1000)
  })
  promiseThree.then(function(user){

    console.log(user);
    
  })
       /////////// Promise 4
  const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username: "prashant", password: "123"})
        } else{
            reject('ERROR:Somthing went wrong')
        }
    },1000)
  })
  const username = promiseFour.then((user)=>{
    console.log(user)
    return user.username
  })
  .then((username1) =>{
console.log(username1)
  })
 .catch(function(error){
    console.log(error)
  })
  .finally(() => console.log("The Promise is either resolved or rejected"))

  ////////   promise 5
  const promiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true
        if(!error) {
            resolve({username: "prime", password: "3543"})
        } else{
            reject("Error: JS went wrong")
        }
    }, 1000)
  });

  async function consumePromiseFive(){
   try {
     const response = await promiseFive
    console.log(response);
   } catch(error) {
    console.log(error);
   }

  }
  consumePromiseFive()

//   async function getAllUsers() {
//     try{
//         const response = fetch('https://jsonplaceholder.typicode.com/users')
//        const data = await response.jason()
//        console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then(() => {
    return response.jason()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})
 