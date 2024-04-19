// link : https://school.programmers.co.kr/learn/courses/30/lessons/42587

const solution = (priorities, location) => {
  let queue = [];
  let result = 0;

  queue = priorities.map((priority, index) => {
    return { priority, index };
  });

  while (queue.length > 0) {
    let current = queue.shift();

    let isQueueBig = queue.some((e) => e.priority > current.priority);

    if (isQueueBig) {
      queue.push(current);
      continue;
    }

    result++;

    if (current.index == location) {
      break;
    }
  }

  return result;
};

const priorities = [1, 1, 9, 1, 1, 1];
const location = 0;
const result = solution(priorities, location);
console.log("RESULT >>>", result);
