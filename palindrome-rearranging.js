// For inputString = "aabb", the output should be
// solution(inputString) = true.

function solution(inputString) {
  let counter = 0;
  const inputStringArr = inputString.split("");

  const inputStringMap = {};
  inputStringArr.map((char) => {
    if (!!inputStringMap[char] === false) {
      inputStringMap[char] = 1;
    } else {
      inputStringMap[char] = inputStringMap[char] + 1;
    }
  });

  for (let key in inputStringMap) {
    console.info(key);
    if (inputStringMap[key] % 2 !== 0) {
      counter += 1;
      console.info("counter >>> ", counter)
    }
  }

  if(counter >= 2) 
    return false; 

  return true;
}

inputString = "aabb";
console.info(solution(inputString));
