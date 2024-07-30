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
        const node = new Node(value);
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
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.size++
    }



    removeFront(){
        let removefront;
        if(this.size === 1){
            removefront = thiss.head;
            this.head = null;
            this.tail = null;
        }else{
            removefront = this.head;
            this.head = removefront.next;
        }
           this.size--
           return removefront
    }


    


    // removeEnd(){
    //     let removeEnd;
    //     if(this.isEmpty()){
    //         return null;
    //     }
    //     console.log(this.size);
    //     if(this.size === 1){
    //         removeEnd = this.tail;
    //         this.head = null;
    //         this.tail = null;
    //     }else{
    //         let curr = this.head;
    //         while(curr.next !== this.tail){
    //             curr = curr.next;
    //         }
    //         removeEnd = this.tail;
    //         this.tail = curr;
    //         this.tail.next = null;
    //     }
    //     this.size--
    //     return removeEnd;
    // }

    removeEnd(){
        if(this.isEmpty()){
            return null;
        }
        let removeNode;
        if(this.size === 1){
            removeNode = this.tail;
            this.head = null;
            this.tail = null;
        }else{
            let curr = this.head;
            while(curr.next !== this.tail){
                curr = curr.next;
            }
            if(curr.next){
                removeNode = this.tail;
                this.tail = curr;
                this.tail.next = null;
            }
        }
        this.size--
        return removeNode
    }

    print(){
        if(this.isEmpty()){
            console.log('List is empty');
        }else{
            let curr = this.head;
            let listedValues = ''
            while(curr.next !== null){
                listedValues += `${curr.value} `
                curr = curr.next;
            }
            listedValues += curr.value;
            console.log(listedValues);
        }
    }
}


const tails = new tail()

tails.prepend(30)
tails.prepend(20)
tails.prepend(10)

tails.append(40)
tails.append(50)

tails.print()


tails.removeFront()
tails.print()

tails.removeEnd()
tails.print()


