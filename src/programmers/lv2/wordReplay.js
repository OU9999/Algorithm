// link : https://school.programmers.co.kr/learn/courses/30/lessons/12981

const getLoserResult = (idx, n) => {
  const calcLoser = (idx + 1) % n;
  const loserPlayer = calcLoser === 0 ? n : calcLoser;
  const loserOrder = parseInt(idx / n) + 1;

  return [loserPlayer, loserOrder];
};

const solution = (n, words) => {
  let result = [0, 0];
  let endGame = false;
  let usedWords = [];

  words.forEach((item, idx) => {
    if (endGame) {
      return;
    }

    if (idx === 0) {
      usedWords.push(item);
      return;
    }

    const lastWordChar = usedWords[idx - 1].slice(-1);
    const currentWordChar = item[0];

    if (lastWordChar !== currentWordChar) {
      endGame = true;
      result = getLoserResult(idx, n);
    }

    if (usedWords.includes(item)) {
      endGame = true;
      result = getLoserResult(idx, n);
    }

    usedWords.push(item);
  });

  return result;
};

const n = 3;
const words = [
  "tank",
  "kick",
  "know",
  "wheel",
  "land",
  "dream",
  "mother",
  "robot",
  "tank",
];
const result = solution(n, words);
console.log("RESULT >>>", result);
