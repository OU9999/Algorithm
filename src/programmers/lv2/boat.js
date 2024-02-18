// link : https://school.programmers.co.kr/learn/courses/30/lessons/42885

const solution = (people, limit) => {
  const descPeople = people.sort((a, b) => b - a);
  let boatCount = 0;
  descPeople.forEach((people) => {
    if (people + descPeople.at(-1) > limit) {
      boatCount++;
    } else {
      descPeople.pop();
      boatCount++;
    }
  });
  return boatCount;
};

const people = [70, 50, 80, 50];
const limit = 100;
const result = solution(people, limit);

console.log("RESULT >>>", result);
