// link : https://school.programmers.co.kr/learn/courses/30/lessons/12973

const solution = (s) => {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length === 0 ? 1 : 0;
};

const s = "baabaa";
const result = solution(s);
console.log("RESULT >>>", result);
