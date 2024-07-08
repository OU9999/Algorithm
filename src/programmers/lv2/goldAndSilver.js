// link : https://school.programmers.co.kr/learn/courses/30/lessons/86053

const solution = (a, b, g, s, w, t) => {
  let left = 0;
  let right = 4 * 10 ** 14; // Infinity를 사용할 경우 나누기 2가 불가능해지니 최대한 큰수로 구성

  const canTransportInTime = (time) => {
    let totalGold = 0;
    let totalSilver = 0;
    let totalWeight = 0;

    for (let i = 0; i < g.length; i++) {
      const maxTransportCount = Math.floor(time / (2 * t[i]));
      const remainingTime = time % (2 * t[i]);
      const trips =
        remainingTime >= t[i] ? maxTransportCount + 1 : maxTransportCount;
      const maxGold = Math.min(g[i], trips * w[i]);
      const maxSilver = Math.min(s[i], trips * w[i]);
      const maxTotal = Math.min(g[i] + s[i], trips * w[i]);

      totalGold += maxGold;
      totalSilver += maxSilver;
      totalWeight += maxTotal;
    }

    return totalGold >= a && totalSilver >= b && totalWeight >= a + b;
  };

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (canTransportInTime(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

const a = 10;
const b = 10;
const g = [100];
const s = [100];
const w = [7];
const t = [10];
const result = solution(a, b, g, s, w, t);
console.log("RESULT >>>", result);
