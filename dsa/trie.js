class TrieNode{
    constructor(){
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode();
    }
    
    insert(word){
        let node = this.root;
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode()
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }
    
    search(word){
        let node = this.root;
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return node.isEndOfWord;
    }

    findNode(word){
        let node = this.root;
        for(let char of word){
            if(!node.children[char]) return null;
            node = node.children[char];
        }
        return node;
    }

    collectWords(node, prefix, result){
        if(node.isEndOfWord) result.push(prefix);

        for(let char in node.children){
            this.collectWords(node.children[char], prefix+char, result)
        }
    }

    autoCompletion(prefix){
        let node = this.findNode(prefix);
        if(!node){
            return [];
        }
        let result = [];
        this.collectWords(node, prefix, result);
        return result;
    }
}

let trie = new Trie()
trie.insert('nidhin')
trie.insert('nidd') 
trie.insert('sdg') 

console.log(trie.search('nidd'))