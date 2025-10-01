function getCheese() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
 const cheese = '🧀';
 console.log('Here is the cheese',cheese);
 resolve(cheese);
    },2000)

})
   
}