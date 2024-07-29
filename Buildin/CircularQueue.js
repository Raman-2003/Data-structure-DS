class CircularQueue{
    constructor(capacity){
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.front = -1;
        this.rear = -1
    }

    isFull(){
        return this.capacity === this.currentLength
    }

    isEmpty(){
        return this.currentLength === 0
    }

    enqueue(value){
        if(!this.isFull()){
            this.rear = (this.rear+1)%this.capacity
            this.items[this.rear] = value;
            this.currentLength += 1;
            if(this.front === -1){
                this.front = this.rear;
            }
        }
    }

    dequeue(){
        if(this.isEmpty()){
            return null;
        }
        const item = this.items[this.front];
        this.items[this.front] = null;
        this.front = (this.front+1)%this.capacity;
        this.currentLength -= 1;
        if(this.isEmpty()){
            this.rear = -1
            this.front = -1
        }
        return item;
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[this.front]
        }
        return null;
    }

    print(){
        if(this.isEmpty()){
            console.log('List is empty');
        }else{
            let i;
            let values = ''
            for(i=this.front; i !== this.rear; i = (i+1)%this.capacity){
                values += this.items[i] + " ";
            }
            values += this.items[i];
            console.log(values);
        }
    }
}

const queue = new CircularQueue(5);

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

queue.print()

queue.dequeue()
queue.print()

console.log('Peek');
console.log(queue.peek())
