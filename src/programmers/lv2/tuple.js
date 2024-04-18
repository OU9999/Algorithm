// link : https://school.programmers.co.kr/learn/courses/30/lessons/64065

const solution = (s) => {
  const memo = [];
  const sliceItem = s.slice(1, -1);
  const items = sliceItem.split("},{");
  const cleanedItems = items.map((item) => item.replace(/{|}/g, ""));

  cleanedItems.sort((a, b) => a.length - b.length);

  cleanedItems.forEach((item) => {
    const splitItem = item.split(",");
    splitItem.forEach((e) => {
      if (memo.includes(Number(e))) {
      } else {
        memo.push(Number(e));
      }
    });
  });

  return memo;
};

const s = "{{4,2,3},{3},{2,3,4,1},{2,3}}";
const result = solution(s);
console.log("RESULT >>>", result);
