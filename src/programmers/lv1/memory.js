// link : https://school.programmers.co.kr/learn/courses/30/lessons/176963

const solution = (names, yearning, photos) => {
  let result = [];
  photos.forEach((item) => {
    let point = 0;
    for (let i = 0; i < item.length; i++) {
      const index = names.indexOf(item[i]);
      const currentPoint = index === -1 ? 0 : yearning[index];

      point += currentPoint;
    }
    result.push(point);
  });
  return result;
};

const names = ["may", "kein", "kain", "radi"];
const yearning = [5, 10, 1, 3];
const photos = [
  ["may", "kein", "kain", "radi"],
  ["may", "kein", "brin", "deny"],
  ["kon", "kain", "may", "coni"],
];
const result = solution(names, yearning, photos);
console.log("RESULT >>>", result);
