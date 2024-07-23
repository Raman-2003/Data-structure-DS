/*

Linked List

A Linked list is a linear data structure that includes a series of connected notes 
Each node consists of a data value and a pointer that points to the next node.
||
*==> the order of the nodes is not given by their physical placement in memory. instead each node
     points to the next.


The benifit of using linked list over conventional array data structure is that, The list of elements can be
easily inserted or removed without reallocation or reorganization pf the entire structure.

this is due to items need not be stored continuously in memory.

but the minus is, Random access of elements is not feasible and aceessing an element has linear time complexity.

Linked list supports three main operations is that,
1. Insertion = to add a element at the beginning, end or at a given index of the list
2. Deletion  = to remove an element given its index or value.
3. Search    = to find an element given its value. 


Applications of Linked List

1. Using Linked List, we can implement Stacks and Queues Data structure
Image viewer => We can see photos continuously in a slideshow

*/



class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Linkedlist{
    constructor(){
        this.head = null; // Initially, it is empty and point at null. It has null in the head(first) position. Whenever we create linked-list, the head position points out the null.
        this.size = 0;
    }  // Whenever we add a new node we will increment the value. When we remove a node, we willdecrement the size value. 

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    // seperate video for this prepend method
    // this method is used to prepend the value in the list
    prepend(value){
       const node = new Node(value);  // "new" keyword => new instance create pandrom(current value vachi). Node() means "Node" class call pandrom. () => is used to call the Node constructor
       if(this.isEmpty()){            // IsEmpty true ah irundhal, this.head = null nu irukunm. Ippo first time oru value ah insert pandra apo isEmpty "true" ah dhan irukum. Apo, first value ah this.head ku assign pandrom. Ipo this.head la edho oru value irukum.
        this.head = node;             // head node always point out the current insert node
       } else{
          node.next = this.head;      // next node create pannum podhu, kandippa isEmpty false ah dhan irukum. So, straight ah else ku varum. ipo current node oda connectivity and pointer kaga this.head(10) ah node.next ku assign pandrom (POINTER ah).
          this.head = node;           // // head node always point out the current node. Current node ah again this.head la assign pandrom.
       }
      this.size++
    }
    // This prepend does not care about the existing values in theh lists. So, It has Constant O(1)


     // this method is used to append the value 
    // Remember, the head pointer should always point at the first(current) node in the list
    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            let prev = this.head;   // "let" keyword dhan use pannanum. "const" use panna kudadhu.
            while(prev.next){
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++
    }
    // This append does care about the existing values in theh lists using While loop at the last. So, It has Linear O(n)


    /*
    Insert case.

    this case, we have three cases. 
        First => invalid index
            This means, the index is less than Zero or Index is greater than size of the list   
        Second = > index equal to Zero. 
            Means it needs to insert theh value at beginning of the list. We cuse prepend method.
        
    */

    insert(value, index){
        if(index < 0 || index > this.size){
            return 
        }
        if(index === 0){
            this.prepend(value);
        }else {
            const node = new Node(value);
            let prev = this.head;
            for(let i=0; i<index-1; i++){
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    removeFrom(index){
        if(index < 0 || index >= this.size){
            return null;
        }
        // We need to store the current head node in a custom variable.
        let removeNode;
        if(index === 0){
            removeNode = this.head;
            this.head = this.head.next;
        }else{
            let prev = this.head;
            for(let i=0; i< index-1; i++){
                prev = prev.next;
            }
            removeNode = prev.next;
            prev.next = removeNode.next;
        }
        this.size--
        return removeNode;
    }

    removeValue(value){
        if(this.isEmpty()){
            return null;
        }
        if(this.head.value === value){
            this.head = this.head.next;
            this.size--;
            return value;
        }else {
            let prev = this.head;
            while(prev.next && prev.next.value !== value){  // this line checks prev.next values irukanum. because value check panna. Suppose false aana exit aagidum. prev.next true ah irundhal, andha prev.next.value not equalt to the given value ah irundhal, 149 line ku pooiduvom. Next loop run aagarthuku, next value ah assign pannidum indha line.
                prev = prev.next;
            }
// When the "while" loop exists, one or two things are possible. One, the previous pointer has stopped at the node  .  previous to the node which has to be removed. So there does exist a node to be removed
            if(prev.next){
                const removeNode = prev.next;
                prev.next = removeNode.next;
                this.size--;
                return value;
            }
            return null;  // Howerevr, if the previous pointer reached the last node in the list and there is no nextt node. We return null as no node could be deleted.
        }

    }


    search(value){
        if(this.isEmpty()){
            return null;
        }
        let i= 0;
        let curr = this.head;
        while(curr){
            if(curr.value === value){
                return i;
            }
            curr = curr.next;
            i++
        }
        return -1   // if the node was not found in the list and we return -1
    }

    reverse(){
        let prev = null;
        let curr = this.head;
        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

    //seperate video for this print method
    print(){
        if(this.isEmpty()){
            console.log('List is empty');
        }else{
            let curr = this.head;  // curr === current value. So, this.head la dhan current(starting) value irukum. Adha dhan fitst print pannanum. Adhula irundhu dhan start um aaganum.
            let listValues = ''    // It stores the node values at one by one.

            while(curr){
                listValues += `${curr.value} `
                curr = curr.next;
            }
            console.log(listValues);
        }
    }

   


 
}

const list = new Linkedlist();
console.log("List is empty? ", list.isEmpty());
console.log("Size of lsit ", list.getSize());

list.insert(10, 0);

list.insert(20, 1);

list.insert(30, 2);

list.insert(40, 3);

list.insert(50, 4);

list.print()

// console.log(list.removeFrom(4));
// list.print()

// console.log(list.removeValue(40));
// list.print()

// console.log(list.search(40));  // 3
// console.log(list.search(60));  // -1

list.reverse()
list.print()










// removeValue()
// We nned to get hold of the node previous to the node that contains the value.
// For example, to delete node 25, we need a reference to node 20.
// That is why, we are going to use a temporary pointer called previous.
// We will start off with previous at the head node.
// we will traverse the list advancing the previous pointer till we reach the node that is previous to the node that conatins 25.
// we have to do is change [previous.next = removeNode.next]. This wiill provide continuity required.
// 
// removeValue() la, removing a head node is always a constant time comlpexities.
// However, removing a node  in general has a linear time complexities as the node  to be removed might be the last node in the list.



// Linked List Reverse
// Generally, head node points at 1, 1 points at 2, 3 points at null.
// Now, we can be make it reverse using such steps.
// we are going to create two temporary pointers. Previous(prev) and Current(curr)
// Previous which does not point at any node technically points at null.
// Current which points at head. [Preview image no intro.png]. 
// We follow four steps.
// Step one we create a new temporary pointer called "next" and point it to current.next
// we then set, current.next = previous. So 1 now points at "null" instead of pointing at 2. The direction has reversed
// we then update previous => current. So previous now points from null to one. 
// then, current now points at two
//
// "next" points at current.next
//  current.next points at previous (here we change the arrow from right indicator to left indicator)
//  previous points at current
//  finally, current points at next. [Preview reverse 2]
//  
//  
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//