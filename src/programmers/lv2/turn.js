// link : https://school.programmers.co.kr/learn/courses/30/lessons/76502

const rotate = (array, moveIndex) => {
  let newArr = [...array];
  let temp = [];
  let shiftArr;
  for (let i = 0; i < array.length; i++) {
    if (array[i + moveIndex] !== undefined) {
      temp[i] = array[i + moveIndex];
    }
  }
  shiftArr = newArr.slice(0, moveIndex);
  const result = temp.concat(shiftArr);
  return result;
};

const solution = (s) => {
  const splitWord = s.split("");
  let answer = 0;
  let stack = [];
  for (let i = 0; i < splitWord.length; i++) {
    stack = [];
    const rotatedArr = rotate(splitWord, i);
    rotatedArr.forEach((e) => {
      if (
        (e === ")" && stack[stack.length - 1] === "(") ||
        (e === "]" && stack[stack.length - 1] === "[") ||
        (e === "}" && stack[stack.length - 1] === "{")
      ) {
        stack.pop();
      } else {
        stack.push(e);
      }
    });

    if (stack.length === 0) {
      answer += 1;
    }
  }

  return answer;
};

const s = "[](){}";
const result = solution(s);
console.log("RESULT >>>", result);
