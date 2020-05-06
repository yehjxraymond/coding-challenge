// https://www.geeksforgeeks.org/data-structures/

interface Edges {
  [fromVertex: string]: string[];
}

export class Graph {
  vertices: string[];
  edges: Edges;

  constructor(_vertices?: string[]) {
    this.vertices = _vertices || [];
    this.edges = {};
    this.vertices.forEach(vertex => {
      this.edges[vertex] = [];
    });
  }

  addVertex(vertex: string) {
    this.vertices.push(vertex);
    this.edges[vertex] = [];
  }

  addEdge(vertex1: string, vertex2: string) {
    if (!this.vertices.includes(vertex1) || !this.vertices.includes(vertex2))
      throw new Error("Vertex does not exist in graph");
    this.edges[vertex1].push(vertex2);
  }

  printGraph() {
    this.vertices.forEach(vertex => {
      console.log(`Vertex ${vertex} has edge(s) to ${this.edges[vertex]}`);
    });
  }

  bfs(startVertex: string): string[] {
    const visited = [startVertex];
    const queue = [...this.edges[startVertex]]; // Initialize with edges of the first vertex
    while (queue.length > 0) {
      const vertexToVisit = queue.shift();
      if (!vertexToVisit) continue;
      visited.push(vertexToVisit);
      const vertexLinked = this.edges[vertexToVisit];
      vertexLinked.forEach(vertex => {
        if (!visited.includes(vertex) && !queue.includes(vertex)) queue.push(vertex);
      });
    }
    return visited;
  }

  dfs(startVertex: string): string[] {
    const visited = [startVertex];
    const queue = [...this.edges[startVertex]];
    while (queue.length > 0) {
      const vertexToVisit = queue.shift();
      if (!vertexToVisit) continue;
      visited.push(vertexToVisit);
      const vertexLinked = this.edges[vertexToVisit];
      vertexLinked.forEach(vertex => {
        if (!visited.includes(vertex) && !queue.includes(vertex)) queue.unshift(vertex);
      });
    }
    return visited;
  }

  // Detect cycle in directed graph
  detectCycle() {
    // Assuming connected DAG
    const startVertex = this.vertices[0];

    const visited = [startVertex];
    const queue = [...this.edges[startVertex]];
    while (queue.length > 0) {
      const vertexToVisit = queue.shift();
      if (!vertexToVisit) continue;
      visited.push(vertexToVisit);
      const vertexLinked = this.edges[vertexToVisit];
      for(let i=0; i<vertexLinked.length; i+=1){
        const vertex = vertexLinked[i];
        if (visited.includes(vertex)) return true;
        if (!queue.includes(vertex)) queue.unshift(vertex);
      };
    }
    return false;
  }

  // Detect cycle in undirected graph

  // Snake and ladder problem
}
