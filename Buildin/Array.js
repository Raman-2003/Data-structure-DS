const array = [1,2,3,4,5,'Raman'];

array.push(6)            // add element at the end of an array
array.pop()              // Removes the last element from the array.
array.shift()            // Removes the first element of an array.
array.unshift('Kishore') // add element at the starting position of an array.


/* TIME COMPLEXITY IN ARRAY.

Insert / remove from end            => O(1) Constant time
Insert / remove from beginning      => O(n) Linear time. This is because, it agains refrom the indexex in an array.

Access          => Constant time. Because We know the index(position). So, we give the index and get the value from the array. There is no need to analyze all the exisiting element
Search          => O(n). Linear time complexity. It searches one by one.

Push / Pop      => Constant time O(1)
Slice, Splice, Concat, Shift, Unshift   => Linear time O(n);
forEach, map, filter, reduce            => Linear time O(n)


*/