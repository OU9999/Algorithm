// link : https://school.programmers.co.kr/learn/courses/30/lessons/17681

const getBinString = (number, dec) => {
  const bin = dec.toString(2);
  const binStirng = String(bin).padStart(number, "0");
  return binStirng;
};

const solution = (n, arr1, arr2) => {
  let result = [];
  arr1.forEach((item, idx) => {
    let returnText = "";
    const binString = getBinString(n, item);
    const binStringTwo = getBinString(n, arr2[idx]);

    for (let i = 0; i < binString.length; i++) {
      let text = " ";
      if (binString[i] === "1" || binStringTwo[i] === "1") {
        text = "#";
      }
      returnText = returnText + text;
    }

    result.push(returnText);
  });

  return result;
};

const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];
const result = solution(n, arr1, arr2);
console.log("RESULT >>>", result);
