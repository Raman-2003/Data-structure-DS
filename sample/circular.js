class CircularQueue{
    constructor(capacity){
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.front = -1;
        this.rear = -1;
    }

    isFull(){
        return this.currentLength === this.capacity;
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
            const item = this.items[this.front];
            this.items[this.front] = null;
            this.front = (this.front+1)%this.capacity;
            this.currentLength -= 1;
            if(this.isEmpty()){
                this.front = -1;
                this.rear = -1
            }
            return item;
        }
    }

    peek(){
        if(!this.isEmpty()){
             return this.items[this.front]
        }else{
            return -1
        }
    }

    print(){
        if(this.isEmpty()){
            console.log('List is Empty');
        }else{
            let listedValues = ''
            let i;
            for(i=this.front; i!==this.rear; i=(i+1)%this.capacity){
                listedValues += this.items[i] + ' '
            }
            listedValues += this.items[i]
            console.log(listedValues);
        }
       
    }
}


const circular = new CircularQueue(5);

circular.enqueue(10)
circular.enqueue(20)
circular.enqueue(30)

circular.print()

circular.dequeue()
circular.print()