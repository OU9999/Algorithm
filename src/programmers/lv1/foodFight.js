// link : "https://school.programmers.co.kr/learn/courses/30/lessons/134240"

const solution = (food) => {
  let half = "";
  for (let i = 1; i < food.length; i++) {
    const sliceFood = parseInt(food[i] / 2);
    const foodArr = new Array(sliceFood).fill(i);
    const str = foodArr.join("");
    half = half + str;
  }

  const reverseHalf = half.split("").reverse().join("");
  const result = half + "0" + reverseHalf;

  return result;
};

const food = [1, 7, 1, 2];
const result = solution(food);
console.log("RESULT >>>", result);
