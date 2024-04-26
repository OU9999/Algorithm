// link : https://school.programmers.co.kr/learn/courses/30/lessons/12977

const isSosu = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
};

const solution = (nums) => {
  let result = 0;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const testNumber = nums[i] + nums[j] + nums[k];
        if (isSosu(testNumber)) {
          result++;
        }
      }
    }
  }

  return result;
};

const nums = [1, 2, 3, 4];
const result = solution(nums);
console.log("RESULT >>>", result);
