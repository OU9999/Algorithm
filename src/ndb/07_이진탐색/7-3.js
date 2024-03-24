const solution = (numbers, target) => {
  let low = 0;
  let high = numbers.length;
  let count = 0;

  while (low <= high) {
    count++;
    let mid = Math.floor((low + high) / 2);

    if (numbers[mid] === target) {
      console.log("COUNT IS >>", count);
      return `found target ${target}`;
    }

    if (numbers[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
};

const numbers = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18];
const target = 4;
const result = solution(numbers, target);
console.log("RESULT >>>", result);
