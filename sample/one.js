// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class linked{
//     constructor(){
//         this.head = null;
//         this.size = 0
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
//         }else{
//             node.next = this.head;
//             this.head = node;
//         }
//         this.size++
//     }

//     append(value){
//         const node = new Node(value);
//         if(this.isEmpty()){
//             this.head = node;
//         }else{
//             let curr = this.head;
//             while(curr.next !== null){
//                 curr = curr.next;
//             }
//             curr.next = node; 
//         }
//         this.size++
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log('List is Empty');
//         }else{
//             let listedValues = ''
//             let curr = this.head;
//             while(curr){
//                 listedValues += `${curr.value} `
//                 curr = curr.next;
//             }
//             console.log(listedValues);
//         }
//     }
// }


// const lni = new linked()

// lni.prepend(30)
// lni.prepend(20)
// lni.prepend(10)
// lni.append(40)
// lni.append(50)
// lni.print()


class CircularQueue{
    constructor(capacity){
        this.capacity = capacity;
        this.items = new Array(capacity)
        this.front = -1;
        this.rear = -1;
        this.currentLength = 0;
    }


    isFull(){
        return this.capacity === this.currentLength;
    }

    isEmpty(){
        return this.currentLength === 0
    }

    enqueue(value){
        if(!this.isFull()){
            this.rear = (this.rear+1)%this.capacity;
            this.items[this.rear] = value;
            this.currentLength += 1;
            if(this.front === -1){
                this.front = this.rear;
            }
        }else{
            console.log('Queue is Full');
        }
    }

    dequeue(){
        if(this.isEmpty()){
            return null;
        }else{
            let removeValue = this.items[this.front]
            this.items[this.front] = null;
            this.front = (this.front+1)%this.capacity;
            this.currentLength -= 1;
            if(this.isEmpty()){
                this.rear = -1
                this.front = -1;
            }
            return removeValue;
        }
       
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[this.front];
        }else{
            return -1;
        }
    }

    print(){
        if(this.isEmpty()){
            console.log('Queue is Empty');
        }else{
            let listedValues = ''
            let i;
            for(i=this.front; i !== this.rear; i=(i+1)%this.capacity){
                listedValues += this.items[i] + " "
            }
            listedValues += this.items[i]
            console.log(listedValues);
        }
    }
}


const cir = new CircularQueue(5)
cir.enqueue(10)
cir.enqueue(20)
cir.enqueue(30)
cir.dequeue()
cir.print()

console.log(cir.peek());