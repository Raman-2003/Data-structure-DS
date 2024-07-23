const LinkedList = require('../Custom/with_tail');


class linkedListQueue{
    constructor(){
        this.list = new LinkedList()
    }

    enqueue(value){
        this.list.append(value)
    }

    dequeue(){
        return this.list.removeFromFront()
    }

    peek(){
        return this.list.head.value;
    }

    isEmpty(){
        return this.list.isEmpty()
    }

    getSize(){
        return this.list.getSize()
    }

    print(){
        return this.list.print()
    }
}

const queue = new linkedListQueue();
console.log('List is empty? ',queue.isEmpty());

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.print()

console.log(queue.dequeue())
queue.print()

console.log(queue.peek())
queue.print()

console.log(queue.getSize());