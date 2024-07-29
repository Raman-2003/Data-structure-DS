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
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head ;
            this.head = node;
        }
        this.size++
    }

    append(value){
        let node =new Node(value)
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.size++
    }

    removeFrontValue(){
        if(this.isEmpty()){
            return;
        }else{
            const value = this.head;
            this.head = value.next; 
            this.size--
            return value;
        }
    }

    removeValueEnd(){
        let removeValue
        if(this.isEmpty()){
            return;
        } 
        if(this.getSize() === 1){
            removeValue = this.tail;
            this.head = null;
            this.tail = null;
        }else{
           let curr = this.head;
           while(curr.next !== this.tail){
            curr = curr.next;
           }
            removeValue = this.tail;
            this.tail = curr;
            this.tail.next = null;
        }
        this.size--
        return removeValue;
    }

    print(){
        if(this.isEmpty()){
            console.log('List is empty');
        }else{
            let curr = this.head;
            let listedValues = ''
            while(curr.next !== null){
                listedValues += `${curr.value} `
                curr = curr.next
            }
            listedValues += curr.value;
            console.log(listedValues);
        }
    }
}


const list = new withTail()
list.prepend(30)
list.prepend(20)
list.prepend(10)

list.append(40)
list.append(50)

list.print()

list.removeFrontValue()
list.print()

list.removeValueEnd()
list.print()