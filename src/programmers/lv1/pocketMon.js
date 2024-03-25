// link : https://school.programmers.co.kr/learn/courses/30/lessons/1845

const solution = (nums) => {
  const numsHalfLength = nums.length / 2;
  const noDuplicate = new Set(nums);

  if (numsHalfLength > noDuplicate.size) {
    return noDuplicate.size;
  }

  return numsHalfLength;
};

const nums = [3, 1, 2, 3];
const result = solution(nums);
console.log("RESULT >>>", result);
