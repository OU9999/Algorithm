// link : https://school.programmers.co.kr/learn/courses/30/lessons/87946

const solution = (k, dungeons) => {
  let result = 0;
  let visited = new Array(dungeons.length).fill(false);

  const dfs = (k, count) => {
    for (let i = 0; i < dungeons.length; i++) {
      if (k >= dungeons[i][0] && !visited[i]) {
        visited[i] = true;
        dfs(k - dungeons[i][1], count + 1);
        visited[i] = false;
      }
    }

    result = Math.max(result, count);
  };

  dfs(k, 0);

  return result;
};

const k = 80;
const dungeons = [
  [80, 20],
  [50, 40],
  [30, 10],
];
const result = solution(k, dungeons);
console.log("RESULT >>>", result);
