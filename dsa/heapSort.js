class MaxHeap{
    constructor(){
        this.heap = [];
    }

    getParentIndex(i){
        return Math.floor((i - 1)/2);
    }

    getLeftChildIndex(i){
        return 2*i+1;
    }

    getRightChildIndex(i){
        return 2*i+2;
    }
 
    swap(i,j){
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    insert(data){
        this.heap.push(data);
        this.heapifyUp();
    }

    heapifyUp(){
        let index = this.heap.length - 1;
        while(index > 0){
            let parentIndex = this.getParentIndex(index);
            if(this.heap[index] > this.heap[parentIndex]){
                this.swap(parentIndex, index);
                index = parentIndex;
            }
            else{
                break;
            }
        }
    }

    extractMax(){
        if(this.heap.length === 0){
            return null;
        }

        if(this.heap.length === 1){
            return this.heap.pop()
        }

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return max;
    }

    heapifyDown(index){
        let length = this.heap.length;
        while(this.getLeftChildIndex(index) < length){
            let left = this.getLeftChildIndex(index);
            let right = this.getRightChildIndex(index);
            let largerChild = left;

            if(right < length && this.heap[right] > this.heap[left]) {
                largerChild = right;
            }

            if(this.heap[index] < this.heap[largerChild]){
                this.swap(index, largerChild);
                index = largerChild;
            }
            else{
                break;
            }
        }
    }

    size(){
        return this.heap.length;
    }

    heapSort(){
        const result = [];
        while(this.size() > 0){
            result.push(this.extractMax());
        }
        return result;
    }
}

const maxHeap = new MaxHeap();

maxHeap.insert(10);
maxHeap.insert(30);
maxHeap.insert(5);
maxHeap.insert(60);

console.log("Heap Sort:", maxHeap.heapSort()); 