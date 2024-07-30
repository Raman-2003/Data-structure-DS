class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prv = null;
    }
}

class Double{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    getSize(){
        return this.size;
    }

    isEmpty(){
        return this.size === 0;
    }

    prepend(value){
        let node = new Node(value);
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
        let node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.size++
    }

    removeFrontValue(){
        if(this.isEmpty()){
            return;
        }
        let removeValue;
        if(this.size === 1){
            removeValue = this.head;
            this.head = null;
            this.tail = null;
        }else{
            removeValue = this.head;
            this.head.prev = null;
            this.head = removeValue.next;
        }
        this.size--
        return removeValue;
    }

    removeValueEnd(){
        if(this.isEmpty()){
            return null;
        }
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
            console.log('List is Empty');
        }
        let listedValues = ''
        let curr = this.head;
        while(curr){
            listedValues += `${curr.value} `
            curr = curr.next;
        }
        console.log(listedValues);
    }
    
}


const dou = new Double();
dou.prepend(30)
dou.prepend(20)
dou.prepend(10)
dou.append(40)
dou.append(50)
dou.print()


dou.removeFrontValue()
dou.print()

dou.removeValueEnd()
dou.print()