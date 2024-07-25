/* 
Queue data structure 

The queue data structure is a sequential collection of elements that follows the principle of (FIFO) First In and First Out

The first element inserted into the queue is the first element to be removed.

Take an example of Airport luggage checkup machine. The first back going to the checking process and get away from the machine at first.

This stack data structure supports two main operations.
1. Enqueue, which adds an element to the "tail/rear" of the collection.  Visit Queue enqueue and dequeue.png in Images
2. Dequeue, which removes an oldest element from the front/head of the collection


Applications.

Printers
Callback queue in Javascript runtime
*/


/* 

Queue implementation.

enqueue(element)    => Add an element to the last/back queue.
dequeue             => remove the oldest(first/head) element in the queue.
peek()              => It is used to get the value of the first index element without removing it. array[0]
isEmpty()           => check if the queue is empty
size()              => get the number of elements in the queue
print()             => visualize the elements in the queue.


*/




class Queue {
    constructor(){
        this.items = [];
    }

    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        this.items.shift();
    }
    isEmpty(){
        return this.items.length === 0;
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[0];
        }
        return null;
    }
    size(){
        return this.items.length;
    }
    print(){
        console.log(this.items.toString());
    }

}


const queue = new Queue();
console.log(queue.isEmpty());

// Enqueue vachi oru oru value ah dhan insert panna mudium.
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.print();
console.log(queue.size());
queue.dequeue()
console.log(queue.peek());
//Above class is not efficient and It has Linear time complexity O(n). How we can be change into Constant time O(1)




class Queue{
    constructor(){
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }

    enqueue(element){
        this.items[this.rear] = element;
        this.rear++
    }

    dequeue(){
        const item = this.items[this.front];
        delete this.items[this.front];  // here, we can use delete because we use Object. => [delete obj.age] like this
        this.front++;
        return item;
    }

    isEmpty(){
        return this.rear - this.front === 0;
    }

    peek(){
        return this.items[this.front];
    }

    size(){
        return this.rear - this.front;
    }

    print(){
        console.log(this.items);
    }
}


const queuee = new Queue();
// First we check if the object is empty or not
console.log(queue.isEmpty());

// Insert some value using enqueue;
queuee.enqueue(10)
queuee.enqueue(20)
queuee.enqueue(30);

console.log(queuee.size());
queuee.print();

console.log(queuee.dequeue());
console.log(queuee.peek());

// Now, this is fine and well structured.




/* Circular queue.

1. First, refer images folder and read the definition of Circulr queue.

This circular queue is fixed size and elements are stored in single block
Also referred to as circular buffer or ring queue and it follows FIFO principle.

During Dequeue, element is removes from the front queue and create empty block spaces.
During Enqueue, those empty blocks are occupied by Enqueue element one by one. 


Enqueue => adds element at the end/tail of the collection
Dequeue => removes an element from the head/front of the collection  [After dequeue and enqueue, both tail and head we give ++ increment]

isFull()            => check if the queue is full
isEmpty()           => check if the queue is empty

peek()              => It is used to get the value of the first index element without removing it. array[0]
size()              => get the number of elements in the queue
print()             => visualize the elements in the queue.

*/


 class CircularQueue{
    constructor(capacity){     // this capacity parameter sets the size of circular queue. for example, capacity = 5.This creates an array with 5 circular empty slots.
        this.items = new Array(capacity);   // We create an fixed size of array with the help of capacity value. Here we create an array with size of 5 slots. (just consider);
        this.capacity = capacity;           // Also, we store the capacity in a variable
        this.currentLength = 0;             // currentLength is keep track of the number of elements in the queue and zero with begin.                                                    
        this.rear = -1        // initially, it doesn't have point out any specific slots to fill the first element 
        this.front = -1       // initially, it doesn't have point out any specific slots to fill the first element
    }

    isFull(){
        return this.currentLength === this.capacity;
    }

    isEmpty(){
        return this.currentLength === 0;
    }

    enqueue(element){ 
        if(!this.isFull()){ 
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear] = element;
            this.currentLength +=1;
            if(this.front === -1){
                this.front = this.rear;        // initially, while inserting the first element, the front position points out the -1. We change from -1 to 0. It is useful for dequeue operation.
            }                                  // this step is only happening (initialization) at initial -1 index position.
        }
    }

    dequeue(){
        if(this.isEmpty()){
            return null;
        }
        const item = this.items[this.front];
        this.items[this.front] = null;
        this.front = (this.front + 1) % this.capacity;  // this line will be helpful to dequeue the next element
        this.currentLength -= 1;
        if(this.isEmpty()){
            this.rear = -1;
            this.front = -1;
        }
        return item;
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[this.front];
        }
        return null;
    }

    print(){
        if(this.isEmpty()){
            console.log('Queue is empty')
        } else{
            let i;
            let str = ''
            for (i = this.front; i !== this.rear; i = (i+1)%this.capacity){
                str += this.items[i] + " "  // " " => It gives space for easy readable.
            }
            str += this.items[i];  // Adding the Last Element. After the loop completes, the index i will be equal to this.rear, pointing to the last element in the queue.
            console.log(str);
        }
    }
 }

 const queues = new CircularQueue(5);
console.log(queues.isEmpty());

queues.enqueue(10)
queues.enqueue(20)
queues.enqueue(30)
queues.enqueue(40)
queues.enqueue(50);

console.log(queues.isFull());
queues.print();


console.log(queues.dequeue());  // this removes the first element at front position
console.log(queues.peek());  // it gives the first element

queues.print();  // Now, it has 4 elements
queues.enqueue(60);
queues.print()   // Now, it has 5 elements. Because, we insert an element in the circular queue using enqueue() method

