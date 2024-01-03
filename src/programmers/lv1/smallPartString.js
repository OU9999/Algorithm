const solution = (t, p) => {
  let result = 0;
  const pNum = Number(p);

  for (let i = 0; i <= t.length - p.length; i++) {
    const subStr = t.slice(i, i + p.length);
    if (subStr <= pNum) {
      result++;
    }
  }

  return result;
};

const t = "3141592";
const p = "271";
const result = solution(t, p);
console.log("RESULT >>>", result);
