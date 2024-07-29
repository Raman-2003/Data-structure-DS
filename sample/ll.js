class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class linked{
    constructor(){
        this.head = null;
        this.size =0;
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size;
    }
     
    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
               node.next = this.head;
               this.head = node; 
        }
        this.size++
    }

    append(value){ 
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            let curr = this.head;    
            while(curr.next !== null){
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++
    }

    insert(value, index){
        if(index < 0 || index>=this.size){
            return null;
        }
        if(index === 0){
            this.prepend(value);
        }else{
            const node = new Node(value);  // node = 99. node.value = 99 . next = 30 40 50 60 70
            let curr = this.head;
            for(let i=0; i<index-1; i++){
                curr = curr.next;
            }
            node.next = curr.next;
            curr.next = node;
        }
        this.size++
    }  

    removeIndex(index){
        if(index<0 || index>=this.size){
            return null;
        }
        let removeNode;
        if(index === 0){
            removeNode = this.head;
            this.head = removeNode.next;
        }else{
            let curr = this.head;
            for(let i=0; i<index-1; i++){
                curr = curr.next;
            }
            if(curr.next){
                removeNode = curr.next;
                curr.next = removeNode.next;
            }
        }
        this.size--;
        return removeNode
    }

    removeValue(value){
        let removeDeleteValue;
        if(this.head.value === value){
            removeDeleteValue = this.head;
            this.head = removeDeleteValue.next;
        }else{
            let curr = this.head;
            while(curr.next && curr.next.value !== value){
                curr = curr.next;
            }
            removeDeleteValue = curr.next;
            curr.next = removeDeleteValue.next;
        }
        this.size--
        return removeDeleteValue;
    }

   

    print(){
        if(this.isEmpty()){
            console.log('List is Empty');
        }else{
            let curr = this.head;
            let listedValues = ''
            while(curr){
                listedValues += `${curr.value} `
                curr = curr.next;
            }
            console.log(listedValues);
        }
    }
}


const list = new linked();
list.prepend(30)
list.prepend(20)
list.prepend(10)

list.append(40)
list.append(50)

list.insert(99, 2)
list.removeValue(99)

list.print()




/*
Longest word in the string
removeDuplicates 
UTF-8 and ASCII
two dimensional
escape sequence
jagged array

merge two sorted linked list **
first non repeating element
chunk into array of n elements
pascal case to snake case
heterogenous array
kilo byte 
reverse string using recursion
SLL => single linked list
middle element 
flatten two D array
convert a string into titleCase
Re-Order 
recursion only five times
remove value from LL
delete middle element in LL using Two pointer 
insert element in Double linked list
Limitations of Recursion **
Reverse a string using recursion
find the index of the target element within an array of string using binary
disadvantages of Linked List

weakRef, uni code, finding middle element in an array
bit byte units of memory
immutable data types
stack memeory

recursion reversing

*/