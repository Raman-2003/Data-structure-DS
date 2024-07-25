

// A Map is an unordered collection of key-value pairs. Both key and value can be any data type.
// To get a value, we can access use the corresponding key.
// Maps are iterables. They can be used with for of loop.


// Map construtor contains only one array. So, we should give square brackets around mini key value arrays.
const map = new Map([['a' , 1], ['b' , 2]]);


// add a key value pair using "set" not "add".
// Here, set is not a data structure in the case of Map. Please do not get confused.
map.set('c', 3);


// If we check the key is present or not, we can use "has" method.
console.log(map.has('c'));      //true

 
// If we delete a key value pair in the map, We can use "delete" method
map.delete('c');

// we can find the size of the "map" using "size" method. 
console.log(map.size);

//It deletes all the key value pairs using "clear"
map.clear();

// iterate using for of loop      
for (let [key, value] of map){
    console.log(`${key}: ${value}`);     
}