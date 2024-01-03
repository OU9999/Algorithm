const solution = (d, budget) => {
  d.sort((a, b) => a - b);
  let currentBudget = budget;
  let count = 0;
  for (item of d) {
    currentBudget = currentBudget - item;
    if (currentBudget < 0) {
      break;
    }
    count++;
  }
  const answer = count;
  return answer;
};

const d = [1, 3, 2, 5, 4];
const budget = 9;
const result = solution(d, budget);
console.log("RESULT >>>", result);
