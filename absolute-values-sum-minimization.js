function solution(a) {
  let absSum = {};

  for (let i = 0; i < a.length; i++) {
    let sum = 0;

    for (let j = 0; j < a.length; j++) {
      sum += Math.abs(a[i] - a[j]);
      console.info("sum >>> ", sum);
    }
    absSum[a[i]] = sum;
  }
  console.info("absSum >>> ", absSum);

  let lowest = Number.MAX_VALUE;
  let lowestKey = 0;

  for (let key in absSum) {
    console.info("key >>> ", key);
    console.info("absSum[key] >>> ", absSum[key]);
    if (parseInt(absSum[key]) < lowest) {
      lowest = absSum[key];
      lowestKey = parseInt(key);
      console.info(
        `lowest in first if >>> ${lowest}, lowestKey >>> ${lowestKey}`
      );
    } else if (absSum[key] === lowest && parseInt(key) < lowestKey) {
      lowestKey = key;
    }
  }
  return parseInt(lowestKey);
}

a = [-1000, 1000];

console.info("solution a >>> ", solution(a));
