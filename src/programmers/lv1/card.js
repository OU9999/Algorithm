// link : https://school.programmers.co.kr/learn/courses/30/lessons/159994

const solution = (cards1, cards2, goal) => {
  let temp = [];
  let endGame = true;
  let goalCount = 0;

  while (endGame) {
    let goalItem = goal[goalCount];
    let noResult = true;

    if (cards1[0] === goalItem) {
      temp.push(cards1[0]);
      cards1.shift();
      goalCount++;
      noResult = false;
    }

    if (cards2[0] === goalItem) {
      temp.push(cards2[0]);
      cards2.shift();
      goalCount++;
      noResult = false;
    }

    if (noResult) {
      return "No";
    }

    if (goalCount === goal.length) {
      endGame = false;
    }
  }

  return "Yes";
};

const cards1 = ["i", "water", "drink"];
const cards2 = ["want", "to"];
const goal = ["i", "want", "to", "drink", "water"];
const result = solution(cards1, cards2, goal);
console.log("RESULT >>>", result);
