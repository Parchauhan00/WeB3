const x = 2;
const y = 5;
// Arrow Function
const power = (x,y) =>{
    return x**y;
}

console.log(power(x,y));

const multiply = (x,y) => x * y; // this is arrow function expression
console.log(multiply(3,4));

// Callback Function

const calculate = (x,y,operation) =>{
    return operation(x,y);
}

const res = calculate(3,4,function(number1, number2){
 return number1 + number2;
})
console.log(res);

// callback function methods
const arr = [2,3,6,-1,4,5,6,-8,-3,7];

const firstNegative = (num) => {
    return num < 0;
}
const result = arr.find(firstNegative);
console.log(result);

const index =
console.log(findIndex(arr, 4));


arr.forEach((num,i)_ => {
    console.log(num_);      
});

