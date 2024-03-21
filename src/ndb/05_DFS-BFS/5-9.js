const graph = {
  1: [2, 3, 8],
  2: [7],
  3: [4, 5],
  4: [],
  5: [],
  6: [],
  7: [6, 8],
  8: [],
};

const bfs = (start) => {
  let visted = [];
  let needVisit = [];

  needVisit.push(start);

  while (needVisit.length !== 0) {
    const node = needVisit.shift();

    console.log("node >>", node);

    if (!visted.includes(node)) {
      visted.push(node);
      needVisit.push(...graph[node].filter((x) => !visted.includes(x)));
      console.log("need visit>>", needVisit);
    }
  }
};

bfs(1);
