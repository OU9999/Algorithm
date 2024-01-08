// link : none

const solution = (numArr, target) => {
  const hashMap = {};

  let result = [];
  numArr.forEach((num, idx) => {
    const another = target - num;
    if (numArr.includes(another)) {
      if (result.length !== 0) {
        return;
      }
      result[0] = num;
      result[1] = another;
    }
  });

  console.log(result);
  return null;
};

const numArr = [15, 61, 23, 3, 4];
const target = 19;
const result = solution(numArr, target);
console.log("RESULT >>>", result);
