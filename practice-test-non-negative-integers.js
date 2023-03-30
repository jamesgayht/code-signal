function indexOfFail(numbers) {
  let index = null;
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] >= numbers[i + 1]) {
      index = i;
      break;
    }
  }
  return index;
}

function iterateCombinations(prev, current, next, index) {
  for (let i = 0; i < current.length - 1; i++) {
    for (let j = i + 1; j < current.length; j++) {
      let temp = current.split("");
      console.info(`current i >>> ${current[i]}, current j >>> ${current[j]}`);
      console.info("temp >>> ", temp);
      temp.splice(i, 1, current[j]);
      temp.splice(j, 1, current[i]);
      console.info("temp >>> ", temp);
      current = temp.join("");
      console.log("current >>> ", current);

      if (parseInt(current) <= prev || parseInt(current) >= next) {
        // if failed then reset
        console.log("resetting");
        current = numbers[index].toString();
      }
      if (parseInt(current) > prev && parseInt(current) < next) {
        console.info("breaking");
        numbers[index] = parseInt(current);
        return numbers[index];
        // current = numbers[index].toString()
      }
    }
  }
  return 0;
}

function solution(numbers) {
  let index = indexOfFail(numbers);
  console.log("index >>> ", index);
  if (index === null) {
    return true; // array already strictly increasing
  }

  // get the number at the failed index and compare its different combinations vs prev and next to form strictly increasing
  let prev = 0;
  if (index !== 0) {
    prev = numbers[index - 1];
  } else {
    prev = Number.MIN_VALUE;
  }
  console.log("prev >>> ", prev);

  let current = numbers[index].toString();
  console.log("current >>> ", current);

  // we already verified that there will be a next in the numbers using the indexOfFail function
  let next = numbers[index + 1];
  console.log("next >>> ", next);

  console.log("iterateCombinations() >>> ", iterateCombinations(prev, current, next, index));

  if (
    iterateCombinations(prev, current, next, index) === 0 &&
    index + 2 <= numbers.length
  ) {
    console.log("in 2nd check")

    index++;
    prev = numbers[index - 1];
    console.log("prev >>> ", prev);

    current = numbers[index].toString();
    console.log("current >>> ", current);

    next = numbers[index + 1];
    console.log("next >>> ", next);

    if (iterateCombinations(prev, current, next, index) === 0) {
      return false;
    }
  } else if (
    iterateCombinations(prev, current, next, index) === 0 &&
    index + 2 > numbers.length
  ) {
    return false;
  } else {
    let index2 = indexOfFail(numbers);
    console.log("index2 >>> ", index2);
    if (index2 !== null) {
      return false; //2nd fail = false
    } else {
      return true;
    }
  }

  return true
}

// numbers = [1, 5, 10, 20]
// numbers = [1, 3, 900, 10]
// numbers = [1000, 10, 100];
numbers = [123, 234, 234, 432];
console.log(solution(numbers));
