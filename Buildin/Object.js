//object.js 


/* Def:

 An Object is a unsorted key value pairs. The key is should be either a string or symbol.
 Value can bee any kind of data types. We can access properties using dot notation or bracket notation.
 
*/

const obj = {
    name : 'Raman',
    age : 20,
    "key-third": true
}

console.log(obj.name)   // Raman 
console.log(obj['age']) // 20

// 1. Consider, If we have third property "key-third". We can only access using "Square bracket notation". 
// Try to access the third property using "dot notation" gives error.
console.log(obj["key-third"])  // true.


// 2. Using dot notation, we can insert or delete keys inside an object.
obj.city = 'Salem';
console.log(obj.city); // Salem.

delete obj.city;
console.log(obj.city); // undefined.


// 3. We can add a function inside the object.
const object = {
    name : 'Raman',
    age : 20,
    "key-third": true,
    sayMyName: function(){
        console.log(this.name);
    }
}

object.sayMyName(); // Raman



// 4. Object.keys()  .values()  .entries().
// It gives an array of keys, values and entries [Results in array].

/*  Time complexities

Insert, Remove  => Constant O(1)
Access   => Constant O(1). It doesn't checks other properties in an object.
Search   => It needs to find out the specific property to analyze one by one. So it is Linear O(n);

Object.keys, Object.values, Object.entries  => Linear O(n)

*/