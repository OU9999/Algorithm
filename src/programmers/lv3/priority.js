// link : https://school.programmers.co.kr/learn/courses/30/lessons/42628

const solution = (operations) => {
  let queue = [];
  let result = [];

  for (let i = 0; i < operations.length; i++) {
    if (operations[i].includes("I")) {
      const item = operations[i].slice(2);
      queue.push(Number(item));
    } else if (operations[i].includes("-")) {
      let minValue = Infinity;
      queue.forEach((e) => {
        minValue = Math.min(minValue, e);
      });
      const index = queue.indexOf(minValue);

      queue.splice(index, 1);
    } else {
      let maxValue = -Infinity;
      queue.forEach((e) => {
        maxValue = Math.max(maxValue, e);
      });

      const index = queue.indexOf(maxValue);

      queue.splice(index, 1);
    }
  }

  if (queue.length === 0) {
    return [0, 0];
  }

  let minValue = Infinity;
  let maxValue = -Infinity;
  queue.forEach((e) => {
    minValue = Math.min(minValue, e);
    maxValue = Math.max(maxValue, e);
  });

  const maxIndex = queue.indexOf(maxValue);
  const minIndex = queue.indexOf(minValue);

  result.push(queue[maxIndex]);
  result.push(queue[minIndex]);

  return result;
};

const operations = [
  "I -45",
  "I 653",
  "D 1",
  "I -642",
  "I 45",
  "I 97",
  "D 1",
  "D -1",
  "I 333",
];

const result = solution(operations);
console.log("RESULT >>>", result);
