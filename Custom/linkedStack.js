const Linkedlist = require('../Custom/with_tail');


// Create a Stack data structure using Linked Lists

class linkedListStack{
    constructor(){
        this.list = new Linkedlist()
    }

    push(value){
        this.list.prepend(value);
    }

    pop(){
        return this.list.removeFromFront();
    }

    peek(){
        return this.list.head.value
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


const stack = new linkedListStack();

console.log(stack.isEmpty());

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.print()
console.log(stack.isEmpty());

console.log(stack.pop());
console.log(stack.peek());
stack.print()