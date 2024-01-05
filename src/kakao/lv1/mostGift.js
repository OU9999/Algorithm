// link : https://school.programmers.co.kr/learn/courses/30/lessons/258712

const solution = (friends, gifts) => {
  let answer = 0;

  let dict = {};
  for (let i = 0; i < friends.length; i++) {
    dict[friends[i]] = i;
  }

  let intArray = new Array(friends.length).fill(0);
  let giftArrays = Array.from(Array(friends.length), () =>
    new Array(friends.length).fill(0)
  );

  for (let i = 0; i < gifts.length; i++) {
    let strs = gifts[i].split(" ");
    giftArrays[dict[strs[0]]][dict[strs[1]]]++;
    intArray[dict[strs[0]]]--;
    intArray[dict[strs[1]]]++;
  }

  for (let i = 0; i < intArray.length; i++) {
    let num = 0;
    for (let j = 0; j < intArray.length; j++) {
      if (i === j) continue;

      if (
        giftArrays[j][i] < giftArrays[i][j] ||
        (giftArrays[j][i] === giftArrays[i][j] && intArray[i] < intArray[j])
      ) {
        num++;
      }
    }

    if (answer < num) answer = num;
  }

  return answer;
};

const friends = ["muzi", "ryan", "frodo", "neo"];
const gifts = [
  "muzi frodo",
  "muzi frodo",
  "ryan muzi",
  "ryan muzi",
  "ryan muzi",
  "frodo muzi",
  "frodo ryan",
  "neo muzi",
];

const result = solution(friends, gifts);
console.log("RESULT >>>", result);
