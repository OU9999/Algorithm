// link : https://school.programmers.co.kr/learn/courses/30/lessons/12926

const solution = (s, n) => {
  const upperCaseStart = 65;
  const lowerCaseStart = 97;

  const splitword = s.split("").map((item) => {
    if (item === " ") {
      return " ";
    }

    const currentItemCode = item.charCodeAt();
    let nextItemCode;
    if (currentItemCode >= upperCaseStart && currentItemCode <= 90) {
      nextItemCode =
        ((currentItemCode - upperCaseStart + n) % 26) + upperCaseStart;
    }
    if (currentItemCode >= lowerCaseStart && currentItemCode <= 122) {
      nextItemCode =
        ((currentItemCode - lowerCaseStart + n) % 26) + lowerCaseStart;
    }

    return String.fromCharCode(nextItemCode);
  });

  return splitword.join("");
};

const s = "a B z";
const n = 4;
const result = solution(s, n);
console.log("RESULT >>>", result);
