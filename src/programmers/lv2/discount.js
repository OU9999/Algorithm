// link : https://school.programmers.co.kr/learn/courses/30/lessons/131127

const solution = (want, number, discount) => {
  let countSlice = 0;
  let answer = 0;

  while (true) {
    const sliceDiscount = discount.slice(countSlice, countSlice + 10);
    if (sliceDiscount.length !== 10) {
      break;
    }

    let temp = [];

    for (let i = 0; i < want.length; i++) {
      const item = want[i];
      const itemCount = number[i];
      const includeItemLength = sliceDiscount.filter((e) => item === e).length;
      if (itemCount === includeItemLength) {
        temp.push(itemCount);
      }
    }

    if (temp.length === number.length) {
      answer++;
    }

    countSlice++;
  }

  return answer;
};

const want = ["banana", "apple", "rice", "pork", "pot"];
const number = [3, 2, 2, 2, 1];
const discount = [
  "chicken",
  "apple",
  "apple",
  "banana",
  "rice",
  "apple",
  "pork",
  "banana",
  "pork",
  "rice",
  "pot",
  "banana",
  "apple",
  "banana",
];
const result = solution(want, number, discount);
console.log("RESULT >>>", result);
