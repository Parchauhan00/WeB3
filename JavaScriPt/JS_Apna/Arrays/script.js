let cityes = ["delhi","Mumbai","Hyderabad","gurgaon"];
for(let city in cityes) {
    console.log(cityes[city])
}
for(let cites of cityes){
    console.log(cites.toUpperCase())
}
/////////////
const students= [85,97,44,37,76,60]
let avg =0;
for(let marks of students) {
    avg = avg+marks;
}
let totalAvg = avg/students.length;
console.log(totalAvg)
////////////////////////////
let price = [250,645,300,900,50];

for(let i=0; i<price.length; i++){
   let discount = (price[i]/10);
  let finalPrice = price[i]-discount;
   price[i] = finalPrice;
}
for(let i in price) {
    console.log(price[i]);
}
let delElement =price.shift(); // delete and returning array from start
console.log("Deleted "+delElement);
price.unshift(1000); // adding new element in starting in array
console.log(price);  
console.log(price.slice(1,4));   //return new array by given index

/////////////////
let arr= [1,2,3,4,5,6];
//arr.splice(2,2,102,103);

// add element
arr.splice(2,0,101);
//Delete Element
arr.splice(3,1);
//Replace element
arr.splice(3,1,101)

console.log(arr);