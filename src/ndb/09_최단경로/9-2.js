class PriorityQueue {
  constructor() {
    this.heap = [null];
  }

  insert(value) {
    this.heap.push(value);
    let current = this.heap.length - 1;
    while (
      current > 1 &&
      this.heap[Math.floor(current / 2)] > this.heap[current]
    ) {
      [this.heap[Math.floor(current / 2)], this.heap[current]] = [
        this.heap[current],
        this.heap[Math.floor(current / 2)],
      ];
      current = Math.floor(current / 2);
    }
  }

  remove() {
    let smallest = this.heap[1];
    if (this.heap.length === 2) {
      this.heap.splice(1, 1);
    } else {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);
      if (this.heap.length === 3) {
        if (this.heap[1] > this.heap[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        }
        return smallest;
      }
      let current = 1;
      let leftChildIndex = current * 2;
      let rightChildIndex = current * 2 + 1;
      while (
        this.heap[current] >= this.heap[leftChildIndex] ||
        this.heap[current] >= this.heap[rightChildIndex]
      ) {
        if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
          [this.heap[current], this.heap[leftChildIndex]] = [
            this.heap[leftChildIndex],
            this.heap[current],
          ];
          current = leftChildIndex;
        } else {
          [this.heap[current], this.heap[rightChildIndex]] = [
            this.heap[rightChildIndex],
            this.heap[current],
          ];
          current = rightChildIndex;
        }
        leftChildIndex = current * 2;
        rightChildIndex = current * 2 + 1;
        if (
          this.heap[leftChildIndex] === undefined ||
          this.heap[rightChildIndex] === undefined
        ) {
          break;
        }
      }
    }
    return smallest;
  }

  isEmpty() {
    // 이 부분을 추가했습니다.
    return this.heap.length === 1;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.distance = Infinity;
    this.previous = null;
    this.edges = {}; // 이 부분을 추가했습니다.
  }
}

class Dijkstra {
  constructor() {
    this.nodes = {};
    this.priorityQueue = new PriorityQueue();
  }

  addNode(value) {
    this.nodes[value] = new Node(value);
  }

  addEdge(node1, node2, weight) {
    // 이 부분은 그래프의 특성에 따라 달라질 수 있습니다.
    // 아래 코드는 무방향 그래프를 가정하고 있습니다.
    this.nodes[node1].edges[node2] = weight;
    this.nodes[node2].edges[node1] = weight;
  }

  computeShortestPath(start) {
    this.nodes[start].distance = 0;
    this.priorityQueue.insert({ node: this.nodes[start], priority: 0 });

    while (!this.priorityQueue.isEmpty()) {
      let { node } = this.priorityQueue.remove();
      for (let neighbor in node.edges) {
        let newDistance = node.distance + node.edges[neighbor];
        if (newDistance < this.nodes[neighbor].distance) {
          this.nodes[neighbor].distance = newDistance;
          this.nodes[neighbor].previous = node;
          this.priorityQueue.insert({
            node: this.nodes[neighbor],
            priority: newDistance,
          });
        }
      }
    }
  }
}

// 노드 생성
let dijkstra = new Dijkstra();

for (let i = 1; i <= 6; i++) {
  dijkstra.addNode(i);
}

// 간선 추가
dijkstra.addEdge(1, 2, 2);
dijkstra.addEdge(1, 3, 5);
dijkstra.addEdge(1, 4, 1);
dijkstra.addEdge(2, 3, 3);
dijkstra.addEdge(2, 4, 2);
dijkstra.addEdge(3, 2, 3);
dijkstra.addEdge(3, 6, 5);
dijkstra.addEdge(4, 3, 3);
dijkstra.addEdge(4, 5, 1);
dijkstra.addEdge(5, 3, 1);
dijkstra.addEdge(5, 6, 2);

// 최단 경로 계산
dijkstra.computeShortestPath(1);

console.log(dijkstra.nodes);
