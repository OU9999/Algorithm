const getOneCount = (test) => test.toString(2).replaceAll("0", "").length;
const solution = (n) => {
  const oneCount = getOneCount(n);
  let nextNumber = n + 1;
  while (true) {
    if (getOneCount(nextNumber) === oneCount) {
      return nextNumber;
    }
    nextNumber++;
  }
};

const s = 78;
const result = solution(s);
console.log("RESULT >>>", result);
