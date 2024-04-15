// link : https://school.programmers.co.kr/learn/courses/30/lessons/42578

const solution = (clothes) => {
  let result = 1;
  const typeCount = new Map();

  clothes.forEach(([item, type]) => {
    if (typeCount.has(type)) {
      typeCount.set(type, typeCount.get(type) + 1);
    } else {
      typeCount.set(type, 1);
    }
  });

  typeCount.forEach((count) => {
    result *= count + 1;
  });

  return result - 1;
};

const clothes = [
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
];
const result = solution(clothes);
console.log("RESULT >>>", result);
