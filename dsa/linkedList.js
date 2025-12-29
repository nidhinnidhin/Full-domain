class Node{
    constructor(data){
        this.data = data;
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
    
    append(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next){
            current = current.next
        }
        current.next = newNode;
    }
    
    prepend(data){
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    
    reverse(){
        let current = this.head;
        let prev = null;
        
        while(current){
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
    
    deleteSpecificIndex(index){
        if(!this.head){
            return 'empty'
        }
        
        if(index === 0){
            this.head = this.head.next;
            return;
        }
        
        let prev = null;
        let current = this.head;
        let count = 0;
        
        while(current && count < index){
            prev = current;
            current = current.next;
            count++;
        }
        
        if(current){
            prev.next = current.next;
        }
    }
    
    print(){
        let current = this.head;
        let res = ''
        while(current){
            res += current.data + ' ---> '
            current = current.next;
        }
        console.log(res + 'null')
    }
    
    removeDuplicates(){
        let set = new Set();
        let current = this.head;
        let prev = null;
        while(current){
            if(set.has(current.data)){
                prev.next = current.next;
            }
            else{
                set.add(current.data);
                prev = current;
            }
            current = current.next;
        }
    }
    
    findMid(){
        let fast = this.head;
        let slow = this.head;
        
        while(fast.next && fast.next.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.data
    }
    
    addMid(data){
        let newNode = new Node(data);
        if(!this.head){
            return false;
        }
        let slow = this.head;
        let fast = this.head;
        while(fast.next && fast.next.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        newNode.next = slow.next;
        slow.next = newNode;
    }
    
    deleteMid(){
        if(!this.head){
            this.head = null;
            return;
        }
        let slow = this.head;
        let fast = this.head;
        let prev = null;
        while(fast && fast.next){
            prev = slow
            slow = slow.next;
            fast = fast.next.next;
        }
        prev.next = slow.next
    }
}

let li = new LinkedList();
li.append(10)
li.append(20)
li.append(30)
li.append(40)
li.append(40)
li.append(40)
li.append(40)
li.prepend(100)
li.addMid(100000)
li.deleteMid()
// li.reverse()
// li.deleteSpecificIndex(1)
// li.removeDuplicates()
console.log(li.findMid())
li.print()