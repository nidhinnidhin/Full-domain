class Graph {
    constructor() {
        this.adjacent = {};
    }

    addVertex(vertex) {
        if (!this.adjacent[vertex]) {
            this.adjacent[vertex] = [];
        }
    }

    addEdges(v1, v2, weight) {
        this.addVertex(v1);
        this.addVertex(v2);
        this.adjacent[v1].push({ node: v2, weight });
        this.adjacent[v2].push({ node: v1, weight }); // undirected graph
    }

    dfs(start, visited = new Set()) {
        if (visited.has(start)) return;

        console.log(start);
        visited.add(start);

        for (let neighbor of this.adjacent[start]) {
            this.dfs(neighbor.node, visited);
        }
    }

    bfs(start) {
        let visited = new Set();
        let queue = [start];

        while (queue.length > 0) {
            let curr = queue.shift();

            if (!visited.has(curr)) {
                console.log(curr);
                visited.add(curr);

                for (let neighbor of this.adjacent[curr]) {
                    if (!visited.has(neighbor.node)) {
                        queue.push(neighbor.node);
                    }
                }
            }
        }
    }

    print() {
        for (let vertex in this.adjacent) {
            let edges = this.adjacent[vertex]
                .map(edge => `${edge.node}(${edge.weight})`) // ✅ fixed string template
                .join(", ");
            console.log(`${vertex} --> ${edges}`); // ✅ fixed string template
        }
    }
}

// ✅ Example Usage
const graph = new Graph();
graph.addEdges('A', 'B', 3);
graph.addEdges('B', 'C', 4);
graph.addEdges('A', 'C', 6);

graph.print();
