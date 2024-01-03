const makeWeird = (s) => {
  const splitword = s.split("");
  splitword.forEach((word, idx) => {
    splitword[idx] = idx % 2 === 0 ? word.toUpperCase() : word.toLowerCase();
  });

  return splitword.join("");
};

const solution = (s) => {
  const splitwordArray = s.split(" ");
  const result = splitwordArray.map((item) => makeWeird(item)).join(" ");
  return result;
};

const s = "try hello world";
const result = solution(s);
console.log("RESULT >>>", result);
