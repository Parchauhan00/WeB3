let arr = [1,2,3,4,5];
// Foreach Method
arr.forEach(function printVal(val) { 
    console.log(val)

});
let arr2 = ["pune","delhi","Mumbai"]
arr2.forEach((val,idx,arr2) =>{
    console.log(val.toUpperCase(),idx,arr2);
})

let nums = [2,3,4,5,6];

nums.forEach((nums) =>{
    console.log(nums*nums); 
});

let printnums = (nums) =>{
    console.log(nums);
};

nums.forEach(printnums)

//  Map Method
console.log("Map Methods")

let nums2 = [67,52,39];

nums2.map((val) => {
    console.log(val)
});

let newArr = nums2.map((val) => {
    return val*val;
});

console.log(newArr)

// Filter Method

let arr3 = [2,3,4,5,67,8,9];

let evenArr = arr3.filter((val) => {
    return val%2 ===0;
});
console.log(evenArr);

//Reduced Method



