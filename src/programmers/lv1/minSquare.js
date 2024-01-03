// link : https://school.programmers.co.kr/learn/courses/30/lessons/86491

const solution = (sizes) => {
  let maxWidth = 0;
  let maxHeight = 0;
  sizes.forEach(([width, height]) => {
    const maxLength = Math.max(width, height);
    const minLength = Math.min(width, height);

    maxWidth = Math.max(maxLength, maxWidth);
    maxHeight = Math.max(minLength, maxHeight);
  });

  return maxWidth * maxHeight;
};

const sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];
const result = solution(sizes);
console.log("RESULT >>>", result);
