class Graph{
    constructor(){
        this.adList = {};
    }

    addVertex(vertex){
        if(!this.adList[vertex]){
            this.adList[vertex] = new Set()
        }
    }

    addEdge(v1, v2){
        this.addVertex(v1);
        this.addVertex(v2);
        this.adList[v1].add(v2);
        this.adList[v2].add(v1);
    }

    removeEdge(v1, v2){
        this.adList[v1].delete(v2);
        this.adList[v2].delete(v1)
    }
    removeVertex(vertex){
        if(!this.adList[vertex]) return;
        for(let near of this.adList[vertex]){
            this.removeEdge(vertex, near)
        }
        delete this.adList[vertex]
    }

    display(){
        for(let vertex in this.adList){
            console.log(vertex + ' --> ' + [...this.adList[vertex]].join(','))
        }
    }

    bfs(start){
        let queue = [start];
        let visited = new Set([start]);
        let res = [];

        while(queue.length){
            const vertex = queue.shift();
            res.push(vertex);
            for(let near of this.adList[vertex]){
                if(!visited.has(near)){
                    visited.add(near);
                    queue.push(near)
                }
            }
        }
        return res;
    }

}

const graph = new Graph();
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");

graph.display();

graph.removeEdge("A", "B");
graph.display();