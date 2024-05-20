// link : https://school.programmers.co.kr/learn/courses/30/lessons/133499

const solution = (babbling) => {
  const words = ["aya", "ye", "woo", "ma"];
  const pattern = /^(aya|ye|woo|ma)+$/;

  let result = 0;

  for (const word of babbling) {
    if (words.includes(word)) {
      result++;
      continue;
    } else if (pattern.test(word) && !words.some((w) => word.includes(w + w))) {
      result++;
    }
  }

  return result;
};

const babbling = ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"];
const result = solution(babbling);
console.log("RESULT >>>", result);
