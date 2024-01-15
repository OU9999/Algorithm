console.time("calc");
const week = ["일", "월", "화", "수", "목", "금", "토"];
let today = 2;
let shift = Math.pow(10, 10) % week.length;

today += shift;
if (today > week.length - 1) {
  today -= week.length;
}
console.log(week[today]);
console.timeEnd("calc");
