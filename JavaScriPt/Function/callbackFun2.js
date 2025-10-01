const calculate = (num1 , num2, fun) => {
    return fun(num1, num2);
};

const add = calculate(3,4, function(a,b){ return a + b;}) ;
console.log(add);
 ///////// Method 1
const sub = calculate(5,2, function(a,b) {return a - b;});

console.log(sub);

////////////// Method 2
const multiply = (x,y) => x * y;
const mul = calculate(3,4,multiply); // function paas krna ha call nahi krna
console.log(mul);

////////////// Method 3
function divide(a,b) {
    return a / b;
}
const div = calculate(10,2,divide);
console.log(div);