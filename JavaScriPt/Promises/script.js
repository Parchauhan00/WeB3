const ticket = new Promise(function (resolve, reject) {
    const isBoarded = true;
    if(isBoarded) {
        resolve('You are in the flight');
    } else{
        reject('Your flight has been cancelled');
    }
})

ticket.then((data) => {
    console.log("Wohoo "+ data);
    }).catch((data) => {
        console.log("Oh no! "+ data);
    })
    .finally(() => {
        console.log("Thank you for using our services");
     });