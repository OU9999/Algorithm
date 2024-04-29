// link : https://school.programmers.co.kr/learn/courses/30/lessons/17677

const generateStrMap = (str) => {
  const splitWord = str.toUpperCase().split("");

  let i = 0;
  let tempMap = new Map();

  while (i < splitWord.length - 1) {
    const onlyEnglish = /^[A-Z]*$/;
    if (onlyEnglish.test(splitWord[i]) && onlyEnglish.test(splitWord[i + 1])) {
      const word = splitWord[i] + splitWord[i + 1];

      if (tempMap.has(word)) tempMap.set(word, tempMap.get(word) + 1);
      else tempMap.set(word, 1);
    }

    i++;
  }

  return tempMap;
};

const getIntersectionCount = (str1Map, str2Map) => {
  let sum = 0;
  for (const [key, value] of str1Map) {
    if (str2Map.has(key)) {
      sum += Math.min(value, str2Map.get(key));
    }
  }

  return sum;
};

const getUnionCount = (str1Map, str2Map) => {
  let sum = 0;

  for (const [key, value] of str1Map) {
    sum += value;
  }

  for (const [key, value] of str2Map) {
    if (str1Map.has(key)) {
      if (str1Map.get(key) < value) {
        sum -= str1Map.get(key);
        sum += value;
      }
    } else {
      sum += value;
    }
  }

  return sum;
};

const solution = (str1, str2) => {
  const str1Map = generateStrMap(str1);
  const str2Map = generateStrMap(str2);

  let intersectionCount = getIntersectionCount(str1Map, str2Map);
  let unionCount = getUnionCount(str1Map, str2Map);

  let result = Math.floor((intersectionCount / unionCount) * 65536);

  if (isNaN(result)) return 65536;

  return result;
};

const str1 = "E=M*C^2";
const str2 = "e=m*c^2";
const result = solution(str1, str2);
console.log("RESULT >>>", result);
