const testArr = [10, 20, 25, 35, 40, 50, 60];
const iWant = 25;

const binaryFn = (target) => {
  let low = 0;
  let high = testArr.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (testArr[mid] === target) {
      return `found you ${target}`;
    }

    if (testArr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
};

const result = binaryFn(iWant);
console.log(result);
