const Linkedlist = require("../Custom/with_tail");

class Node{
    constructor(value){
       this.value = value;
        this.next = null;
    }
}

class withTail{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size;
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;  // semma logic
            this.tail = node;
        }
        this.size++
    }
 
    removeFromFront(){
        if(this.isEmpty()){
            return null;
        }else{
            let removeNode;
            removeNode = this.head;
            this.head = removeNode.next;
            this.size--
            return removeNode
        }
    }

    removeAtEnd(){
        if(this.isEmpty()){
            return null;
        }
        let removeValue;
        if(this.getSize() === 1){
            removeValue = this.head;
            this.head = null;
            this.tail = null;
        }else{
            let current = this.head;
            while(current.next !== this.tail){
                current = current.next;
            }
            console.log("this.tail value ", this.tail);
            console.log("Current value: ", current);
            console.log("This.tail value ", this.tail);
            removeValue = this.tail;
            this.tail = current;
            this.tail.next = null;
        }
        this.size--
        return removeValue
    }

    /*
    10 20 30 40 50
    Current value:  Node { value: 40, next: Node { value: 50, next: null } }
    This.tail value  Node { value: 50, next: null }
    10 20 30 40
    */


    
    print(){
        if(this.isEmpty()){
            console.log('List is empty');
        }
        let curr = this.head;
        let values = ''
        while(curr.next !== null){
            values += `${curr.value} `
            curr = curr.next;
        }
        values += curr.value;
        console.log(values);
    }
}


const list = new withTail();
list.prepend(30)
list.prepend(20)
list.prepend(10)

list.append(40)
list.append(50)

list.print()

list.removeAtEnd()
list.print()

// list.removeFromFront()
// list.removeFromFront()
// list.print()


