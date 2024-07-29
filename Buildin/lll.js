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
            this.head  = node;
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
        }else{
            let curr = this.head;
            while (curr.next !== null){
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++
    }

    insert(value, index){
        if(index<0 || index>=this.size){
            return null;
        }
        if(index === 0){
            this.prepend(value)
        }else{
            let curr = this.head;
            let node = new Node(value);
            for(let i=0; i<index-1; i++){
                curr = curr.next;
            }
            node.next = curr.next;
            curr.next = node;
            this.size++;
        }
    }

    removeIndex(index){
        if(index<0 || index>=this.size){
            return null;
        }
        let removeIndex;
        if(index === 0){
            removeIndex = this.head;
            this.head = removeIndex.next;
        }else{
            let curr = this.head;
            for(let i=0; i<index-1; i++){
                curr = curr.next;
            }
            removeIndex = curr.next;
            curr.next = removeIndex;
        }
        this.size--
        return removeIndex;
    }

    removeValue(value){
        let removeValue;
        if(this.head.value === value){
            removeValue = this.head;
            this.head = removeValue.next;
        }else{
            let curr = this.head;
            while(curr.next && curr.next.value !== value){
                curr = curr.next;
            }
            if(curr.next){
                removeValue = curr.next;
                curr.next = removeValue.next;
            }
            this.size--
            return removeValue;
        }
    }

    search(value){
        if(this.isEmpty()){
            return null;
        }else{
            let i=0;
            let curr = this.head;
            while(curr){
                if(curr.value === value){
                    return i;
                }
                i++
                curr = curr.next;
            } 
        }
        return -1
    }

    reverse(){
        let curr = this.head;
        let prev = null;
        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next
        }
        this.head = prev;
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

console.log(list.search(10))

list.print()


list.reverse()
list.print();