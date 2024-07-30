class Node{
    constructor(value){
        this.value = value;   
        this.next = null;
    }
}

class tail{
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
        let node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
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
            this.tail.next = node;
            this.tail = node;
        }
        this.size++
    }

    removefromFront(){
          if(this.isEmpty()){
                return;
          }
          let removeValue = this.head;
          this.head = removeValue.next;
          this.size--
          if(this.isEmpty()){
            this.head = null;
            this.tail = null;
          }
          return removeValue
    }

    removeValueEnd(){
        if(this.isEmpty()){
            return;
        }
        let curr = this.head;
        while(curr.next !== this.tail){
            curr = curr.next;
        }
        let removeValue = this.tail;
        this.tail = curr;
        this.tail.next = null;
        this.size--;
        return removeValue
    }

    print(){
        if(this.isEmpty()){
            console.log('List is Empty');
        }
        let listValues = ''
        let curr = this.head;
        while(curr !== this.tail){
            listValues += `${curr.value} `
            curr = curr.next;
        }
        listValues += curr.value;
        console.log(listValues);
    }
}


const list = new tail()

list.prepend(30)
list.prepend(20)
list.prepend(10)

list.append(40)
list.append(50)

list.print()

list.removeValueEnd()
list.print()