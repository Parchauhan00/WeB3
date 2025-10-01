const word = ["Hello", "World", "from", "JavaScript"];
for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
   
}
 console.log(word.length)

 // Mix data type array
 const mixArray = [1, "two", true, null, 5,undefined, { name: "John" }, [1, 2, 3],function hello() {
    console.log("Hello from function in array");
 }];
 mixArray.push("New Element");
 mixArray.shift();
 mixArray.unshift("First Element");
 mixArray.sort(); // This will sort the array in place
 mixArray.reverse(); // This will reverse the array in place
 mixArray.slice(1, 4); // This will return a new array with elements from index 1 to 3
 mixArray.indexOf("two"); // This will return the index of the element "two"
 mixArray.splice(2, 1); // This will remove 1 element at index 2  
 mixArray.includes(5); // This will return true if the array contains the element 5
//  mixArray.forEach(element => {
//     console.log(element);
//  });
 
 console.log(mixArray);