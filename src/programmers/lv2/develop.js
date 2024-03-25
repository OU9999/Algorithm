// link : https://school.programmers.co.kr/learn/courses/30/lessons/42586

const solution = (progresses, speeds) => {
  let temp = [];
  let result = [];
  progresses.forEach((e, idx) => {
    const ready = Math.ceil((100 - e) / speeds[idx]);
    temp.push(ready);
  });

  for (let i = 0; i < temp.length; i++) {
    let count = 1;

    for (let j = i + 1; j < temp.length; j++) {
      if (temp[i] >= temp[j]) {
        count++;
      } else {
        break;
      }
    }

    i += count - 1;

    result.push(count);
  }

  return result;
};

const progresses = [93, 30, 55];
const speeds = [1, 30, 5];
const result = solution(progresses, speeds);
console.log("RESULT >>>", result);
