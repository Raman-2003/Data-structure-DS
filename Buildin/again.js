class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Linked{
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
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
        }else{
            let current = this.head;
            while(current.next !== null){
                current = current.next
            }
            current.next = node;
        }
        this.size++
    }

    insert(value, index){
        if(index<0 || index>=this.size){
            return;
        }
        if(index === 0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let current = this.head;
            for(let i=0; i<index-1; i++){
                current = current.next;
            }
            node.next = current.next;
            current.next = node;
            this.size++
        }
    }

    removefrom(index){
        if(index<0 || index>this.size){
            return null;
        }
        let removeNode
        if(index === 0){
            removeNode = this.head;
            this.head = removeNode.next
            this.size--
            return removeNode
        }else{
            let current = this.head;
            for(let i=0; i<index-1; i++){
                current = current.next
            }
            removeNode = current.next;
            current.next = removeNode.next;
            this.size--
            return removeNode;
        }
    }

    removeValue(value){
        if(this.isEmpty()){
            return 
        }
        let removeValue;
        if(value === this.head.value){
            removeValue = this.head;
            this.head = removeValue.next
            return removeValue;
        }else{
            let current = this.head;
            while(current.next && current.next.value !== value){
                current = current.next;
            }
            if(current.next){
                removeValue = current.next;
                current.next = removeValue.next;
                return removeValue;
            }
        }
        this.size--
    }

    removeDuplicates(){
        if(this.isEmpty()){
            return null;
        }
        let curr = this.head;
        let seenValues = new Set();
        seenValues.add(curr.value)
        
        while(curr.next !== null){
            if(seenValues.has(curr.next.value)){
                    curr.next = curr.next.next;
                    this.size--
            }else{
                seenValues.add(curr.next.value);
                curr = curr.next;
            }
        }
    }

    search(value){
        let i=0;
        let curr = this.head;
        while(curr){ 
              if(curr.value === value){
                  return i;
              }
           curr = curr.next;
           i++
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
            curr = next;
        }
        this.head = prev;
    }

    print(){
        if(this.isEmpty()){
            console.log('List is empty');
        }else{
            let current = this.head;
            let listValues = ''
            while(current !== null){
                listValues += `${current.value} `
                current = current.next;
            }
            console.log(listValues);
        }
    }
}


const list = new Linked();
list.prepend(30)
list.prepend(20)
list.prepend(10)

list.append(40)
list.append(50)

list.insert(99, 2)
// list.removefrom(2)
// list.removeValue(99)

list.print()

console.log(list.search(99))

list.reverse()
list.print()

// list.removeDuplicates()
// list.print()