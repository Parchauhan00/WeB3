
function myname(msg,n) {
    // parameter -> input
    console.log(msg)
    console.log(n)
}

myname("i am Pru",100);
////////////////////
function sum(a,b){
    
    return a+b;
}
console.log(sum(3,40));
//////////////
//Arrow function
const multi =(a,b)=>{
return a*b;
}
console.log(multi(4,5));

printLastname=() => {
console.log("Chauhan");
}
printLastname();

/////////
// Q- Create a function that takes string as argument and return the no of vowels in string

function vowelsCount(str) {
let count = 0;
 for(const char of str) {
    if(char === "a" || char==="i" || char==="e" || char==="o" || char==="u")
    count++;
 }
 console.log("Vowels are :"+count)
}
vowelsCount("abc")