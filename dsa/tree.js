class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    isEmpty(){
        return this.root === null;
    }

    insert(data){
        let newNode = new Node(data);
        if(this.isEmpty()){
            newNode = data;
        }
        else{
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode){
        if(newNode.data < root.data){
            if(root.left === null){
                root.left = newNode;
            }
            else{
                this.insertNode(root.left, newNode)
            }
        }
        else{
            if(root.right === null){
                root.right = newNode;
            }
            else{
                this.insertNode(root.right, newNode);
            }
        }
    }

    search(root, data){
        if(!root) return false
        else if(root.data === data){
            return true;
        }
        else if(data < root.data){
            return this.search(root.left, data)
        }
        else{
            return this.search(root.right, data);
        }
    }

     height(root){
        if(!root) return 0;
        return 1+Math.max(this.height(root.left), this.height(root.right))
     }

     isBalanced(root = this.root){
        if(!root){
            return true;
        }
        const leftHeight = this.isBalanced(root.left);
        const rightHeight = this.isBalanced(root.right);

        if(Math.abs(leftHeight - rightHeight) > 1) return false
        return this.isBalanced(root.left) && this.isBalanced(root.right);
     }
}