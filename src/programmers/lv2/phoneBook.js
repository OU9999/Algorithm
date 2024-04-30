// link : https://school.programmers.co.kr/learn/courses/30/lessons/42577

const solution = (phone_book) => {
  let hashMap = new Map();

  phone_book.forEach((e) => {
    hashMap.set(e, null);
  });

  for (let [key, value] of hashMap) {
    for (let i = 1; i < key.length; i++) {
      let pre = key.slice(0, i);
      if (hashMap.has(pre)) return false;
    }
  }

  return true;
};

const phone_book = ["119", "97674223", "1195524421"];
const result = solution(phone_book);
console.log("RESULT >>>", result);
