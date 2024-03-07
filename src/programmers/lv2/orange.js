// link : https://school.programmers.co.kr/learn/courses/30/lessons/138476

const solution = (k, tangerine) => {
  let hashMap = new Map();
  let temp = [];
  let answer = 0;

  tangerine.map((e) => {
    if (hashMap.has(e)) {
      hashMap.set(e, hashMap.get(e) + 1);
    } else {
      hashMap.set(e, 1);
    }
  });

  for (let [key, value] of hashMap) {
    temp.push([key, value]);
  }

  temp = temp.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < temp.length; i++) {
    if (k <= 0) break;

    k -= temp[i][1];
    answer += 1;
  }

  return answer;
};

const k = 6;
const tangerine = [1, 3, 2, 5, 4, 5, 2, 3];
const result = solution(k, tangerine);
console.log("RESULT >>>", result);
