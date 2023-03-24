// For inputString = "172.16.254.1", the output should be
// solution(inputString) = true;

// For inputString = "172.316.254.1", the output should be
// solution(inputString) = false.

// 316 is not in range [0, 255].

// For inputString = ".254.255.0", the output should be
// solution(inputString) = false.

// There is no first number.

function solution(inputString) {
  const inputStringArr = inputString.split(".");
  const ipArray = new Array(255).fill(0).map((el, i) => i + 1);
  ipArray.push(0);
  //   console.dir(ipArray, {'maxArrayLength': null})

  if (inputStringArr.length !== 4) {
    return false;
  }

  for (let num of inputStringArr) {
    if (isNaN(num) === true) {
      console.info("first false");
      return false;
    } else if (num.length > 1 && num[0] == 0) {
      return false;
    } else {
      num = parseInt(num, 10);
    }

    console.info("num >>> ", num);
    console.info("num >>> ", typeof num);

    if (ipArray.includes(num) === false) {
      console.info("second false");
      return false;
    }

  }

  return true;
}

// inputString = ".254.255.0"
// inputString = "172.316.254.1"
inputString = "1a.254.255.1";
console.info(solution(inputString));
