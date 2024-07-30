class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class linked{
    constructor(){
        this.head = null;
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

    print(){
        if(this.isEmpty()){
            console.log('List is Empty');
        }else{
            let listedValues = ''
            let curr = this.head;
            while(curr){
                listedValues += `${curr.value} `
                curr = curr.next;
            }
            console.log(listedValues);
        }
    }
}


const lni = new linked()

lni.prepend(30)
lni.prepend(20)
lni.prepend(10)
lni.append(40)
lni.append(50)
lni.print()