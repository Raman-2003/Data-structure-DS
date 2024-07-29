// class Node{
//     constructor(value){
//         this.value = value;
//         this.prev = null;
//         this.next = null;
//     }
// }


// class DoublyLinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     getSize(){
//         return this.size;
//     }

//     prepend(value){
//         const node = new Node(value);
//         if(this.isEmpty()){
//             this.head = node; 
//             this.tail = node;
//         }else {
//             node.next = this.head;
//             this.head.prev = node;
//             this.head = node;
//         }
//         this.size++;
//     }

//     append(value){
//         const node = new Node(value);
//         if(this.isEmpty()){
//             this.head = node;
//             this.tail = node;
//         }else{
//             node.prev = this.tail;
//             this.tail.next = node;
//             this.tail = node;
//         }
//         this.size++
//     }

//     removeFromFront(){
//         if(this.isEmpty()){
//             return null;
//         }
//         const value = this.head.value;
//         this.head = this.head.next;
//         this.size--
//         return value;
//     }

//     removeFromEnd(){
//         if(this.isEmpty()){
//             return null;
//         }
//         const value = this.tail.value;
//         if(this.size === 1){
//             this.head = null;
//             this.tail = null;
//         }else{
//             this.tail = this.tail.prev;
//             this.tail.next = null;
//         }
//         this.size--
//         return value;
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log('List is empty');
//         }else {
//             let curr = this.head;
//             let list = ""
//             while(curr){
//                 list += `${curr.value} `
//                 curr = curr.next;
//             }
//             console.log(list);
//         }
//     }

//     printReverse(){
//         if(this.isEmpty()){
//             console.log('List is empty');
//         }else{
//             let curr = this.tail;
//             let list = ""
//             while(curr){
//                 list += `${curr.value} `
//                 curr = curr.prev;
//             }
//             console.log(list);
//         }
//     }

// }


// const list = new DoublyLinkedList();
// list.append(1)
// list.append(2)
// list.append(3)
// list.prepend(0)
// list.print()    // 0 1 2 3

// list.printReverse()  // 3 2 1 0
// list.removeFromEnd() // 3 can be removed
// list.print()        // 0 1 2

// list.removeFromFront() // 0 can be removed
// list.print()    // 1 2



class Node{
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}


class Double{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
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
            this.head.prev = node;
            this.head = node;
        }
        this.size++
    }

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }
        else{
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.size++
    }

    removeFromFront(){
        if(this.isEmpty()){
            return null;
        }
        let value;
        if(this.size === 1){
            value = this.head
            this.head = null;
            this.tail = null;
        }else{
        value = this.head;
        this.head.prev = null;
        this.head = value.next;   
      }
         this.size-- 
         return value;
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return null;
        }
        let value;
        if(this.size === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size--
    }

    print(){
        if(this.isEmpty()){
            console.log('Llist is empty');
        }
        let curr = this.head;
        let listedValues = ''
        while(curr){
            listedValues += `${curr.value} `
            curr = curr.next
        }
        console.log(listedValues);
    }

    printReverse(){
        if(this.isEmpty()){
            console.log('List is Empty');
        }else{
            let curr = this.tail;
            let listedValues = ''
            while(curr){
                listedValues += `${curr.value} `
                curr = curr.prev;
            }
            console.log(listedValues);
        }
    }
}


const listd = new Double();

listd.prepend(30)
listd.prepend(20)
listd.prepend(10)
listd.append(40)
listd.append(50)
listd.print()

// listd.removeFromFront()
listd.removeFromEnd()
listd.print()
listd.printReverse()











