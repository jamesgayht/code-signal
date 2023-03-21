// For a = [1, 2, 3] and b = [1, 2, 3], the output should be
// solution(a, b) = true.
// The arrays are equal, no need to swap any elements.

// For a = [1, 2, 3] and b = [2, 1, 3], the output should be
// solution(a, b) = true.
// We can obtain b from a by swapping 2 and 1 in b.

// For a = [1, 2, 2] and b = [2, 1, 1], the output should be
// solution(a, b) = false.
// Any swap of any two elements either in a or in b won't make a and b equal.

function solution(a, b) {
  let counter = 0;
  let swapCounter = 0;

  // check how many items required to swap, if more than 2 return false
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      console.info(swapCounter);
      swapCounter++;
      if (swapCounter === 3) {
        return false;
      }
    }
  }

  // check all elements in the arrays are the same, return false if 1 different
  for (let i = 0; i < a.length; i++) {
    console.info(a[i]);
    if (!b.includes(a[i])) {
      counter++;

      if (counter === 1) {
        return false;
      }
    // check for repeated elements
    } else {
      let index = b.indexOf(a[i]);
      b.splice(index, 1);
      console.info(b);
    }
  }

  return true;
}

let a = [832, 998, 148, 570, 533, 561, 894, 147, 455, 279];
let b = [832, 570, 148, 998, 533, 561, 455, 147, 894, 279];

// let a = [1, 2, 3];
// let b = [1, 2, 3];

console.info(solution(a, b));
