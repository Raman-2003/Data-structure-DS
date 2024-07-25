//set.js


// Set constructor optionally accepts an array.
const set = new Set([1,2,3]);
for (let num of set){
    console.log(num);  // 1 2 3 
}

// We can be add elements using "add"
set.add(4);
console.log(set);  // 1 2 3 4

// Again we try to add the same number using "add". It doesn't invoke it
set.add(4);
console.log(set); // again it shows 1 2 3 4.

// Set only contain unique elements.

console.log(set.size); // size() bracket vendam.


// If we want to check if a value is exists in the "set". We can use "has" method.
console.log(set.has(4));  // true
console.log(set.has(10));  // false


// We can delete an element using "delete";
set.delete(1);
console.log(set);  // 2 3 4


// To delete all the elements in the "set", we can use "clear" method;
set.clear();
console.log(set); // nothing;