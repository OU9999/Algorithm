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

const dfs = (here, visted = new Set()) => {
  if (visted.has(here)) return;
  visted.add(here);
  console.log(here);
  graph[here].forEach((e) => dfs(e, visted));
};

dfs(1);
