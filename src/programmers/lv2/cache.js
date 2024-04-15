// link : https://school.programmers.co.kr/learn/courses/30/lessons/17680

const solution = (cacheSize, cities) => {
  let cache = [];
  let result = 0;

  cities = cities.map((e) => e.toLowerCase());

  for (let i = 0; i < cities.length; i++) {
    const item = cities[i];
    if (cache.includes(item)) {
      result++;
      cache = cache.filter((e) => e !== item);
      if (cacheSize !== 0) {
        cache.push(item);
      }
      continue;
    }

    if (cache.length >= cacheSize) {
      cache.shift();
    }

    if (cacheSize !== 0) {
      cache.push(item);
    }

    result += 5;
  }

  return result;
};

const cacheSize = 0;
const cities = ["a", "b", "c", "b", "a"];
const result = solution(cacheSize, cities);
console.log("RESULT >>>", result);
