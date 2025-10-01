const a = 12;
const b = 4;
console.log(add(a,b))
sub(12,4)



function add(a,b){
    return a + b;
}

function sub() {
    console.log("Subtraction", a - b);
}

// Function Expressions
const multiply = function(a,b){
    return a * b;
}

console.log(multiply(3,4));

// Arrow Functions
const divide = (a,b) => a / b;
console.log(divide(12,4));

