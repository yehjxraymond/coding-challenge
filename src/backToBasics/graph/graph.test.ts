import { Graph } from "./graph";

it("builds a graph", () => {
  const graph = new Graph(["a", "b", "c"]);
  graph.addEdge("a", "c");
  graph.addEdge("c", "b");
  graph.addEdge("c", "a");
  expect(graph.vertices).toEqual(["a", "b", "c"]);
  expect(graph.edges).toEqual({ a: ["c"], b: [], c: ["b", "a"] });
});

it("does BFS traversal", () => {
  const graph = new Graph(["a", "b", "c", "d"]);
  graph.addEdge("a", "c");
  graph.addEdge("a", "b");
  graph.addEdge("c", "a");
  graph.addEdge("b", "c");
  graph.addEdge("c", "d");
  graph.addEdge("d", "d");
  expect(graph.bfs("a")).toEqual(["a", "c", "b", "d"]);
  expect(graph.bfs("c")).toEqual(["c", "a", "d", "b"]);
});

it("does DFS traversal", () => {
  const graph = new Graph(["a", "b", "c", "d"]);
  graph.addEdge("a", "c");
  graph.addEdge("a", "b");
  graph.addEdge("c", "a");
  graph.addEdge("b", "c");
  graph.addEdge("c", "d");
  graph.addEdge("d", "d");
  expect(graph.dfs("a")).toEqual(["a", "c", "d", "b"]);
  expect(graph.dfs("c")).toEqual(["c", "a", "b", "d"]);
});

it("detects cycle", () => {
  const graph1 = new Graph(["a", "b"]);
  graph1.addEdge("a", "b");
  graph1.addEdge("b", "a");
  expect(graph1.detectCycle()).toEqual(true);

  const graph2 = new Graph(["a", "b"]);
  graph2.addEdge("a", "b");
  expect(graph2.detectCycle()).toEqual(false);
});
