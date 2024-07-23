class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Linkedlist{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    print(){
        if(this.isEmpty()){
            console.log('List is empty');
        }else{
            let curr = this.head;
            let listValues = ''
            while(curr){
                listValues += `${curr.value} `
                curr = curr.next;
            }
            console.log(listValues);
        }
    }

    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;   // We point both head and tail at the newly created node
        }else{
            node.next = this.head;    // if not empty, we connect the new node to the head of the existing list. indha edathula dhan Prepend perform pamdrom.
            this.head = node;         // we reassign "head to the new node" which is the first node in the list. Indha rendu line code um understand aaganum
        }
        this.size++  // check prepend tail.png image for clarification
    }

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;  // Because this line shows the append. We need to extend the tail using .next=node
            this.tail = node;
        }
        this.size++  // check append tail.png image for referenece
    }

    removeFromFront(){
        if(this.isEmpty()){
            return null;
        }
        const value = this.head.value;  // head la irukra value ah extract pandrom
        this.head = this.head.next;     // current position la irundhu "next" ku move aagurom.
        this.size--     // head move aanadhaala starting posistion la oru slot irukum. minus pandradhaala remove aagidum
        return value;   // remove panna value ah return pandrom.
    }

    removeFromEnd(){
        // scenario 1 [isEmpty() checking]
        if(this.isEmpty()){
            return null;    // no node can be removed
        }

        const value = this.tail.value // getting hold of the value in the tail element. tail is always at the end of the list.
        
        // scenario 2 [checks if there is one node in the list]
        if(this.size === 1){
            this.head = null;
            this.tail = null;   // we set both head and tail to null as the list would be empty after removing the node
        }else {
            // scenario 3  [hold of the node that is pervious to the tail node]
            let prev = this.head;
            while(prev.next !== this.tail){
                prev = prev.next;
            }
            prev.next = null;
            this.tail = prev;  // visit delete last node using tail.png image
        }
        this.size--
        return value
    }
}

module.exports = Linkedlist


/*   Command this due to export it into another file linkedStack.js

const list = new Linkedlist();
console.log('List is empty? ', list.isEmpty());
console.log('List size ', list.getSize());

list.append(1)
list.append(2)
list.append(3)
list.prepend(0)
list.print()


list.removeFromFront()
list.print()


list.removeFromEnd()
list.print()

*/



// prepend, append, removeFromFront is Constant time complexities O(1)
// RemoveFromEnd is a Linear time comlpexities O(n). 